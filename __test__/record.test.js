const request = require('supertest');
const app = require('../index');

const datePayload = {
  "startDate": "2016-01-26",
  "endDate": "2018-02-02",
}

const payload = {
  ...datePayload,
  "minCount": 2700,
  "maxCount": 3000
};

describe('GET "/"', () => {
  it('Should check if the app is up and running', async () => {
    const res = await request(app).get('');
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('message');
  });
});

describe('POST "/api/records"', () => {
  it('should make a post request to the records endpoint', async () => {
    const res = await request(app).post('/api/record').send(payload);
    expect(res.statusCode).toEqual(200)
    expect(res.body).toHaveProperty('records');
    res.body.records.every(({ totalCount, createdAt }) => {
      expect((totalCount >= payload.minCount) && (totalCount <= payload.maxCount)).toBeTruthy();
      expect(createdAt >= payload.startDate && createdAt <= payload.endDate).toBeTruthy();
    });
  });
});

describe('POST "/records"', () => {
  it('should return an error when making a post request with the wrong payload', async () => {
    const res = await request(app).post('/record').send(datePayload);
    expect(res.statusCode).toEqual(400)
    expect(res.body).toHaveProperty('records');
    expect(res.body.records.length).toEqual(0);
  });
});