let data = [
  {
    "timeSeries": "Weather:fd198350-6349-3d43-b6b9-fc7bd2d6e8f9:temperature",
    "label": "weather_0",
    "type": "DOUBLE",
    "desp": "天气0"
  },
  {
    "timeSeries": "Weather:12f16889-3ad6-3337-beda-c56c978add86:temperature",
    "label": "weather_1",
    "type": "DOUBLE",
    "desp": "天气1"
  },
  {
    "timeSeries": "Weather:25184ab9-3070-3663-b74c-5187e1b1809b:temperature",
    "label": "weather_2",
    "type": "DOUBLE",
    "desp": "天气2"
  },
  {
    "timeSeries": "Weather:a6ac062b-870e-346d-9ece-3ba5cc4049bd:temperature",
    "label": "weather_3",
    "type": "DOUBLE",
    "desp": "天气3"
  },
  {
    "timeSeries": "Weather:a56ce0a6-e266-33a3-92e9-d6f1f8bab1c4:temperature",
    "label": "weather_4",
    "type": "DOUBLE",
    "desp": "天气4"
  },
  {
    "timeSeries": "Weather:bca7c601-17f9-3b70-befe-9c4cdc3a9f69:temperature",
    "label": "weather_5",
    "type": "DOUBLE",
    "desp": "天气5"
  },
  {
    "timeSeries": "Weather:69a86c8f-3b48-3b93-963f-5e9904423508:temperature",
    "label": "weather_6",
    "type": "DOUBLE",
    "desp": "天气6"
  },
  {
    "timeSeries": "Weather:acfab876-cefb-3230-86c2-14726a849358:temperature",
    "label": "weather_7",
    "type": "DOUBLE",
    "desp": "天气7"
  },
  {
    "timeSeries": "Weather:99a789bc-bfe1-3940-b1ce-7789c3f75421:temperature",
    "label": "weather_8",
    "type": "DOUBLE",
    "desp": "天气8"
  },
  {
    "timeSeries": "Weather:ff542d95-8f84-3eb4-a2d5-6dc61ee284c1:temperature",
    "label": "weather_9",
    "type": "DOUBLE",
    "desp": "天气9"
  },
  {
    "timeSeries": "Weather:54b319ec-ea69-32da-b1a5-e293088cea9d:temperature",
    "label": "weather_10",
    "type": "DOUBLE",
    "desp": "天气10"
  },
  {
    "timeSeries": "Weather:5a2911a0-95e2-31ee-90c5-b273e26d28dc:temperature",
    "label": "weather_11",
    "type": "DOUBLE",
    "desp": "天气11"
  },
  {
    "timeSeries": "Weather:906965f3-62b7-3b1d-8167-a693f2d66f2d:temperature",
    "label": "weather_12",
    "type": "DOUBLE",
    "desp": "天气12"
  },
  {
    "timeSeries": "Weather:ae31bfd0-19b7-3203-b2ee-b1e9f45bad66:temperature",
    "label": "weather_13",
    "type": "DOUBLE",
    "desp": "天气13"
  },
  {
    "timeSeries": "Weather:7b201074-d851-3aef-8131-73e2b8c79958:temperature",
    "label": "weather_14",
    "type": "DOUBLE",
    "desp": "天气14"
  },
  {
    "timeSeries": "Weather:726cecca-22b7-332f-972d-33886b021991:temperature",
    "label": "weather_15",
    "type": "DOUBLE",
    "desp": "天气15"
  },
  {
    "timeSeries": "Weather:d4c1e9ed-de61-390d-ab87-39b9f07f0e0c:temperature",
    "label": "weather_16",
    "type": "DOUBLE",
    "desp": "天气16"
  },
  {
    "timeSeries": "Weather:cd7b5e64-777a-3afb-901c-2ab58da0398f:temperature",
    "label": "weather_17",
    "type": "DOUBLE",
    "desp": "天气17"
  },
  {
    "timeSeries": "Weather:1112de2f-e000-3b5b-a436-44c88a7bee3f:temperature",
    "label": "weather_18",
    "type": "DOUBLE",
    "desp": "天气18"
  },
  {
    "timeSeries": "Weather:1c448da6-d776-35c3-be63-37564e462419:temperature",
    "label": "weather_19",
    "type": "DOUBLE",
    "desp": "天气19"
  },
  {
    "timeSeries": "Weather:4af8b3fd-4e2f-33f4-809b-b3ef673a746d:temperature",
    "label": "weather_20",
    "type": "DOUBLE",
    "desp": "天气20"
  },
  {
    "timeSeries": "Weather:85766e21-2b7c-3d44-bfed-a483e81267ea:temperature",
    "label": "weather_21",
    "type": "DOUBLE",
    "desp": "天气21"
  },
  {
    "timeSeries": "Weather:17f7a527-eb8f-3e08-a4eb-0f385f9452ac:temperature",
    "label": "weather_22",
    "type": "DOUBLE",
    "desp": "天气22"
  },
  {
    "timeSeries": "Weather:30f61aef-1400-3d1e-883d-9cdb5610b46f:temperature",
    "label": "weather_23",
    "type": "DOUBLE",
    "desp": "天气23"
  }
]

let res = []

data.forEach(item => {
  res.push(item.label)
})

console.log(JSON.stringify(res))
