import geiFengJi from '../../../assets/images/geifen.png'
import erCiFengJi from '../../../assets/images/ercifengji.png'
import handleService from '../api/handleService'
import moment from 'moment'

export default {
  data() {
    return {
      geiFengJi1_data: {
        picture: geiFengJi,
        label: '给粉机(西)',
        tableData: [
          {
            name: 'SK_1503',
            deviceName: '1下',
            feedback: null,
            operationValue: null,
            calibration: null,
            state: 0
          }, {
            name: 'SK_1504',
            deviceName: '1上',
            feedback: null,
            operationValue: null,
            calibration: null,
            state: true
          }, {
            name: 'SK_1505',
            deviceName: '2下',
            feedback: null,
            operationValue: null,
            calibration: null,
            state: true
          }, {
            name: 'SK_1506',
            deviceName: '2上',
            feedback: null,
            operationValue: null,
            calibration: null,
            state: true
          }]
      },
      geiFengJi2_data: {
        picture: geiFengJi,
        label: '给粉机(东)',
        tableData: [
          {
            name: 'SK_1507',
            deviceName: '3下',
            feedback: null,
            operationValue: null,
            calibration: null,
            state: true
          }, {
            name: 'SK_1508',
            deviceName: '3上',
            feedback: null,
            operationValue: null,
            calibration: null,
            state: true
          }, {
            name: 'SK_1509',
            deviceName: '4下',
            feedback: null,
            operationValue: null,
            calibration: null,
            state: true
          }, {
            name: 'SK_1510',
            deviceName: '4上',
            feedback: null,
            operationValue: null,
            calibration: null,
            state: true
          }]
      },
      fengJi_data: {
        picture: erCiFengJi,
        label: '风机',
        tableData: [
          {
            name: 'SK_1401',
            deviceName: '引风机',
            feedback: null,
            operationValue: null,
            calibration: null,
            state: true
          }, {
            name: 'SK_1502',
            deviceName: '二次风机',
            feedback: null,
            operationValue: null,
            calibration: null,
            state: true
          }, {
            name: 'SK_1501',
            deviceName: '一次风机',
            feedback: null,
            operationValue: null,
            calibration: null,
            state: true
          }]
      },
      FrequencyTimer: null,
      operTip: '',

      cons_30min: null,
      optTime: '222',
      topic: '',
      topics: []
    }
  },
  methods: {
    formatAIPredictData(data) {
      this.setValue(this.geiFengJi1_data.tableData, data)
      this.setValue(this.geiFengJi2_data.tableData, data)
      this.setValue(this.fengJi_data.tableData, data)

      this.operationTip(this.geiFengJi1_data, this.geiFengJi2_data)
      this.cons_30min = data['cons_30min'] || data['cons_30min'] === 0 ? data['cons_30min'].toFixed(2) : '--'
      this.optTime = moment(data.timestamp).format('HH:mm:ss')
    },

    setValue(tableData,res) {
      tableData.forEach(item => {
        if(res[item.name]) {
          item.feedback = res[item.name + '_SRC'] || res[item.name + '_SRC'] === 0 ? res[item.name + '_SRC'].toFixed(1) : null
          item.calibration = res[item.name] || res[item.name] === 0 ? res[item.name].toFixed(1) : null
          item.operationValue = res[item.name + '_OPT'] || res[item.name + '_OPT'] === 0 ? res[item.name + '_OPT'].toFixed(1) : null

          if(item.name === 'SK_1401') { item.state = item.feedback > 1 }  //引风机状态
          if(item.name === 'SK_1501') { item.operationValue = item.calibration }  //一次风机暂无操作值
        }
      })
    },

    getFrequencyRealData() {
      handleService.handleAll().then(res => {
        const data = res.data
        for(const item in data){
          data[item] && data[item].length > 0 ? data[item] = data[item][0] : null
        }
        this.formatAIPredictData(data)

        this.topic = res.topic
        this.$mqtt.subscribe(res.topic)
      })

      Promise.all([
        handleService.geifenjiMessage({
          uid: 'e6e2b9de-8b29-4a94-8144-033a9432fc36',
          dataSource: 'WheelCoalFan'
        }),  //1#给粉机实时
        handleService.geifenjiMessage({
          uid: '55dc3764-96d2-41b6-9304-1f83b4a93abb',
          dataSource: 'WheelCoalFan'
        }),  //2#给粉机实时
        handleService.geifenjiMessage({
          uid: 'cb909665-d3a7-4b37-be83-f557a0f1e7b7',
          dataSource: 'WheelCoalFan'
        }),  //3#给粉机实时
        handleService.geifenjiMessage({
          uid: 'c7791b3b-0af7-4a03-9fbe-48ed4c4c9489',
          dataSource: 'WheelCoalFan'
        }),  //4#给粉机实时
        handleService.geifenjiMessage({
          uid: 'cec6acf1-0634-49c8-9cdc-c3d0b0e27ee8',
          dataSource: 'WheelCoalFan'
        }),  //5#给粉机实时
        handleService.geifenjiMessage({
          uid: '9b7b3528-3750-4ef3-81f5-a473b99fba61',
          dataSource: 'WheelCoalFan'
        }),  //6#给粉机实时
        handleService.geifenjiMessage({
          uid: 'b482f95e-0679-4adc-b548-279be5e33a79',
          dataSource: 'WheelCoalFan'
        }),  //7#给粉机实时
        handleService.geifenjiMessage({
          uid: '2794918e-e6bb-43e4-9046-b4e7606ce742',
          dataSource: 'WheelCoalFan'
        }),  //8#给粉机实时
        // handleService.geifenjiMessage({uid: 'f71c5de5-9291-4b3f-bb10-e1e5af636c0d', dataSource: 'AirFan'}),   //引风机实时
        handleService.geifenjiMessage({uid: '3632d3f6-2e3b-4788-8f7b-82662054afa9', dataSource: 'AirFan'}),  //二次风机实时
        handleService.geifenjiMessage({uid: '39e8ac52-fc31-4be0-980c-f28ce44be859', dataSource: 'AirFan'}),  //一次风机实时
      ]).then(([res1, res2, res3, res4, res5, res6, res7, res8, res10, res11]) => {
        console.log([res1, res2, res3, res4, res5, res6, res7, res8, res10, res11],111)
        const result = [res1, res2, res3, res4, res5, res6, res7, res8, res10, res11]
        let runStatus = []
        result.forEach(item => {
          runStatus.push(item.data.runState[0])
          this.$mqtt.subscribe(item.topic)
          this.topics.push(item.topic)
        })

        this.setRunstatus(runStatus)
      })
    },

    setRunstatus(res) {
      this.geiFengJi1_data.tableData[0].state = res[0]
      this.geiFengJi1_data.tableData[1].state = res[1]
      this.geiFengJi1_data.tableData[2].state = res[2]
      this.geiFengJi1_data.tableData[3].state = res[3]
      this.geiFengJi2_data.tableData[0].state = res[4]
      this.geiFengJi2_data.tableData[1].state = res[5]
      this.geiFengJi2_data.tableData[2].state = res[6]
      this.geiFengJi2_data.tableData[3].state = res[7]
      this.fengJi_data.tableData[1].state = res[8]
      this.fengJi_data.tableData[2].state = res[9]
    },

    operationTip(data1, data2) {
      const t1 = data1.tableData.filter(item => item.operationValue && item.feedback)
      const t2 = data2.tableData.filter(item => item.operationValue && item.feedback)
      const res = t1.concat(t2)
      let [feedbackAll, calibrationAll] = [0, 0]
      res.forEach(item => {
        feedbackAll += Number(item.feedback)
        calibrationAll += Number(item.operationValue)
      })
      const add = res.some(item => item.feedback - item.operationValue <= -0.5)
      const sub = res.some(item => item.feedback - item.operationValue >= 0.5)

      if (feedbackAll - calibrationAll >= 0.5 && sub) {
        this.operTip = '降负荷，请及时调整设备参数。'
      } else if (feedbackAll - calibrationAll <= -0.5 && add) {
        this.operTip = '升负荷，请及时调整设备参数。'
      } else {
        this.operTip = ''
      }
    }
  },
  created() {
    this.getFrequencyRealData()
    // this.FrequencyTimer = setInterval(() => {
    //     this.getFrequencyRealData()
    // }, 10000)
  },
  beforeDestroy() {
    clearInterval(this.FrequencyTimer)
    this.FrequencyTimer = null
  },

  mqtt: {
    '+/report/+'(message, topic) {
      console.log(topic)
      if(message && topic === this.topic) {
        if(topic === this.topic) {
          this.formatAIPredictData(JSON.parse(message.toString()))
        }

      }
    }
  }
}
