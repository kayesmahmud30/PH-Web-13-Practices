const arr = [1, 2, 3, 4, 5];

const oddNumbers = arr.map(function (value) {});

console.log(arr);
console.log(oddNumbers);

//------------------Implementation------------------------

function myMap(arr, cb) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let result = cb(arr[i], i, arr);
    newArr.push(result);
  }
  return newArr;
}

const result = myMap(arr, function (value) {
  return value * 6;
});
console.log(result);
