<template>
  <el-container>
    <el-header>
      <div class="alarm-title">
        <span class="el-icon-back headerIcon" @click="toHome"></span>
        告警详情
      </div>
    </el-header>
    <el-main>
      <div class="alarm-details-main" style="border-bottom: 1px solid #ccc">
        <div class="alarm-details-title">告警信息</div>
        <div class="alarm-details-main">
          <p><label>描述：</label>{{log.description}}</p>
          <p>
            <span><label>告警级别：</label><span :class="log.alarmLevel"></span>{{log.alarmLevel | level}}级</span>
            <span style="margin-left: 60px"><label>发生时间：</label>{{log.timeStamp | datetimeFormat}}</span>
          </p>
        </div>
      </div>
      <el-menu default-active="1" style="padding: 0 10px;position: relative" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1">告警数据</el-menu-item>
        <el-menu-item index="2">实时数据</el-menu-item>
        <el-date-picker
          style="position: absolute;bottom: 7px;left: 300px"
          v-show="chartIndex == '1'"
          v-model="times"
          type="datetimerange"
          value-format="timestamp"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
      </el-menu>
      <h3 style="padding: 0 0 15px 30px;box-shadow: 0 3px 3px rgba(0, 21, 41, .08)">
        {{alarmLabel}}<span style="font-size: 14px;padding-left: 20px;font-weight: normal">{{alarmUnit ? '单位：' + alarmUnit : ''}}</span>
      </h3>
      <div class="chart" v-show="chartIndex == '1'">
        <vis-chart-adapter :config="visConfigHistory" v-if="visConfigHistory" ref="visAdapterHistory"></vis-chart-adapter>
      </div>
      <div class="chart" v-show="chartIndex == '2'">
        <vis-chart-adapter :config="visConfig" v-if="visConfig" ref="visAdapter"></vis-chart-adapter>
      </div>
      <div class="alarm-details-main" v-show="chartIndex == '1'">
        <div class="alarm-details-title" style="margin-bottom: 20px">通知记录</div>
        <el-table
          stripe
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="receiveName"
            label="接收人">
          </el-table-column>
          <el-table-column
            prop="notificationType"
            label="通知方式">
            <template slot-scope="scope">
              {{scope.row.notificationType.replace('SYSMESSAGE','系统消息')}}
            </template>
          </el-table-column>
          <el-table-column
            prop="notifyTime"
            label="通知时间">
            <template slot-scope="scope">
              {{scope.row.notifyTime | datetimeFormat}}
            </template>
          </el-table-column>
        </el-table>
      </div>
    </el-main>
  </el-container>
</template>

