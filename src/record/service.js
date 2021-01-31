const Record = require("./model");
const { schema } = require('./validation');
const { StatusCodes } = require("http-status-codes");
const { filterRecords, successResponse, errorResponse } = require('./utils');


exports.home = (req, res) => {
  res
    .status(StatusCodes.OK)
    .json({ message: 'application up and running...' });
};


exports.records = async ({ body }, res) => {
  let {
    minCount,
    maxCount,
    startDate: start,
    endDate: end
  } = body;

  start = new Date(start);
  end = new Date(end);

  start = new Date(
    start.getFullYear(),
    start.getMonth(),
    start.getDate(),
    1, 0, 0
  );
  end = new Date(
    end.getFullYear(),
    end.getMonth(),
    end.getDate() + 1,
    0, 59, 59
  );

  const query = { createdAt: { $gte: start, $lt: end } };
  const fields = 'key createdAt counts';

  try {
    await schema.validate(body);
    const data = await Record.find(query).select(fields);
    const result = filterRecords(data, minCount, maxCount);
    res
      .status(StatusCodes.OK)
      .json(successResponse(result));
  } catch (e) {
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(errorResponse(e.message));
  }
};
