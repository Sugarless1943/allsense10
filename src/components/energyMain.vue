<template>
  <section class="energyContainers">
    <div class="main">
      <div>
        {{energyTime}} <span v-show="calibrationShow">{{optTime}}</span>
      </div>
      <!--供需平衡-->
      <section class="balance">
        <span>智 能 司 炉</span>
        <div>
          <chart-item @setRecord="setRecord" ref="steamChart"></chart-item>
        </div>
        <div>
          <chart-item @setRecord="setRecord" ref="pressureChart"></chart-item>
        </div>
        <div>
          <chart-item @setRecord="setRecord" :cons_30min="cons_30min" :calibrationShow="calibrationShow" ref="nowChart"></chart-item>
        </div>
      </section>

      <!--智能操作-->
      <section class="handle">
        <header class="hHeader">
          <p>人工智能操盘建议<span v-show="operTip">：</span><span style="color: #50E3C2">{{operTip}}</span></p>
          <span>请根据提示，将相关设备参数调整至校准值。以达到最佳效果</span>
        </header>
        <main>
          <div class="pointItem">
            <TableItem :calibrationShow="calibrationShow" :titleMessage="geiFengJi1_data"></TableItem>
          </div>
          <div class="pointItem">
            <TableItem :calibrationShow="calibrationShow" :titleMessage="geiFengJi2_data"></TableItem>
          </div>
          <div class="pointItem">
            <TableItem :calibrationShow="calibrationShow" :titleMessage="fengJi_data"></TableItem>
          </div>
        </main>
      </section>

      <!--燃效节能-->
      <section class="efficiency">
        <div class="eLeft">
          <chart-item @setRecord="setRecord" ref="smokeChart"></chart-item>
        </div>
        <div class="eMid">
          <VisChartItem @setRecord="setRecord" style="width: 100%;height: 100%"></VisChartItem>
        </div>
        <div class="eRight">
          <chart-item @setRecord="setRecord" ref="boilerPreChart"></chart-item>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
  import VisChartItem from './components/energyComponents/VisChartItem'
  import chartItem from './components/energyComponents/chartItem'
  import TableItem from './components/energyComponents/tableItem'
  import ExpectPercent from './components/energyComponents/expectPercent'
  import AllSave from './components/energyComponents/meifenSave'
  import getHandle from './mixin/getHandleData'
  import EfficiencyTab from '../../assets/images/efficiencyTab.png'
  import firemanService from './api/firemanService'
  import { Loading } from 'element-ui';
  import moment from 'moment';

  export default {
    name: "energyMain",
    components: {chartItem, VisChartItem, TableItem, ExpectPercent, AllSave},
    mixins: [ getHandle ],
    data () {
      return {
        EfficiencyTab: EfficiencyTab,
        param_pressure: '',
        param_o2: '',
        calibrationShow: false,
        timer: null,
        energyTime: moment(new Date()).format('YYYY年MM月DD日 HH:mm:ss'),

        record: {
          outPressure: '',  //出口管网压力
          inputTemperature: '',
          outTemperature: '',
          instaneousFlow: '',
          instaneousFlow2: '',
          oxygenContent1: '',
          heatEfficiency: '',
          negPressure1: '',
          negPressure2: '',
          paramPressure: '',
          paramO2: '',
          runFrequency1DownFeedback: '',
          runFrequency1DownCalibration: '',
          runFrequency1UpFeedback: '',
          runFrequency1UpCalibration: '',
          runFrequency2DownFeedback: '',
          runFrequency2DownCalibration: '',
          runFrequency2UpFeedback: '',
          runFrequency2UpCalibration: '',
          runFrequency3DownFeedback: '',
          runFrequency3DownCalibration: '',
          runFrequency3UpFeedback: '',
          runFrequency3UpCalibration: '',
          runFrequency4DownFeedback: '',
          runFrequency4DownCalibration: '',
          runFrequency4UpFeedback: '',
          runFrequency4UpCalibration: '',
          runFrequencyYinFengjiFeedback: '',
          runFrequencyYinFengjiCalibration: '',
          runFrequencyErCiFengjiFeedback: '',
          runFrequencyErCiFengjiCalibration: '',
          runFrequencyYiCiFengjiFeedback: '',
          runFrequencyYiCiFengjiCalibration: ''
        }
      }
    },
    methods: {
      init() {
        //出口管网压力
        this.getBaseLine(res => {
          let outPipe = {
            field: 'outPressure',
            query: 'select avg(outPressure) as outPressure, downsample(10000) as timestamp from SteamConvertingUnit where uid in (\'e737ca68-b989-4df3-9521-36102fefb7ae\', \'ebe0f83d-e0c2-4cea-8501-2a1ceab71b1d\')',
            color: '#21b1f7',
            unit: 'MPa',
            name: '出口管网压力',
            scale: {
              fitData: true,
              spans: {
                tickPositions: [0.7, 0.8, 0.9, 1]
              }
            },
            alarm: '减温减压平台压力'
          }
          let smokeO2 = {
            field: 'oxygenContent1',
            query: 'select avg(oxygenContent1) as oxygenContent1, downsample(10000) as timestamp from FluePipe where uid=\'a05b5f3c-f4ae-415c-aef0-0495a9ec1a13\'',
            color: '#21b1f7',
            unit: '%',
            name: '排烟含氧量',
            scale: {
              fitData: true,
              spans: {
                max: 15,
                min: 0,
                tickDelta: 2.5    // y轴刻度
              }
            },
            alarm: '烟道含氧量',
            base: {
              finalData: '--',
              baseLine: false
            }
          }

          if(res) {
            if(res.param_pressure) {
              const paramPressure = res.param_pressure.toFixed(4)
              outPipe.base = {
                finalData: paramPressure,
                baseLine: true
              }
              this.record.paramPressure = paramPressure
            }
            // if(res.param_o2) {
            //     const paramO2 = res.param_o2
            //     smokeO2.base = paramO2
            //     this.record.paramO2 = paramO2
            // }
          }

          this.$refs.steamChart.baseInit(outPipe)
          this.$refs.smokeChart.baseInit(smokeO2)
        })

        //减温减压平台温度
        this.$refs.pressureChart.doubleInit({
          field: ['inputTemperature', 'outTemperature'],
          query: 'select downsample(10000) as time, avg(inputTemperature) as inputTemperature, avg(outTemperature) as outTemperature from SteamConvertingUnit where uid in (\'e737ca68-b989-4df3-9521-36102fefb7ae\', \'ebe0f83d-e0c2-4cea-8501-2a1ceab71b1d\')',
          color: ['#21b1f7','#FAAD14'],
          unit: '℃',
          names: ['减温减压器前', '减温减压器后'],
          scale: {
            fitData: true,
            spans: {
              max: 280,
              min: 140,
              tickDelta: 20    // y轴刻度
            }
          },
          alarm: '减温减压平台出口温度'
        })

        //实时产量、消费
        this.$refs.nowChart.doubleInit({
          field: ['instaneousFlow', 'instaneousFlow2'],
          query: [{
            // "query": 'select downsample(20000) as time, avg(adjustment_flow) as instaneousFlow from xy_intelligentBoiler where uid = \'a54b9514-8968-42fc-9b0d-86bec2b4c00e\'',
            "query": 'select downsample(10000) as time, avg(instaneousFlow) as instaneousFlow from FlowMeter where uid = \'c0404438-1c98-4fd5-af29-e022f00b0457\'',
            "exportFields": ['time', 'instaneousFlow']
          },
            {
              "query": 'select downsample(10000) as time, avg(instaneousFlow) as instaneousFlow2 from SteamFlowMeter where uid = \'ta192a389-3036-4c23-9bcd-0599bf8f2c5f\'',
              "exportFields": ['instaneousFlow2']
            }],
          color: ['#21b1f7','#FAAD14'],
          unit: 't/h',
          names: ['实时产量', '实时消费']
        })

        //锅炉负压
        this.$refs.boilerPreChart.doubleInit({
          field: ['negPressure1', 'negPressure2'],
          query: 'select downsample(10000) as time, avg(negPressure1) as negPressure1, avg(negPressure2) as negPressure2 from BoilerBody where uid = \'39b1e610-8b8b-43f2-9708-7dd3242c3e76\'',
          color: ['#21b1f7','#FAAD14'],
          unit: 'Pa',
          names: ['锅炉左负压', '锅炉右负压']
        })
      },

      getBaseLine(fn) {
        //aiTable
        fetch('/config/intelligent_boiler', {
          method: 'get'
        }).then(response => response.json()).then(res => {
          fn(res)
        }).catch(err => {
          fn()
        })
      },

      setRecord(data) {
        for (const i in this.record) {
          if (data[i]) {
            if (typeof [...data[i]].pop() === 'number') {
              this.record[i] = i === 'outPressure' ? [...data[i]].pop().toFixed(4) + "" : [...data[i]].pop().toFixed(2) + ""
            } else {
              this.record[i] = ''
            }
          }
        }
      },

      getRecord() {
        const arr = this.geiFengJi1_data.tableData.concat(this.geiFengJi2_data.tableData, this.fengJi_data.tableData)
        arr.forEach(item => {
          const feedback = item.feedback || item.feedback - 0 == 0 ? item.feedback : ""
          const calibration = item.calibration || item.calibration - 0 == 0 ? item.calibration : ""
          switch (item.name) {
            case 'SK_1401':
              this.record.runFrequencyYinFengjiFeedback = feedback
              this.record.runFrequencyYinFengjiCalibration = calibration
              break
            case 'SK_1503':
              this.record.runFrequency1DownFeedback = feedback
              this.record.runFrequency1DownCalibration = calibration
              break
            case 'SK_1504':
              this.record.runFrequency1UpFeedback = feedback
              this.record.runFrequency1UpCalibration = calibration
              break
            case 'SK_1505':
              this.record.runFrequency2DownFeedback = feedback
              this.record.runFrequency2DownCalibration = calibration
              break
            case 'SK_1506':
              this.record.runFrequency2UpFeedback = feedback
              this.record.runFrequency2UpCalibration = calibration
              break
            case 'SK_1507':
              this.record.runFrequency3DownFeedback = feedback
              this.record.runFrequency3DownCalibration = calibration
              break
            case 'SK_1508':
              this.record.runFrequency3UpFeedback = feedback
              this.record.runFrequency3UpCalibration = calibration
              break
            case 'SK_1509':
              this.record.runFrequency4DownFeedback = feedback
              this.record.runFrequency4DownCalibration = calibration
              break
            case 'SK_1510':
              this.record.runFrequency4UpFeedback = feedback
              this.record.runFrequency4UpCalibration = calibration
              break
            case 'SK_1501':
              this.record.runFrequencyYiCiFengjiFeedback = feedback
              this.record.runFrequencyYiCiFengjiCalibration = calibration
              break
            case 'SK_1502':
              this.record.runFrequencyErCiFengjiFeedback = feedback
              this.record.runFrequencyErCiFengjiCalibration = calibration
              break
          }
        })
      },

      bindKey() {
        document.onkeydown = e => {
          var keyCode = e.keyCode || e.which || e.charCode;
          if(sessionStorage.getItem('firemanActive') === 'false') {
            if(keyCode == 118) {
              let loadingInstance = Loading.service({
                text: '能效司炉数据保存中',
                background: 'rgba(0,0,0,0.7)'
              })
              this.getRecord()
              console.log(this.record)
              firemanService.setRecord({
                timestamp: new Date().getTime(),
                record: this.record
              }).then(res => {
                this.$message({
                  type: 'success',
                  message: '能效司炉数据保存成功！'
                })
                loadingInstance.close();
              }).catch(err => {
                this.$message({
                  type: 'error',
                  message: '能效司炉数据保存失败！'
                })
                loadingInstance.close();
              })
            }

            if(keyCode == 115) {
              this.calibrationShow = !this.calibrationShow
            }
          }
        }
      },

      bindTime() {
        this.timer = setInterval(() => {
          this.energyTime = moment(new Date()).format('YYYY年MM月DD日 HH:mm:ss')
        }, 1000)
      },

      pageClear() {
        document.onkeydown = undefined
        clearInterval(this.timer)
        this.timer = null
      },
    },

    created() {
      this.bindKey()
      this.bindTime()
    },

    destroyed() {
      this.pageClear()
    }
  }
