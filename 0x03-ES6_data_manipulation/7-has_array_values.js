// Return whether all the elements in the array exist within the set or not
export default function hasValuesFromArray(set, array) {
  const subSet = new Set(array);

  for (const item of subSet) {
    if (!set.has(item)) return false;
  }

  return true;
}
