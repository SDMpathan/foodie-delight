module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
      '^@app/(.*)$': '<rootDir>/src/app/$1',
      '^@environments/(.*)$': '<rootDir>/src/environments/$1',
    },
  };
  