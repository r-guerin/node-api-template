import { PrimitiveObject } from '@src/types';

type URLConfig = { params?: PrimitiveObject; id?: string };

const URL_PATH_SEPARATOR = '/';

const isLastCharSeparator = (value: string): boolean => value.slice(-1) === URL_PATH_SEPARATOR;

const buildURL = (endpoint: string, config?: URLConfig): string => {
  const url = new URL(endpoint);

  if (config?.id) {
    if (!isLastCharSeparator(url.pathname)) {
      url.pathname += URL_PATH_SEPARATOR;
    }
    url.pathname += config.id;
  }

  if (config?.params) {
    Object.entries(config.params).forEach(([key, value]) => {
      url.searchParams.append(key, value.toString());
    });
  }

  return url.toString();
};

export { buildURL };
