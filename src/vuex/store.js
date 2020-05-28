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
  temperaturevalue: '',
  humidityvalue: '',
  lightvalue: '',
  waterlevelvalue: '',
  soilmoisturevalue: ''
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
  }
}

const getters = {
  session: state => state.session,
  userid: state => state.userid,
  controllerid: state => state.controllerid,
  username: state => state.username,
  temperaturevalue: state => state.temperaturevalue,
  lightvalue: state => state.lightvalue,
  humidityvalue: state => state.humidityvalue,
  waterlevelvalue: state => state.waterlevelvalue,
  soilmoisturevalue: state => state.soilmoisturevalue
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
