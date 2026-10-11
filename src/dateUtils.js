export function daysSince(startDate, now = new Date()) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(startDate)) {
    throw new TypeError('startDate must use YYYY-MM-DD format');
  }
  const [year, month, day] = startDate.split('-').map(Number);
  const start = new Date(year, month - 1, day, 12, 0, 0, 0);
  if (start.getFullYear() !== year || start.getMonth() !== month - 1 || start.getDate() !== day) {
    throw new RangeError('startDate is not a valid calendar date');
  }
  const current = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12, 0, 0, 0);
  return Math.max(0, Math.floor((current.getTime() - start.getTime()) / 86400000));
}