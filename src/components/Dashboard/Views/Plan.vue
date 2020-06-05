<template>
<form>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <!-- <div class="card-header">
          <h4 class="card-title">Create a plan</h4>
        </div> -->
        <div class="card-content">
          <form method="get" action="/" class="form-horizontal">
          <legend>Create a plan</legend>
            <fieldset>
              <div class="form-group" >
                <label class="col-sm-2 control-label">Plant Name</label>
                <div class="col-sm-3">
                  <input type="text" placeholder="Plant Name" class="form-control" v-model='planname'>
                </div>
              </div>
              <div class="form-group" v-for="info in infoDatas" >
                <label class="col-sm-2 control-label">{{info.title}}</label>
                <div class="col-sm-10">
                  <p class="form-control-static">{{info.value}}</p>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        <center>
          <button class="btn btn-fill btn-danger">
            <a @click='createPlan' style="color:white"> Create a plan </a>
          </button>
          <hr>
        </center>
      </div>  <!-- end card -->
    </div> <!-- end col-md-12 -->

    <!-- Daily plan -->
    <div class="col-md-4">
      <div class="card">
        <div class="card-content">
          <form method="get" action="/" class="form-horizontal">
          <legend>Daily plan</legend>
            <fieldset>
              <div class="form-group">
                <label class="col-sm-3 control-label">Set time</label>
                <div class="form-group">
                  <el-time-select
                    style="margin-left: 15px;"
                    v-model="time.dailyTime"
                    :picker-options="{
                      start: '00:00',
                      step: '00:01',
                      end: '23:59'
                    }"
                    placeholder="Select time">
                  </el-time-select>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-3 control-label">Type</label>
                <div class="col-sm-3">
                  <p-radio label="light" v-model="type.dailyType">Light</p-radio>
                  <p-radio label="water" v-model="type.dailyType">Water</p-radio>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-3 control-label">Duration</label>
                <div class="col-sm-5">
                  <input type="int" placeholder="enter value" value="0" class="form-control" v-model='duration.dailyDuration'/>
                </div>
                <label class="col-sm-1 control-label">Seconds</label>
              </div>
            </fieldset>
          </form>
        </div>
      </div>  <!-- end card -->
    </div> <!-- end col-md-4 -->
    <!-- end Daily plan -->

    <!-- Weekly plan -->
    <div class="col-md-4">
      <div class="card">
        <div class="card-content">
          <form method="get" action="/" class="form-horizontal">
          <legend>Weekly plan</legend>
            <fieldset>
              <div class="form-group">
                <label class="col-sm-3 control-label">Set time</label>
                <div class="form-group">
                  <el-time-select
                    style="margin-left: 15px;"
                    v-model="time.weeklyTime"
                    :picker-options="{
                      start: '00:00',
                      step: '00:01',
                      end: '23:59'
                    }"
                    placeholder="Select time">
                  </el-time-select>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <fieldset>
                <div class="form-group">
                  <label class="col-sm-3 control-label">Type</label>
                  <div class="col-sm-3">
                    <p-radio label="light" v-model="type.weeklyType">Light</p-radio>
                    <p-radio label="water" v-model="type.weeklyType">Water</p-radio>
                  </div>
                </div>
              </fieldset>

              <div class="form-group">
                <label class="col-sm-3 control-label">Select day</label>

                <div class="col-sm-3">
                  <p-radio label="1" v-model="day.weeklyDay">Mon</p-radio>
                  <p-radio label="4" v-model="day.weeklyDay">Thur</p-radio>
                  <p-radio label="7" v-model="day.weeklyDay">Sun</p-radio>
                </div>

                <div class="col-sm-3">
                  <p-radio label="2" v-model="day.weeklyDay">Tue</p-radio>
                  <p-radio label="5" v-model="day.weeklyDay">Fri</p-radio>
                </div>

                <div class="col-sm-3">
                  <p-radio label="3" v-model="day.weeklyDay">Wed</p-radio>
                  <p-radio label="6" v-model="day.weeklyDay">Sat</p-radio>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-3 control-label">Duration</label>
                <div class="col-sm-5">
                  <input type="int" placeholder="enter value" value="0" class="form-control" v-model='duration.weeklyDuration'/>
                </div>
                <label class="col-sm-1 control-label">Seconds</label>
              </div>
            </fieldset>
          </form>
        </div>
      </div>  <!-- end card -->
    </div> <!-- end col-md-4 -->
    <!-- end Weekly plan -->

    <!-- Weekly plan -->
    <div class="col-md-4">
      <div class="card">
        <div class="card-content">
          <form method="get" action="/" class="form-horizontal">
          <legend>Monthly plan</legend>
            <fieldset>
              <div class="form-group">
                <label class="col-sm-3 control-label">Set time</label>
                <div class="form-group">
                  <el-time-select
                    style="margin-left: 15px;"
                    v-model="time.monthlyTime"
                    :picker-options="{
                      start: '00:00',
                      step: '00:01',
                      end: '23:59'
                    }"
                    placeholder="Select time">
                  </el-time-select>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <fieldset>
                <div class="form-group">
                  <label class="col-sm-3 control-label">Type</label>
                  <div class="col-sm-3">
                    <p-radio label="light" v-model="type.monthlyType">Light</p-radio>
                    <p-radio label="water" v-model="type.monthlyType">Water</p-radio>
                  </div>
                </div>
              </fieldset>

              <div class="form-group">
                <label class="col-sm-3 control-label">Select day</label>

                <div class="col-sm-3">
                  <p-radio label="1" v-model="day.monthlyDay">Mon</p-radio>
                  <p-radio label="4" v-model="day.monthlyDay">Thur</p-radio>
                  <p-radio label="7" v-model="day.monthlyDay">Sun</p-radio>
                </div>

                <div class="col-sm-3">
                  <p-radio label="2" v-model="day.monthlyDay">Tue</p-radio>
                  <p-radio label="5" v-model="day.monthlyDay">Fri</p-radio>
                </div>

                <div class="col-sm-3">
                  <p-radio label="3" v-model="day.monthlyDay">Wed</p-radio>
                  <p-radio label="6" v-model="day.monthlyDay">Sat</p-radio>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-3 control-label">Duration</label>
                <div class="col-sm-5">
                  <input type="int" placeholder="enter value" value="0" class="form-control" v-model='duration.monthlyDuration'/>
                </div>
                <label class="col-sm-1 control-label">Seconds</label>
              </div>
            </fieldset>
          </form>
        </div>
      </div>  <!-- end card -->
    </div> <!-- end col-md-4 -->
    <!-- end Weekly plan -->
     <div class="col-sm-12">
          <el-table class="table-striped"
                    :data="queriedData"
                    border
                    style="width: 100%">
            <el-table-column v-for="column in tableColumns"
                             :key="column.label"
                             :min-width="column.minWidth"
                             :prop="column.prop"
                             :label="column.label">
            </el-table-column>
          </el-table>
        </div>

  </div>
