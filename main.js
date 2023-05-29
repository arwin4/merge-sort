const array1 = [1, 2, 3, 4, 5, 6, 7]; // sorted, uneven
const array2 = [1, 2, 3, 4, 5, 6, 7, 8]; // sorted, even
const array3 = [4, 2, 6, 5, 3, 1, 7]; // shuffled, uneven
const array4 = [4, 2, 6, 5, 3, 8, 1, 7]; // shuffled, even
const array5 = [438, 181, 455, 109, 620, 805]; // large, nonconsecutive numbers
const array6 = []; // nothing to sort, i.e. sorted
const array7 = [2]; // one item, i.e. sorted
const array8 = [4, -2, 3, -243]; // negative numbers

function mergeSort(arr) {
  // Base case: just one item, so it's already sorted
  if (arr.length === 1) return arr[0];

  const lengthLeft = Math.floor(arr.length / 2);
  const right = arr.splice(lengthLeft);
  const left = arr;

  console.log(lengthLeft);
  console.log(left);
  console.log(right);
}

mergeSort(array1);
mergeSort(array2);
mergeSort(array3);
mergeSort(array4);
mergeSort(array8);
