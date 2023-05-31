const array1 = [1, 2, 3, 4, 5, 6, 7]; // sorted, uneven
const array2 = [1, 2, 3, 4, 5, 6, 7, 8]; // sorted, even
const array3 = [4, 2, 6, 5, 3, 1, 7]; // shuffled, uneven
const array4 = [4, 6, 5, 2, 8, 3, 1, 7]; // shuffled, even
const array5 = [438, 181, 455, 109, 620, 805]; // large, nonconsecutive numbers
const array6 = []; // nothing to sort, i.e. sorted
const array7 = [2]; // one item, i.e. sorted
const array8 = [4, -2, 3, -243]; // negative numbers
const array9 = [4, 2, 2, 6, 5, 3, 8, 1, 7, 2, 3, 12, 11, 9, 10];
const array10 = [5, 2, 1, 3, 6, 4]; // Example from CS50: https://youtu.be/Ns7tGNbtvV4
const array11 = [5, 2, 1, 3];
const array12 = [9, 3, 7, 5, 6, 4, 8, 2, 10]; // https://www.youtube.com/watch?v=mB5HXBb_HY8
const array13 = [5, 2, 1, 3, 4];

function mergeSort(arr) {
  // Base case: just one item, so it's already sorted
  if (arr.length === 1) {
    return arr;
  } else {
    // Split into left and right arrays
    // Math.floor() accommodates any parity of array length
    const lengthLeft = Math.floor(arr.length / 2);
    const right = arr.splice(lengthLeft);
    const left = arr;

    const newLeft = mergeSort(left);
    const newRight = mergeSort(right);
    if (newRight === undefined) {
      return [newLeft];
    } else return merge(newLeft, newRight);
  }
}

function merge(left, right) {
  console.log(left, right);
  let merged = [];
  let leftPointer = left[0] || left; // TODO: remove ||?
  let rightPointer = right[0] || right;
  while (left.length > 0 && right.length > 0) {
    if (leftPointer < rightPointer) {
      merged.push(leftPointer);
      left = left.slice(1);
      console.log(merged);
      leftPointer = left[0];
    } else {
      merged.push(rightPointer);
      right = right.slice(1);
      console.log(merged);
      rightPointer = right[0];
    }
  }

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

// mergeSort(array2);
console.log(mergeSort(array9));
// console.log(mergeSort(array9));
// mergeSort(array8);
// console.log(mergeSort(array10));
// console.log(mergeSort(array11));
// console.log(mergeSort(array12));
