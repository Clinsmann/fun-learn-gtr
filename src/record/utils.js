const { StatusCodes } = require("http-status-codes");

exports.errorResponse = (msg) => ({ code: StatusCodes.INTERNAL_SERVER_ERROR, msg, records: [] });

exports.successResponse = (records) => ({ code: 0, msg: "Success", records });

exports.filterRecords = (records, min, max) => {
  const result = [];
  records.forEach(({ counts, key, createdAt }) => { //O(n)
    const totalCount = counts.reduce((a, b) => a + b, 0); //O(m)
    if ((totalCount >= min) && (totalCount <= max)) {
      result.push({ totalCount, key, createdAt, }); //O(1)
    }
  });
  return result;
};
