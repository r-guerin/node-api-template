import cases from 'jest-in-case';
import { buildURL } from './url';

describe('buildURL', () => {
  const mockEndpoint = 'http://foo.bar';

  test('When no params is given, should return the endpoint value', () => {
    const url = buildURL(mockEndpoint);
    expect(url).toBe('http://foo.bar/');
  });

  test('When params are given, should return the endpoint value with correspondign query string', () => {
    const mockParams = { id: 42, locale: 'fr-FR', isLoading: true };
    const url = buildURL(mockEndpoint, { params: mockParams });
    expect(url).toBe('http://foo.bar/?id=42&locale=fr-FR&isLoading=true');
  });

  cases(
    'When id is given, should return the endpoint concatenated with its value',
    ({ url, result }) => {
      const mockId = '3301000000050';
      expect(buildURL(url, { id: mockId })).toBe(result);
    },
    {
      withoutPath: { url: 'http://api.io', result: 'http://api.io/3301000000050' },
      withPath: { url: 'http://api.io/foo', result: 'http://api.io/foo/3301000000050' },
    },
  );
});
