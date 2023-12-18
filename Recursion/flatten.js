const input = {
  a: 1,
  b: 2,
  c: {
    d: "string",
    e: [10, 20, [30]],
  },
};

function getFlattenedValues(input) {
  let res = [];

  function traverse(obj) {
    for (const key in obj) {
      if (typeof obj[key] !== "object") {
        res.push(obj[key]);
      } else {
        traverse(obj[key]);
      }
    }
  }

  traverse(input);
  return res;
}

console.log(getFlattenedValues(input)); // [1, 2, "string", 10, 20, 30]
