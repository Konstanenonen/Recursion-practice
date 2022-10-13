function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const halfWayIndex = Math.ceil(array.length / 2);

  const sortedFirstHalf = mergeSort(array.slice(0, halfWayIndex));
  const sortedSecondHalf = mergeSort(array.slice(halfWayIndex));

  let sortedFullArray = [];

  while (sortedFirstHalf.length > 0 || sortedSecondHalf.length > 0) {
    if (sortedFirstHalf.length === 0) {
      sortedFullArray = sortedFullArray.concat(sortedSecondHalf);
      break;
    }

    if (sortedSecondHalf.length === 0) {
      sortedFullArray = sortedFullArray.concat(sortedFirstHalf);
      break;
    }

    if (sortedFirstHalf[0] < sortedSecondHalf[0]) {
      sortedFullArray.push(sortedFirstHalf.shift());
    } else {
      sortedFullArray.push(sortedSecondHalf.shift());
    }
  }

  return sortedFullArray;
}
