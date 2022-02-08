// let a = "246fa455-8dcc-4cbe-8286-26439feb7d7a," + "19ed6586-2e9b-47c6-bb36-76c1fa54d4e3," + "207d8659-160e-471f-b8bc-5068863873ec," + "266cf4b6-4028-4b75-9d48-251aa1ed811f," + "2744cee8-9b13-4c7b-947f-e72b2e54547f," + "27ed4d57-bd91-4a14-bf09-d2ac328730f4," + "2929b3ad-9170-45be-bc14-77ad3f0d656b," + "296bd631-fb9d-49ec-a8e8-e93139f0c713," + "2d69300e-c87b-41c9-af27-9db83c13124a," + "3249afaf-82a1-459c-919b-dbc4a995cb4b"
// let b = a.split(",")
//
// let res = []
// b.forEach(item => {
//   res.push({
//     "query":"select uid,workMode_rank from smart_data where uid = \"sd_"+ item +"\"",
//     "arguments": {
//       "engine": "tsdb",
//       "startTime": 1609312800000,
//       "endTime": 1609312860000
//     }
//   })
// })

// console.log(JSON.stringify(res))


let data = [{
  "condition": "uid==\"sm_a0223d12-469c-42e5-91ff-c2308469c0e7\"",
  "calculate_enable": "HS1_calculate_enable"
}, {
  "condition": "uid==\"b42529ad-1e38-44ba-a970-2dffaac0e989\"",
  "calculate_enable": "H1_calculate_enable"
}, {
  "condition": "uid==\"266cf4b6-4028-4b75-9d48-251aa1ed811f\"",
  "calculate_enable": "H2_calculate_enable"
}, {
  "condition": "uid==\"a3a6ca91-913c-45ac-bd3e-71fbb3c6c402\"",
  "calculate_enable": "H3_calculate_enable"
}, {
  "condition": "uid==\"f30b9873-3cc4-4de2-afd7-20938b2e05fd\"",
  "calculate_enable": "H4_calculate_enable"
}, {
  "condition": "uid==\"4ae724d3-c0cb-46b3-9c50-9ac9c08b3a1d\"",
  "calculate_enable": "H5_calculate_enable"
}, {
  "condition": "uid==\"ce01bdbc-5e43-44b7-b6fc-2576732455d2\"",
  "calculate_enable": "H6_calculate_enable"
}, {
  "condition": "uid==\"73b46daf-d42d-48c3-9488-2cee279fec41\"",
  "calculate_enable": "H7_calculate_enable"
}, {
  "condition": "uid==\"46104474-a8e5-4b32-b69f-f8758774b784\"",
  "calculate_enable": "H8_calculate_enable"
}, {
  "condition": "uid==\"409e2b31-8d6d-4733-8004-6089a5dda855\"",
  "calculate_enable": "H9_calculate_enable"
}, {
  "condition": "uid==\"4d94f835-7c59-4ad0-a39d-2a90f1f80d79\"",
  "calculate_enable": "H10_calculate_enable"
}, {
  "condition": "uid==\"ac0d9010-bba2-4d53-91b3-029ae5207345\"",
  "calculate_enable": "H11_calculate_enable"
}, {
  "condition": "uid==\"ab7885ae-099d-4b00-a3ae-19897462f77a\"",
  "calculate_enable": "H12_calculate_enable"
}, {
  "condition": "uid==\"e1f35436-a1ae-41d0-bd29-b893afd318f2\"",
  "calculate_enable": "H13_calculate_enable"
}, {
  "condition": "uid==\"096715ab-702c-44b1-8989-0317178c48f1\"",
  "calculate_enable": "H15_calculate_enable"
}, {
  "condition": "uid==\"747ed9de-4caa-494e-aa1d-8008d501f8e0\"",
  "calculate_enable": "H16_calculate_enable"
}, {
  "condition": "uid==\"ef1757e3-06cd-43b1-8cc3-d088b50065e7\"",
  "calculate_enable": "H17_calculate_enable"
}, {
  "condition": "uid==\"0a3e11a5-dca8-461f-b168-7ca7c2aa3122\"",
  "calculate_enable": "H18_calculate_enable"
}, {
  "condition": "uid==\"441aabd9-43a9-4395-b596-f94ee371c9a5\"",
  "calculate_enable": "H19_calculate_enable"
}, {
  "condition": "uid==\"a58ad4ff-7488-44de-aeda-7056c6bb667a\"",
  "calculate_enable": "H20_calculate_enable"
}, {
  "condition": "uid==\"c5b9bb35-6deb-4066-b638-df1920064a40\"",
  "calculate_enable": "H21_calculate_enable"
}, {
  "condition": "uid==\"0946f809-6e40-4d0f-bd98-032ce57b105d\"",
  "calculate_enable": "H22_calculate_enable"
}, {
  "condition": "uid==\"cc36c170-a62b-4d58-a53d-df4e8b628809\"",
  "calculate_enable": "H23_calculate_enable"
}, {
  "condition": "uid==\"7117c79a-b3b9-450a-8b82-fbbf3af271da\"",
  "calculate_enable": "H24_calculate_enable"
}, {
  "condition": "uid==\"fe5e3396-9059-417c-88d7-4aa6448c641e\"",
  "calculate_enable": "H25_calculate_enable"
}, {
  "condition": "uid==\"ee8daff2-5a52-443d-bfb3-6b9786b91894\"",
  "calculate_enable": "H26_calculate_enable"
}, {
  "condition": "uid==\"e2c4cf74-1dc8-4b34-8822-48fe1cb4cb1c\"",
  "calculate_enable": "H27_calculate_enable"
}, {
  "condition": "uid==\"b15bb406-e07f-41ef-9994-9d94acbad115\"",
  "calculate_enable": "H28_H_calculate_enable"
}, {
  "condition": "uid==\"7a7fe618-214c-477d-bcae-1fd003fd47a0\"",
  "calculate_enable": "H28_M_calculate_enable"
}, {
  "condition": "uid==\"18fe049d-76ee-40f9-b0a9-00a47f2e1fd3\"",
  "calculate_enable": "H28_L_calculate_enable"
}, {
  "condition": "uid==\"4f1e3458-8f71-4544-ad28-368a35bf55d2\"",
  "calculate_enable": "H29_calculate_enable"
}, {
  "condition": "uid==\"151f37ea-b0cf-4d33-8c23-8ecf8a4950dd\"",
  "calculate_enable": "H31_calculate_enable"
}, {
  "condition": "uid==\"b479cee0-f702-462c-afcc-dde60e1dae26\"",
  "calculate_enable": "H33_calculate_enable"
}, {
  "condition": "uid==\"38d25e5f-37c9-472d-9a91-ddb7ae0229ee\"",
  "calculate_enable": "H34_calculate_enable"
}, {
  "condition": "uid==\"7a6c83a1-6668-45a8-994c-98ccc523fc85\"",
  "calculate_enable": "H35_calculate_enable"
}, {
  "condition": "uid==\"94768ab2-55bd-44e7-a66f-3bad8e7ca0cd\"",
  "calculate_enable": "H36_calculate_enable"
}, {
  "condition": "uid==\"c1ff3cdb-4b8a-4061-9c61-b9a863f9c92a\"",
  "calculate_enable": "H37_calculate_enable"
}, {
  "condition": "uid==\"a274d704-5bbd-498d-8c3b-f34d0c94a312\"",
  "calculate_enable": "H38_calculate_enable"
}, {
  "condition": "uid==\"5780ca0f-8314-4ccc-adc5-6aae77a96678\"",
  "calculate_enable": "H39_calculate_enable"
}, {
  "condition": "uid==\"2d69300e-c87b-41c9-af27-9db83c13124a\"",
  "calculate_enable": "H40_calculate_enable"
}, {
  "condition": "uid==\"be18e6c9-f444-45df-afb0-f97ba60d8021\"",
  "calculate_enable": "H41_calculate_enable"
}, {
  "condition": "uid==\"75ba66df-ed3f-41ae-9a8f-67986595172c\"",
  "calculate_enable": "H42_calculate_enable"
}, {
  "condition": "uid==\"500deff6-cd87-44fb-86e6-c1fc418afb30\"",
  "calculate_enable": "H43_calculate_enable"
}, {
  "condition": "uid==\"dfaa38e4-b56e-408f-8eeb-cf62044ad4e5\"",
  "calculate_enable": "H44_calculate_enable"
}, {
  "condition": "uid==\"b6f29c99-45ab-45f6-a96d-35043e596ebf\"",
  "calculate_enable": "H45_calculate_enable"
}, {
  "condition": "uid==\"f4f44852-3895-4138-a860-fadf602486b7\"",
  "calculate_enable": "H46_calculate_enable"
}, {
  "condition": "uid==\"6e704d46-8f69-4a08-a2e9-54878ac543e9\"",
  "calculate_enable": "H47_calculate_enable"
}, {
  "condition": "uid==\"f0468692-ae50-44a0-a0c5-3f6aec9d7f27\"",
  "calculate_enable": "H48_calculate_enable"
}, {
  "condition": "uid==\"324f589d-f646-446b-98c2-c2aca2ee97fc\"",
  "calculate_enable": "H49_calculate_enable"
}, {
  "condition": "uid==\"32ee3f1b-8bdb-4ee5-87c0-a8c8c081e31b\"",
  "calculate_enable": "H50_calculate_enable"
}, {
  "condition": "uid==\"9dee2c27-b1c6-4950-ba24-d9408fa50366\"",
  "calculate_enable": "H51_calculate_enable"
}, {
  "condition": "uid==\"f7cd7edf-3513-445e-b072-6688f22889f0\"",
  "calculate_enable": "H52_calculate_enable"
}, {
  "condition": "uid==\"ec327a73-703f-4b7d-a4db-b9dc7d7a007c\"",
  "calculate_enable": "H53_H_calculate_enable"
}, {
  "condition": "uid==\"7c991498-0bbe-44ea-8462-86ad11cccd61\"",
  "calculate_enable": "H53_L_calculate_enable"
}, {
  "condition": "uid==\"88a89d45-0831-4c06-81ae-9033440f9e0d\"",
  "calculate_enable": "H54_calculate_enable"
}, {
  "condition": "uid==\"4ffcdaed-d332-498d-8309-e0a26341ca46\"",
  "calculate_enable": "H55_calculate_enable"
}, {
  "condition": "uid==\"4fdfa4cf-3d74-47a7-a327-d90976e19af9\"",
  "calculate_enable": "H56_calculate_enable"
}, {
  "condition": "uid==\"dc3f2349-6bbc-4161-ac54-89de73ba2999\"",
  "calculate_enable": "H57_calculate_enable"
}, {
  "condition": "uid==\"9f34e840-dd46-4ba8-83c2-22f0a9df2205\"",
  "calculate_enable": "H58_calculate_enable"
}, {
  "condition": "uid==\"80c1ed83-8d91-42e9-bfa7-97ab229587c3\"",
  "calculate_enable": "H59_calculate_enable"
}, {
  "condition": "uid==\"0054fd1f-7df7-4c0f-b788-40bae223920c\"",
  "calculate_enable": "H60_calculate_enable"
}, {
  "condition": "uid==\"19ed6586-2e9b-47c6-bb36-76c1fa54d4e3\"",
  "calculate_enable": "H61_calculate_enable"
}, {
  "condition": "uid==\"8f8ba1df-0fc1-42ac-aa10-f874f9d168eb\"",
  "calculate_enable": "H62_calculate_enable"
}, {
  "condition": "uid==\"08f2ed60-4b7e-4a3d-acb4-e4ea62c4c2d2\"",
  "calculate_enable": "H63_calculate_enable"
}, {
  "condition": "uid==\"fb8877c7-ec5c-46d2-91af-dde97eb81ef2\"",
  "calculate_enable": "H64_calculate_enable"
}, {
  "condition": "uid==\"246fa455-8dcc-4cbe-8286-26439feb7d7a\"",
  "calculate_enable": "H65_calculate_enable"
}, {
  "condition": "uid==\"13565321-edf0-4c73-a6fd-b96db89be16f\"",
  "calculate_enable": "H66_calculate_enable"
}, {
  "condition": "uid==\"92d56709-b24e-4bcd-87a8-d21224221cf7\"",
  "calculate_enable": "H67_calculate_enable"
}, {
  "condition": "uid==\"3b4ec881-6dfa-496c-80c0-d614d40fb4c7\"",
  "calculate_enable": "H68_calculate_enable"
}, {
  "condition": "uid==\"2929b3ad-9170-45be-bc14-77ad3f0d656b\"",
  "calculate_enable": "H69_calculate_enable"
}, {
  "condition": "uid==\"05a5d05e-fc3d-4557-afba-dceffc0bb5f1\"",
  "calculate_enable": "H70_calculate_enable"
}, {
  "condition": "uid==\"bdaa7ce8-d145-470e-a3ac-d9f7f1cf1033\"",
  "calculate_enable": "H71_calculate_enable"
}, {
  "condition": "uid==\"33bbc8b8-e2d3-4e42-807d-ea8513621642\"",
  "calculate_enable": "H72_calculate_enable"
}, {
  "condition": "uid==\"e8c17621-8906-451c-b196-26e4cfe5fe0f\"",
  "calculate_enable": "H73_calculate_enable"
}, {
  "condition": "uid==\"b986e515-d4d5-48f4-b67b-a39fea6fd9f2\"",
  "calculate_enable": "H74_calculate_enable"
}, {
  "condition": "uid==\"939e2f11-92b3-4a3a-81aa-39b8078500fd\"",
  "calculate_enable": "H75_calculate_enable"
}, {
  "condition": "uid==\"6b2a0c3a-30db-4886-a8da-65c0753aa30a\"",
  "calculate_enable": "H76_calculate_enable"
}, {
  "condition": "uid==\"52cecd73-bf64-4efd-95bf-e1f22362fc3b\"",
  "calculate_enable": "H77_calculate_enable"
}, {
  "condition": "uid==\"b113143c-8e53-459e-a533-06dcb55df3fc\"",
  "calculate_enable": "H78_calculate_enable"
}, {
  "condition": "uid==\"addf3e51-f873-41cf-b6db-7e7122f4b3b9\"",
  "calculate_enable": "H79_calculate_enable"
}, {
  "condition": "uid==\"d11c3995-9c4e-4723-8056-9c66bc0faeb0\"",
  "calculate_enable": "H80_calculate_enable"
}, {
  "condition": "uid==\"8f6e3431-e8e1-44c3-945e-da4915cefe73\"",
  "calculate_enable": "H81_calculate_enable"
}, {
  "condition": "uid==\"7cb048be-f7c5-4555-8718-5b23b02b0333\"",
  "calculate_enable": "H82_calculate_enable"
}, {
  "condition": "uid==\"296bd631-fb9d-49ec-a8e8-e93139f0c713\"",
  "calculate_enable": "H83_calculate_enable"
}, {
  "condition": "uid==\"73826f02-776d-4267-83ef-0fa34464b19d\"",
  "calculate_enable": "H84_calculate_enable"
}, {
  "condition": "uid==\"3249afaf-82a1-459c-919b-dbc4a995cb4b\"",
  "calculate_enable": "H85_H_calculate_enable"
}, {
  "condition": "uid==\"f28b5a31-2e15-4d36-a7e2-6d5aaf3a0159\"",
  "calculate_enable": "H85_L_calculate_enable"
}, {
  "condition": "uid==\"74324b6a-cabe-4b37-886b-59e1874fb764\"",
  "calculate_enable": "H86_calculate_enable"
}, {
  "condition": "uid==\"408e509b-e95f-4f60-9f81-b18cb421f58d\"",
  "calculate_enable": "H87_H_calculate_enable"
}, {
  "condition": "uid==\"424f2b3c-3602-4907-ac6a-5718f600e61d\"",
  "calculate_enable": "H88_calculate_enable"
}, {
  "condition": "uid==\"3301c33a-5fb6-48a1-bb18-5a2421aaacea\"",
  "calculate_enable": "H90_calculate_enable"
}, {
  "condition": "uid==\"a66fe5ad-7556-46b9-84c9-f2283977379a\"",
  "calculate_enable": "H91_calculate_enable"
}, {
  "condition": "uid==\"f6830324-db08-4d18-87b6-17142a9ba261\"",
  "calculate_enable": "H92_calculate_enable"
}, {
  "condition": "uid==\"d215d902-db94-4e6b-b1d2-76924f8585d1\"",
  "calculate_enable": "H93_calculate_enable"
}, {
  "condition": "uid==\"6b82ff48-f998-4df8-96e9-04f4a04593d2\"",
  "calculate_enable": "H94_calculate_enable"
}, {
  "condition": "uid==\"207d8659-160e-471f-b8bc-5068863873ec\"",
  "calculate_enable": "H95_calculate_enable"
}, {
  "condition": "uid==\"3f6370d5-66c0-40f0-b054-96833ad57867\"",
  "calculate_enable": "H96_calculate_enable"
}, {
  "condition": "uid==\"bce82b14-4ba0-4dfd-9c3a-42e8d841b047\"",
  "calculate_enable": "H97_calculate_enable"
}, {
  "condition": "uid==\"b2bbbdd5-90d3-46c6-8574-623c5c528929\"",
  "calculate_enable": "H98_calculate_enable"
}, {
  "condition": "uid==\"3e46a853-928f-49ac-9d0a-171ef1646384\"",
  "calculate_enable": "H100_calculate_enable"
}, {
  "condition": "uid==\"d898574b-ca0f-48ff-8404-2a17171787d4\"",
  "calculate_enable": "H101_calculate_enable"
}, {
  "condition": "uid==\"8e4278f8-5626-4f47-b428-8ae4fe4181cf\"",
  "calculate_enable": "H102_calculate_enable"
}, {
  "condition": "uid==\"145df8f3-0fe9-43d0-9fec-0ee6e71e8e6d\"",
  "calculate_enable": "H103_calculate_enable"
}, {
  "condition": "uid==\"7a234a72-758d-480e-aa00-aa4b09a22977\"",
  "calculate_enable": "H104_calculate_enable"
}, {
  "condition": "uid==\"cf430d2b-9f6a-4f5e-89d4-9d5abbc9536b\"",
  "calculate_enable": "H105_calculate_enable"
}, {
  "condition": "uid==\"27ed4d57-bd91-4a14-bf09-d2ac328730f4\"",
  "calculate_enable": "H106_calculate_enable"
}, {
  "condition": "uid==\"fc32a6bf-4147-4555-b0b3-d9ade7814645\"",
  "calculate_enable": "H107_calculate_enable"
}, {
  "condition": "uid==\"2744cee8-9b13-4c7b-947f-e72b2e54547f\"",
  "calculate_enable": "H108_calculate_enable"
}, {"condition": "uid==\"3a319a8b-754f-4449-b17e-1d92c0c9b2b7\"", "calculate_enable": "H109_calculate_enable"}]


