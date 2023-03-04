import "@testing-library/jest-dom";

beforeAll(() => {
  console.warn = jest.fn();
});

afterAll(() => {
  jest.clearAllMocks();
  jest.resetAllMocks();
  jest.restoreAllMocks();
});
