import express from 'express';
import supertest from 'supertest';
import { errors } from '../middlewares';
import { loadErrors } from './errors';

const app = express();
const useSpy = jest.spyOn(app, 'use');

describe('loadErrors', () => {
  test('When called, should use the errors middlewares on the given app', () => {
    loadErrors(app);
    expect(useSpy).toHaveBeenCalledWith(errors);
  });

  test('When errors with a unknown route, should return a not found error', (done) => {
    loadErrors(app);
    const request = supertest(app);
    request.get('/foo').expect(404, done);
  });
});
