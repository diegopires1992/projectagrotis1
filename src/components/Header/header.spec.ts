import { describe } from 'node:test';

const sum = (a: number, b: number) => {
  return a + b;
};

describe('sum', () => {
  it('should returns 2', () => {
    const result = sum(1, 1);
    expect(result).toEqual(2);
  });
});
