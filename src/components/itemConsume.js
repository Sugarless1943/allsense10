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
        "rows": []
      },
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
          "field": "date"
        }
      },
      {
        "name": "addRowsData",
        "params": {
          "path": "data[0].rows",
          "fields": [
            "date",
            "resource_used",
            "unit_consumption"
          ]
        }
      }
    ]
  }
}

function getConsumeChartsConfig(item_id) {
  const visQuery = this.getQueryConsumeParamsObj({
    item_id: item_id,
    dateType: this.curDateType
  })
  const visConfig = _.cloneDeep(ChartsConfigItemConsume)
  visConfig.dataConfig.query = visQuery.query
  visConfig.dataConfig.arguments = visQuery.arguments
  if (this.curDateType === 'year') {
    visConfig.dataConfig.processors[0].params.field = 'month'
    visConfig.dataConfig.processors[1].params.fields[0] = 'month'
  }
  return visConfig
}


// 谭熠帆 2018/7/24 8:44:03
consumeConfig: [
  { item_id: 3, label: '原水' },
  { item_id: 8, label: '除盐水' },
  { item_id: 4, label: '生产用电' },
  { item_id: 10, label: '尿素' },
  { item_id: 11, label: '片碱' },
  { item_id: 12, label: '石灰' },
  { item_id: 7, label: '回水' },
  { item_id: 2, label: '柴油' },
  { item_id: 9, label: '生活用电' }
],


function chartsConsumeList() {
  const list = []
  this.consumeConfig.forEach((config) => {
    if (!this.isEffiShowMore) {
      if (list.length > 2) {
        return list
      }
    }
    list.push({
      item_id: config.item_id,
      label: config.label,
      visConfig: this.getConsumeChartsConfig(config.item_id)
    })
  })
  return list
}
