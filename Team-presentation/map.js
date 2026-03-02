// // const result = arr.map((value, index, arr) => {
// //   return value * 3;
// // });

// arr.forEach((value, index, arr) => {
//   console.log(value * 3);
// });

// // console.log(result);

const arr = [1, 2, 3, 4, 5];

function myMap(arr, callBack) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const result = callBack(arr[i], i, arr);
    newArr.push(result);
  }
  return newArr;
}

const result = myMap(arr, (value) => value * 2);
const result2 = myMap(arr, (value) => value / 2);

console.log(result);
console.log(result2);

//-------------------------------------------------
let sum = 0;

const indexSum = myMap(arr, function (value, index, arr) {
  return `value is ${value} index is ${index} full array is ${arr}`;
});

// console.log(sum);
console.log(indexSum);
