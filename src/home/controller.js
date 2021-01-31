const express = require("express");
const homeService = require("./service");
const homeRouter = express.Router();

homeRouter.get("", homeService.home);

module.exports = homeRouter;
