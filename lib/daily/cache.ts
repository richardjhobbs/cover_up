export function getUtcDateString(date = new Date()) {
  return date.toISOString().slice(0, 10);
}

export function getDailyCacheKey(date = new Date()) {
  return getUtcDateString(date);
}
