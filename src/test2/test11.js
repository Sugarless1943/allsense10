// {
//   "uid":"aae6de67-fedc-4321-9025-6d9b02c93885",
//   "metrics":[{property: "expectOpenning", originValue: 50, currentValue: 100}]
// }

// console.log(JSON.stringify({
//   "uid":"aae6de67-fedc-4321-9025-6d9b02c93885",
//   "metrics":[{property: "expectOpenning", originValue: 50, currentValue: 100}]
// }))


let str = ""
let arr = []
for(let i=1;i<25;i++) {
  arr.push("b2_"+i+"_expectOpenning - b2_"+i+"_expectOpenning")
}

console.log("select " + arr.join(",") + " from kaiyun_pipe_network where uid = 't_kaiyun_pipe_network'")
