import { AxiosInstance } from 'axios';
import { buildInstance } from './instance';

let mockBuildInstance: AxiosInstance;

beforeEach(() => {
  jest.clearAllMocks();
  mockBuildInstance = buildInstance();
});

describe('buildInstance', () => {
  test('Should be defined', () => {
    expect(mockBuildInstance).toBeDefined();
  });
});
