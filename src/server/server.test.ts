import express from 'express';
import supertest from 'supertest';
import { load } from './loaders';

const app = express();
load(app);

const request = supertest(app);

describe('/ping controller', () => {
  test('HEAD /ping should return 204', (done) => {
    request.head('/ping').expect(204, done);
  });

  test('GET /ping should return 204', (done) => {
    request.get('/ping').expect(204, done);
  });
});
