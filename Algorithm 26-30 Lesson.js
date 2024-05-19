// *** Merge Sort Solution
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr));
// Big-O = O(nlogn)

// MISC PROBLEMS
// --- Cartesian Product
// --- Climbing Staircase
// --- Tower of Hanoi

// *** Cartesian Product Solution
function cartesianProduct(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }

  return result;
}

const arr1 = [1, 2];
const arr2 = [3, 4, 5];

console.log(cartesianProduct(arr1, arr2));
// Big-O = O(mn);
