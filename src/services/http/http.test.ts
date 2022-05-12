import { AxiosInstance } from 'axios';
import { UnknownObject, PrimitiveObject } from '@src/types';
import { makeGet, makePost } from './http';

type GetRequest = <T>(endpoint: string, params?: PrimitiveObject) => Promise<T>;
type PostRequest = <T>(endpoint: string, id: string, payload: UnknownObject) => Promise<T>;

const mockAxiosGet = jest.fn();
const mockAxiosPost = jest.fn();
const mockInstance = { get: mockAxiosGet, post: mockAxiosPost } as unknown as AxiosInstance;

let mockGet: GetRequest;
let mockPost: PostRequest;

const mockURL = 'http://foo.io/bar';
const mockId = '0001';
const mockPayload = {
  customer: {
    firstName: 'John',
    lastName: 'Smith',
  },
};
const mockResponse = { success: true };

beforeEach(() => {
  jest.clearAllMocks();
  mockGet = makeGet({ instance: mockInstance });
  mockPost = makePost({ instance: mockInstance });
});

describe('get', () => {
  test('Should make a GET call to given URL and return its data', async () => {
    mockAxiosGet.mockReturnValueOnce({ data: mockResponse });
    const response = await mockGet(mockURL);

    expect(mockAxiosGet).toHaveBeenCalledTimes(1);
    expect(mockAxiosGet).toHaveBeenCalledWith(mockURL);
    expect(response).toStrictEqual(mockResponse);
  });
});

describe('post', () => {
  test('Should make a POST call to given URL and return its data', async () => {
    mockAxiosPost.mockReturnValueOnce({ data: mockResponse });
    const response = await mockPost(mockURL, mockId, mockPayload);

    expect(mockAxiosPost).toHaveBeenCalledTimes(1);
    expect(mockAxiosPost).toHaveBeenCalledWith('http://foo.io/bar/0001', mockPayload);
    expect(response).toStrictEqual(mockResponse);
  });
});
