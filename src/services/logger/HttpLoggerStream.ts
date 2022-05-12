import { logger } from './logger';

export class HttpLoggerStream {
  public write(message: string): void {
    logger.http(message);
  }
}
