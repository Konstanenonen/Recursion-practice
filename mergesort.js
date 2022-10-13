function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }

  const halfWayIndex = Math.ceil(array.length / 2);

  const firstHalf = array.slice(0, halfWayIndex);
  const secondHalf = array.slice(halfWayIndex);

  const sortedFirstHalf = mergeSort(firstHalf);
  const sortedSecondHalf = mergeSort(secondHalf);
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
      const nextNumber = sortedFirstHalf.shift();
      sortedFullArray.push(nextNumber);
    } else {
      const nextNumber = sortedSecondHalf.shift();
      sortedFullArray.push(nextNumber);
    }
  }

  return sortedFullArray;
}
