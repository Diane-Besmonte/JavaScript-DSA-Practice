// *** Climbing Staircase Solution
function staircase(n) {
  const numOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    numOfWays[i] = numOfWays[i - 1] + numOfWays[i - 2];
  }
  return numOfWays[n - 1];
}
console.log(staircase(5));
// Big-O = O(n)

// *** Tower of Hanoi Solution
function towerOfHanoi(n, fromRod, toRod, usingRod) {
  if (n === 1) {
    console.log(`Move Disk 1 from ${fromRod} to ${toRod}`);
    return;
  }
  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move Disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

towerOfHanoi(3, "A", "C", "B");
// Big-O = O(2^n)

// *** FURTHER LEARNING
// Math, Search, Sorting Algorithms - Three pillars when learning Algorithms with any language

// Algorithm Design Techniques
// - Brute Force
// - Greedy
// - Divide and Conquer
// - Dynamic Programming
// Backtracking

// *** ALGORITHMS TOPIC SUMMARY
// Algorithm Introduction
// Time and Space Complexity
// Big-O Notation
// Objects and Arrays Big-O
// Math Algorithms
// - Fibonacci Sequence
// - Factorial of a Number
// - Prime Number
// - Power of Two
// Recursion
// Search Algorithms
// - Linear Search
// - Binary Search
// Sorting Algorithms
// - Bubble Sort
// - Insertion Sort
// - Quick Sort
// - Merge Sort
// Cartesian Product
// Climbing Staircase
// Tower of Hanoi
