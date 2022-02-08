let data = {
  "metric":"a1",
  "value": 3.0,
  "timestamp": 1600016400,
  "tags":{
    "type": "yefan",
    "uid": "s1"
  }
}


let [res,startTime,endTime] = [[],1598889600,1599062400]




for(let i=startTime;i<endTime;i+=30){
  res.push({
    "metric":"a1",
    "value": 3.0,
    "timestamp": i,
    "tags":{
      "type": "yefan",
      "uid": "s1"
    }
  })
}

console.log(JSON.stringify(res))

function a(a, b, c) {
  if (a + b + c == 0) {
    return 0
  } else if (a + b == 0) {
    return c
  } else if (a + c == 0) {
    return b
  } else if (b + c == 0) {
    return a
  } else if (a >= b && b >= c) {
    return b
  } else if (a >= c && c >= b) {
    return c
  } else if (b >= a && a >= c) {
    return a
  } else if (b >= c && c >= a) {
    return c
  } else if (c >= a && a >= b) {
    return a
  } else if (c >= b && b >= a) {
    return b
  }
}