</script>

<style scoped lang="scss">
  .energyContainers {
    /*border: 1px solid red;*/
    position: relative;
    width: 100vw;
    height: 56.3vw;
    overflow-y: auto;
    padding-top: 60px;
    display: flex;
    flex-flow: column;
    justify-content: space-around;
    .main {
      height: 100%;
      padding: 0 2%;

      &>div {
        position: absolute;
        top: 25px;
        color: #04CBF5;
        left: 36px;
        z-index: 1;
      }

      section {
        margin-bottom: 20px;
        border: 2px solid #004E74;
        padding: 30px 2% 5px;
        background-color: #0C163F;
        position: relative;
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        header {
          /*font-size: 20px;*/
          font-size: 2vh;
          color: #fff;
          letter-spacing: 4px;
        }
      }
      .balance {
        display: flex;
        justify-content: space-between;
        height: 28.2%;
        padding: 30px 2% 0;
        background: url('../../assets/images/title.png') no-repeat 50% -1%;

        &>span {
          position: absolute;
          color: #fff;
          font-size: 18px;
          display: block;
          width: 100%;
          margin: -25px -36px 0;
          text-align: center;
        }

        &>div {
          overflow: hidden;
          width: 33%;
          padding: 10px 0 0;
          box-sizing: border-box;
        }

      }
      .handle {
        height: 32.2%;
        flex-flow: column;
        padding: 0 2% 20px;
        .hHeader {
          width: 100%;
          height: 18.2%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          &>span {
            font-size: 1.5vh;
            color: rgba(255,255,255,0.50);
            display: flex;
            align-items: center;
          }
        }
        main {
          flex: 1;
          display: flex;
          justify-content: space-between;
          .pointItem {
            width: 30.5%;
            border: 1.5vh solid transparent;
            border-image: url("../../assets/images/border.png") 15 stretch;
            background-color: #09164F;
          }
        }
      }
      .efficiency {
        height: 20.5%;
        padding-top: 20px;
        &>div {
          width: 32%;
        }
        .eHeader {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          margin: auto;
          width: 31%;
          height: 100%;
          display: flex;
          flex-flow: column;
          justify-content: center;
          span {
            text-align: center;
            position: absolute;
            top: 1%;
            left: 0;
            right: 0;
            margin: auto;
          }
          .expect {
            width: 100%;
            position: absolute;
            top: 40%;
            left: 0;
          }
        }
      }
    }
  }
  .energyContainers::-webkit-scrollbar {
    width: 0;
  }
</style>
