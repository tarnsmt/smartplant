import Vue from 'vue'
import Vuex from 'vuex'

// Make vue aware of Vuex
Vue.use(Vuex)

// Create an object to hold the initial state when
// the app starts up
const state = {
  // TODO: Set up our initial state
  session: '',
  userid: '',
  controllerid: '',
  username: '',
  password: '',
  temperaturevalue: '',
  humidityvalue: '',
  lightvalue: '',
  waterlevelvalue: '',
  soilmoisturevalue: '',
  summary: {},
  login: false,
  chart_info: [],
  plan: [],
  planid: '',
  controller_list: [],
  controllername: '',
  showplan: ''
}

// Create an object storing various mutations. We will write the mutation
const mutations = {
  // TODO: set up our mutations
  SESSION_CHANGE: (state, value) => {
    state.session = value
  },
  USERID_CHANGE: (state, value) => {
    state.userid = value
  },
  CONTROLLERID_CHANGE: (state, value) => {
    state.controllerid = value
  },
  NAME_CHANGE: (state, value) => {
    state.username = value
  },
  PASSWORD_CHANGE: (state, value) => {
    state.password = value
  },
  TEMP_CHANGE: (state, value) => {
    state.temperaturevalue = value
  },
  HUMIDITY_CHANGE: (state, value) => {
    state.humidityvalue = value
  },
  LIGHT_CHANGE: (state, value) => {
    state.lightvalue = value
  },
  WATERLEVEL_CHANGE: (state, value) => {
    state.waterlevelvalue = value
  },
  SOILMOISTURE_CHANGE: (state, value) => {
    state.soilmoisturevalue = value
  },
  SUMMARY_CHANGE: (state, value) => {
    state.summary = value
  },
  LOGIN_CHANGE: (state, value) => {
    state.login = value
  },
  CHARTINFO_CHANGE: (state, value) => {
    state.chart_info = value
  },
  PLAN_CHANGE: (state, value) => {
    state.plan.push(value)
  },
  CLEAR_PLAN: (state, value) => {
    state.plan = []
  },
  CONTROLLERLIST_CHANGE: (state, value) => {
    state.controller_list = value
  },
  PLANID_CHANGE: (state, value) => {
    state.planid = value
  },
  CLEAR_ARRAY: (state) => {
    state.chart_info.length = 0
    state.plan.length = 0
    state.controller_list.length = 0
  },
  CONTROLLERNAME_CHANGE: (state, value) => {
    state.controllername = value
  },
  SHOWPLAN_CHANGE: (state, value) => {
    state.showplan = value
  }
}

const getters = {
  session: state => state.session,
  userid: state => state.userid,
  controllerid: state => state.controllerid,
  username: state => state.username,
  password: state => state.password,
  temperaturevalue: state => state.temperaturevalue,
  lightvalue: state => state.lightvalue,
  humidityvalue: state => state.humidityvalue,
  waterlevelvalue: state => state.waterlevelvalue,
  soilmoisturevalue: state => state.soilmoisturevalue,
  summary: state => state.summary,
  login: state => state.login,
  chart_info: state => state.chart_info,
  plan: state => state.plan,
  planid: state => state.planid,
  controller_list: state => state.controller_list,
  controllername: state => state.controllername,
  showplan: state => state.showplan
}

const actions = {
  saveSession: (state, value) => {
    store.commit('SESSION_CHANGE', value)
  },
  saveUserID: (state, value) => {
    store.commit('USERID_CHANGE', value)
  },
  saveControllerID: (state, value) => {
    store.commit('CONTROLLERID_CHANGE', value)
  },
  saveUserName: (state, value) => {
    store.commit('NAME_CHANGE', value)
  },
  savePassword: (state, value) => {
    store.commit('PASSWORD_CHANGE', value)
  },
  saveTemperature: (state, value) => {
    store.commit('TEMP_CHANGE', value)
  },
  saveHumidity: (state, value) => {
    store.commit('HUMIDITY_CHANGE', value)
  },
  saveLight: (state, value) => {
    store.commit('LIGHT_CHANGE', value)
  },
  saveWaterLevel: (state, value) => {
    store.commit('WATERLEVEL_CHANGE', value)
  },
  saveSoilMoisture: (state, value) => {
    store.commit('SOILMOISTURE_CHANGE', value)
  },
  saveSummary: (state, value) => {
    store.commit('SUMMARY_CHANGE', value)
  },
  saveLogin: (state, value) => {
    store.commit('LOGIN_CHANGE', value)
  },
  saveChartInfo: (state, value) => {
    store.commit('CHARTINFO_CHANGE', value)
  },
  savePlan: (state, value) => {
    store.commit('PLAN_CHANGE', value)
  },
  saveControllerList: (state, value) => {
    store.commit('CONTROLLERLIST_CHANGE', value)
  },
  savePlanID: (state, value) => {
    store.commit('PLANID_CHANGE', value)
  },
  clearArray: (state) => {
    store.commit('CLEAR_ARRAY')
  },
  clearPlan: (state) => {
    store.commit('CLEAR_PLAN')
  },
  saveControllerName: (state, value) => {
    store.commit('CONTROLLERNAME_CHANGE', value)
  },
  saveShowPlan: (state, value) => {
    store.commit('SHOWPLAN_CHANGE', value)
  }
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
let store = new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
})

global.store = store
export default store
