let str = []
for(let i=1;i<3;i++) {
  for(let j=1;j<25;j++) {
    let name = "b"+i+"_"+j+"_"
    str.push(name + "flag")
    str.push(name + "expectOpenning")
    str.push(name + "expectOpenning_origin")
  }
}

console.log(str.join(","))
