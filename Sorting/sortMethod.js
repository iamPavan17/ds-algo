const numbers = [1, 23, 54, 35, 12];
const fruits1 = ["banana", "applee", "apple", "abple", "orange", "kiwi"];
const fruits2 = ["banana", "applee", "apple", "abple", "orange", "kiwi"];
const fruits3 = ["banana", "applee", "apple", "abple", "orange", "kiwi"];

// To sort numbers - [1, 12, 23, 35, 54]
console.log(
  numbers.sort((a, b) => {
    return a - b;
  })
);

// To sort strings - 1
// O/P: ['abple', 'apple', 'applee', 'banana', 'kiwi', 'orange']
console.log(
  fruits1.sort((a, b) => {
    return a.localeCompare(b);
  })
);

// To sort strings - 2
// O/P: ['abple', 'apple', 'applee', 'banana', 'kiwi', 'orange']
console.log(fruits2.sort());

// Doesn't work, returns the same unsorted values
// O/P: ['banana', 'applee', 'apple', 'abple', 'orange', 'kiwi']
console.log(
  fruits3.sort((a, b) => {
    // "abc" - "def" => If we try to subract strings, it'll return NaN
    return a - b;
  })
);
