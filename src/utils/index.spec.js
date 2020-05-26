/* eslint-disable no-undef */
import { heightInCm, weightInKg } from '.';

describe('test functions utils', () => {
  it('converts height to cm', () => {
    const result = heightInCm(8);

    expect(result).toBe(80);
  });

  it('converts height to cm using decimals', () => {
    const result = heightInCm(8.5);

    expect(result).toBe(85);
  });

  it('converts weight to kg', () => {
    const result = weightInKg(4);

    expect(result).toBe(0.4);
  });

  it('converts weight to kg using decimals', () => {
    const result = weightInKg(4.5);

    expect(result).toBe(0.45);
  });
});
