// recursion

function findFactorialIterative(num) {
  let ans = 1;
  for (let i = 2; i <= num; i++) {
    ans = ans * i;
  }
  return ans;
}

function findFactorialRecursive(num) {
  if (num === 2) {
    return 2;
  }
  return (ans = num * findFactorialRecursive(num - 1));
}

console.log(findFactorialIterative(5));
console.log(findFactorialRecursive(5));

function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr[n];
}

console.log(fibonacciIterative(3));

function fibonacciRecursive(n) {
  if (n < 2) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(6));

// Sorting algortihms

// 1. Bubble sort

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const bubbleSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

console.log(bubbleSort(numbers));

// 2. Selection sort

const selectionSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    let temp = arr[i];
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    arr[i] = arr[min];
    arr[min] = temp;
  }
  return arr;
};

console.log(selectionSort(numbers));

// 3.Insertion Sort

const insertionSort = (arr) => {
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      if (arr[i] < arr[i - 1]) {
        for (let j = 1; j < i; j++) {
          if (arr[i] >= arr[j - 1]) {
            arr.splice(j, 0, arr.splice(i, 1)[0]);
          }
        }
      }
    }
  }
  return arr;
};

console.log(insertionSort(numbers));

// 4. Merge Sort

const mergeSort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  const len = arr.length;
  const middle = Math.floor(len / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

console.log(mergeSort(numbers));

// 5. Quick sort

const quickSort = (arr, left, right) => {
  const len = arr.length;
  let pivot;
  let partitionIndex;
  if (left < right) {
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);

    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
};

const partition = (arr, pivot, left, right) => {
  let pivotValue = arr[pivot];
  let partitionIndex = left;
  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
};

const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
};

console.log(quickSort(numbers, 0, numbers.length - 1));
