const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const uploadsRoute = require("./routes/upload")
const path = require("path")

dotenv.config();
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL, {
}).then(console.log("Connected to MongoDB..."))
    .catch((err) => console.log(err));

app.use("/api/auth", authRoute)
app.use("/api/file", uploadsRoute)

app.listen("5000", () => {
 console.log("Server is running ...")
});