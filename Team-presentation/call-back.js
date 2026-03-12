const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filteredArr = arr.filter((value, index, arr) => {
//   return value % 2 == 0;
// });

// console.log(filteredArr);

function ourFilter(arr, cb) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const filteredArr = ourFilter(arr, (item) => {
  return item % 2 === 0;
});

const filteredArr2 = ourFilter(arr, (item) => {
  return item % 2 === 1;
});

console.log(filteredArr);
console.log(filteredArr2);
