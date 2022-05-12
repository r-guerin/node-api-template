import { SPLAT } from 'triple-beam';
import { TransformableInfo } from 'logform';
import { logPrinter } from './log-printer';

const splat = SPLAT as unknown as string;

describe('logPrinter', () => {
  test('when no additional info is given, then only print basic format', () => {
    const mockInfo: TransformableInfo = { timestamp: 'foo', level: 'info', message: 'bar' };
    expect(logPrinter(mockInfo)).toBe('foo [info]: bar');
  });

  test('when additional info is null, then only print basic format', () => {
    const mockInfo: TransformableInfo = { timestamp: 'foo', level: 'info', message: 'bar', [splat]: null };
    expect(logPrinter(mockInfo)).toBe('foo [info]: bar');
  });

  test('when additional info is given, then print it after basic format', () => {
    const mockInfo: TransformableInfo = { timestamp: 'foo', level: 'info', message: 'bar', [splat]: 'fooz barz' };
    expect(logPrinter(mockInfo)).toBe('foo [info]: bar - "fooz barz"');
  });
});
