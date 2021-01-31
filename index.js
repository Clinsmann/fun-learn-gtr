require("dotenv").config();
const port = process.env.PORT || 5000;

const recordController = require("./src/record/controller");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();

require("./src/database/mongoose");

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/record", recordController);

app.listen(port, () => console.log(`application started on port ${port}...`));

module.exports = app;
