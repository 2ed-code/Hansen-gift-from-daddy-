import { describe, expect, it } from 'vitest';
import { daysSince } from './dateUtils.js';

describe('daysSince', () => {
  it('preserves the original 108-day count on June 5, 2026', () => {
    expect(daysSince('2026-02-17', new Date(2026, 5, 5, 9))).toBe(108);
  });
  it('updates as the calendar moves forward', () => {
    expect(daysSince('2026-02-17', new Date(2026, 9, 11, 15))).toBe(236);
  });
  it('never displays a negative count before the start date', () => {
    expect(daysSince('2026-02-17', new Date(2026, 1, 16, 12))).toBe(0);
  });
  it('rejects invalid calendar dates', () => {
    expect(() => daysSince('2026-02-30', new Date(2026, 2, 1))).toThrow(RangeError);
  });
});