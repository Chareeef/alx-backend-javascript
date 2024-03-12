// Returns a string of all the set values that
// start with a specific string (startString).
export default function cleanSet(set, startString) {
  let fullString = '';

  if (!startString) {
    return fullString;
  }

  for (const item of set) {
    if (item.startsWith(startString)) {
      fullString += `${item.slice(startString.length)}-`;
    }
  }

  if (fullString[fullString.length - 1] === '-') {
    fullString = fullString.slice(0, fullString.length - 1);
  }

  return fullString;
}
