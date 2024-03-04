export default function iterateThroughObject(reportWithIterator) {
  let namesString = '';

  for (const name of reportWithIterator) {
    namesString += name;

    if (name !== reportWithIterator[reportWithIterator.length - 1]) {
      namesString += ' | ';
    }
  }

  return namesString;
}
