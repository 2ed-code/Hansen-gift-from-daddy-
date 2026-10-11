import { describe, expect, it } from 'vitest';
import { daysSince } from './dateUtils.js';

describe('daysSince', () => {
  it('calculates elapsed calendar days from February 17, 2026', () => {
    expect(daysSince('2026-02-17', new Date(2026, 5, 5, 9))).toBe(108);
  });
  it('shows 236 elapsed days on October 11, 2026', () => {
    expect(daysSince('2026-02-17', new Date(2026, 9, 11, 15))).toBe(236);
  });
  it('never displays a negative count before the start date', () => {
    expect(daysSince('2026-02-17', new Date(2026, 1, 16, 12))).toBe(0);
  });
  it('rejects invalid calendar dates', () => {
    expect(() => daysSince('2026-02-30', new Date(2026, 2, 1))).toThrow(RangeError);
  });
});
