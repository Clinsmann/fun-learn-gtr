const express = require("express");
const recordRouter = express.Router();
const validate = require('./validate');
const recordService = require("./service");

//routes.
//The 'validate' is a middleware that handle
//the request payload validation
recordRouter.post("", validate, recordService.records);

module.exports = recordRouter;
