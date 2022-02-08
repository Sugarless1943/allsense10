import baseURL from './baseUrl'

class handleService {
  static geifenjiMessage(param) {
    return baseURL.GraphQLService.fetchData({
      query: `select timestamp,runState,runFrequency from ${param.dataSource} where uid = '${param.uid}' limit 1`,
      args: {
        "engine": "realtime"
      },
      url: baseURL.energyBaseURL,
      resProc: response => {
        return response
      }
    })
  }
  static handlePredict() {
    return baseURL.GraphQLService.fetchData({
      query: `select SK_1401,SK_1501,SK_1502,SK_1503,SK_1504,SK_1505,SK_1506,SK_1507,SK_1508,SK_1509,SK_1510 from xy_intelligentBoiler`,
      args: {
        "engine": "realtime"
      },
      url: baseURL.energyBaseURL,
      resProc: response => {
        return response.data
      }
    })
  }

  static handleAll() {
    return baseURL.GraphQLService.fetchData({
      query: `select timestamp,SK_1401,SK_1501,SK_1502,SK_1503,SK_1504,SK_1505,SK_1506,SK_1507,SK_1508,SK_1509,SK_1510,SK_1401_OPT,SK_1502_OPT,SK_1503_OPT,SK_1504_OPT,SK_1505_OPT,SK_1506_OPT,SK_1507_OPT,SK_1508_OPT,SK_1509_OPT,SK_1510_OPT,SK_1401_SRC,SK_1501_SRC,SK_1502_SRC,SK_1503_SRC,SK_1504_SRC,SK_1505_SRC,SK_1506_SRC,SK_1507_SRC,SK_1508_SRC,SK_1509_SRC,SK_1510_SRC,cons_30min from xy_intelligentBoiler limit 1`,
      args: {
        "engine": "realtime"
      },
      url: baseURL.energyBaseURL,
      resProc: response => {
        return response
      }
    })
  }
}
export default handleService
