const request = require('supertest');
const app = require('../index');

const payload = {
  "startDate": "2016-01-26",
  "endDate": "2018-02-02",
  "minCount": 2700,
  "maxCount": 3000
};

describe('POST /records', () => {
  it('should make a post request to the records endpoint', async () => {
    const res = await request(app).post('/record').send(payload);
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('records');
    expect(
      res
        .body
        .records
        .every(({ totalCount }) =>
          (totalCount >= payload.minCount)
          && (totalCount <= payload.maxCount)))
      .toBeTruthy();
  });
});
