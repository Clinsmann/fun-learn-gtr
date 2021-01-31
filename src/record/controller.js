const express = require("express");
const recordService = require("./service");
const recordRouter = express.Router();

recordRouter.post("", recordService.records);

module.exports = recordRouter;
