const express = require("express");
const recordService = require("./service");
const recordRouter = express.Router();

recordRouter.post("/record", recordService.records);
recordRouter.get("/", recordService.home);

module.exports = recordRouter;
