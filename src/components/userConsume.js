/* eslint-disable */
export default {
  visJson: {
    "data": [
      {
        "id": "columnData",
        "fields": [
          {
            "id": "x",
            "name": "name",
            "category": []
          },
          {
            "id": "y",
            "name": "SUM(amount)",
            "format": {
              "numericDecimals": 1
            }
          },
          {
            "id": "z",
            "name": "city",
            "category": [
              "Tokyo"
            ]
          }
        ],
        "rows": []
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
                "scale": {
                  "spans": {
                    "min": 0
                  }
                }
              }
            ]
          },
          {
            "axis": [
              {
                "tickLabelStyle": {
                  "fill": "rgb(24,144,255)",
                  "font": {
                    "textDecoration": "underline"
                  }
                }
              }
            ]
          }
        ]
      },
      "elements": [
        {
          "type": "column",
          "grouping": true,
          "data": {
            "$ref": "columnData"
          },
          "position": [
            {
              "field": {
                "$ref": "y"
              }
            },
            {
              "field": {
                "$ref": "x"
              }
            }
          ],
          "layoutPadding": [
            {
              "field": {
                "$ref": "z"
              },
              "mapping": [
                {
                  "at": 0,
                  "value": {
                    "pointPadding": 0.3,
                    "groupPadding": 0.1
                  }
                }
              ]
            }
          ],
          "mainStyle": {
            "fill": "rgba(106,211,136,0.85)"
          }
        }
      ]
    },
    "titles": [
      {
        "type": "title",
        "label": {
          "content": [
            ""
          ]
        }
      }
    ]
  },
  dataConfig: {
    "query": "SELECT name,sum(amount) as sum,0 as z FROM steam_amount_view WHERE year=2017 AND month = 1 AND corp_id = 2 GROUP BY name",
    "arguments": {
      "corp_id": 2,
      "engine": "rdb",
      "month": 1,
      "year": 2017
    },
    "processors": [
      {
        "name": "addFieldsCategory",
        "params": {
          "path": "data[0].fields[0]",
          "field": "name"
        }
      },
      {
        "name": "addRowsData",
        "params": {
          "path": "data[0].rows",
          "fields": [
            "name",
            "sum",
            "z"
          ]
        }
      }
    ]
  }
}
