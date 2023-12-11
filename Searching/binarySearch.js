function binarySearch(nums, target) {
  let startIndex = 0;
  let endIndex = nums.length - 1;
  let middleIndex;

  while (startIndex <= endIndex) {
    middleIndex = Math.floor((startIndex + endIndex) / 2);

    if (nums[middleIndex] === target) {
      return true;
    }

    if (target > nums[middleIndex]) {
      startIndex = middleIndex + 1;
    } else {
      endIndex = middleIndex - 1;
    }
  }

  return false;
}

console.log(binarySearch([1, 4, 6, 9, 12, 34, 45], 34)); // true
console.log(binarySearch([1, 4, 6, 9, 12, 34, 45], 18)); // false
