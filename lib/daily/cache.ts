export function getDailyCacheKey(date = new Date()) {
  return date.toISOString().slice(0, 10);
}
