import { ERRORS_LIST } from '@src/models';
import express from 'express';
import { body } from 'express-validator';
import request from 'supertest';
import { validationMiddleware } from './validation';

describe('validationMiddleware()', () => {
  const setup = () => {
    const app = express();
    app.use(express.json());
    app.post('/', body('foo').isString(), validationMiddleware, (_req, res) => res.json({ foo: 'bar' }));
    return app;
  };

  test('when no validation errors are present, then should let the normal handler act', async () => {
    const app = setup();

    const response = await request(app).post('/').send({ foo: 'foo' });
    expect(response.status).toBe(200);
  });

  describe('when validation errors are present', () => {
    test('when no value was passed, then should respond a bad request with a formatted error message', async () => {
      const app = setup();

      const response = await request(app).post('/').send({});
      expect(response.body).toStrictEqual({
        error: ERRORS_LIST.BAD_REQUEST,
        message: 'body[foo]: Invalid value (received: undefined)',
      });
    });

    test('when some value was passed, then should respond a bad request with a formatted error message and the stringified value', async () => {
      const app = setup();

      const response = await request(app)
        .post('/')
        .send({ foo: { bar: 'bar' } });
      expect(response.body).toStrictEqual({
        error: ERRORS_LIST.BAD_REQUEST,
        message: 'body[foo]: Invalid value (received: {"bar":"bar"})',
      });
    });
  });
});
