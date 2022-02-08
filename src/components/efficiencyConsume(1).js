/* eslint-disable */
export default {
  visJson: {
    "data": [
      {
        "id": "columnData",
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
            "name": "消耗",
            "format": {
              "numericDecimals": 1
            }
          },
          {
            "id": "y2",
            "name": "单耗"
          },
          {
            "id": "y3",
            "name": "锅炉燃效"
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
              },
              {
                "id": "yAxis1",
                "opposite": true,
                "title": [],
                "tickLabelStyle": {
                  "fill": "rgba(106,211,136,0.85)"
                }
              },
              {
                "id": "yAxis2",
                "opposite": true,
                "title": [],
                "tickLabelStyle": {
                  "fill": "rgba(250,173,20,0.85)"
                },
                "titleStyle": {
                  "fill": "green",
                  "outline": "yellow",
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
          "name": "消耗",
          "data": {
            "$ref": "columnData"
          },
          "type": "column",
          "mainStyle": {
            "fill": "#21b1f7"
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
        },
        {
          "data": {
            "$ref": "columnData"
          },
          "name": "单耗",
          "type": "line",
          "mainStyle": {
            "fill": "rgba(106,211,136,0.85)"
          },
          "marker": {
            "mainStyle": {
              "fill": "rgba(106,211,136,0.85)"
            }
          },
          "yAxis": {
            "$ref": "yAxis1"
          },
          "position": [
            {
              "field": {
                "$ref": "y2"
              }
            },
            {
              "field": {
                "$ref": "x"
              }
            }
          ]
        },
        {
          "data": {
            "$ref": "columnData"
          },
          "name": "锅炉燃效",
          "type": "line",
          "mainStyle": {
            "fill": "rgba(250,173,20,0.85)"
          },
          "marker": {
            "mainStyle": {
              "fill": "rgba(250,173,20,0.85)"
            }
          },
          "yAxis": {
            "$ref": "yAxis2"
          },
          "position": [
            {
              "field": {
                "$ref": "y3"
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
            ""
          ]
        }
      }
    ],
    "legend": {
      "layout": "horizontal",
      "label": {
        "content": [
          "●"
        ]
      },
      "backgroundStyle": {
        "valign": "top",
        "align": "right"
      }
    }
  },
  dataConfig: {
    "query": "SELECT month,(sum(amount) * 2777 - sum(chuyanshui) * 106) / (sum(meifen) * 26647) AS efficiency,sum(resource_used) AS consumption,sum(resource_used)/sum(steam_yield) AS unit_consumption FROM efficiency_consume WHERE year=$year AND corp_id=$corp_id GROUP BY month",
    "arguments": {
      "corp_id": 2,
      "engine": "rdb",
      "item_id": 1,
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
            "consumption",
            "unit_consumption",
            "efficiency"
          ]
        }
      }
    ]
  }
}
