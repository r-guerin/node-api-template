import { transports } from 'winston';

const logTransports = [new transports.Console({ level: process.env.LOG_LEVEL })];

export { logTransports };
