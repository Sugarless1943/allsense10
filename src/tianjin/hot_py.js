let str = []

for (let i = 1; i < 3; i++) {
  for (let j = 1; j < 25; j++) {
    let floor = i + "_" + j
    // str.push("hot_" + floor)
    // str.push("b" + floor + "_1_heat")
    // str.push("b" + floor + "_rate")
    str.push("b" + floor + "_flag")
    str.push("b" + floor + "_expectOpenning")
    str.push("b" + floor + "_expectOpenning_origin")
  }
}

console.log(str.join(","))
