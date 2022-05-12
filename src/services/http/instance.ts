import axios, { AxiosInstance } from 'axios';

export const buildInstance = (): AxiosInstance => {
  const instance = axios.create();
  return instance;
};
