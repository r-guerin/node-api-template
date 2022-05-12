import morgan from 'morgan';
import { Handler } from 'express';
import { HttpLoggerStream } from './HttpLoggerStream';

const stream = new HttpLoggerStream();
const requestFormat = ':remote-addr "req/HTTP/:http-version :method :url" ":remote-user :user-agent"';
const responseFormat = ':remote-addr "res/HTTP/:http-version :method :url" :status ":response-time ms"';

const loggingMiddleware = (): Handler[] => [
  morgan(requestFormat, { immediate: true, stream }),
  morgan(responseFormat, { stream }),
];

export { loggingMiddleware };
