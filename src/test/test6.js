let data = {"timestamp":1598583178783,"uid":"sd_6f5525f4-e130-11ea-80ae-02fcdc4e7412","corpId":"37d0ad830c0f000","instantaneousFlowLine1":77.88560923352003,"instantaneousHeatLine1":25.051160578021275,"accumulatedHeatLine1":96.16694544470226,"accumulatedFlowLine1":13.79961364426231,"supplyWaterPressureLine1":27.330486748651104,"returnWaterPressureLine1":68.37029770544035,"supplyWaterPressureLine2":6.190809131006071,"returnWaterPressureLine2":84.39379020909267,"pressureDiff2":5.907095987371184,"supplyWaterTemperatureLine1":75.3203633589716,"returnWaterTemperatureLine1":39.638905114965205,"supplyWaterTemperatureLine2":65.75308917003171,"returnWaterTemperatureLine2":82.01337785241644,"fixFreqRecyclePumpCurrent":61.94076494477819,"varFreqRecyclePumpCurrent":55.19691975210322,"controlValveOpenning":20.09852739634468,"mixeWaterValveOpenning":14.465816334707743,"mixeWaterTemperatureLine2":30.91759449041751,"runState":1.0,"runOpening":81.58038123086025,"expectOpenning":83.9374568362493,"workMode":1.0,"expectTemperature":12.690998482309473,"expectPressureDiff":12.72558692586564,"powerState":10.296019253725607,"signalState":37.623246633290194,"SupTempLine1":75.3203633589716,"RetTempLine1":39.638905114965205,"SupPresLine1":27.330486748651104,"RetPresLine1":68.37029770544035,"InsFlowLine1":77.88560923352003,"InsHeatLine1":25.051160578021275,"SupTempLine2":65.75308917003171,"RetTempLine2":82.01337785241644,"SupPresLine2":6.190809131006071,"RetPresLine2":84.39379020909267,"ValveOpenLine1":81.58038123086025,"type":"smart_data"}

let res = []
for(let i in data) {
  // console.log(typeof data[i])
  res.push({
    "name": i,
    "dataType": typeof data[i] == "string" ? "STRING" : "DOUBLE"
  })
}

console.log(JSON.stringify(res))
