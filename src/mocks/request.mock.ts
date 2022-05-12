import { NextFunction, Request, Response } from 'express';

class MockResponse {
  constructor(
    public header = jest.fn().mockReturnThis(),
    public status = jest.fn().mockReturnThis(),
    public json = jest.fn().mockReturnThis(),
    public end = jest.fn(),
    public send = jest.fn(),
  ) {}
}

export const buildMockResponse = () => new MockResponse() as unknown as Response;

export const buildMockRequest = () => ({} as unknown as Request);

export const buildMockNextFunction = () => jest.fn() as NextFunction;
