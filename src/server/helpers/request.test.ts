import { buildMockRequest, buildMockResponse } from '@src/mocks';
import { ApiError } from '@src/models';
import { Request, Response } from 'express';
import { propagateInternalError, respondWithNotFound, respondWithSuccess, useNotFoundRoute } from './request';

afterEach(jest.resetAllMocks);

let mockResponse: Response;
let mockRequest: Request;

beforeEach(() => {
  mockResponse = buildMockResponse();
  mockRequest = buildMockRequest();
});

describe('respondWithSuccess', () => {
  test('Should respond with a 200 status', () => {
    respondWithSuccess(mockResponse, {});
    expect(mockResponse.status).toHaveBeenCalledWith(200);
  });

  test('Should respond with the given payload', () => {
    respondWithSuccess(mockResponse, { foo: 'bar' });
    expect(mockResponse.json).toHaveBeenCalledWith({ foo: 'bar' });
  });
});

describe('respondWithNotFound', () => {
  test('Should respond with a 404 status', () => {
    respondWithNotFound(mockResponse);
    expect(mockResponse.status).toHaveBeenCalledWith(404);
  });
});

describe('useNotFoundRoute', () => {
  test('when headers are already set, should not respond', () => {
    mockResponse.headersSent = true;
    useNotFoundRoute(mockRequest, mockResponse);
    expect(mockResponse.json).not.toHaveBeenCalled();
  });

  test('when headers are not already set, should respond', () => {
    mockResponse.headersSent = false;
    useNotFoundRoute(mockRequest, mockResponse);
    expect(mockResponse.json).toHaveBeenCalled();
  });
});

describe('propagateInternalError', () => {
  test('When called with an ApiError object with status 500, then throw the same error', () => {
    const mockError: ApiError = {
      code: 'ERROOOO',
      key: 'DUMMY_ERROR',
      message: 'Dummy error',
      status: 500,
    };
    expect(() => propagateInternalError(mockError)).toThrow('Dummy error');
  });

  test('When called with an ApiError object with status not equal to 500, then do not throw any error', () => {
    const mockError: ApiError = {
      code: 'ERROOOO',
      key: 'DUMMY_ERROR',
      message: 'Dummy error',
      status: 400,
    };
    expect(() => propagateInternalError(mockError)).not.toThrow();
    mockError.status = 401;
    expect(() => propagateInternalError(mockError)).not.toThrow();
    mockError.status = 422;
    expect(() => propagateInternalError(mockError)).not.toThrow();
  });

  test('When called with a random error object, then do not throw any error', () => {
    const mockError = {
      foo: 'bar',
    };
    expect(() => propagateInternalError(mockError)).not.toThrow();
  });

  test('When called with an undefined object, then do not throw any error', () => {
    expect(() => propagateInternalError(undefined)).not.toThrow();
    expect(() => propagateInternalError(null)).not.toThrow();
  });
});
