let obj = {
  a: 1,
  b: 2,
  c: 3
}
let a = obj;
let b = {};
for(let i in obj) {
  b[i] = obj[i]
}
a.a = 2;

console.log(a)
console.log(b)
