/* eslint-disable */
export default {
  visJson: {
    "data": [
      {
        "fields": [
          {
            "id": "date",
            "category": []
          },
          {
            "id": "output"
          },
          {
            "id": "z",
            "category": [
              "生产量",
              "消费量"
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
                },
                "scale": {
                  "fitData": true,
                  "spans": {
                    "max": 80
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
                  "fill": "#666",
                  "font": {
                    "textDecoration": "none"
                  }
                }
              }
            ]
          }
        ]
      },
      "elements": [
        {
          "type": "area",
          "grouping": true,
          "position": [
            {
              "field": {
                "$ref": "output"
              }
            },
            {
              "field": {
                "$ref": "date"
              }
            }
          ],
          "mainStyle": {
            "stroke": {
              "width": 2
            }
          },
          "color": [
            {
              "field": {
                "$ref": "z"
              },
              "mapping": [
                {
                  "at": 1,
                  "value": {
                    "type": "linear",
                    "angle": 90,
                    "colors": [
                      {
                        "offset": 0,
                        "color": "rgba(106,211,136,1)"
                      },
                      {
                        "offset": 1,
                        "color": "rgba(106,211,136,0)"
                      }
                    ]
                  }
                },
                {
                  "at": 0,
                  "value": {
                    "type": "linear",
                    "angle": 90,
                    "colors": [
                      {
                        "offset": 0,
                        "color": "rgba(24,144,255,1)"
                      },
                      {
                        "offset": 1,
                        "color": "rgba(24,144,255,0)"
                      }
                    ]
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    "legend": {
      "layout": "horizontal",
      "y": 0,
      "x": 0,
      "backgroundStyle": {
        "valign": "top",
        "align": "right"
      },
      "label": {
        "content": [
          "●"
        ]
      }
    },
    "titles": [
      {
        "type": "title",
        "label": {
          "mainStyle": {
            "fill": "transparent"
          },
          "backgroundStyle": {
            "align": "left"
          },
          "content": [
            ""
          ]
        }
      }
    ],
    "theme": "theme_white"
  },
  dataConfig: {
    "query": "SELECT date,sum(chanliang) as output,sum(xiaofeiliang) as consume FROM steam_create_consume WHERE year=2017 AND corp_id=2 GROUP BY month",
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
          "field": "date"
        }
      },
      {
        "name": "addFacetField",
        "params": {
          "facetField": "facetField",
          "flagField": "flagField",
          "targetFields": [

            "output",
            "consume"
          ]
        }
      },
      {
        "name": "addRowsData",
        "params": {
          "path": "data[0].rows",
          "fields": [
            "date",
            "facetField",
            "flagField"
          ]
        }
      }
    ]
  }
}
