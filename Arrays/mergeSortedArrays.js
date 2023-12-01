function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let i = 0;
  let j = 0;
  let arr1Ele = arr1[0];
  let arr2Ele = arr2[0];

  while (arr1Ele || arr2Ele) {
    if (arr1Ele < arr2Ele) {
      result.push(arr1Ele);
      i++;
      arr1Ele = arr1[i];
    } else {
      result.push(arr2Ele);
      j++;
      arr2Ele = arr2[j];
    }

    if (arr1Ele === undefined) {
      result.push(arr2Ele);
      break;
    }
    if (arr2Ele === undefined) {
      result.push(arr1Ele);
      break;
    }
  }

  return result;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [3, 4, 6, 30])); // [ 0, 3, 3, 4, 4, 6, 30, 31 ]
