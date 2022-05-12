import { TransformableInfo } from 'logform';
import { SPLAT } from 'triple-beam';

const argsPrinter = (args: { [key: string]: unknown }) => {
  const splat = SPLAT as unknown as string;

  return args[splat] ? JSON.stringify(args[splat]) : '';
};

const logPrinter = (info: TransformableInfo): string => {
  const { timestamp, level, message, ...args } = info;
  const additionalInfo = argsPrinter(args);

  const basicFormat = `${timestamp} [${level}]: ${message}`;
  return additionalInfo ? `${basicFormat} - ${additionalInfo}` : basicFormat;
};

export { logPrinter };
