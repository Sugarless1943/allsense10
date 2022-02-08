/* eslint-disable */
export default {
  visJson: {
    "data": [
      {
        "id": "barData",
        "fields": [
          {
            "id": "month",
            "category": [],
            "format": {
              "suffix": "月"
            }
          },
          {
            "id": "output"
          },
          {
            "id": "z",
            "category": [
              "消费量",
              "生产量"
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
                "title": [
                  "(t)"
                ],
                "titleStyle": {
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
              {
                "title": [],
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
          "data": {
            "$ref": "barData"
          },
          "type": "column",
          "grouping": false,
          "mainStyle": {
            "stroke": {
              "width": 0
            }
          },
          "position": [
            {
              "field": {
                "$ref": "output"
              }
            },
            {
              "field": {
                "$ref": "month"
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
                    "pointPadding": 0.2,
                    "groupPadding": 0.2
                  }
                },
                {
                  "at": 1,
                  "value": {
                    "pointPadding": 0.3,
                    "groupPadding": 0.24
                  }
                }
              ]
            }
          ],
          "color": [
            {
              "field": {
                "$ref": "z"
              },
              "mapping": [
                {
                  "at": 0,
                  "value": "rgba(106,211,136,0.85)"
                },
                {
                  "at": 1,
                  "value": "rgba(24,144,255,0.85)"
                }
              ]
            }
          ]
        }
      ]
    },
    "legend": {
      "layout": "horizontal",
      "backgroundStyle": {
        "valign": "top",
        "align": "right"
      }
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
            "左上标题(不需要可设置颜色为透明)"
          ]
        }
      }
    ]
  },
  dataConfig: {
    "query": "SELECT month,sum(chanliang) as output,sum(xiaofeiliang) as consume FROM steam_create_consume WHERE year=$year AND corp_id=$corp_id GROUP BY month",
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
          "field": "month"
        }
      },
      {
        "name": "addFacetField",
        "params": {
          "facetField": "facetField",
          "flagField": "flagField",
          "targetFields": [
            "consume",
            "output"
          ]
        }
      },
      {
        "name": "addRowsData",
        "params": {
          "path": "data[0].rows",
          "fields": [
            "month",
            "facetField",
            "flagField"
          ]
        }
      }
    ]
  }
}
