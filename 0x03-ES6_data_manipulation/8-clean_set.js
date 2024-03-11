// Returns a string of all the set values that
// start with a specific string (startString).
export default function cleanSet(set, startString) {
  if (!startString) {
    return '';
  }

  let fullString = Array.from(set).reduce((totalString, item) => {
    if (item.startsWith(startString)) {
      return `${totalString + item.slice(startString.length)}-`;
    }

    return totalString;
  }, '');

  if (fullString[fullString.length - 1] === '-') {
    fullString = fullString.slice(0, fullString.length - 1);
  }

  return fullString;
}
