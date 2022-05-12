import { TransformableInfo } from 'logform';
import { format } from 'winston';
import { logPrinter } from './log-printer';

const levelUpperCase = (info: TransformableInfo) => Object.assign({}, info, { level: info.level.toUpperCase() });

const logFormat = format.combine(
  format.json(),
  format.timestamp(),
  format.align(),
  format(levelUpperCase)(),
  format.splat(),
  format.printf(logPrinter),
);

export { logFormat };
