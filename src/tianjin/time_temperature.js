let settings = {}
let conditions = []

//objectToInteger(timestampToString(timestamp, "HH"))

for(let i=0;i<24;i++) {
  settings['temperature_'+i] = 20
  conditions.push({
    "condition": "pk_hour > "+i+" && pk_hour <= "+(i+1),
    "temperature_scoring_use": 'temperature_'+i
  })
}

console.log(JSON.stringify(settings))
console.log(JSON.stringify(conditions))

