// Time Complexity - O(n^2)
// Works for sorted array
function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
}

// Time Complexity - O(n)
// Works for sorted array
function hasPairWithSum2(arr, target) {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  while (startIndex < endIndex) {
    const sum = arr[startIndex] + arr[endIndex];
    if (sum === target) return true;

    if (sum < target) {
      startIndex = startIndex + 1;
    } else {
      endIndex = endIndex - 1;
    }
  }

  return false;
}

// Time Complexity - O(n)
// Works for unsorted array
function hasPairWithSum3(arr, sum) {
  const mySet = new Set();
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}

console.log(hasPairWithSum3([6, 4, 3, 2, 1, 7], 10));
