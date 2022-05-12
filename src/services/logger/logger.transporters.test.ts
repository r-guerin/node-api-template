import { logTransports } from './log-transporters';

jest.mock('winston', () => ({
  transports: { Console: jest.fn() },
}));

describe('logTransports', () => {
  const transport = logTransports;

  test('Should contain a Console transport', () => {
    expect(Array.isArray(transport)).toBeTruthy();
    expect(transport).toHaveLength(1);
  });
});
