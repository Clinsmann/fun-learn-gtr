const express = require("express");
const recordRouter = express.Router();
const validate = require('./validate');
const recordService = require("./service");

recordRouter.post("", validate, recordService.records);

module.exports = recordRouter;
