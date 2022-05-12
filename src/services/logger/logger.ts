import { createLogger } from 'winston';
import { logFormat } from './log-formatter';
import { logTransports } from './log-transporters';

const logger = createLogger({
  format: logFormat,
  transports: logTransports,
  exitOnError: false,
});

export { logger };
