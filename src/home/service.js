const { StatusCodes } = require("http-status-codes");

exports.home = (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ message: 'application up and running...' });
};

