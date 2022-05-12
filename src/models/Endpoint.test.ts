import { Endpoint } from './Endpoint';

describe('endpoint', () => {
  test('When no port is given, should return properly formatted endpoint', () => {
    const instance = new Endpoint('https', 'foo.bar', 'fake-path');
    expect(instance.endpoint).toBe('https://foo.bar/fake-path');
  });

  test('When port is given, should return properly formatted endpoint with port', () => {
    const instance = new Endpoint('https', 'foo.bar', 'fake-path', '8080');
    expect(instance.endpoint).toBe('https://foo.bar:8080/fake-path');
  });
});
