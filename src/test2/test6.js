let data = [
  "a0223d12-469c-42e5-91ff-c2308469c0e7",
  "4ae724d3-c0cb-46b3-9c50-9ac9c08b3a1d",
  "ce01bdbc-5e43-44b7-b6fc-2576732455d2",
  "73b46daf-d42d-48c3-9488-2cee279fec41",
  "46104474-a8e5-4b32-b69f-f8758774b784",
  "409e2b31-8d6d-4733-8004-6089a5dda855",
  "4d94f835-7c59-4ad0-a39d-2a90f1f80d79",
  "ac0d9010-bba2-4d53-91b3-029ae5207345",
  "ef1757e3-06cd-43b1-8cc3-d088b50065e7",
  "ee8daff2-5a52-443d-bfb3-6b9786b91894",
  "b15bb406-e07f-41ef-9994-9d94acbad115",
  "4f1e3458-8f71-4544-ad28-368a35bf55d2",
  "b479cee0-f702-462c-afcc-dde60e1dae26",
  "38d25e5f-37c9-472d-9a91-ddb7ae0229ee",
  "7a6c83a1-6668-45a8-994c-98ccc523fc85",
  "c5b9bb35-6deb-4066-b638-df1920064a40",
  "0946f809-6e40-4d0f-bd98-032ce57b105d",
  "cc36c170-a62b-4d58-a53d-df4e8b628809",
  "7117c79a-b3b9-450a-8b82-fbbf3af271da",
  "fe5e3396-9059-417c-88d7-4aa6448c641e",
  "0a3e11a5-dca8-461f-b168-7ca7c2aa3122",
  "441aabd9-43a9-4395-b596-f94ee371c9a5",
  "a58ad4ff-7488-44de-aeda-7056c6bb667a",
  "ab7885ae-099d-4b00-a3ae-19897462f77a",
  "e1f35436-a1ae-41d0-bd29-b893afd318f2",
  "096715ab-702c-44b1-8989-0317178c48f1",
  "747ed9de-4caa-494e-aa1d-8008d501f8e0",
  "b42529ad-1e38-44ba-a970-2dffaac0e989",
  "266cf4b6-4028-4b75-9d48-251aa1ed811f",
  "a3a6ca91-913c-45ac-bd3e-71fbb3c6c402",
  "f30b9873-3cc4-4de2-afd7-20938b2e05fd",
  "f4f44852-3895-4138-a860-fadf602486b7",
  "6e704d46-8f69-4a08-a2e9-54878ac543e9",
  "dfaa38e4-b56e-408f-8eeb-cf62044ad4e5",
  "b6f29c99-45ab-45f6-a96d-35043e596ebf",
  "94768ab2-55bd-44e7-a66f-3bad8e7ca0cd",
  "c1ff3cdb-4b8a-4061-9c61-b9a863f9c92a",
  "a274d704-5bbd-498d-8c3b-f34d0c94a312",
  "5780ca0f-8314-4ccc-adc5-6aae77a96678",
  "2d69300e-c87b-41c9-af27-9db83c13124a",
  "be18e6c9-f444-45df-afb0-f97ba60d8021",
  "75ba66df-ed3f-41ae-9a8f-67986595172c",
  "500deff6-cd87-44fb-86e6-c1fc418afb30",
  "9fa0b4ed-89bc-4691-81b7-b1e091e5467b",
  "151f37ea-b0cf-4d33-8c23-8ecf8a4950dd"
]

let res = []
data.forEach(item => {
  res.push({
    "query": "select timestamp,instantaneous_heat,instantaneousHeatLine1 from smart_data where uid = \"sd_" + item + "\" limit 1"
  })
})

console.log(JSON.stringify(res))


