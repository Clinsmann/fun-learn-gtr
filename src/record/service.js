const Record = require("./model");
const { StatusCodes } = require("http-status-codes");
const { filterRecords, successResponse, errorResponse } = require('./utils');

exports.records = async (req, res) => {
  let {
    minCount,
    maxCount,
    startDate: start,
    endDate: end
  } = req.body;

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
