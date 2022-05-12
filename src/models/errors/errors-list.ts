import { ApiError } from './ApiError';

type Errors = Record<string, ApiError>;

export const ERRORS_LIST: Errors = {
  BAD_REQUEST: {
    code: 'ERR0001',
    key: 'BAD_REQUEST',
    message: 'Request is not properly formatted',
    status: 400,
  },
  RESOURCE_NOT_FOUND: {
    code: 'ERR0002',
    key: 'RESOURCE_NOT_FOUND',
    message: 'Resource was not found on this server',
    status: 404,
  },
};
