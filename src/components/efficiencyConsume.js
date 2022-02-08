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

            ]
          },
          {
            "id": "y1",
            "name": "消耗"
          },
          {
            "id": "y2",
            "name": "单耗"
          }
        ],
        "rows": [

        ]
      },
      {
        "id": "lineData",
        "fields": [
          {
            "id": "x",
            "name": "month",
            "category": [

            ]
          },
          {
            "id": "y1",
            "name": "消耗"
          }
        ],
        "rows": [

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
            "$ref": "lineData"
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
  dataConfig: [
    {
      "query": "SELECT month,resource_used,resource_used/steam_yield as unit_consumption from unit_consumption where corp_id=$corp_id and item_id=$item_id and year=$year group by month",
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
            "field": "month"
          }
        },
        {
          "name": "addRowsData",
          "params": {
            "path": "data[0].rows",
            "fields": [
              "month",
              "resource_used",
              "unit_consumption"
            ]
          }
        }
      ]
    },
    {
      "query": "SELECT month,(sum(amount)*2777-sum(chuyanshui)*106)/(sum(meifen)*26647) as efficiency FROM steam_resource_consume WHERE  year=$year AND corp_id=$corp_id group by month",
      "arguments": {
        "corp_id": 2,
        "item_id": 1,
        "engine": "rdb",
        "year": 2017,
        "month": 1,
        "date": 1
      },
      "processors": [
        {
          "name": "addFieldsCategory",
          "params": {
            "path": "data[1].fields[0]",
            "field": "month"
          }
        },
        {
          "name": "addRowsData",
          "params": {
            "path": "data[1].rows",
            "fields": [
              "month",
              "efficiency"
            ]
          }
        }
      ]
    }
  ]
}
