const router = require("express").Router();
const ClientInvoice = require("../models/ClientInvoice");
const Invoices = require("../models/invoice");
const { exec } = require("child_process");
const csv = require("csv-parser");
const fs = require("fs");
const { MongoClient } = require("mongodb");
const { URL } = require("url");
const path = require("path");

const currentDirectory = __dirname;
const targetDirectory = "uploads";

const newPath = path.join(path.dirname(currentDirectory), targetDirectory);

const uri =
  "mongodb+srv://bitcodeserver:hJ5ddwjCvHkxWI0Y@cluster0.wbmex5r.mongodb.net/invoice?retryWrites=true&w=majority"; // Replace with your MongoDB connection URL
const client = new MongoClient(uri);
// Extract the database name from the connection URL
const dbName = new URL(uri).pathname.substr(1);

// a function to delete files after invoices have been generated as they are already stored in the db

const deleteFilesInAFolder = (folderPath) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error("Error reading folder:", err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);

      fs.unlink(filePath, (error) => {
        if (error) {
          console.error("Error deleting file:", filePath, error);
        } else {
          console.log("Deleted file:", filePath);
        }
      });
    });
  });
};
//get all invoices for the clients
router.get("/client/invoices", async (req, res) => {
  try {
    const allInvoices = await Invoices.find();
    res.status(200).json(allInvoices);
  } catch (err) {
    res.status(500).json(err);
  }
});

//generate invoices using the python script
router.post("/generate/invoices", (req, res) => {
  // Execute the Python script using the 'exec' function
  exec(
    "python3.10 child_processes/Output_script.py",
    (error, stdout, stderr) => {
      if (error) {
        console.error(`Error executing Python script: ${error}`);
        res.status(500).send("An error occurred while generating invoice.");
        return;
      }

      // Log the output from the Python script
      console.log(stdout);

      // Read the generated CSV file
      fs.createReadStream("Output.csv")
        .pipe(csv())
        .on("data", (data) => {
          // Insert each row into the MongoDB collection
          client
            .db(dbName)
            .collection("invoices")
            .insertOne(data, (err, result) => {
              if (err) {
                console.error(`Error inserting data into MongoDB: ${err}`);
              }
            });
        })
        .on("end", () => {
          console.log("Updated path:", newPath);
          //delete the files after the invoices have been generated
          deleteFilesInAFolder(newPath);
          // Send a success response after completing the upload
          res.status(200).json("Invoices generated and uploaded successfully.");
        });
    }
  );
});

//for getting all clients
router.get("/clients", async (req, res) => {
  try {
    const allClients = await ClientInvoice.find();
    res.status(200).json(allClients);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
