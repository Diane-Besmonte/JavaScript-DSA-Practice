// *** Fibonacci Sequence
function fibonacci(n) {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}
console.log(fibonacci(7));
// Big O = O(n)

// *** Factorial of a Number

// My solution
function factorial(n) {
  let fact = 1;
  for (let i = n; i > 0; i--) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(5));

// Solution
function factorial2(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
}
console.log(factorial(4));
// Big O = O(n)

// *** Prime Number
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(1)); //false
console.log(isPrime(5)); //true
console.log(isPrime(4)); //false
// Big O = O(sqrt(n))

// *** Power of Two

// My solution
function powerOfTwo(n) {
  return n === n ** (n - 1);
}
console.log("Power of Two? " + powerOfTwo(5));

// Solution
function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
console.log("Is Power of Two? " + powerOfTwo(5));
// Big O = O(logn)

function isPowerOfTwoBitWise(n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) === 0;
}
console.log("Is Power of Two BitWise? " + powerOfTwo(5));
