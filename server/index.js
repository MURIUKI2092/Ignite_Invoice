const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const uploadsRoute = require("./routes/upload")
const path = require("path")
const cors = require("cors")

dotenv.config();
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "/uploads")))

mongoose.set("strictQuery", true);
mongoose.connect(process.env.MONGO_URL, {
}).then(console.log("Connected to MongoDB..."))
    .catch((err) => console.log(err));

const whitelist = ['http://localhost:3000','http://192.168.117.1:3000']
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
};
app.use(cors(corsOptions));

app.use("/api/auth", authRoute)
app.use("/api/file", uploadsRoute)

app.listen("5000", () => {
    console.log("Server is running ...")
});