let res = []

// "startTime": 1607934140000,
// "endTime": 1607934150000


data.forEach(item => {
  let uid = item.condition.slice(6,-1)
  res.push({
    "query": "select workMode_rank,uid from smart_data where uid = \"sd_" + uid + "\" limit 1",
    "arguments": {
      "engine": "tsdb",
      "startTime": 1609312800000,
      "endTime": 1609312860000
    }
  })
})
console.log(JSON.stringify(res))

let ress = [
  {
    "dataModel": null,
    "data": {}
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        72,
        62,
        74,
        70,
        60,
        52
      ],
      "uid": [
        "sd_b42529ad-1e38-44ba-a970-2dffaac0e989",
        "sd_b42529ad-1e38-44ba-a970-2dffaac0e989",
        "sd_b42529ad-1e38-44ba-a970-2dffaac0e989",
        "sd_b42529ad-1e38-44ba-a970-2dffaac0e989",
        "sd_b42529ad-1e38-44ba-a970-2dffaac0e989",
        "sd_b42529ad-1e38-44ba-a970-2dffaac0e989"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        13,
        13,
        7,
        7,
        108,
        108
      ],
      "uid": [
        "sd_266cf4b6-4028-4b75-9d48-251aa1ed811f",
        "sd_266cf4b6-4028-4b75-9d48-251aa1ed811f",
        "sd_266cf4b6-4028-4b75-9d48-251aa1ed811f",
        "sd_266cf4b6-4028-4b75-9d48-251aa1ed811f",
        "sd_266cf4b6-4028-4b75-9d48-251aa1ed811f",
        "sd_266cf4b6-4028-4b75-9d48-251aa1ed811f"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        91,
        74,
        76,
        82,
        76,
        67
      ],
      "uid": [
        "sd_a3a6ca91-913c-45ac-bd3e-71fbb3c6c402",
        "sd_a3a6ca91-913c-45ac-bd3e-71fbb3c6c402",
        "sd_a3a6ca91-913c-45ac-bd3e-71fbb3c6c402",
        "sd_a3a6ca91-913c-45ac-bd3e-71fbb3c6c402",
        "sd_a3a6ca91-913c-45ac-bd3e-71fbb3c6c402",
        "sd_a3a6ca91-913c-45ac-bd3e-71fbb3c6c402"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        86,
        72,
        75,
        80,
        72,
        64
      ],
      "uid": [
        "sd_f30b9873-3cc4-4de2-afd7-20938b2e05fd",
        "sd_f30b9873-3cc4-4de2-afd7-20938b2e05fd",
        "sd_f30b9873-3cc4-4de2-afd7-20938b2e05fd",
        "sd_f30b9873-3cc4-4de2-afd7-20938b2e05fd",
        "sd_f30b9873-3cc4-4de2-afd7-20938b2e05fd",
        "sd_f30b9873-3cc4-4de2-afd7-20938b2e05fd"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        54,
        47,
        42,
        57,
        44,
        36
      ],
      "uid": [
        "sd_4ae724d3-c0cb-46b3-9c50-9ac9c08b3a1d",
        "sd_4ae724d3-c0cb-46b3-9c50-9ac9c08b3a1d",
        "sd_4ae724d3-c0cb-46b3-9c50-9ac9c08b3a1d",
        "sd_4ae724d3-c0cb-46b3-9c50-9ac9c08b3a1d",
        "sd_4ae724d3-c0cb-46b3-9c50-9ac9c08b3a1d",
        "sd_4ae724d3-c0cb-46b3-9c50-9ac9c08b3a1d"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        68,
        60,
        54,
        68,
        57,
        49
      ],
      "uid": [
        "sd_ce01bdbc-5e43-44b7-b6fc-2576732455d2",
        "sd_ce01bdbc-5e43-44b7-b6fc-2576732455d2",
        "sd_ce01bdbc-5e43-44b7-b6fc-2576732455d2",
        "sd_ce01bdbc-5e43-44b7-b6fc-2576732455d2",
        "sd_ce01bdbc-5e43-44b7-b6fc-2576732455d2",
        "sd_ce01bdbc-5e43-44b7-b6fc-2576732455d2"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        67,
        59,
        53,
        67,
        56,
        48
      ],
      "uid": [
        "sd_73b46daf-d42d-48c3-9488-2cee279fec41",
        "sd_73b46daf-d42d-48c3-9488-2cee279fec41",
        "sd_73b46daf-d42d-48c3-9488-2cee279fec41",
        "sd_73b46daf-d42d-48c3-9488-2cee279fec41",
        "sd_73b46daf-d42d-48c3-9488-2cee279fec41",
        "sd_73b46daf-d42d-48c3-9488-2cee279fec41"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        64,
        56,
        50,
        64,
        53,
        45
      ],
      "uid": [
        "sd_46104474-a8e5-4b32-b69f-f8758774b784",
        "sd_46104474-a8e5-4b32-b69f-f8758774b784",
        "sd_46104474-a8e5-4b32-b69f-f8758774b784",
        "sd_46104474-a8e5-4b32-b69f-f8758774b784",
        "sd_46104474-a8e5-4b32-b69f-f8758774b784",
        "sd_46104474-a8e5-4b32-b69f-f8758774b784"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        63,
        55,
        49,
        63,
        52,
        44
      ],
      "uid": [
        "sd_409e2b31-8d6d-4733-8004-6089a5dda855",
        "sd_409e2b31-8d6d-4733-8004-6089a5dda855",
        "sd_409e2b31-8d6d-4733-8004-6089a5dda855",
        "sd_409e2b31-8d6d-4733-8004-6089a5dda855",
        "sd_409e2b31-8d6d-4733-8004-6089a5dda855",
        "sd_409e2b31-8d6d-4733-8004-6089a5dda855"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        53,
        46,
        41,
        56,
        43,
        35
      ],
      "uid": [
        "sd_4d94f835-7c59-4ad0-a39d-2a90f1f80d79",
        "sd_4d94f835-7c59-4ad0-a39d-2a90f1f80d79",
        "sd_4d94f835-7c59-4ad0-a39d-2a90f1f80d79",
        "sd_4d94f835-7c59-4ad0-a39d-2a90f1f80d79",
        "sd_4d94f835-7c59-4ad0-a39d-2a90f1f80d79",
        "sd_4d94f835-7c59-4ad0-a39d-2a90f1f80d79"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        65,
        57,
        51,
        65,
        54,
        46
      ],
      "uid": [
        "sd_ac0d9010-bba2-4d53-91b3-029ae5207345",
        "sd_ac0d9010-bba2-4d53-91b3-029ae5207345",
        "sd_ac0d9010-bba2-4d53-91b3-029ae5207345",
        "sd_ac0d9010-bba2-4d53-91b3-029ae5207345",
        "sd_ac0d9010-bba2-4d53-91b3-029ae5207345",
        "sd_ac0d9010-bba2-4d53-91b3-029ae5207345"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        76,
        66,
        59,
        74,
        64,
        56
      ],
      "uid": [
        "sd_ab7885ae-099d-4b00-a3ae-19897462f77a",
        "sd_ab7885ae-099d-4b00-a3ae-19897462f77a",
        "sd_ab7885ae-099d-4b00-a3ae-19897462f77a",
        "sd_ab7885ae-099d-4b00-a3ae-19897462f77a",
        "sd_ab7885ae-099d-4b00-a3ae-19897462f77a",
        "sd_ab7885ae-099d-4b00-a3ae-19897462f77a"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        95,
        77,
        68,
        85,
        79,
        71
      ],
      "uid": [
        "sd_e1f35436-a1ae-41d0-bd29-b893afd318f2",
        "sd_e1f35436-a1ae-41d0-bd29-b893afd318f2",
        "sd_e1f35436-a1ae-41d0-bd29-b893afd318f2",
        "sd_e1f35436-a1ae-41d0-bd29-b893afd318f2",
        "sd_e1f35436-a1ae-41d0-bd29-b893afd318f2",
        "sd_e1f35436-a1ae-41d0-bd29-b893afd318f2"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        79,
        69,
        62,
        77,
        67,
        59
      ],
      "uid": [
        "sd_096715ab-702c-44b1-8989-0317178c48f1",
        "sd_096715ab-702c-44b1-8989-0317178c48f1",
        "sd_096715ab-702c-44b1-8989-0317178c48f1",
        "sd_096715ab-702c-44b1-8989-0317178c48f1",
        "sd_096715ab-702c-44b1-8989-0317178c48f1",
        "sd_096715ab-702c-44b1-8989-0317178c48f1"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        75,
        65,
        58,
        73,
        63,
        55
      ],
      "uid": [
        "sd_747ed9de-4caa-494e-aa1d-8008d501f8e0",
        "sd_747ed9de-4caa-494e-aa1d-8008d501f8e0",
        "sd_747ed9de-4caa-494e-aa1d-8008d501f8e0",
        "sd_747ed9de-4caa-494e-aa1d-8008d501f8e0",
        "sd_747ed9de-4caa-494e-aa1d-8008d501f8e0",
        "sd_747ed9de-4caa-494e-aa1d-8008d501f8e0"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        57,
        50,
        44,
        58,
        46,
        38
      ],
      "uid": [
        "sd_ef1757e3-06cd-43b1-8cc3-d088b50065e7",
        "sd_ef1757e3-06cd-43b1-8cc3-d088b50065e7",
        "sd_ef1757e3-06cd-43b1-8cc3-d088b50065e7",
        "sd_ef1757e3-06cd-43b1-8cc3-d088b50065e7",
        "sd_ef1757e3-06cd-43b1-8cc3-d088b50065e7",
        "sd_ef1757e3-06cd-43b1-8cc3-d088b50065e7"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        83,
        71,
        64,
        79,
        70,
        62
      ],
      "uid": [
        "sd_0a3e11a5-dca8-461f-b168-7ca7c2aa3122",
        "sd_0a3e11a5-dca8-461f-b168-7ca7c2aa3122",
        "sd_0a3e11a5-dca8-461f-b168-7ca7c2aa3122",
        "sd_0a3e11a5-dca8-461f-b168-7ca7c2aa3122",
        "sd_0a3e11a5-dca8-461f-b168-7ca7c2aa3122",
        "sd_0a3e11a5-dca8-461f-b168-7ca7c2aa3122"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        92,
        75,
        66,
        83,
        77,
        68
      ],
      "uid": [
        "sd_441aabd9-43a9-4395-b596-f94ee371c9a5",
        "sd_441aabd9-43a9-4395-b596-f94ee371c9a5",
        "sd_441aabd9-43a9-4395-b596-f94ee371c9a5",
        "sd_441aabd9-43a9-4395-b596-f94ee371c9a5",
        "sd_441aabd9-43a9-4395-b596-f94ee371c9a5",
        "sd_441aabd9-43a9-4395-b596-f94ee371c9a5"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        81,
        70,
        63,
        78,
        69,
        60
      ],
      "uid": [
        "sd_a58ad4ff-7488-44de-aeda-7056c6bb667a",
        "sd_a58ad4ff-7488-44de-aeda-7056c6bb667a",
        "sd_a58ad4ff-7488-44de-aeda-7056c6bb667a",
        "sd_a58ad4ff-7488-44de-aeda-7056c6bb667a",
        "sd_a58ad4ff-7488-44de-aeda-7056c6bb667a",
        "sd_a58ad4ff-7488-44de-aeda-7056c6bb667a"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        90,
        19,
        20,
        51,
        75,
        15
      ],
      "uid": [
        "sd_c5b9bb35-6deb-4066-b638-df1920064a40",
        "sd_c5b9bb35-6deb-4066-b638-df1920064a40",
        "sd_c5b9bb35-6deb-4066-b638-df1920064a40",
        "sd_c5b9bb35-6deb-4066-b638-df1920064a40",
        "sd_c5b9bb35-6deb-4066-b638-df1920064a40",
        "sd_c5b9bb35-6deb-4066-b638-df1920064a40"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        87,
        18,
        19,
        50,
        73,
        14
      ],
      "uid": [
        "sd_0946f809-6e40-4d0f-bd98-032ce57b105d",
        "sd_0946f809-6e40-4d0f-bd98-032ce57b105d",
        "sd_0946f809-6e40-4d0f-bd98-032ce57b105d",
        "sd_0946f809-6e40-4d0f-bd98-032ce57b105d",
        "sd_0946f809-6e40-4d0f-bd98-032ce57b105d",
        "sd_0946f809-6e40-4d0f-bd98-032ce57b105d"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        70,
        15,
        16,
        47,
        59,
        11
      ],
      "uid": [
        "sd_cc36c170-a62b-4d58-a53d-df4e8b628809",
        "sd_cc36c170-a62b-4d58-a53d-df4e8b628809",
        "sd_cc36c170-a62b-4d58-a53d-df4e8b628809",
        "sd_cc36c170-a62b-4d58-a53d-df4e8b628809",
        "sd_cc36c170-a62b-4d58-a53d-df4e8b628809",
        "sd_cc36c170-a62b-4d58-a53d-df4e8b628809"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        80,
        16,
        17,
        48,
        68,
        12
      ],
      "uid": [
        "sd_7117c79a-b3b9-450a-8b82-fbbf3af271da",
        "sd_7117c79a-b3b9-450a-8b82-fbbf3af271da",
        "sd_7117c79a-b3b9-450a-8b82-fbbf3af271da",
        "sd_7117c79a-b3b9-450a-8b82-fbbf3af271da",
        "sd_7117c79a-b3b9-450a-8b82-fbbf3af271da",
        "sd_7117c79a-b3b9-450a-8b82-fbbf3af271da"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        84,
        17,
        18,
        49,
        71,
        13
      ],
      "uid": [
        "sd_fe5e3396-9059-417c-88d7-4aa6448c641e",
        "sd_fe5e3396-9059-417c-88d7-4aa6448c641e",
        "sd_fe5e3396-9059-417c-88d7-4aa6448c641e",
        "sd_fe5e3396-9059-417c-88d7-4aa6448c641e",
        "sd_fe5e3396-9059-417c-88d7-4aa6448c641e",
        "sd_fe5e3396-9059-417c-88d7-4aa6448c641e"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        66,
        58,
        52,
        66,
        55,
        47
      ],
      "uid": [
        "sd_ee8daff2-5a52-443d-bfb3-6b9786b91894",
        "sd_ee8daff2-5a52-443d-bfb3-6b9786b91894",
        "sd_ee8daff2-5a52-443d-bfb3-6b9786b91894",
        "sd_ee8daff2-5a52-443d-bfb3-6b9786b91894",
        "sd_ee8daff2-5a52-443d-bfb3-6b9786b91894",
        "sd_ee8daff2-5a52-443d-bfb3-6b9786b91894"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        61,
        25,
        15,
        53,
        50,
        42
      ],
      "uid": [
        "sd_e2c4cf74-1dc8-4b34-8822-48fe1cb4cb1c",
        "sd_e2c4cf74-1dc8-4b34-8822-48fe1cb4cb1c",
        "sd_e2c4cf74-1dc8-4b34-8822-48fe1cb4cb1c",
        "sd_e2c4cf74-1dc8-4b34-8822-48fe1cb4cb1c",
        "sd_e2c4cf74-1dc8-4b34-8822-48fe1cb4cb1c",
        "sd_e2c4cf74-1dc8-4b34-8822-48fe1cb4cb1c"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        56,
        49,
        14,
        52,
        45,
        37
      ],
      "uid": [
        "sd_b15bb406-e07f-41ef-9994-9d94acbad115",
        "sd_b15bb406-e07f-41ef-9994-9d94acbad115",
        "sd_b15bb406-e07f-41ef-9994-9d94acbad115",
        "sd_b15bb406-e07f-41ef-9994-9d94acbad115",
        "sd_b15bb406-e07f-41ef-9994-9d94acbad115",
        "sd_b15bb406-e07f-41ef-9994-9d94acbad115"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        55,
        48,
        43,
        54,
        41,
        10
      ],
      "uid": [
        "sd_7a7fe618-214c-477d-bcae-1fd003fd47a0",
        "sd_7a7fe618-214c-477d-bcae-1fd003fd47a0",
        "sd_7a7fe618-214c-477d-bcae-1fd003fd47a0",
        "sd_7a7fe618-214c-477d-bcae-1fd003fd47a0",
        "sd_7a7fe618-214c-477d-bcae-1fd003fd47a0",
        "sd_7a7fe618-214c-477d-bcae-1fd003fd47a0"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        52,
        45,
        40,
        55,
        42,
        34
      ],
      "uid": [
        "sd_18fe049d-76ee-40f9-b0a9-00a47f2e1fd3",
        "sd_18fe049d-76ee-40f9-b0a9-00a47f2e1fd3",
        "sd_18fe049d-76ee-40f9-b0a9-00a47f2e1fd3",
        "sd_18fe049d-76ee-40f9-b0a9-00a47f2e1fd3",
        "sd_18fe049d-76ee-40f9-b0a9-00a47f2e1fd3",
        "sd_18fe049d-76ee-40f9-b0a9-00a47f2e1fd3"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        60,
        53,
        47,
        61,
        49,
        41
      ],
      "uid": [
        "sd_4f1e3458-8f71-4544-ad28-368a35bf55d2",
        "sd_4f1e3458-8f71-4544-ad28-368a35bf55d2",
        "sd_4f1e3458-8f71-4544-ad28-368a35bf55d2",
        "sd_4f1e3458-8f71-4544-ad28-368a35bf55d2",
        "sd_4f1e3458-8f71-4544-ad28-368a35bf55d2",
        "sd_4f1e3458-8f71-4544-ad28-368a35bf55d2"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        59,
        52,
        46,
        60,
        48,
        40
      ],
      "uid": [
        "sd_151f37ea-b0cf-4d33-8c23-8ecf8a4950dd",
        "sd_151f37ea-b0cf-4d33-8c23-8ecf8a4950dd",
        "sd_151f37ea-b0cf-4d33-8c23-8ecf8a4950dd",
        "sd_151f37ea-b0cf-4d33-8c23-8ecf8a4950dd",
        "sd_151f37ea-b0cf-4d33-8c23-8ecf8a4950dd",
        "sd_151f37ea-b0cf-4d33-8c23-8ecf8a4950dd"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        78,
        68,
        61,
        76,
        66,
        58
      ],
      "uid": [
        "sd_b479cee0-f702-462c-afcc-dde60e1dae26",
        "sd_b479cee0-f702-462c-afcc-dde60e1dae26",
        "sd_b479cee0-f702-462c-afcc-dde60e1dae26",
        "sd_b479cee0-f702-462c-afcc-dde60e1dae26",
        "sd_b479cee0-f702-462c-afcc-dde60e1dae26",
        "sd_b479cee0-f702-462c-afcc-dde60e1dae26"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        58,
        51,
        45,
        59,
        47,
        39
      ],
      "uid": [
        "sd_38d25e5f-37c9-472d-9a91-ddb7ae0229ee",
        "sd_38d25e5f-37c9-472d-9a91-ddb7ae0229ee",
        "sd_38d25e5f-37c9-472d-9a91-ddb7ae0229ee",
        "sd_38d25e5f-37c9-472d-9a91-ddb7ae0229ee",
        "sd_38d25e5f-37c9-472d-9a91-ddb7ae0229ee",
        "sd_38d25e5f-37c9-472d-9a91-ddb7ae0229ee"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        62,
        54,
        48,
        62,
        51,
        43
      ],
      "uid": [
        "sd_7a6c83a1-6668-45a8-994c-98ccc523fc85",
        "sd_7a6c83a1-6668-45a8-994c-98ccc523fc85",
        "sd_7a6c83a1-6668-45a8-994c-98ccc523fc85",
        "sd_7a6c83a1-6668-45a8-994c-98ccc523fc85",
        "sd_7a6c83a1-6668-45a8-994c-98ccc523fc85",
        "sd_7a6c83a1-6668-45a8-994c-98ccc523fc85"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        106,
        105,
        99,
        99,
        90,
        95
      ],
      "uid": [
        "sd_94768ab2-55bd-44e7-a66f-3bad8e7ca0cd",
        "sd_94768ab2-55bd-44e7-a66f-3bad8e7ca0cd",
        "sd_94768ab2-55bd-44e7-a66f-3bad8e7ca0cd",
        "sd_94768ab2-55bd-44e7-a66f-3bad8e7ca0cd",
        "sd_94768ab2-55bd-44e7-a66f-3bad8e7ca0cd",
        "sd_94768ab2-55bd-44e7-a66f-3bad8e7ca0cd"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        97,
        96,
        90,
        93,
        81,
        86
      ],
      "uid": [
        "sd_c1ff3cdb-4b8a-4061-9c61-b9a863f9c92a",
        "sd_c1ff3cdb-4b8a-4061-9c61-b9a863f9c92a",
        "sd_c1ff3cdb-4b8a-4061-9c61-b9a863f9c92a",
        "sd_c1ff3cdb-4b8a-4061-9c61-b9a863f9c92a",
        "sd_c1ff3cdb-4b8a-4061-9c61-b9a863f9c92a",
        "sd_c1ff3cdb-4b8a-4061-9c61-b9a863f9c92a"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        98,
        97,
        91,
        94,
        82,
        87
      ],
      "uid": [
        "sd_a274d704-5bbd-498d-8c3b-f34d0c94a312",
        "sd_a274d704-5bbd-498d-8c3b-f34d0c94a312",
        "sd_a274d704-5bbd-498d-8c3b-f34d0c94a312",
        "sd_a274d704-5bbd-498d-8c3b-f34d0c94a312",
        "sd_a274d704-5bbd-498d-8c3b-f34d0c94a312",
        "sd_a274d704-5bbd-498d-8c3b-f34d0c94a312"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        101,
        100,
        94,
        95,
        85,
        90
      ],
      "uid": [
        "sd_5780ca0f-8314-4ccc-adc5-6aae77a96678",
        "sd_5780ca0f-8314-4ccc-adc5-6aae77a96678",
        "sd_5780ca0f-8314-4ccc-adc5-6aae77a96678",
        "sd_5780ca0f-8314-4ccc-adc5-6aae77a96678",
        "sd_5780ca0f-8314-4ccc-adc5-6aae77a96678",
        "sd_5780ca0f-8314-4ccc-adc5-6aae77a96678"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        14,
        14,
        8,
        8,
        109,
        109
      ],
      "uid": [
        "sd_2d69300e-c87b-41c9-af27-9db83c13124a",
        "sd_2d69300e-c87b-41c9-af27-9db83c13124a",
        "sd_2d69300e-c87b-41c9-af27-9db83c13124a",
        "sd_2d69300e-c87b-41c9-af27-9db83c13124a",
        "sd_2d69300e-c87b-41c9-af27-9db83c13124a",
        "sd_2d69300e-c87b-41c9-af27-9db83c13124a"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        102,
        101,
        95,
        96,
        86,
        91
      ],
      "uid": [
        "sd_be18e6c9-f444-45df-afb0-f97ba60d8021",
        "sd_be18e6c9-f444-45df-afb0-f97ba60d8021",
        "sd_be18e6c9-f444-45df-afb0-f97ba60d8021",
        "sd_be18e6c9-f444-45df-afb0-f97ba60d8021",
        "sd_be18e6c9-f444-45df-afb0-f97ba60d8021",
        "sd_be18e6c9-f444-45df-afb0-f97ba60d8021"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        108,
        107,
        101,
        101,
        92,
        97
      ],
      "uid": [
        "sd_75ba66df-ed3f-41ae-9a8f-67986595172c",
        "sd_75ba66df-ed3f-41ae-9a8f-67986595172c",
        "sd_75ba66df-ed3f-41ae-9a8f-67986595172c",
        "sd_75ba66df-ed3f-41ae-9a8f-67986595172c",
        "sd_75ba66df-ed3f-41ae-9a8f-67986595172c",
        "sd_75ba66df-ed3f-41ae-9a8f-67986595172c"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        107,
        106,
        100,
        100,
        91,
        96
      ],
      "uid": [
        "sd_500deff6-cd87-44fb-86e6-c1fc418afb30",
        "sd_500deff6-cd87-44fb-86e6-c1fc418afb30",
        "sd_500deff6-cd87-44fb-86e6-c1fc418afb30",
        "sd_500deff6-cd87-44fb-86e6-c1fc418afb30",
        "sd_500deff6-cd87-44fb-86e6-c1fc418afb30",
        "sd_500deff6-cd87-44fb-86e6-c1fc418afb30"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        99,
        98,
        92,
        91,
        83,
        88
      ],
      "uid": [
        "sd_dfaa38e4-b56e-408f-8eeb-cf62044ad4e5",
        "sd_dfaa38e4-b56e-408f-8eeb-cf62044ad4e5",
        "sd_dfaa38e4-b56e-408f-8eeb-cf62044ad4e5",
        "sd_dfaa38e4-b56e-408f-8eeb-cf62044ad4e5",
        "sd_dfaa38e4-b56e-408f-8eeb-cf62044ad4e5",
        "sd_dfaa38e4-b56e-408f-8eeb-cf62044ad4e5"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        104,
        103,
        97,
        92,
        88,
        93
      ],
      "uid": [
        "sd_b6f29c99-45ab-45f6-a96d-35043e596ebf",
        "sd_b6f29c99-45ab-45f6-a96d-35043e596ebf",
        "sd_b6f29c99-45ab-45f6-a96d-35043e596ebf",
        "sd_b6f29c99-45ab-45f6-a96d-35043e596ebf",
        "sd_b6f29c99-45ab-45f6-a96d-35043e596ebf",
        "sd_b6f29c99-45ab-45f6-a96d-35043e596ebf"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        100,
        99,
        93,
        46,
        84,
        89
      ],
      "uid": [
        "sd_f4f44852-3895-4138-a860-fadf602486b7",
        "sd_f4f44852-3895-4138-a860-fadf602486b7",
        "sd_f4f44852-3895-4138-a860-fadf602486b7",
        "sd_f4f44852-3895-4138-a860-fadf602486b7",
        "sd_f4f44852-3895-4138-a860-fadf602486b7",
        "sd_f4f44852-3895-4138-a860-fadf602486b7"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        96,
        95,
        89,
        45,
        80,
        85
      ],
      "uid": [
        "sd_6e704d46-8f69-4a08-a2e9-54878ac543e9",
        "sd_6e704d46-8f69-4a08-a2e9-54878ac543e9",
        "sd_6e704d46-8f69-4a08-a2e9-54878ac543e9",
        "sd_6e704d46-8f69-4a08-a2e9-54878ac543e9",
        "sd_6e704d46-8f69-4a08-a2e9-54878ac543e9",
        "sd_6e704d46-8f69-4a08-a2e9-54878ac543e9"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        17,
        28,
        23,
        11,
        7,
        18
      ],
      "uid": [
        "sd_f0468692-ae50-44a0-a0c5-3f6aec9d7f27",
        "sd_f0468692-ae50-44a0-a0c5-3f6aec9d7f27",
        "sd_f0468692-ae50-44a0-a0c5-3f6aec9d7f27",
        "sd_f0468692-ae50-44a0-a0c5-3f6aec9d7f27",
        "sd_f0468692-ae50-44a0-a0c5-3f6aec9d7f27",
        "sd_f0468692-ae50-44a0-a0c5-3f6aec9d7f27"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        24,
        109,
        104,
        104,
        100,
        100
      ],
      "uid": [
        "sd_324f589d-f646-446b-98c2-c2aca2ee97fc",
        "sd_324f589d-f646-446b-98c2-c2aca2ee97fc",
        "sd_324f589d-f646-446b-98c2-c2aca2ee97fc",
        "sd_324f589d-f646-446b-98c2-c2aca2ee97fc",
        "sd_324f589d-f646-446b-98c2-c2aca2ee97fc",
        "sd_324f589d-f646-446b-98c2-c2aca2ee97fc"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        34,
        83,
        77,
        27,
        23,
        73
      ],
      "uid": [
        "sd_32ee3f1b-8bdb-4ee5-87c0-a8c8c081e31b",
        "sd_32ee3f1b-8bdb-4ee5-87c0-a8c8c081e31b",
        "sd_32ee3f1b-8bdb-4ee5-87c0-a8c8c081e31b",
        "sd_32ee3f1b-8bdb-4ee5-87c0-a8c8c081e31b",
        "sd_32ee3f1b-8bdb-4ee5-87c0-a8c8c081e31b",
        "sd_32ee3f1b-8bdb-4ee5-87c0-a8c8c081e31b"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        50,
        93,
        87,
        43,
        39,
        83
      ],
      "uid": [
        "sd_9dee2c27-b1c6-4950-ba24-d9408fa50366",
        "sd_9dee2c27-b1c6-4950-ba24-d9408fa50366",
        "sd_9dee2c27-b1c6-4950-ba24-d9408fa50366",
        "sd_9dee2c27-b1c6-4950-ba24-d9408fa50366",
        "sd_9dee2c27-b1c6-4950-ba24-d9408fa50366",
        "sd_9dee2c27-b1c6-4950-ba24-d9408fa50366"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        46,
        89,
        83,
        39,
        35,
        79
      ],
      "uid": [
        "sd_f7cd7edf-3513-445e-b072-6688f22889f0",
        "sd_f7cd7edf-3513-445e-b072-6688f22889f0",
        "sd_f7cd7edf-3513-445e-b072-6688f22889f0",
        "sd_f7cd7edf-3513-445e-b072-6688f22889f0",
        "sd_f7cd7edf-3513-445e-b072-6688f22889f0",
        "sd_f7cd7edf-3513-445e-b072-6688f22889f0"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        44,
        87,
        81,
        37,
        33,
        77
      ],
      "uid": [
        "sd_ec327a73-703f-4b7d-a4db-b9dc7d7a007c",
        "sd_ec327a73-703f-4b7d-a4db-b9dc7d7a007c",
        "sd_ec327a73-703f-4b7d-a4db-b9dc7d7a007c",
        "sd_ec327a73-703f-4b7d-a4db-b9dc7d7a007c",
        "sd_ec327a73-703f-4b7d-a4db-b9dc7d7a007c",
        "sd_ec327a73-703f-4b7d-a4db-b9dc7d7a007c"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        47,
        90,
        84,
        40,
        36,
        80
      ],
      "uid": [
        "sd_7c991498-0bbe-44ea-8462-86ad11cccd61",
        "sd_7c991498-0bbe-44ea-8462-86ad11cccd61",
        "sd_7c991498-0bbe-44ea-8462-86ad11cccd61",
        "sd_7c991498-0bbe-44ea-8462-86ad11cccd61",
        "sd_7c991498-0bbe-44ea-8462-86ad11cccd61",
        "sd_7c991498-0bbe-44ea-8462-86ad11cccd61"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        45,
        88,
        82,
        38,
        34,
        78
      ],
      "uid": [
        "sd_88a89d45-0831-4c06-81ae-9033440f9e0d",
        "sd_88a89d45-0831-4c06-81ae-9033440f9e0d",
        "sd_88a89d45-0831-4c06-81ae-9033440f9e0d",
        "sd_88a89d45-0831-4c06-81ae-9033440f9e0d",
        "sd_88a89d45-0831-4c06-81ae-9033440f9e0d",
        "sd_88a89d45-0831-4c06-81ae-9033440f9e0d"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        37,
        84,
        78,
        30,
        26,
        74
      ],
      "uid": [
        "sd_4ffcdaed-d332-498d-8309-e0a26341ca46",
        "sd_4ffcdaed-d332-498d-8309-e0a26341ca46",
        "sd_4ffcdaed-d332-498d-8309-e0a26341ca46",
        "sd_4ffcdaed-d332-498d-8309-e0a26341ca46",
        "sd_4ffcdaed-d332-498d-8309-e0a26341ca46",
        "sd_4ffcdaed-d332-498d-8309-e0a26341ca46"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        38,
        85,
        79,
        31,
        27,
        75
      ],
      "uid": [
        "sd_4fdfa4cf-3d74-47a7-a327-d90976e19af9",
        "sd_4fdfa4cf-3d74-47a7-a327-d90976e19af9",
        "sd_4fdfa4cf-3d74-47a7-a327-d90976e19af9",
        "sd_4fdfa4cf-3d74-47a7-a327-d90976e19af9",
        "sd_4fdfa4cf-3d74-47a7-a327-d90976e19af9",
        "sd_4fdfa4cf-3d74-47a7-a327-d90976e19af9"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        51,
        94,
        88,
        44,
        40,
        84
      ],
      "uid": [
        "sd_dc3f2349-6bbc-4161-ac54-89de73ba2999",
        "sd_dc3f2349-6bbc-4161-ac54-89de73ba2999",
        "sd_dc3f2349-6bbc-4161-ac54-89de73ba2999",
        "sd_dc3f2349-6bbc-4161-ac54-89de73ba2999",
        "sd_dc3f2349-6bbc-4161-ac54-89de73ba2999",
        "sd_dc3f2349-6bbc-4161-ac54-89de73ba2999"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        49,
        92,
        86,
        42,
        38,
        82
      ],
      "uid": [
        "sd_9f34e840-dd46-4ba8-83c2-22f0a9df2205",
        "sd_9f34e840-dd46-4ba8-83c2-22f0a9df2205",
        "sd_9f34e840-dd46-4ba8-83c2-22f0a9df2205",
        "sd_9f34e840-dd46-4ba8-83c2-22f0a9df2205",
        "sd_9f34e840-dd46-4ba8-83c2-22f0a9df2205",
        "sd_9f34e840-dd46-4ba8-83c2-22f0a9df2205"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        48,
        91,
        85,
        41,
        37,
        81
      ],
      "uid": [
        "sd_80c1ed83-8d91-42e9-bfa7-97ab229587c3",
        "sd_80c1ed83-8d91-42e9-bfa7-97ab229587c3",
        "sd_80c1ed83-8d91-42e9-bfa7-97ab229587c3",
        "sd_80c1ed83-8d91-42e9-bfa7-97ab229587c3",
        "sd_80c1ed83-8d91-42e9-bfa7-97ab229587c3",
        "sd_80c1ed83-8d91-42e9-bfa7-97ab229587c3"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        39,
        86,
        80,
        32,
        28,
        76
      ],
      "uid": [
        "sd_0054fd1f-7df7-4c0f-b788-40bae223920c",
        "sd_0054fd1f-7df7-4c0f-b788-40bae223920c",
        "sd_0054fd1f-7df7-4c0f-b788-40bae223920c",
        "sd_0054fd1f-7df7-4c0f-b788-40bae223920c",
        "sd_0054fd1f-7df7-4c0f-b788-40bae223920c",
        "sd_0054fd1f-7df7-4c0f-b788-40bae223920c"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        6,
        6,
        105,
        105,
        101,
        101
      ],
      "uid": [
        "sd_19ed6586-2e9b-47c6-bb36-76c1fa54d4e3",
        "sd_19ed6586-2e9b-47c6-bb36-76c1fa54d4e3",
        "sd_19ed6586-2e9b-47c6-bb36-76c1fa54d4e3",
        "sd_19ed6586-2e9b-47c6-bb36-76c1fa54d4e3",
        "sd_19ed6586-2e9b-47c6-bb36-76c1fa54d4e3",
        "sd_19ed6586-2e9b-47c6-bb36-76c1fa54d4e3"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        28,
        36,
        31,
        21,
        17,
        25
      ],
      "uid": [
        "sd_8f8ba1df-0fc1-42ac-aa10-f874f9d168eb",
        "sd_8f8ba1df-0fc1-42ac-aa10-f874f9d168eb",
        "sd_8f8ba1df-0fc1-42ac-aa10-f874f9d168eb",
        "sd_8f8ba1df-0fc1-42ac-aa10-f874f9d168eb",
        "sd_8f8ba1df-0fc1-42ac-aa10-f874f9d168eb",
        "sd_8f8ba1df-0fc1-42ac-aa10-f874f9d168eb"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        26,
        35,
        30,
        19,
        15,
        24
      ],
      "uid": [
        "sd_08f2ed60-4b7e-4a3d-acb4-e4ea62c4c2d2",
        "sd_08f2ed60-4b7e-4a3d-acb4-e4ea62c4c2d2",
        "sd_08f2ed60-4b7e-4a3d-acb4-e4ea62c4c2d2",
        "sd_08f2ed60-4b7e-4a3d-acb4-e4ea62c4c2d2",
        "sd_08f2ed60-4b7e-4a3d-acb4-e4ea62c4c2d2",
        "sd_08f2ed60-4b7e-4a3d-acb4-e4ea62c4c2d2"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        29,
        37,
        32,
        22,
        18,
        26
      ],
      "uid": [
        "sd_fb8877c7-ec5c-46d2-91af-dde97eb81ef2",
        "sd_fb8877c7-ec5c-46d2-91af-dde97eb81ef2",
        "sd_fb8877c7-ec5c-46d2-91af-dde97eb81ef2",
        "sd_fb8877c7-ec5c-46d2-91af-dde97eb81ef2",
        "sd_fb8877c7-ec5c-46d2-91af-dde97eb81ef2",
        "sd_fb8877c7-ec5c-46d2-91af-dde97eb81ef2"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        8,
        8,
        107,
        107,
        103,
        103
      ],
      "uid": [
        "sd_246fa455-8dcc-4cbe-8286-26439feb7d7a",
        "sd_246fa455-8dcc-4cbe-8286-26439feb7d7a",
        "sd_246fa455-8dcc-4cbe-8286-26439feb7d7a",
        "sd_246fa455-8dcc-4cbe-8286-26439feb7d7a",
        "sd_246fa455-8dcc-4cbe-8286-26439feb7d7a",
        "sd_246fa455-8dcc-4cbe-8286-26439feb7d7a"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": null,
    "data": {}
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        31,
        39,
        34,
        24,
        20,
        28
      ],
      "uid": [
        "sd_92d56709-b24e-4bcd-87a8-d21224221cf7",
        "sd_92d56709-b24e-4bcd-87a8-d21224221cf7",
        "sd_92d56709-b24e-4bcd-87a8-d21224221cf7",
        "sd_92d56709-b24e-4bcd-87a8-d21224221cf7",
        "sd_92d56709-b24e-4bcd-87a8-d21224221cf7",
        "sd_92d56709-b24e-4bcd-87a8-d21224221cf7"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        43,
        44,
        39,
        36,
        32,
        33
      ],
      "uid": [
        "sd_3b4ec881-6dfa-496c-80c0-d614d40fb4c7",
        "sd_3b4ec881-6dfa-496c-80c0-d614d40fb4c7",
        "sd_3b4ec881-6dfa-496c-80c0-d614d40fb4c7",
        "sd_3b4ec881-6dfa-496c-80c0-d614d40fb4c7",
        "sd_3b4ec881-6dfa-496c-80c0-d614d40fb4c7",
        "sd_3b4ec881-6dfa-496c-80c0-d614d40fb4c7"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        11,
        11,
        5,
        5,
        106,
        106
      ],
      "uid": [
        "sd_2929b3ad-9170-45be-bc14-77ad3f0d656b",
        "sd_2929b3ad-9170-45be-bc14-77ad3f0d656b",
        "sd_2929b3ad-9170-45be-bc14-77ad3f0d656b",
        "sd_2929b3ad-9170-45be-bc14-77ad3f0d656b",
        "sd_2929b3ad-9170-45be-bc14-77ad3f0d656b",
        "sd_2929b3ad-9170-45be-bc14-77ad3f0d656b"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        42,
        43,
        38,
        35,
        31,
        32
      ],
      "uid": [
        "sd_05a5d05e-fc3d-4557-afba-dceffc0bb5f1",
        "sd_05a5d05e-fc3d-4557-afba-dceffc0bb5f1",
        "sd_05a5d05e-fc3d-4557-afba-dceffc0bb5f1",
        "sd_05a5d05e-fc3d-4557-afba-dceffc0bb5f1",
        "sd_05a5d05e-fc3d-4557-afba-dceffc0bb5f1",
        "sd_05a5d05e-fc3d-4557-afba-dceffc0bb5f1"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        41,
        42,
        37,
        34,
        30,
        31
      ],
      "uid": [
        "sd_bdaa7ce8-d145-470e-a3ac-d9f7f1cf1033",
        "sd_bdaa7ce8-d145-470e-a3ac-d9f7f1cf1033",
        "sd_bdaa7ce8-d145-470e-a3ac-d9f7f1cf1033",
        "sd_bdaa7ce8-d145-470e-a3ac-d9f7f1cf1033",
        "sd_bdaa7ce8-d145-470e-a3ac-d9f7f1cf1033",
        "sd_bdaa7ce8-d145-470e-a3ac-d9f7f1cf1033"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        40,
        41,
        36,
        33,
        29,
        30
      ],
      "uid": [
        "sd_33bbc8b8-e2d3-4e42-807d-ea8513621642",
        "sd_33bbc8b8-e2d3-4e42-807d-ea8513621642",
        "sd_33bbc8b8-e2d3-4e42-807d-ea8513621642",
        "sd_33bbc8b8-e2d3-4e42-807d-ea8513621642",
        "sd_33bbc8b8-e2d3-4e42-807d-ea8513621642",
        "sd_33bbc8b8-e2d3-4e42-807d-ea8513621642"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        16,
        27,
        22,
        10,
        6,
        17
      ],
      "uid": [
        "sd_e8c17621-8906-451c-b196-26e4cfe5fe0f",
        "sd_e8c17621-8906-451c-b196-26e4cfe5fe0f",
        "sd_e8c17621-8906-451c-b196-26e4cfe5fe0f",
        "sd_e8c17621-8906-451c-b196-26e4cfe5fe0f",
        "sd_e8c17621-8906-451c-b196-26e4cfe5fe0f",
        "sd_e8c17621-8906-451c-b196-26e4cfe5fe0f"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        23,
        34,
        29,
        17,
        13,
        23
      ],
      "uid": [
        "sd_b986e515-d4d5-48f4-b67b-a39fea6fd9f2",
        "sd_b986e515-d4d5-48f4-b67b-a39fea6fd9f2",
        "sd_b986e515-d4d5-48f4-b67b-a39fea6fd9f2",
        "sd_b986e515-d4d5-48f4-b67b-a39fea6fd9f2",
        "sd_b986e515-d4d5-48f4-b67b-a39fea6fd9f2",
        "sd_b986e515-d4d5-48f4-b67b-a39fea6fd9f2"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        20,
        31,
        26,
        14,
        10,
        20
      ],
      "uid": [
        "sd_939e2f11-92b3-4a3a-81aa-39b8078500fd",
        "sd_939e2f11-92b3-4a3a-81aa-39b8078500fd",
        "sd_939e2f11-92b3-4a3a-81aa-39b8078500fd",
        "sd_939e2f11-92b3-4a3a-81aa-39b8078500fd",
        "sd_939e2f11-92b3-4a3a-81aa-39b8078500fd",
        "sd_939e2f11-92b3-4a3a-81aa-39b8078500fd"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        21,
        32,
        27,
        15,
        11,
        21
      ],
      "uid": [
        "sd_6b2a0c3a-30db-4886-a8da-65c0753aa30a",
        "sd_6b2a0c3a-30db-4886-a8da-65c0753aa30a",
        "sd_6b2a0c3a-30db-4886-a8da-65c0753aa30a",
        "sd_6b2a0c3a-30db-4886-a8da-65c0753aa30a",
        "sd_6b2a0c3a-30db-4886-a8da-65c0753aa30a",
        "sd_6b2a0c3a-30db-4886-a8da-65c0753aa30a"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        19,
        30,
        25,
        13,
        9,
        19
      ],
      "uid": [
        "sd_52cecd73-bf64-4efd-95bf-e1f22362fc3b",
        "sd_52cecd73-bf64-4efd-95bf-e1f22362fc3b",
        "sd_52cecd73-bf64-4efd-95bf-e1f22362fc3b",
        "sd_52cecd73-bf64-4efd-95bf-e1f22362fc3b",
        "sd_52cecd73-bf64-4efd-95bf-e1f22362fc3b",
        "sd_52cecd73-bf64-4efd-95bf-e1f22362fc3b"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": null,
    "data": {}
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        30,
        38,
        33,
        23,
        19,
        27
      ],
      "uid": [
        "sd_addf3e51-f873-41cf-b6db-7e7122f4b3b9",
        "sd_addf3e51-f873-41cf-b6db-7e7122f4b3b9",
        "sd_addf3e51-f873-41cf-b6db-7e7122f4b3b9",
        "sd_addf3e51-f873-41cf-b6db-7e7122f4b3b9",
        "sd_addf3e51-f873-41cf-b6db-7e7122f4b3b9",
        "sd_addf3e51-f873-41cf-b6db-7e7122f4b3b9"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        32,
        40,
        35,
        25,
        21,
        29
      ],
      "uid": [
        "sd_d11c3995-9c4e-4723-8056-9c66bc0faeb0",
        "sd_d11c3995-9c4e-4723-8056-9c66bc0faeb0",
        "sd_d11c3995-9c4e-4723-8056-9c66bc0faeb0",
        "sd_d11c3995-9c4e-4723-8056-9c66bc0faeb0",
        "sd_d11c3995-9c4e-4723-8056-9c66bc0faeb0",
        "sd_d11c3995-9c4e-4723-8056-9c66bc0faeb0"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        15,
        26,
        21,
        9,
        5,
        16
      ],
      "uid": [
        "sd_8f6e3431-e8e1-44c3-945e-da4915cefe73",
        "sd_8f6e3431-e8e1-44c3-945e-da4915cefe73",
        "sd_8f6e3431-e8e1-44c3-945e-da4915cefe73",
        "sd_8f6e3431-e8e1-44c3-945e-da4915cefe73",
        "sd_8f6e3431-e8e1-44c3-945e-da4915cefe73",
        "sd_8f6e3431-e8e1-44c3-945e-da4915cefe73"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        22,
        33,
        28,
        16,
        12,
        22
      ],
      "uid": [
        "sd_7cb048be-f7c5-4555-8718-5b23b02b0333",
        "sd_7cb048be-f7c5-4555-8718-5b23b02b0333",
        "sd_7cb048be-f7c5-4555-8718-5b23b02b0333",
        "sd_7cb048be-f7c5-4555-8718-5b23b02b0333",
        "sd_7cb048be-f7c5-4555-8718-5b23b02b0333",
        "sd_7cb048be-f7c5-4555-8718-5b23b02b0333"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        5,
        5,
        103,
        103,
        99,
        99
      ],
      "uid": [
        "sd_296bd631-fb9d-49ec-a8e8-e93139f0c713",
        "sd_296bd631-fb9d-49ec-a8e8-e93139f0c713",
        "sd_296bd631-fb9d-49ec-a8e8-e93139f0c713",
        "sd_296bd631-fb9d-49ec-a8e8-e93139f0c713",
        "sd_296bd631-fb9d-49ec-a8e8-e93139f0c713",
        "sd_296bd631-fb9d-49ec-a8e8-e93139f0c713"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": null,
    "data": {}
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        7,
        7,
        106,
        106,
        102,
        102
      ],
      "uid": [
        "sd_3249afaf-82a1-459c-919b-dbc4a995cb4b",
        "sd_3249afaf-82a1-459c-919b-dbc4a995cb4b",
        "sd_3249afaf-82a1-459c-919b-dbc4a995cb4b",
        "sd_3249afaf-82a1-459c-919b-dbc4a995cb4b",
        "sd_3249afaf-82a1-459c-919b-dbc4a995cb4b",
        "sd_3249afaf-82a1-459c-919b-dbc4a995cb4b"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        25,
        20,
        9,
        18,
        14,
        5
      ],
      "uid": [
        "sd_f28b5a31-2e15-4d36-a7e2-6d5aaf3a0159",
        "sd_f28b5a31-2e15-4d36-a7e2-6d5aaf3a0159",
        "sd_f28b5a31-2e15-4d36-a7e2-6d5aaf3a0159",
        "sd_f28b5a31-2e15-4d36-a7e2-6d5aaf3a0159",
        "sd_f28b5a31-2e15-4d36-a7e2-6d5aaf3a0159",
        "sd_f28b5a31-2e15-4d36-a7e2-6d5aaf3a0159"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        27,
        21,
        10,
        20,
        16,
        6
      ],
      "uid": [
        "sd_74324b6a-cabe-4b37-886b-59e1874fb764",
        "sd_74324b6a-cabe-4b37-886b-59e1874fb764",
        "sd_74324b6a-cabe-4b37-886b-59e1874fb764",
        "sd_74324b6a-cabe-4b37-886b-59e1874fb764",
        "sd_74324b6a-cabe-4b37-886b-59e1874fb764",
        "sd_74324b6a-cabe-4b37-886b-59e1874fb764"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        35,
        23,
        12,
        28,
        24,
        8
      ],
      "uid": [
        "sd_408e509b-e95f-4f60-9f81-b18cb421f58d",
        "sd_408e509b-e95f-4f60-9f81-b18cb421f58d",
        "sd_408e509b-e95f-4f60-9f81-b18cb421f58d",
        "sd_408e509b-e95f-4f60-9f81-b18cb421f58d",
        "sd_408e509b-e95f-4f60-9f81-b18cb421f58d",
        "sd_408e509b-e95f-4f60-9f81-b18cb421f58d"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        36,
        24,
        13,
        29,
        25,
        9
      ],
      "uid": [
        "sd_424f2b3c-3602-4907-ac6a-5718f600e61d",
        "sd_424f2b3c-3602-4907-ac6a-5718f600e61d",
        "sd_424f2b3c-3602-4907-ac6a-5718f600e61d",
        "sd_424f2b3c-3602-4907-ac6a-5718f600e61d",
        "sd_424f2b3c-3602-4907-ac6a-5718f600e61d",
        "sd_424f2b3c-3602-4907-ac6a-5718f600e61d"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        74,
        64,
        57,
        72,
        62,
        54
      ],
      "uid": [
        "sd_3301c33a-5fb6-48a1-bb18-5a2421aaacea",
        "sd_3301c33a-5fb6-48a1-bb18-5a2421aaacea",
        "sd_3301c33a-5fb6-48a1-bb18-5a2421aaacea",
        "sd_3301c33a-5fb6-48a1-bb18-5a2421aaacea",
        "sd_3301c33a-5fb6-48a1-bb18-5a2421aaacea",
        "sd_3301c33a-5fb6-48a1-bb18-5a2421aaacea"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        69,
        61,
        55,
        69,
        58,
        50
      ],
      "uid": [
        "sd_a66fe5ad-7556-46b9-84c9-f2283977379a",
        "sd_a66fe5ad-7556-46b9-84c9-f2283977379a",
        "sd_a66fe5ad-7556-46b9-84c9-f2283977379a",
        "sd_a66fe5ad-7556-46b9-84c9-f2283977379a",
        "sd_a66fe5ad-7556-46b9-84c9-f2283977379a",
        "sd_a66fe5ad-7556-46b9-84c9-f2283977379a"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        93,
        76,
        67,
        84,
        78,
        69
      ],
      "uid": [
        "sd_f6830324-db08-4d18-87b6-17142a9ba261",
        "sd_f6830324-db08-4d18-87b6-17142a9ba261",
        "sd_f6830324-db08-4d18-87b6-17142a9ba261",
        "sd_f6830324-db08-4d18-87b6-17142a9ba261",
        "sd_f6830324-db08-4d18-87b6-17142a9ba261",
        "sd_f6830324-db08-4d18-87b6-17142a9ba261"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        88,
        73,
        65,
        81,
        74,
        65
      ],
      "uid": [
        "sd_d215d902-db94-4e6b-b1d2-76924f8585d1",
        "sd_d215d902-db94-4e6b-b1d2-76924f8585d1",
        "sd_d215d902-db94-4e6b-b1d2-76924f8585d1",
        "sd_d215d902-db94-4e6b-b1d2-76924f8585d1",
        "sd_d215d902-db94-4e6b-b1d2-76924f8585d1",
        "sd_d215d902-db94-4e6b-b1d2-76924f8585d1"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        77,
        67,
        60,
        75,
        65,
        57
      ],
      "uid": [
        "sd_6b82ff48-f998-4df8-96e9-04f4a04593d2",
        "sd_6b82ff48-f998-4df8-96e9-04f4a04593d2",
        "sd_6b82ff48-f998-4df8-96e9-04f4a04593d2",
        "sd_6b82ff48-f998-4df8-96e9-04f4a04593d2",
        "sd_6b82ff48-f998-4df8-96e9-04f4a04593d2",
        "sd_6b82ff48-f998-4df8-96e9-04f4a04593d2"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        9,
        9,
        108,
        108,
        104,
        104
      ],
      "uid": [
        "sd_207d8659-160e-471f-b8bc-5068863873ec",
        "sd_207d8659-160e-471f-b8bc-5068863873ec",
        "sd_207d8659-160e-471f-b8bc-5068863873ec",
        "sd_207d8659-160e-471f-b8bc-5068863873ec",
        "sd_207d8659-160e-471f-b8bc-5068863873ec",
        "sd_207d8659-160e-471f-b8bc-5068863873ec"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        33,
        22,
        11,
        26,
        22,
        7
      ],
      "uid": [
        "sd_3f6370d5-66c0-40f0-b054-96833ad57867",
        "sd_3f6370d5-66c0-40f0-b054-96833ad57867",
        "sd_3f6370d5-66c0-40f0-b054-96833ad57867",
        "sd_3f6370d5-66c0-40f0-b054-96833ad57867",
        "sd_3f6370d5-66c0-40f0-b054-96833ad57867",
        "sd_3f6370d5-66c0-40f0-b054-96833ad57867"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        109,
        108,
        102,
        102,
        93,
        98
      ],
      "uid": [
        "sd_bce82b14-4ba0-4dfd-9c3a-42e8d841b047",
        "sd_bce82b14-4ba0-4dfd-9c3a-42e8d841b047",
        "sd_bce82b14-4ba0-4dfd-9c3a-42e8d841b047",
        "sd_bce82b14-4ba0-4dfd-9c3a-42e8d841b047",
        "sd_bce82b14-4ba0-4dfd-9c3a-42e8d841b047",
        "sd_bce82b14-4ba0-4dfd-9c3a-42e8d841b047"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        18,
        29,
        24,
        12,
        8,
        72
      ],
      "uid": [
        "sd_b2bbbdd5-90d3-46c6-8574-623c5c528929",
        "sd_b2bbbdd5-90d3-46c6-8574-623c5c528929",
        "sd_b2bbbdd5-90d3-46c6-8574-623c5c528929",
        "sd_b2bbbdd5-90d3-46c6-8574-623c5c528929",
        "sd_b2bbbdd5-90d3-46c6-8574-623c5c528929",
        "sd_b2bbbdd5-90d3-46c6-8574-623c5c528929"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        82,
        79,
        70,
        87,
        95,
        61
      ],
      "uid": [
        "sd_3e46a853-928f-49ac-9d0a-171ef1646384",
        "sd_3e46a853-928f-49ac-9d0a-171ef1646384",
        "sd_3e46a853-928f-49ac-9d0a-171ef1646384",
        "sd_3e46a853-928f-49ac-9d0a-171ef1646384",
        "sd_3e46a853-928f-49ac-9d0a-171ef1646384",
        "sd_3e46a853-928f-49ac-9d0a-171ef1646384"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        85,
        80,
        71,
        88,
        96,
        63
      ],
      "uid": [
        "sd_d898574b-ca0f-48ff-8404-2a17171787d4",
        "sd_d898574b-ca0f-48ff-8404-2a17171787d4",
        "sd_d898574b-ca0f-48ff-8404-2a17171787d4",
        "sd_d898574b-ca0f-48ff-8404-2a17171787d4",
        "sd_d898574b-ca0f-48ff-8404-2a17171787d4",
        "sd_d898574b-ca0f-48ff-8404-2a17171787d4"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        89,
        81,
        72,
        89,
        97,
        66
      ],
      "uid": [
        "sd_8e4278f8-5626-4f47-b428-8ae4fe4181cf",
        "sd_8e4278f8-5626-4f47-b428-8ae4fe4181cf",
        "sd_8e4278f8-5626-4f47-b428-8ae4fe4181cf",
        "sd_8e4278f8-5626-4f47-b428-8ae4fe4181cf",
        "sd_8e4278f8-5626-4f47-b428-8ae4fe4181cf",
        "sd_8e4278f8-5626-4f47-b428-8ae4fe4181cf"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        94,
        82,
        73,
        90,
        98,
        70
      ],
      "uid": [
        "sd_145df8f3-0fe9-43d0-9fec-0ee6e71e8e6d",
        "sd_145df8f3-0fe9-43d0-9fec-0ee6e71e8e6d",
        "sd_145df8f3-0fe9-43d0-9fec-0ee6e71e8e6d",
        "sd_145df8f3-0fe9-43d0-9fec-0ee6e71e8e6d",
        "sd_145df8f3-0fe9-43d0-9fec-0ee6e71e8e6d",
        "sd_145df8f3-0fe9-43d0-9fec-0ee6e71e8e6d"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        71,
        78,
        69,
        86,
        94,
        51
      ],
      "uid": [
        "sd_7a234a72-758d-480e-aa00-aa4b09a22977",
        "sd_7a234a72-758d-480e-aa00-aa4b09a22977",
        "sd_7a234a72-758d-480e-aa00-aa4b09a22977",
        "sd_7a234a72-758d-480e-aa00-aa4b09a22977",
        "sd_7a234a72-758d-480e-aa00-aa4b09a22977",
        "sd_7a234a72-758d-480e-aa00-aa4b09a22977"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        73,
        63,
        56,
        71,
        61,
        53
      ],
      "uid": [
        "sd_cf430d2b-9f6a-4f5e-89d4-9d5abbc9536b",
        "sd_cf430d2b-9f6a-4f5e-89d4-9d5abbc9536b",
        "sd_cf430d2b-9f6a-4f5e-89d4-9d5abbc9536b",
        "sd_cf430d2b-9f6a-4f5e-89d4-9d5abbc9536b",
        "sd_cf430d2b-9f6a-4f5e-89d4-9d5abbc9536b",
        "sd_cf430d2b-9f6a-4f5e-89d4-9d5abbc9536b"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        12,
        12,
        6,
        6,
        107,
        107
      ],
      "uid": [
        "sd_27ed4d57-bd91-4a14-bf09-d2ac328730f4",
        "sd_27ed4d57-bd91-4a14-bf09-d2ac328730f4",
        "sd_27ed4d57-bd91-4a14-bf09-d2ac328730f4",
        "sd_27ed4d57-bd91-4a14-bf09-d2ac328730f4",
        "sd_27ed4d57-bd91-4a14-bf09-d2ac328730f4",
        "sd_27ed4d57-bd91-4a14-bf09-d2ac328730f4"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        103,
        102,
        96,
        97,
        87,
        92
      ],
      "uid": [
        "sd_fc32a6bf-4147-4555-b0b3-d9ade7814645",
        "sd_fc32a6bf-4147-4555-b0b3-d9ade7814645",
        "sd_fc32a6bf-4147-4555-b0b3-d9ade7814645",
        "sd_fc32a6bf-4147-4555-b0b3-d9ade7814645",
        "sd_fc32a6bf-4147-4555-b0b3-d9ade7814645",
        "sd_fc32a6bf-4147-4555-b0b3-d9ade7814645"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        10,
        10,
        109,
        109,
        105,
        105
      ],
      "uid": [
        "sd_2744cee8-9b13-4c7b-947f-e72b2e54547f",
        "sd_2744cee8-9b13-4c7b-947f-e72b2e54547f",
        "sd_2744cee8-9b13-4c7b-947f-e72b2e54547f",
        "sd_2744cee8-9b13-4c7b-947f-e72b2e54547f",
        "sd_2744cee8-9b13-4c7b-947f-e72b2e54547f",
        "sd_2744cee8-9b13-4c7b-947f-e72b2e54547f"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "workMode_rank",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 3,
      "targets": []
    },
    "data": {
      "workMode_rank": [
        105,
        104,
        98,
        98,
        89,
        94
      ],
      "uid": [
        "sd_3a319a8b-754f-4449-b17e-1d92c0c9b2b7",
        "sd_3a319a8b-754f-4449-b17e-1d92c0c9b2b7",
        "sd_3a319a8b-754f-4449-b17e-1d92c0c9b2b7",
        "sd_3a319a8b-754f-4449-b17e-1d92c0c9b2b7",
        "sd_3a319a8b-754f-4449-b17e-1d92c0c9b2b7",
        "sd_3a319a8b-754f-4449-b17e-1d92c0c9b2b7"
      ],
      "time": [
        null,
        null,
        null,
        null,
        null,
        null
      ]
    }
  }
]

ress.forEach(item => {
  if(Object.keys(item.data).length > 0) console.log(item.data.uid[0], item.data.workMode_rank[0])
})
