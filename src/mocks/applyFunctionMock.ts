export const applyFunctionMock = <T extends (...args: never[]) => unknown>(method: T): jest.MockedFunction<T> => {
  return method as unknown as jest.MockedFunction<T>;
};
