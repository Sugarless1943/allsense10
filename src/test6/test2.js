function copy(obj) {
    let res = obj instanceof Array ? []: {}
    for(let [k,v] of Object.entries(obj)) {
        res[k] = typeof v == 'object' ? copy(v) : v
    }

    return res
}
//
// let a = {
//     name: '111',
//     chi: {},
//     age: 18
// }
//
// let b = copy(a)
// b.age = 19
// console.log(a)
// console.log(b)

// let user = {
//     data: {
//         age: 18,
//     },
//
//     set age(value) {
//         this.data.age = value
//     },
//     get age() {
//         return this.data.age
//     }
// }
//
// user.age = 20
// console.log(user.age)

let arr = [1,2,3,4]
// console.log(arr.reduce((p,i) => {p+i},0))
console.log(arr.reduce((r,c) => r+c))