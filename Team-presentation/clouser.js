function firstFunc() {
  let i = 0;
  function innerFunc() {
    i++
    return i
  }
  return innerFunc
}

const result = firstFunc()
const result2 = firstFunc()

console.log(result());
console.log(result());
console.log(result());
console.log(result());

console.log(result2());
console.log(result2());
console.log(result2());

console.log(firstFunc()());
console.log(firstFunc()());
console.log(firstFunc()());
console.log(firstFunc()());
console.log(firstFunc()());
console.log(firstFunc()());
