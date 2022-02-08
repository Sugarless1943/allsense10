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
    "query": "select timestamp,instantaneous_heat - instantaneousHeatLine1 as a from smart_data where uid = \"sd_" + item + "\" limit 1"
  })
})

console.log(JSON.stringify(res))

let data1 = [
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        null
      ]
    },
    "topic": "/report/e3c64467e10f88ec8ba47e7597908bec"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        2572.328921016606
      ]
    },
    "topic": "/report/5feffe72c8318d5f482506ee382a0f6e"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        null
      ]
    },
    "topic": "/report/3c69b5dbe64e48082a9b771b31b8cf04"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        3182.203842635128
      ]
    },
    "topic": "/report/8cb681889af8ac1ceb223f90297b63f5"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        -3966.818699034903
      ]
    },
    "topic": "/report/8ea452e142449f14d10f53cd24367541"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        1678.8696091877716
      ]
    },
    "topic": "/report/f118eab2cf71c4d4753e223c813c4e58"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        341.4689011397047
      ]
    },
    "topic": "/report/a73aa69c04261718e09519f78d97d031"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        3567.3467213479535
      ]
    },
    "topic": "/report/1c654f7ebcd2b7673b957a66fd73852b"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        -8.133922227376388
      ]
    },
    "topic": "/report/eccd8828ca49cca30c8820d50aa06e12"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        null
      ]
    },
    "topic": "/report/1329a9072ab996816ecfa7566a0ce01b"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        null
      ]
    },
    "topic": "/report/8aec9a8ba0cf310ecdfaab88fbe880d2"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        null
      ]
    },
    "topic": "/report/a34dcc76d32780fe43f8c8ff0e09043e"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        null
      ]
    },
    "topic": "/report/c4f8a045b95996eb2960c92c3d0236f2"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        null
      ]
    },
    "topic": "/report/5df6277f911d59586533f9ce89d17dcb"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        null
      ]
    },
    "topic": "/report/93e4266415cd7110bfce8df34a828365"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        1711.688853008491
      ]
    },
    "topic": "/report/271e4d829ca2cfd737ccfb862a1a4106"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        3155.3211639122665
      ]
    },
    "topic": "/report/9160025077762a1b2f98d851f1ba9297"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        null
      ]
    },
    "topic": "/report/bfede33891c1919406b990bc95bd53d8"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        null
      ]
    },
    "topic": "/report/b70cfee7b78efeae0be9f9c0a409ac33"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        null
      ]
    },
    "topic": "/report/8cd689e4061f4c582157705b86b8f7b0"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        5933.435176888218
      ]
    },
    "topic": "/report/1b415fee34f1887a065542b78510d7a8"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        1298.187432116001
      ]
    },
    "topic": "/report/7a78fd57d25aeb2c6c75d78bacf1413c"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        3383.0126945891143
      ]
    },
    "topic": "/report/142529f7a5136047610bc280e0f82703"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        63.52514974829364
      ]
    },
    "topic": "/report/9ef75f9b9e63d02147c0d33576552a0e"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        -356.0661652201811
      ]
    },
    "topic": "/report/c2390a93b9df776529a10298a46d389f"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        -2285.367537121064
      ]
    },
    "topic": "/report/0c35d057a69bcb0d44a6984b234d454b"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        null
      ]
    },
    "topic": "/report/70b28ebdb7065137c82fe73585965a0b"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        0
      ]
    },
    "topic": "/report/056489be1c5acdaa19640bf1323d7de2"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        1009.6906361749816
      ]
    },
    "topic": "/report/ca16b743c6148dac270f630d4df2c790"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        1370.6297790809072
      ]
    },
    "topic": "/report/923cd85eb883c21f38f6f33bd2350c94"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        1381.4115095639122
      ]
    },
    "topic": "/report/87b9e9bfacf30c38502322dc5f640257"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        -4.363006439090896
      ]
    },
    "topic": "/report/9ccc7ca4abb6f66f6908f3045330c2fd"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        85.5647519656365
      ]
    },
    "topic": "/report/bf501a57e06fb4e21c9026647151d23d"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        5670.412063686152
      ]
    },
    "topic": "/report/fda50ef5c5eb5e2eae0c0902ff1c2015"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        1647.0145118539288
      ]
    },
    "topic": "/report/58ed31f7545468b2ad6b122ec78ba090"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        1673.3128922140359
      ]
    },
    "topic": "/report/38e8cbffd03cd460ede43bb0744c3b2c"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        0
      ]
    },
    "topic": "/report/a0760a07274b5138448a6369e41d4226"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        1492.6788484523863
      ]
    },
    "topic": "/report/d039643aa906a4b3fd3b95fdb7344a55"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        null
      ]
    },
    "topic": "/report/389357a97ae6676df84d269884d4d387"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        3452.7630092319528
      ]
    },
    "topic": "/report/b6db72ac968db42041604ad4f4d87cb0"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        null
      ]
    },
    "topic": "/report/c3dac0221e9b9fd516a2cb5d3453a03f"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        -2044.5490826787625
      ]
    },
    "topic": "/report/d27d6216468a745c56dd84a8800f20d5"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        1985.732524662409
      ]
    },
    "topic": "/report/feb149e0e08c2fb2f2d0d1179bec0e5f"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        null
      ]
    },
    "topic": "/report/459aed495a4a503c5b176be086a0243f"
  },
  {
    "dataModel": {
      "fieldList": [
        {
          "name": "timestamp",
          "label": "timestamp",
          "dataType": "TIME_STAMP",
          "measure": "CONTINUOUS",
          "storage": "TIME_STAMP"
        },
        {
          "name": "a",
          "label": "a",
          "dataType": "DOUBLE",
          "measure": "CONTINUOUS",
          "storage": "DOUBLE"
        }
      ],
      "inputs": [],
      "numOfFields": 2,
      "targets": []
    },
    "data": {
      "timestamp": [
        1604477280000
      ],
      "a": [
        null
      ]
    },
    "topic": "/report/82f110c42cb22183317a72cb10563486"
  }
]

let arr = []

let sum = 0
data1.forEach(item => {
  arr.push(item.data.a[0])
  sum += item.data.a[0]
})

// console.log(arr)
console.log(sum)
