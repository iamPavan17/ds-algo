function mergeSortedArrays(array1, array2) {
  let result = [];
  let i = 0;
  let j = 0;
  let array1Element = array1[0];
  let array2Element = array2[0];

  while (array1Element !== undefined && array2Element !== undefined) {
    if (array1Element < array2Element) {
      result.push(array1Element);
      i++;
      array1Element = array1[i];
    } else {
      result.push(array2Element);
      j++;
      array2Element = array2[j];
    }
  }

  const lastElement = array1[array1.length - 1] || array2[array2.length - 1];
  result.push(lastElement);

  return result;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30])); // [ 0, 3, 3, 4, 4, 6, 30, 31 ]