</form>  
</template>
<script>
  import Vue from 'vue'
  import {TimeSelect, Table, TableColumn, Select, Option} from 'element-ui'
  import store from 'src/vuex/store'
  import PPagination from 'src/components/UIComponents/Pagination.vue'
  import axios from 'axios'
  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Select)
  Vue.use(Option)
  export default {
    store,
    components: {
      [TimeSelect.name]: TimeSelect,
      PPagination
    },
    created () {
      var i
      for (i = 0; i < this.plandata.length; i++) {
        this.tableData.push({
          'name': this.plandata[i]['name'],
          'light_state': this.plandata[i]['light_state'],
          'humidity_state': this.plandata[i]['humidity_state'],
          'temp_state': this.plandata[i]['temp_state'],
          'daily': this.plandata[i]['daily'][0]['daily_time'],
          'daily_duration': this.plandata[i]['daily'][0]['action']['duration'] + ' Seconds',
          'weekly': this.plandata[i]['weekly'][0]['weekly_time'],
          'weekly_duration': this.plandata[i]['weekly'][0]['action']['duration'] + ' Seconds',
          'monthly': this.plandata[i]['monthly'][0]['monthly_time'],
          'monthly_duration': this.plandata[i]['monthly'][0]['action']['duration'] + ' Seconds'
        })
      }
    },
    computed: {
      pagedData () {
        return this.tableData.slice(this.from, this.to)
      },
      queriedData () {
        if (!this.searchQuery) {
          this.pagination.total = this.tableData.length
          return this.pagedData
        }
        let result = this.tableData
          .filter((row) => {
            let isIncluded = false
            for (let key of this.propsToSearch) {
              let rowValue = row[key].toString()
              if (rowValue.includes && rowValue.includes(this.searchQuery)) {
                isIncluded = true
              }
            }
            return isIncluded
          })
        this.pagination.total = result.length
        return result.slice(this.from, this.to)
      },
      to () {
        let highBound = this.from + this.pagination.perPage
        if (this.total < highBound) {
          highBound = this.total
        }
        return highBound
      },
      from () {
        return this.pagination.perPage * (this.pagination.currentPage - 1)
      },
      total () {
        this.pagination.total = this.tableData.length
        return this.tableData.length
      }
    },
    data () {
      return {
        infoDatas: [
          {
            title: 'Light',
            value: store.state.lightvalue
          },
          {
            title: 'Humidity',
            value: store.state.humidityvalue
          },
          {
            title: 'Temperature',
            value: store.state.temperaturevalue
          },
          {
            title: 'Soil moisture',
            value: store.state.soilmoisturevalue
          }
        ],
        time: {
          dailyTime: null,
          weekyTime: null,
          monthlyTime: null
        },
        type: {
          dailyType: 'light',
          weeklyType: 'light',
          monthlyType: 'light'
        },
        day: {
          weeklyDay: '1',
          monthlyDay: '1'
        },
        duration: {
          dailyDuration: null,
          weeklyDuration: null,
          monthlyDuration: null
        },
        session: store.state.session,
        planname: null,
        response: null,
        tableData: [],
        plandata: store.state.plan,
        pagination: {
          perPage: 10,
          currentPage: 1,
          perPageOptions: [5, 10, 25, 50],
          total: 0
        },
        searchQuery: '',
        propsToSearch: ['name', 'light_state', 'humidity_state', 'temp_state', 'daily', 'daily_duration', 'weekly', 'weekly_duration', 'monthly', 'monthly_duration'],
        tableColumns: [
          {
            prop: 'name',
            label: 'Name',
            minWidth: 100
          },
          {
            prop: 'light_state',
            label: 'Light',
            minWidth: 100
          },
          {
            prop: 'humidity_state',
            label: 'Humidity',
            minWidth: 100
          },
          {
            prop: 'temp_state',
            label: 'Temperature',
            minWidth: 100
          },
          {
            prop: 'daily',
            label: 'Daily',
            minWidth: 100
          },
          {
            prop: 'daily_duration',
            label: 'Daily Duration',
            minWidth: 100
          },
          {
            prop: 'weekly',
            label: 'Weekly',
            minWidth: 100
          },
          {
            prop: 'weekly_duration',
            label: 'Weekly Duration',
            minWidth: 100
          },
          {
            prop: 'monthly',
            label: 'Monthly',
            minWidth: 100
          },
          {
            prop: 'monthly_duration',
            label: 'Monthly Duration',
            minWidth: 100
          }
        ]
      }
    },
    methods: {
      createPlan () {
        if (this.time.dailyTime === null || this.time.weeklyTime === null || this.time.monthlyTime === null || this.duration.dailyDuration === null || this.duration.weeklyDuration === null || this.duration.monthlyDuration === null || this.planname === null) {
          alert('Some information is missing please check')
        } else {
          let payload = {
            'name': this.planname,
            'desc': 'Beautiful flower',
            'light_state': Number(store.state.lightvalue),
            'humidity_state': Number(store.state.humidityvalue),
            'temp_state': Number(store.state.temperaturevalue),
            // 'moisture_state': Number(store.state.soilmoisturevalue),
            'daily': [
              {
                'daily_time': this.time.dailyTime,
                'action': {
                  'type': this.type.dailyType,
                  'level': 0,
                  'duration': Number(this.duration.dailyDuration)
                }
              }
            ],
            'weekly': [
              {
                'weekly_time': this.day.weeklyDay + ':' + this.time.weeklyTime,
                'action': {
                  'type': this.type.weeklyType,
                  'level': 0,
                  'duration': Number(this.duration.weeklyDuration)
                }
              }
            ],
            'monthly': [
              {
                'monthly_time': this.day.monthlyDay + ':' + this.time.monthlyTime,
                'action': {
                  'type': this.type.monthlyType,
                  'level': 0,
                  'duration': Number(this.duration.monthlyDuration)
                }
              }
            ]
          }
          console.log(payload)
          axios.put('http://34.87.108.195/api/v1/plan/adbc08e4-bfaf-49d6-acc1-b91e661d9099', payload, {headers: {'session': this.session}}).then(
            res => {
              this.response = res.data
              alert('Successfully create new plan\nRedirect to dashboard')
              this.$router.push('/admin/overview')
            }
          )
          // console.log(payload)
        }
      }
    }
  }
</script>
<style>
</style>
