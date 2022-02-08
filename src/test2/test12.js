let data = [
  "f0468692-ae50-44a0-a0c5-3f6aec9d7f27",
  "324f589d-f646-446b-98c2-c2aca2ee97fc",
  "32ee3f1b-8bdb-4ee5-87c0-a8c8c081e31b",
  "9dee2c27-b1c6-4950-ba24-d9408fa50366",
  "f7cd7edf-3513-445e-b072-6688f22889f0",
  "ec327a73-703f-4b7d-a4db-b9dc7d7a007c",
  "7c991498-0bbe-44ea-8462-86ad11cccd61",
  "88a89d45-0831-4c06-81ae-9033440f9e0d",
  "4ffcdaed-d332-498d-8309-e0a26341ca46",
  "4fdfa4cf-3d74-47a7-a327-d90976e19af9",
  "dc3f2349-6bbc-4161-ac54-89de73ba2999",
  "9f34e840-dd46-4ba8-83c2-22f0a9df2205",
  "80c1ed83-8d91-42e9-bfa7-97ab229587c3",
  "0054fd1f-7df7-4c0f-b788-40bae223920c",
  "19ed6586-2e9b-47c6-bb36-76c1fa54d4e3",
  "8f8ba1df-0fc1-42ac-aa10-f874f9d168eb",
  "08f2ed60-4b7e-4a3d-acb4-e4ea62c4c2d2",
  "fb8877c7-ec5c-46d2-91af-dde97eb81ef2",
  "246fa455-8dcc-4cbe-8286-26439feb7d7a",
  "13565321-edf0-4c73-a6fd-b96db89be16f",
  "92d56709-b24e-4bcd-87a8-d21224221cf7",
  "3b4ec881-6dfa-496c-80c0-d614d40fb4c7",
  "2929b3ad-9170-45be-bc14-77ad3f0d656b",
  "05a5d05e-fc3d-4557-afba-dceffc0bb5f1",
  "bdaa7ce8-d145-470e-a3ac-d9f7f1cf1033",
  "33bbc8b8-e2d3-4e42-807d-ea8513621642",
  "e8c17621-8906-451c-b196-26e4cfe5fe0f",
  "b986e515-d4d5-48f4-b67b-a39fea6fd9f2",
  "939e2f11-92b3-4a3a-81aa-39b8078500fd",
  "6b2a0c3a-30db-4886-a8da-65c0753aa30a",
  "52cecd73-bf64-4efd-95bf-e1f22362fc3b",
  "b113143c-8e53-459e-a533-06dcb55df3fc",
  "addf3e51-f873-41cf-b6db-7e7122f4b3b9",
  "d11c3995-9c4e-4723-8056-9c66bc0faeb0",
  "8f6e3431-e8e1-44c3-945e-da4915cefe73",
  "7cb048be-f7c5-4555-8718-5b23b02b0333",
  "296bd631-fb9d-49ec-a8e8-e93139f0c713",
  "73826f02-776d-4267-83ef-0fa34464b19d",
  "3249afaf-82a1-459c-919b-dbc4a995cb4b",
  "f28b5a31-2e15-4d36-a7e2-6d5aaf3a0159",
  "74324b6a-cabe-4b37-886b-59e1874fb764",
  "408e509b-e95f-4f60-9f81-b18cb421f58d",
  "424f2b3c-3602-4907-ac6a-5718f600e61d",
  "207d8659-160e-471f-b8bc-5068863873ec",
  "3f6370d5-66c0-40f0-b054-96833ad57867",
  "b2bbbdd5-90d3-46c6-8574-623c5c528929",
  "2744cee8-9b13-4c7b-947f-e72b2e54547f"
]


let res = []

for(let i=0;i<data.length;i++) {
  res.push({
    "query": "select uid,instantaneousHeatLine1,instantaneous_heat from smart_data where uid = \"sd_"+ data[i] +"\" limit 1",
    "arguments": {
      "engine": "tsdb",
      "startTime": 1608773975000,
      "endTime": 1608773985000
    }
  })
}

console.log(JSON.stringify(res))

let ress = []

let a = 0
let b = 0
ress.forEach(item => {
  let data = item.data
  // console.log(data)
  if(data && data.uid && data.instantaneousHeatLine1 && data.instantaneous_heat) {
    // console.log(data.uid[0], data.instantaneousHeatLine1[0], data.instantaneous_heat[0])
    a+= data.instantaneousHeatLine1[0]
    b+= data.instantaneous_heat[0]
  }
})

console.log(a, b)