let data1 = [
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_sm_a0223d12-469c-42e5-91ff-c2308469c0e7"
      ],
      "instantaneousHeatLine1": [
        3937.862398277999
      ],
      "instantaneous_heat": [
        3937.862398277999
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_b42529ad-1e38-44ba-a970-2dffaac0e989"
      ],
      "instantaneousHeatLine1": [
        4015.811967034625
      ],
      "instantaneous_heat": [
        3445.5555555555557
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_266cf4b6-4028-4b75-9d48-251aa1ed811f"
      ],
      "instantaneousHeatLine1": [
        2578.36870658092
      ],
      "instantaneous_heat": [
        2478.338888888889
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_a3a6ca91-913c-45ac-bd3e-71fbb3c6c402"
      ],
      "instantaneousHeatLine1": [
        7678.0369139125205
      ],
      "instantaneous_heat": [
        6465.3388888888885
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_f30b9873-3cc4-4de2-afd7-20938b2e05fd"
      ],
      "instantaneousHeatLine1": [
        804.9597011672124
      ],
      "instantaneous_heat": [
        804.9597011672124
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_4ae724d3-c0cb-46b3-9c50-9ac9c08b3a1d"
      ],
      "instantaneousHeatLine1": [
        6583.080087971482
      ],
      "instantaneous_heat": [
        6593.316666666667
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_ce01bdbc-5e43-44b7-b6fc-2576732455d2"
      ],
      "instantaneousHeatLine1": [
        5864.155863085363
      ],
      "instantaneous_heat": [
        5402.138888888889
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_73b46daf-d42d-48c3-9488-2cee279fec41"
      ],
      "instantaneousHeatLine1": [
        6343.887728503625
      ],
      "instantaneous_heat": [
        5687.627777777778
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_46104474-a8e5-4b32-b69f-f8758774b784"
      ],
      "instantaneousHeatLine1": [
        4298.85822483617
      ],
      "instantaneous_heat": [
        3593.222222222222
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_409e2b31-8d6d-4733-8004-6089a5dda855"
      ],
      "instantaneousHeatLine1": [
        2989.525116814508
      ],
      "instantaneous_heat": [
        2699.8388888888894
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_4d94f835-7c59-4ad0-a39d-2a90f1f80d79"
      ],
      "instantaneousHeatLine1": [
        1331.8472158195627
      ],
      "instantaneous_heat": [
        1139.4944444444443
      ],
      "time": [
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
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_ab7885ae-099d-4b00-a3ae-19897462f77a"
      ],
      "instantaneousHeatLine1": [
        98.54959117041696
      ],
      "instantaneous_heat": [
        98.54959117041696
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_e1f35436-a1ae-41d0-bd29-b893afd318f2"
      ],
      "instantaneousHeatLine1": [
        16.566174432497334
      ],
      "instantaneous_heat": [
        16.566174432497334
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_096715ab-702c-44b1-8989-0317178c48f1"
      ],
      "instantaneousHeatLine1": [
        4434.465852558104
      ],
      "instantaneous_heat": [
        4262.644444444444
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_747ed9de-4caa-494e-aa1d-8008d501f8e0"
      ],
      "instantaneousHeatLine1": [
        3587.762626827273
      ],
      "instantaneous_heat": [
        3322.5
      ],
      "time": [
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
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_0a3e11a5-dca8-461f-b168-7ca7c2aa3122"
      ],
      "instantaneousHeatLine1": [
        3751.3089281880957
      ],
      "instantaneous_heat": [
        3290.5055555555555
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_441aabd9-43a9-4395-b596-f94ee371c9a5"
      ],
      "instantaneousHeatLine1": [
        4250.55441693363
      ],
      "instantaneous_heat": [
        4208.5
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_a58ad4ff-7488-44de-aeda-7056c6bb667a"
      ],
      "instantaneousHeatLine1": [
        7933.7796594342635
      ],
      "instantaneous_heat": [
        5192.944444444444
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_c5b9bb35-6deb-4066-b638-df1920064a40"
      ],
      "instantaneousHeatLine1": [
        2775.62829036998
      ],
      "instantaneous_heat": [
        2775.62829036998
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_0946f809-6e40-4d0f-bd98-032ce57b105d"
      ],
      "instantaneousHeatLine1": [
        5584.952586736435
      ],
      "instantaneous_heat": [
        5195.405555555555
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_cc36c170-a62b-4d58-a53d-df4e8b628809"
      ],
      "instantaneousHeatLine1": [
        7976.764634124235
      ],
      "instantaneous_heat": [
        6546.555555555557
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_7117c79a-b3b9-450a-8b82-fbbf3af271da"
      ],
      "instantaneousHeatLine1": [
        1760.9539349873862
      ],
      "instantaneous_heat": [
        1661.25
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_fe5e3396-9059-417c-88d7-4aa6448c641e"
      ],
      "instantaneousHeatLine1": [
        499.5123672689127
      ],
      "instantaneous_heat": [
        393.7777777777778
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_ee8daff2-5a52-443d-bfb3-6b9786b91894"
      ],
      "instantaneousHeatLine1": [
        1586.8528633036162
      ],
      "instantaneous_heat": [
        1442.2111111111112
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_e2c4cf74-1dc8-4b34-8822-48fe1cb4cb1c"
      ],
      "instantaneousHeatLine1": [
        152.0176785878646
      ],
      "instantaneous_heat": [
        137.82222222222225
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_b15bb406-e07f-41ef-9994-9d94acbad115"
      ],
      "instantaneousHeatLine1": [
        563.5555457865071
      ],
      "instantaneous_heat": [
        563.5555457865071
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_7a7fe618-214c-477d-bcae-1fd003fd47a0"
      ],
      "instantaneousHeatLine1": [
        511.0897251173982
      ],
      "instantaneous_heat": [
        487.3
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_18fe049d-76ee-40f9-b0a9-00a47f2e1fd3"
      ],
      "instantaneousHeatLine1": [
        4240.644059629522
      ],
      "instantaneous_heat": [
        4240.644059629522
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_4f1e3458-8f71-4544-ad28-368a35bf55d2"
      ],
      "instantaneousHeatLine1": [
        9292.76160704784
      ],
      "instantaneous_heat": [
        8599.122222222222
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_151f37ea-b0cf-4d33-8c23-8ecf8a4950dd"
      ],
      "instantaneousHeatLine1": [
        6577.520451994024
      ],
      "instantaneous_heat": [
        6214.305555555556
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_b479cee0-f702-462c-afcc-dde60e1dae26"
      ],
      "instantaneousHeatLine1": [
        6861.646236517491
      ],
      "instantaneous_heat": [
        6369.355555555555
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_38d25e5f-37c9-472d-9a91-ddb7ae0229ee"
      ],
      "instantaneousHeatLine1": [
        7691.921882140333
      ],
      "instantaneous_heat": [
        6620.388888888888
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_7a6c83a1-6668-45a8-994c-98ccc523fc85"
      ],
      "instantaneousHeatLine1": [
        3093.4082952320073
      ],
      "instantaneous_heat": [
        2852.427777777778
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_94768ab2-55bd-44e7-a66f-3bad8e7ca0cd"
      ],
      "instantaneousHeatLine1": [
        2947.0581987984165
      ],
      "instantaneous_heat": [
        2997.633333333333
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_c1ff3cdb-4b8a-4061-9c61-b9a863f9c92a"
      ],
      "instantaneousHeatLine1": [
        2252.006260757772
      ],
      "instantaneous_heat": [
        2200.233333333333
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_a274d704-5bbd-498d-8c3b-f34d0c94a312"
      ],
      "instantaneousHeatLine1": [
        611.4249886610569
      ],
      "instantaneous_heat": [
        593.1277777777777
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_5780ca0f-8314-4ccc-adc5-6aae77a96678"
      ],
      "instantaneousHeatLine1": [
        4858.586013826549
      ],
      "instantaneous_heat": [
        4636.733333333334
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_2d69300e-c87b-41c9-af27-9db83c13124a"
      ],
      "instantaneousHeatLine1": [
        0
      ],
      "instantaneous_heat": [
        0
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_be18e6c9-f444-45df-afb0-f97ba60d8021"
      ],
      "instantaneousHeatLine1": [
        667.7975027989118
      ],
      "instantaneous_heat": [
        647.2722222222222
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_75ba66df-ed3f-41ae-9a8f-67986595172c"
      ],
      "instantaneousHeatLine1": [
        4462.5302767142275
      ],
      "instantaneous_heat": [
        4462.5302767142275
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_500deff6-cd87-44fb-86e6-c1fc418afb30"
      ],
      "instantaneousHeatLine1": [
        5152.167723729061
      ],
      "instantaneous_heat": [
        4858.233333333333
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_dfaa38e4-b56e-408f-8eeb-cf62044ad4e5"
      ],
      "instantaneousHeatLine1": [
        2525.511888357309
      ],
      "instantaneous_heat": [
        2392.2000000000007
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_b6f29c99-45ab-45f6-a96d-35043e596ebf"
      ],
      "instantaneousHeatLine1": [
        3760.2324397475627
      ],
      "instantaneous_heat": [
        3354.4944444444445
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_f4f44852-3895-4138-a860-fadf602486b7"
      ],
      "instantaneousHeatLine1": [
        1748.679850855444
      ],
      "instantaneous_heat": [
        1609.5666666666666
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_6e704d46-8f69-4a08-a2e9-54878ac543e9"
      ],
      "instantaneousHeatLine1": [
        794.0436330970358
      ],
      "instantaneous_heat": [
        762.9444444444445
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_f0468692-ae50-44a0-a0c5-3f6aec9d7f27"
      ],
      "instantaneousHeatLine1": [
        6630.929290738879
      ],
      "instantaneous_heat": [
        6450.572222222223
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_324f589d-f646-446b-98c2-c2aca2ee97fc"
      ],
      "instantaneousHeatLine1": [
        6859.38435741979
      ],
      "instantaneous_heat": [
        6046.95
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_32ee3f1b-8bdb-4ee5-87c0-a8c8c081e31b"
      ],
      "instantaneousHeatLine1": [
        4570.44566798414
      ],
      "instantaneous_heat": [
        4206.038888888889
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_9dee2c27-b1c6-4950-ba24-d9408fa50366"
      ],
      "instantaneousHeatLine1": [
        4771.846094702045
      ],
      "instantaneous_heat": [
        4466.916666666667
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_f7cd7edf-3513-445e-b072-6688f22889f0"
      ],
      "instantaneousHeatLine1": [
        6313.299378778179
      ],
      "instantaneous_heat": [
        5352.916666666668
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_ec327a73-703f-4b7d-a4db-b9dc7d7a007c"
      ],
      "instantaneousHeatLine1": [
        4744.611683054867
      ],
      "instantaneous_heat": [
        4685.955555555555
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_7c991498-0bbe-44ea-8462-86ad11cccd61"
      ],
      "instantaneousHeatLine1": [
        5140.447779598398
      ],
      "instantaneous_heat": [
        4917.3
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_88a89d45-0831-4c06-81ae-9033440f9e0d"
      ],
      "instantaneousHeatLine1": [
        5870.1701517458305
      ],
      "instantaneous_heat": [
        5416.905555555557
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_4ffcdaed-d332-498d-8309-e0a26341ca46"
      ],
      "instantaneousHeatLine1": [
        4613.0512107131835
      ],
      "instantaneous_heat": [
        4149.433333333333
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_4fdfa4cf-3d74-47a7-a327-d90976e19af9"
      ],
      "instantaneousHeatLine1": [
        5690.54844033005
      ],
      "instantaneous_heat": [
        5539.961111111111
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_dc3f2349-6bbc-4161-ac54-89de73ba2999"
      ],
      "instantaneousHeatLine1": [
        789.8563630560525
      ],
      "instantaneous_heat": [
        644.8111111111111
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_9f34e840-dd46-4ba8-83c2-22f0a9df2205"
      ],
      "instantaneousHeatLine1": [
        7153.816223144531
      ],
      "instantaneous_heat": [
        6115.861111111112
      ],
      "time": [
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
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_0054fd1f-7df7-4c0f-b788-40bae223920c"
      ],
      "instantaneousHeatLine1": [
        9861.109358632668
      ],
      "instantaneous_heat": [
        9413.75
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_19ed6586-2e9b-47c6-bb36-76c1fa54d4e3"
      ],
      "instantaneousHeatLine1": [
        4171.344765231141
      ],
      "instantaneous_heat": [
        4018.994444444444
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_8f8ba1df-0fc1-42ac-aa10-f874f9d168eb"
      ],
      "instantaneousHeatLine1": [
        2357.7162088491978
      ],
      "instantaneous_heat": [
        2242.072222222222
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_08f2ed60-4b7e-4a3d-acb4-e4ea62c4c2d2"
      ],
      "instantaneousHeatLine1": [
        3159.477731101533
      ],
      "instantaneous_heat": [
        2793.3611111111104
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_fb8877c7-ec5c-46d2-91af-dde97eb81ef2"
      ],
      "instantaneousHeatLine1": [
        1565.2633120870998
      ],
      "instantaneous_heat": [
        1636.6388888888891
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_246fa455-8dcc-4cbe-8286-26439feb7d7a"
      ],
      "instantaneousHeatLine1": [
        3302.4745007865445
      ],
      "instantaneous_heat": [
        3027.1666666666665
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_13565321-edf0-4c73-a6fd-b96db89be16f"
      ],
      "instantaneousHeatLine1": [
        3129.661847383548
      ],
      "instantaneous_heat": [
        3129.661847383548
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_92d56709-b24e-4bcd-87a8-d21224221cf7"
      ],
      "instantaneousHeatLine1": [
        7224.330963232578
      ],
      "instantaneous_heat": [
        6583.472222222223
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_3b4ec881-6dfa-496c-80c0-d614d40fb4c7"
      ],
      "instantaneousHeatLine1": [
        5979.394933097384
      ],
      "instantaneous_heat": [
        5530.116666666667
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_2929b3ad-9170-45be-bc14-77ad3f0d656b"
      ],
      "instantaneousHeatLine1": [
        2244.7738942936953
      ],
      "instantaneous_heat": [
        2067.3333333333335
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_05a5d05e-fc3d-4557-afba-dceffc0bb5f1"
      ],
      "instantaneousHeatLine1": [
        10894.53713506715
      ],
      "instantaneous_heat": [
        9305.461111111113
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_bdaa7ce8-d145-470e-a3ac-d9f7f1cf1033"
      ],
      "instantaneousHeatLine1": [
        6324.71221125024
      ],
      "instantaneous_heat": [
        5731.927777777778
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_33bbc8b8-e2d3-4e42-807d-ea8513621642"
      ],
      "instantaneousHeatLine1": [
        1278.8885526168042
      ],
      "instantaneous_heat": [
        1196.1000000000004
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_e8c17621-8906-451c-b196-26e4cfe5fe0f"
      ],
      "instantaneousHeatLine1": [
        3114.7894288739594
      ],
      "instantaneous_heat": [
        3199.4444444444443
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_b986e515-d4d5-48f4-b67b-a39fea6fd9f2"
      ],
      "instantaneousHeatLine1": [
        2591.073808507022
      ],
      "instantaneous_heat": [
        2904.1111111111113
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_939e2f11-92b3-4a3a-81aa-39b8078500fd"
      ],
      "instantaneousHeatLine1": [
        7209.0540584335995
      ],
      "instantaneous_heat": [
        7159.372222222222
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_6b2a0c3a-30db-4886-a8da-65c0753aa30a"
      ],
      "instantaneousHeatLine1": [
        6774.297738686587
      ],
      "instantaneous_heat": [
        6184.772222222222
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_52cecd73-bf64-4efd-95bf-e1f22362fc3b"
      ],
      "instantaneousHeatLine1": [
        7162.1822903298935
      ],
      "instantaneous_heat": [
        6502.2555555555555
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_b113143c-8e53-459e-a533-06dcb55df3fc"
      ],
      "instantaneousHeatLine1": [
        4199.261410623533
      ],
      "instantaneous_heat": [
        4070.677777777778
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_addf3e51-f873-41cf-b6db-7e7122f4b3b9"
      ],
      "instantaneousHeatLine1": [
        4516.952170266046
      ],
      "instantaneous_heat": [
        4306.944444444444
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_d11c3995-9c4e-4723-8056-9c66bc0faeb0"
      ],
      "instantaneousHeatLine1": [
        5142.245944748576
      ],
      "instantaneous_heat": [
        4777.016666666666
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_8f6e3431-e8e1-44c3-945e-da4915cefe73"
      ],
      "instantaneousHeatLine1": [
        6710.774042667486
      ],
      "instantaneous_heat": [
        6037.105555555556
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_7cb048be-f7c5-4555-8718-5b23b02b0333"
      ],
      "instantaneousHeatLine1": [
        1282.0161509717632
      ],
      "instantaneous_heat": [
        1282.0161509717632
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_296bd631-fb9d-49ec-a8e8-e93139f0c713"
      ],
      "instantaneousHeatLine1": [
        5558.235441517627
      ],
      "instantaneous_heat": [
        4996.055555555556
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_73826f02-776d-4267-83ef-0fa34464b19d"
      ],
      "instantaneousHeatLine1": [
        6209.1268637241465
      ],
      "instantaneous_heat": [
        6135.55
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_3249afaf-82a1-459c-919b-dbc4a995cb4b"
      ],
      "instantaneousHeatLine1": [
        3997.0176036541284
      ],
      "instantaneous_heat": [
        3408.6388888888887
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_f28b5a31-2e15-4d36-a7e2-6d5aaf3a0159"
      ],
      "instantaneousHeatLine1": [
        4388.929646239321
      ],
      "instantaneous_heat": [
        4090.3666666666672
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_74324b6a-cabe-4b37-886b-59e1874fb764"
      ],
      "instantaneousHeatLine1": [
        13759.378531040285
      ],
      "instantaneous_heat": [
        13759.378531040285
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_408e509b-e95f-4f60-9f81-b18cb421f58d"
      ],
      "instantaneousHeatLine1": [
        1568.2877383680425
      ],
      "instantaneous_heat": [
        1639.1
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_424f2b3c-3602-4907-ac6a-5718f600e61d"
      ],
      "instantaneousHeatLine1": [
        3381.300644996839
      ],
      "instantaneous_heat": [
        3152.6833333333334
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_3301c33a-5fb6-48a1-bb18-5a2421aaacea"
      ],
      "instantaneousHeatLine1": [
        1541.7546173955639
      ],
      "instantaneous_heat": [
        1400.3722222222225
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_a66fe5ad-7556-46b9-84c9-f2283977379a"
      ],
      "instantaneousHeatLine1": [
        632.398313182032
      ],
      "instantaneous_heat": [
        659.5777777777778
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_f6830324-db08-4d18-87b6-17142a9ba261"
      ],
      "instantaneousHeatLine1": [
        6626.852862855307
      ],
      "instantaneous_heat": [
        5906.666666666667
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_d215d902-db94-4e6b-b1d2-76924f8585d1"
      ],
      "instantaneousHeatLine1": [
        2403.1942624312182
      ],
      "instantaneous_heat": [
        2207.616666666667
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_6b82ff48-f998-4df8-96e9-04f4a04593d2"
      ],
      "instantaneousHeatLine1": [
        1447.6113900160178
      ],
      "instantaneous_heat": [
        1257.627777777778
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_207d8659-160e-471f-b8bc-5068863873ec"
      ],
      "instantaneousHeatLine1": [
        2692.613499796289
      ],
      "instantaneous_heat": [
        2557.094444444445
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_3f6370d5-66c0-40f0-b054-96833ad57867"
      ],
      "instantaneousHeatLine1": [
        15.444314887381008
      ],
      "instantaneous_heat": [
        15.444314887381008
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_bce82b14-4ba0-4dfd-9c3a-42e8d841b047"
      ],
      "instantaneousHeatLine1": [
        1959.3612811504267
      ],
      "instantaneous_heat": [
        1887.6722222222222
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_b2bbbdd5-90d3-46c6-8574-623c5c528929"
      ],
      "instantaneousHeatLine1": [
        739.7367085656551
      ],
      "instantaneous_heat": [
        689.1111111111111
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_3e46a853-928f-49ac-9d0a-171ef1646384"
      ],
      "instantaneousHeatLine1": [
        471.1192820826148
      ],
      "instantaneous_heat": [
        455.30555555555554
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_d898574b-ca0f-48ff-8404-2a17171787d4"
      ],
      "instantaneousHeatLine1": [
        0
      ],
      "instantaneous_heat": [
        0
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_8e4278f8-5626-4f47-b428-8ae4fe4181cf"
      ],
      "instantaneousHeatLine1": [
        4649.476006499723
      ],
      "instantaneous_heat": [
        4762.25
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_145df8f3-0fe9-43d0-9fec-0ee6e71e8e6d"
      ],
      "instantaneousHeatLine1": [
        3813.3766712286533
      ],
      "instantaneous_heat": [
        3455.4
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_7a234a72-758d-480e-aa00-aa4b09a22977"
      ],
      "instantaneousHeatLine1": [
        5881.61158765483
      ],
      "instantaneous_heat": [
        5463.666666666667
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_cf430d2b-9f6a-4f5e-89d4-9d5abbc9536b"
      ],
      "instantaneousHeatLine1": [
        5761.2545266110665
      ],
      "instantaneous_heat": [
        5507.966666666666
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_27ed4d57-bd91-4a14-bf09-d2ac328730f4"
      ],
      "instantaneousHeatLine1": [
        763.1827292279299
      ],
      "instantaneous_heat": [
        679.2666666666667
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_fc32a6bf-4147-4555-b0b3-d9ade7814645"
      ],
      "instantaneousHeatLine1": [
        1957.1472895451082
      ],
      "instantaneous_heat": [
        1936.8944444444444
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_2744cee8-9b13-4c7b-947f-e72b2e54547f"
      ],
      "instantaneousHeatLine1": [
        3033.410208856957
      ],
      "instantaneous_heat": [
        2859.811111111111
      ],
      "time": [
        null
      ]
    }
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "uid",
          "dataType": "STRING",
          "metaData": {},
          "storage": "STRING"
        },
        {
          "name": "instantaneousHeatLine1",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "instantaneous_heat",
          "dataType": "DOUBLE",
          "metaData": {},
          "storage": "DOUBLE"
        },
        {
          "name": "time",
          "dataType": "LONG",
          "metaData": {},
          "storage": "LONG"
        }
      ],
      "inputs": [],
      "numOfFields": 4,
      "targets": []
    },
    "data": {
      "uid": [
        "sd_3a319a8b-754f-4449-b17e-1d92c0c9b2b7"
      ],
      "instantaneousHeatLine1": [
        2382.3673566182456
      ],
      "instantaneous_heat": [
        2409.427777777778
      ],
      "time": [
        null
      ]
    }
  }
]


let instantaneous_heat_SUM = 0
let instantaneousHeatLine1_SUM = 0
let index = data.length
let b = 0

data1.forEach(item => {
  let data = item.data
  // if(data.instantaneous_heat[0] != null && data.instantaneousHeatLine1[0] != null) {
    instantaneous_heat_SUM += data.instantaneous_heat[0]
    instantaneousHeatLine1_SUM += data.instantaneousHeatLine1[0]
  // }
})

console.log(index)
console.log(instantaneousHeatLine1_SUM ,instantaneous_heat_SUM)
console.log(b)
