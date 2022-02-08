let res = []

for(let i=0;i<24;i++) {
  let name = "weather_"+i
  // res.push({
  //   name,
  //   "expression": "z=vlatest(timestamp, t*2, "+name+"_pre);x=if(!IsNull(x), if(len(z) == 3, if(abs(z[1]-x)>=zone && if(abs(z[2]-x)>=zone && z[2]!=x, if(z[2]>=x, 1, -1), 0) == if(abs(z[1]-x)>=zone, if(z[1]>x, 1, -1), 0), z[1], x) ,x), z[1])"
  // })

  res.push({
    "timeSeries": "smart_weather:t_smart_weather:"+name,
    "label": name,
    "type": "DOUBLE",
    "desp": name
  })
}

console.log(JSON.stringify(res))
