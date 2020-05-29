<template>
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
          <button type="submit" class="btn btn-fill btn-info">Create a plan</button>
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
                      step: '00:15',
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
                  <p-radio label="1" v-model="type.dailyType">Light</p-radio>
                  <p-radio label="2" v-model="type.dailyType">Water</p-radio>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-3 control-label">Level</label>
                <div class="col-sm-4">
                  <input type="int" placeholder="enter value" value="0" class="form-control"/>
                </div>
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
                      step: '00:15',
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
                    <p-radio label="1" v-model="type.weeklyType">Light</p-radio>
                    <p-radio label="2" v-model="type.weeklyType">Water</p-radio>
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
                <label class="col-sm-3 control-label">Level</label>
                <div class="col-sm-5">
                  <input type="int" placeholder="enter value" value="0" class="form-control"/>
                </div>
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
                      step: '00:15',
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
                    <p-radio label="1" v-model="type.monthlyType">Light</p-radio>
                    <p-radio label="2" v-model="type.monthlyType">Water</p-radio>
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
                <label class="col-sm-3 control-label">Level</label>
                <div class="col-sm-5">
                  <input type="int" placeholder="enter value" value="0" class="form-control"/>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>  <!-- end card -->
    </div> <!-- end col-md-4 -->
    <!-- end Weekly plan -->


  </div>
</template>
<script>
  import {TimeSelect} from 'element-ui'
  export default {
    components: {
      [TimeSelect.name]: TimeSelect
    },
    data () {
      return {
        infoDatas: [
          {
            title: 'Name',
            value: '0'
          },
          {
            title: 'Light',
            value: '0'
          },
          {
            title: 'Humidity',
            value: '0'
          },
          {
            title: 'Temperature',
            value: '0'
          },
          {
            title: 'Soil Condition',
            value: '0'
          }
        ],
        time: {
          dailyTime: '',
          weekyTime: '',
          monthlyTime: ''
        },
        type: {
          dailyType: '1',
          weeklyType: '1',
          monthlyType: '1'
        },
        day: {
          weeklyDay: '1',
          monthlyDay: '1'
        }
      }
    }
  }
</script>
<style>
</style>
