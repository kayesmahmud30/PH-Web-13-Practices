const arr = [1, 2, 3, 4, 5];

// arr.forEach((value, index, arr) => {
//   console.log(value, index, arr);
// });

function ourForEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

// let sum = 0;

ourForEach(arr, function (value) {
  //   sum += value;
  console.log(value);
});
