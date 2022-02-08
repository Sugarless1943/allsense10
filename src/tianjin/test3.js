let data = [
  {
    "constants": {
      "uid_define": "c899d6f3-9dde-4138-a725-912bcdf1ecf3"
    },
    "mappings": {
      "originValue": "h1_expectValue1",
      "currentValue": "h1_freq"
    }
  },
  {
    "constants": {
      "uid_define": "47feeefb-46ce-4af2-ac9d-859c1524a328"
    },
    "mappings": {
      "originValue": "h1_expectValue2",
      "currentValue": "h1_freq"
    }
  },
  {
    "constants": {
      "uid_define": "03a84fc2-02dd-40f7-b284-40e0fa19cb31"
    },
    "mappings": {
      "originValue": "h2_expectValue",
      "currentValue": "h2_freq"
    }
  },
  {
    "constants": {
      "uid_define": "142b118b-8f53-46f3-a579-0876885bd3fb"
    },
    "mappings": {
      "originValue": "h3_expectValue",
      "currentValue": "h3_freq"
    }
  },
  {
    "constants": {
      "uid_define": "0aa7949c-66c9-403c-8c50-124c3ad68e0c"
    },
    "mappings": {
      "originValue": "h4_expectValue",
      "currentValue": "h4_freq"
    }
  },
  {
    "constants": {
      "uid_define": "265006fe-c2da-4514-a2c4-72a7d0d3926d"
    },
    "mappings": {
      "originValue": "h5_expectValue",
      "currentValue": "h5_freq"
    }
  }
]

let res = []
for(let i in data) {
 res.push([
   {
     "name": "uid",
     "value": data[i].constants.uid_define
   },
   {
     "name": "originValue",
     "mapping": data[i].mappings.originValue
   },
   {
     "name": "currentValue",
     "mapping": data[i].mappings.currentValue
   }
 ])
}
console.log(JSON.stringify(res))
