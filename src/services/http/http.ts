import { AxiosInstance } from 'axios';
import { buildURL } from '@src/helpers';
import { UnknownObject, PrimitiveObject } from '@src/types';

type Dependencies = {
  instance: AxiosInstance;
};

const makeGet = ({ instance }: Dependencies) => {
  return async <T>(endpoint: string, params?: PrimitiveObject): Promise<T> => {
    const url = buildURL(endpoint, { params });
    const { data } = await instance.get<T>(url);
    return data;
  };
};

const makePost = ({ instance }: Dependencies) => {
  return async <T>(endpoint: string, id: string, payload: UnknownObject): Promise<T> => {
    const url = buildURL(endpoint, { id });
    const { data } = await instance.post<T>(url, payload);
    return data;
  };
};

export { makeGet, makePost };
