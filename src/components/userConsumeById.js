/* eslint-disable */
export default {
  visJson: {
    "data": [
      {
        "id": "lineData",
        "fields": [
          {
            "id": "x",
            "name": "month",
            "category": [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "10",
              "11",
              "12"
            ]
          },
          {
            "id": "y1",
            "name": "消耗"
          }
        ],
        "rows": [
          [
            0,
            123
          ],
          [
            1,
            234
          ],
          [
            2,
            345
          ],
          [
            3,
            345
          ],
          [
            4,
            345
          ],
          [
            5,
            345
          ],
          [
            6,
            345
          ],
          [
            7,
            234
          ],
          [
            8,
            111
          ],
          [
            9,
            234
          ],
          [
            10,
            453
          ],
          [
            11,
            234
          ]
        ]
      }
    ],
    "grammar": {
      "graph": "basic",
      "coordinates": {
        "dimensions": [
          {
            "axis": [
              {
                "id": "yAxis",
                "title": [
                  "(t)"
                ],
                "titleStyle": {
                  "valign": "top",
                  "offset": 0,
                  "rotation": 0,
                  "bounds": {
                    "y": -10
                  }
                }
              }
            ]
          },
          {
            "axis": [
              {}
            ]
          }
        ]
      },
      "elements": [
        {
          "data": {
            "$ref": "lineData"
          },
          "name": "",
          "type": "line",
          "mainStyle": {
            "fill": "rgba(106,211,136,0.85)"
          },
          "marker": {
            "mainStyle": {
              "fill": "rgba(106,211,136,0.85)"
            }
          },
          "position": [
            {
              "field": {
                "$ref": "y1"
              }
            },
            {
              "field": {
                "$ref": "x"
              }
            }
          ]
        }
      ]
    },
    "titles": [
      {
        "type": "title",
        "label": {
          "backgroundStyle": {
            "align": "left"
          },
          "mainStyle": {
            "fill": "transparent"
          },
          "content": [
            "占位"
          ]
        }
      }
    ]
  },
  dataConfig: {
    "query": "SELECT month,sum(amount) as consume FROM steam_amount WHERE user_id=$user_id AND year=$year AND corp_id=2 group by month",
    "arguments": {
      "corp_id": 2,
      "user_id": 1,
      "engine": "rdb",
      "month": 1,
      "year": 2017
    },
    "processors": [
      {
        "name": "addFieldsCategory",
        "params": {
          "path": "data[0].fields[0]",
          "field": "date"
        }
      },
      {
        "name": "addRowsData",
        "params": {
          "path": "data[0].rows",
          "fields": [
            "date",
            "consume"
          ]
        }
      }
    ]
  }
}
