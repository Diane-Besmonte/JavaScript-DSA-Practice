// *** Bubble Sort Solution
function bubbleSort(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
}

const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log("Bubble Sort: " + arr); // [-6, -2, 4, 8, 20]
// Big-O = O(n^2);

// *** Insertion Sort Solution
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
}

const arr2 = [8, 20, -2, 4, -6];
insertionSort(arr2);
console.log("Insertion Sort: " + arr2); // [-6, -2, 4, 8, 20]
// Big O = O(n^2);

// *** Quick Sort Solution
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr3 = [8, 20, -2, 4, -6];
console.log("Quick Sort: " + quickSort(arr3)); // [-6, -2, 4, 8, 20]
// Worst case = O(n^2)
// Avg case = O(logn)
