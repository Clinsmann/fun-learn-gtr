const yup = require('yup');
const { errorResponse } = require('./utils');
const { StatusCodes } = require("http-status-codes");

const schema = yup.object().shape({
  endDate: yup.date().required(),
  startDate: yup.date().required(),
  minCount: yup.number().required(),
  maxCount: yup.number().required(),
});

module.exports = async (req, res, next) => {
  try {
    const body = await schema.validate(req.body);
    req.body = body;
    return next();
  } catch (e) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json(errorResponse(e.message, StatusCodes.BAD_REQUEST));
  }
};