<script>
  import AlarmLogService from '../api/logApi'
  import {VisChartAdapter} from 'as-vis-container'
  import AlarmConfigurationService from '../api/configurationApi'


  export default {

    components: {VisChartAdapter},

    data() {
      return {
        log: {
          description: '',
          alarmLevel: '',
          timeStamp: '',
          alarmData: '',
          fieldName: '',
          dataSource: '',
          groups: '',
          targets: '',
          alarmCondition: null
        },
        visConfig: null,
        visConfigHistory: null,
        chartIndex: 1,
        times: [],
        tableData: [],

        DAY_TIME: 3600 * 24 * 1000,// 一天
        MIN_TIME: 60 * 1000, // 一分钟
        MOUTH_TIME: 3600 * 24 * 1000 * 30, // 一月
        HOUER_TIME: 3600 * 1000, // 一小时,

        alarmLabel: '',
        alarmUnit: ''
      }
    },

    methods: {

      handleSelect(index) {
        this.chartIndex = index
        if (index == 1) {
          this.setOptionHistory(this.log)
        } else if (index == 2) {
          this.setOption(this.log)
        }
      },

      init() {
        AlarmLogService.findOneRecord(this.$route.params.id).then(res => {
          this.log = res
          this.log.fieldName = res.alarmCondition[0].field
          this.tableData = res.records
          this.setOptionHistory(this.log)
          this.getLabelAndUnit(this.log.dataSource)
        })
      },

      getLabelAndUnit(dataSource) {
        AlarmConfigurationService.getSourceTableData({
          pageIndex: 0,
          pageSize: 10000
        }).then(res => {
          let dataSourceId = res.filter(item => {
            return dataSource == item.name
          })[0].id

          AlarmConfigurationService.getGroupAndAlarmFields({
            datasourceId: dataSourceId,
            pageIndex: 0,
            pageSize: 10000
          }).then(res => {
            res.forEach(item => {
              if(this.log.fieldName == item.name){
                this.alarmLabel = item.label || item.name
                this.alarmUnit = item.unit
              }
            })
          })
        })
      },

      toHome() {
        this.$router.push({path: '/LogModule'})
      },

      //实时记录查询
      setOption(param) {
        const self = this
        this.visConfig = {
          dataConfig: {
            "query": `select timestamp,${ param.fieldName } from ${ param.dataSource }` + this.queryWheres(param.groupData),
            "arguments":
              {
                "engine": "realtime",
              },
            "processors": [
              {
                "name": "addRowsData",
                "params":
                  {
                    "path": "data[0].rows",
                    "fields": [
                      "timestamp",
                      `${ param.fieldName }`
                    ]
                  }
              }]
          },
          visJson: {
            "data": [
              {
                "fields": [
                  {
                    "id": "fX",
                    "unit": "second",
                    "format":
                      {
                        "datePattern": "HH:mm:ss"
                      }
                  },
                  {
                    "id": "fY",
                    "name": '',
                    "format": {
                      "numericDecimals": 2
                    }
                  }],
                "rows": []
              }],
            "grammar":
              {
                "graph": "basic",
                "coordinates":
                  {
                    "dimensions": [
                      {
                        "axis": [
                          {
                            "id": "yAxis",
                            "title": [
                              ""
                            ],
                            "gridStyle":
                              {
                                "stroke":
                                  {
                                    "width": 1
                                  }
                              },
                            "scale": {
                              "spans": self.getSpans(param)
                            },
                            "lineGuides": self.getAlarmLines(param)
                          }]
                      },
                      {
                        "axis": [
                          {
                            "id": "xAxis",
                            "title": [
                              ""
                            ],
                            "gridStyle":
                              {
                                "stroke":
                                  {
                                    "width": 0
                                  }
                              },
                            "lineGuides": [{
                              "label": '',
                              "value": param.timeStamp,
                              "labelStyle": {
                                "align": "right",
                                "valign": "middle"
                              },
                              "mainStyle": {
                                "fill": '#000',
                                "stroke": {
                                  "width": 1,
                                  "style": "solid"
                                }
                              }
                            }]
                          }]
                      }]
                  },
                "elements": [
                  {
                    "id": "e1",
                    "type": "spline",
                    "label":
                      {
                        "content": [
                          {
                            "$ref": "fY"
                          }]
                      },
                    "tooltipContent": [
                      "时 间: ",
                      {
                        "$ref": "fX",
                      },
                      "<br>",
                      "数据值: ",
                      {
                        "$ref": "fY"
                      }
                    ],
                    "position": [
                      {
                        "field":
                          {
                            "$ref": "fY"
                          }
                      },
                      {
                        "field":
                          {
                            "$ref": "fX"
                          }
                      }],
                    "mainStyle":
                      {
                        "fill": "rgb(29,138,252)"
                      }
                  }]
              },
            "tooltip": {
              "share": true
            },
            "titles": [
              {
                "type": "title",
                "label":
                  {
                    "content": [
                      // this.dataMes.title
                      ''
                    ]
                  }
              }],
            "style":
              {
                "fill": "rgba(0,0,0,0)"
              }
          }
        }
        if (this.$refs.visAdapter) {
          this.$refs.visAdapter.setConfig(this.visConfig)
        }

      },

      checkTime(time) {
        if (time >= this.MIN_TIME && time <= this.HOUER_TIME) {
          return this.MIN_TIME * 15
        } else if (time >= this.HOUER_TIME && time <= this.DAY_TIME) {
          return this.HOUER_TIME
        } else if (time >= this.DAY_TIME && time <= this.MOUTH_TIME) {
          return this.DAY_TIME
        } else {
          return time
        }
      },

      //告警记录查询
      setOptionHistory(param) {
        const self = this
        if(!self.times) self.times = []
        let startTime = self.times[0] || param.timeStamp - 900000
        let endTime = self.times[1] || param.timeStamp + 900000
        let downsample = self.times.length == 0 ? 60000 : this.checkTime(endTime - startTime)

        let query = ''

        self.times.length == 0 ?
          query = `select time as timestamp, ${ param.fieldName } from ${param.dataSource}${this.queryWheres(param.groupData)}` :
          query = `select downsample(${ downsample }) as timestamp, avg(${ param.fieldName }) as ${ param.fieldName } from ${param.dataSource}${this.queryWheres(param.groupData)}`

        this.visConfigHistory = {
          dataConfig: {
            "query": query,
            "arguments": {
              "engine": "tsdb",
              "startTime": startTime,
              "endTime": endTime
            },
            "processors": [
              {
                "name": "computeTimeFieldSetting",
                "params":
                  {
                    "path": "data[0].fields[0]",
                    "timeField": "timestamp"
                  }
              },
              {
                "name": "addRowsData",
                "params":
                  {
                    "path": "data[0].rows",
                    "fields": [
                      "timestamp",
                      param.fieldName
                      // 'PT_1511'
                    ]
                  }
              }]
          },
          visJson: {
            "data": [
              {
                "fields": [
                  {
                    "id": "fX",
                    "unit": "second",
                    "format": {
                      "datePattern": "hh:mm:ss"
                    }
                  },
                  {
                    "id": "fY",
                    "name": '',
                    "format": {
                      "numericDecimals": 2
                    }
                  }
                ],
                "rows": []
              }],
            "tooltip": {},
            "grammar": {
              "graph": "basic",
              "coordinates": {
                "dimensions": [
                  {
                    "axis": [
                      {
                        "id": "yAxis",
                        "title": [
                          ""
                        ],
                        "gridStyle": {
                          "stroke": {
                            "width": 1
                          }
                        },
                        "scale": {
                          "spans": self.getSpans(param)
                        },
                        "lineGuides": self.getAlarmLines(param)
                      }
                    ]
                  },
                  {
                    "axis": [
                      {
                        "id": "xAxis",
                        "title": [
                          ""
                        ],
                        "gridStyle":
                          {
                            "stroke":
                              {
                                "width": 0
                              }
                          },
                        "scale": {
                          "spans": {
                            "tickDelta": self.times.length == 0 ? 1 : 2
                            // "tickAmount": 15
                          }
                        },
                        "lineGuides": [{
                          "label": '',
                          "value": param.timeStamp,
                          "labelStyle": {
                            "align": "right",
                            "valign": "middle"
                          },
                          "mainStyle": {
                            "fill": '#000',
                            "stroke": {
                              "width": 1,
                              "style": "solid"
                            }
                          }
                        }]
                      }]
                  }
                ]
              },
              "elements": [
                {
                  "id": "e1",
                  "type": "spline",
                  "label": {
                    "content": [
                      {
                        "$ref": "fY"
                      }
                    ]
                  },
                  "marker": {},
                  "tooltipContent": [
                    "时 间:",
                    {
                      "$ref": "fX"
                    },
                    "<br>",
                    "数据值",
                    {
                      "source": {
                        "$ref": "fY"
                      }
                    },
                    ": ",
                    {
                      "$ref": "fY"
                    }
                  ],
                  "position": [
                    {
                      "field": {
                        "$ref": "fY"
                      }
                    },
                    {
                      "field": {
                        "$ref": "fX"
                      }
                    }
                  ],
                  "mainStyle": {
                    "fill": "rgb(29,138,252)"
                  }
                }
              ]
            },
            "titles": [
              {
                "type": "title",
                "label": {
                  "content": [
                    ''
                  ]
                }
              }
            ],
            "style": {
              "fill": "rgba(0,0,0,0)"
            }
          }
        }

        if (this.$refs.visAdapterHistory) {
          this.$refs.visAdapterHistory.setConfig(this.visConfigHistory)
        }

      },

      getAlarmLines(param) {
        const self = this
        let alarmRule = param.alarmCondition[0].rule

        if (param.alarmCondition[0].type == 'CONTINUOUS') {
          const lineColor = {
            low1: '#1E34CC',
            low2: '#0090FF',
            low3: '#00D3CA',
            low4: '#8EDC00',
            high4: '#FFED00',
            high3: '#FFC300',
            high2: '#FF7031',
            high1: '#E1000F',
          }

          let lv = param.alarmLevel.split('').pop()
          let data = JSON.parse(param.alarmData)[param.fieldName]   //获取JSON的值

          let [thisLevel, value, label] = ['', '', '']
          if (alarmRule[lv]) {
            if ((alarmRule[lv].high && data >= alarmRule[lv].high) || alarmRule[lv].high == 0) {
              thisLevel = 'high' + lv
              value = alarmRule[lv].high
              label = '高' + self.levelFilter(lv) + '级'
            } else if((alarmRule[lv].low && data <= alarmRule[lv].low) || alarmRule[lv].low == 0){
              thisLevel = 'low' + lv
              value = alarmRule[lv].low
              label = '低' + self.levelFilter(lv) + '级'
            }
          }

          return [{
            "label": label,
            "value": value,
            "labelStyle": {
              "align": "right",
              "valign": "middle"
            },
            "mainStyle": {
              "fill": lineColor[thisLevel],
              "stroke": {
                "width": 2,
                "style": "dash"
              }
            }
          }]
        } else {
          return []
        }
      },

      getSpans(param) {
        const [res,level] = [JSON.parse(param.alarmData)[param.fieldName],
          param.alarmLevel.split('').pop()]
        const rule = param.alarmCondition[0].rule[level]

        let spans = {}
        if(rule && rule.high && res > rule.high) {
          spans = {
            min: rule.high - (res - rule.high)
          }
        }

        if(rule && rule.low && res < rule.low) {
          spans = {
            max: rule.low + (rule.low - res)
          }
        }

        return spans
      },

      queryWheres(data) {
        let [groupData,result] = ['','']
        if(data) groupData = JSON.parse(data)

        if(Object.keys(groupData).length > 0){
          let index = 0
          for(let i in groupData){
            if(index == 0){
              result += ` where ${i} = '${groupData[i]}'`
            }else {
              result += ` and ${i} = '${groupData[i]}'`
            }
            index ++
          }
        }

        return result
      },

      levelFilter(num) {
        if(num == 1){
          return 'Ⅰ'
        }else if(num == 2){
          return 'Ⅱ'
        }else if(num == 3){
          return 'Ⅲ'
        }else if(num == 4){
          return 'Ⅳ'
        }
      }
    },

    created() {
      this.init()
    },

    watch: {
      times() {
        this.setOptionHistory(this.log)
      },
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .chart {
    border: 1px solid #ccc;
    height: 430px
  }
</style>
