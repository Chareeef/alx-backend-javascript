// Returns a string of all the set values that
// start with a specific string (startString).
export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string'
      || !(set instanceof Set)) {
    return '';
  }

  return [...set]
    .filter((string) => string.startsWith(startString))
    .map((string) => string.slice(startString.length))
    .join('-');
}
