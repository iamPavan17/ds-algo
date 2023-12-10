const bubbleSort = (nums) => {
  let length = nums.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }

  return nums;
};

console.log(bubbleSort([5, 6, 3, 1, 8, 7, 2, 4]));
