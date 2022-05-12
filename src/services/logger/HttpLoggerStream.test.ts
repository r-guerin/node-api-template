import { HttpLoggerStream } from './HttpLoggerStream';
import { logger } from './logger';

const loggerStream = new HttpLoggerStream();

describe('write', () => {
  test('should call logger http method properly', () => {
    const httpSpy = jest.spyOn(logger, 'http');
    loggerStream.write('dummy log message');
    expect(httpSpy).toHaveBeenCalledTimes(1);
    expect(httpSpy).toHaveBeenCalledWith('dummy log message');
  });
});
