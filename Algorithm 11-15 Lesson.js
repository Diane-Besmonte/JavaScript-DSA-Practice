// *** Recursion
function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}
console.log(recursiveFibonacci(6));
//  O(n) - Iteration
//  O(2^n) - Recursion

// *** Recursive Factorial of a Number
function recursiveFactorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial(5));
// Big-O = O(n)

// SEARCH ALGORITHMS
// *** Linear Search

// My Solution
function linearSearch(arr, target) {
  return arr.includes(target) ? arr.indexOf(target) : -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10));

// Solution
function linearSearch2(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log(linearSearch([-5, 2, 10, 4, 6], 10));
// Big-O = O(n)
