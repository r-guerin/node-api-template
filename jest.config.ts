import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  collectCoverageFrom: [
    '<rootDir>/**/*.{js,ts}',
    '!<rootDir>/**/*.test.{js,ts}',
    '!<rootDir>/**/*.d.{js,ts}',
    '!<rootDir>/**/index.{js,ts}',
    '!<rootDir>/coverage/**/*',
    '!<rootDir>/mocks/**/*',
  ],
  coverageThreshold: {
    global: {
      statements: 80,
      branches: 80,
      functions: 80,
      lines: 80,
    },
  },
  moduleNameMapper: {
    '^@src/(.*)$': '<rootDir>/$1',
  },
  testRegex: '.(test|spec)\\.[jt]s$',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)s$': '@swc/jest',
  },
  resetMocks: true,
  rootDir: './src',
};

export default config;
