const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
  key: String,
  counts: Array,
  value: String,
  createdAt: Date,
});

module.exports = mongoose.model("Records", recordSchema);
