const { StatusCodes } = require("http-status-codes");

exports.errorResponse = (msg, code = StatusCodes.INTERNAL_SERVER_ERROR) => ({
  msg, code, records: []
});

exports.successResponse = (records, code = 0) => ({
  code, records, msg: "Success"
});

exports.filterRecords = (records, min, max) => {
  const result = [];
  records.forEach(({ counts, key, createdAt }) => {
    const totalCount = counts.reduce((a, b) => a + b, 0);
    if ((totalCount >= min) && (totalCount <= max)) {
      result.push({ totalCount, key, createdAt, });
    }
  });
  return result;
};
