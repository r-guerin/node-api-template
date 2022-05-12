import { NextFunction, Response, Request } from 'express';
import { ApiError } from '@src/models';
import { buildMockNextFunction, buildMockRequest, buildMockResponse } from '@src/mocks';
import { errors } from './errors';

const error: ApiError = {
  code: 'ERR0001',
  key: 'INVALID_COUNTRY_CODE',
  message: 'Locale can not be handled by application',
  status: 400,
};

const errorWithoutStatus: ApiError = {
  code: 'ERR0001',
  key: 'INVALID_COUNTRY_CODE',
  message: 'Locale can not be handled by application',
  status: undefined,
};

let mockResponse: Response;
let mockRequest: Request;
let mockNextFunction: NextFunction;

beforeEach(() => {
  mockResponse = buildMockResponse();
  mockRequest = buildMockRequest();
  mockNextFunction = buildMockNextFunction();
});

describe('errors', () => {
  test('should not call next function if headers were not already sent', () => {
    errors(error, mockRequest, mockResponse, mockNextFunction);
    expect(mockNextFunction).not.toHaveBeenCalled();
  });

  test('should call next function if headers were already sent', () => {
    mockResponse.headersSent = true;
    errors(error, mockRequest, mockResponse, mockNextFunction);
    expect(mockNextFunction).toHaveBeenCalledTimes(1);
  });

  test('should respond with corresponding error status', () => {
    errors(error, mockRequest, mockResponse, mockNextFunction);
    expect(mockResponse.status).toHaveBeenCalledWith(error.status);
  });

  test('should respond with 500 if no error status', () => {
    errors(errorWithoutStatus, mockRequest, mockResponse, mockNextFunction);
    expect(mockResponse.status).toHaveBeenCalledWith(500);
  });

  test('should respond with well formated error message', () => {
    errors(error, mockRequest, mockResponse, mockNextFunction);
    const { key, code, message } = error;
    expect(mockResponse.json).toHaveBeenCalledWith({ error: { key, code, message } });
  });
});
