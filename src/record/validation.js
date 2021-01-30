const yup = require('yup');

exports.schema = yup.object().shape({
  endDate: yup.date().required(),
  startDate: yup.date().required(),
  minCount: yup.number().required(),
  maxCount: yup.number().required(),
});
