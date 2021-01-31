require("dotenv").config();
const port = process.env.PORT;

const recordController = require("./src/record/controller");
const homeController = require("./src/home/controller");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();

require("./src/database/mongoose");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use("/api/record", recordController);
app.use("", homeController);

app.listen(port, () => console.log(`application started on port ${port}...`));

module.exports = app;
