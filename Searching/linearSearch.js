function linearSearch(elements, element) {
  for (let i = 0; i < elements.length; i++) {
    if (element == elements[i]) {
      return true;
    }
  }

  return false;
}

console.log(linearSearch([1, 4, 2, 8, 5], 5)); // true
console.log(linearSearch([1, 4, 2, 8, 5], 15)); // false
