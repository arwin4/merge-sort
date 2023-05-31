const array1 = [1, 2, 3, 4, 5, 6, 7]; // sorted, uneven
const array2 = [1, 2, 3, 4, 5, 6, 7, 8]; // sorted, even
const array3 = [4, 2, 6, 5, 3, 1, 7]; // shuffled, uneven
const array4 = [4, 6, 5, 2, 8, 3, 1, 7]; // shuffled, even
const array5 = [438, 181, 455, 109, 620, 805]; // large, nonconsecutive numbers
const array6 = []; // nothing to sort, i.e. sorted
const array7 = [2]; // one item, i.e. sorted
const array8 = [4, -2, 3, -243]; // negative numbers
const array9 = [4, 2, 2, 6, 5, 3, 8, 1, 7, 2, 3, 12, 11, 9, 10]; // duplicates
const array10 = [5, 2, 1, 3, 6, 4]; // Example from CS50: https://youtu.be/Ns7tGNbtvV4
const array11 = [5, 2, 1, 3];
const array12 = [9, 3, 7, 5, 6, 4, 8, 2, 10]; // https://www.youtube.com/watch?v=mB5HXBb_HY8
const array13 = [5, 2, 1, 3, 4];

function mergeSort(arr) {
  // Handle incorrect input
  if (!Array.isArray(arr) || arr.length < 1)
    return 'Please provide a valid sortable array. Format: [3, 1, -2]';
  // Base case: just one item, so it's already sorted
  if (arr.length === 1) return arr;

  // Split into left and right arrays
  // Math.floor() accommodates any parity of array length
  const lengthLeft = Math.floor(arr.length / 2);
  const right = arr.splice(lengthLeft);
  const left = arr;

  const newLeft = mergeSort(left);
  const newRight = mergeSort(right);
  return merge(newLeft, newRight);
}

function merge(left, right) {
  let merged = [];
  let leftPointer = left[0];
  let rightPointer = right[0];

  // As long as there are values to compare, keep comparing and adding to the
  // merged array.
  // Remove values added to the array (the smallest values) from the original
  // arrays. This way, we can exit the loop when no comparing is left to do.
  while (left.length > 0 && right.length > 0) {
    if (leftPointer < rightPointer) {
      merged.push(leftPointer);
      // Remove the pushed value from the original array
      left = left.slice(1);
      // Ready the pointer to compare the next value.
      // It was moved to index 0 at the above step.
      leftPointer = left[0];
    } else {
      merged.push(rightPointer);
      right = right.slice(1);
      rightPointer = right[0];
    }
  }

  // There's just one value left, so we know that it's the largest. So figure
  // out on which side it is and at it to the end of the merged array.
  while (left.length > 0) {
    merged.push(left[0]);
    left = left.slice(1);
  }
  while (right.length > 0) {
    merged.push(right[0]);
    right = right.slice(1);
  }

  return merged;
}

console.log(mergeSort(array1));
console.log(mergeSort(array1));
console.log(mergeSort(array3));
console.log(mergeSort(array4));
console.log(mergeSort(array5));
console.log(mergeSort(array6));
console.log(mergeSort(array7));
console.log(mergeSort(array8));
console.log(mergeSort(array9));
console.log(mergeSort(array10));
console.log(mergeSort(array11));
console.log(mergeSort(array12));
console.log(mergeSort(array13));
console.log(mergeSort());
