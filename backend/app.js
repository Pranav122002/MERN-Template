const express = require("express");
const app = express();
const port = process.env.port || 5000;
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

app.use(cors());
require('dotenv').config();
require("./models/user");
app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/user"));

const MONGOURI = process.env.MONGOURI;

mongoose.connect(MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on("connected", () => {
  console.log("MongoDB connection successfull ...");
});

mongoose.connection.on("error", () => {
  console.log("MongoDB connection error !!!");
});

const server = app.listen(port, () => {
  console.log("Server is running on port" + " " + port + " ...");
});
