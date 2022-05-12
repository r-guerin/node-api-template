import { loggingMiddleware } from '@src/services';
import cors from 'cors';
import { Application, json } from 'express';
import helmet from 'helmet';
import { loadMiddlewares } from './middlewares';

jest.mock('express');
jest.mock('cors');
jest.mock('helmet');
jest.mock('@src/services');

const mockUse = jest.fn();
const mockApp = { use: mockUse } as unknown as Application;

describe('loadMiddlewares', () => {
  test('Shoud use middlewares properly', () => {
    loadMiddlewares(mockApp);

    expect(mockUse).toHaveBeenCalledTimes(4);

    expect(mockUse).toHaveBeenNthCalledWith(2, helmet());
    expect(mockUse).toHaveBeenNthCalledWith(3, json());
    expect(mockUse).toHaveBeenNthCalledWith(4, loggingMiddleware());
    expect(mockUse).toHaveBeenNthCalledWith(1, cors());
  });
});
