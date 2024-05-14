// Big-O Notation
function summation(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += 1;
  }
  return sum;
}
// Note: As the size of input increases, the time complexity also increases

function summation(n) {
  return (n * (n + 1)) / 2;
}

// Objects and Arrays Big-O

// Objects
const person = {
  firstName: "Jett",
  lastName: "Black",
};

// Object.keys()
// Object.values()
// Object.entries()

// Arrays
const odd = [1, 3, 5, 7, 9];

// Push / Pop
// Shift / Unshift / Concat / Slice / Splice
// forEach / Map / Filter / Reduce
