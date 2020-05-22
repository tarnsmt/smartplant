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
              <div class="form-group">
                <label class="col-sm-2 control-label">Plant</label>
                <div class="col-sm-10">
                  <p class="form-control-static">plant name</p>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">Plant Description</label>
                <div class="col-sm-10">
                  <p class="form-control-static">plant description</p>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">Choose plan</label>
                <div class="col-sm-10">
                  <p-radio label="1" v-model="radios.radio1">Daily</p-radio>
                  <p-radio label="2" v-model="radios.radio1">Weekly</p-radio>
                  <p-radio label="3" v-model="radios.radio1">Monthly</p-radio>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">Set time</label>
                <div class="form-group">
                  <el-time-select
                    style="margin-left: 15px;"
                    v-model="timePicker"
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
              <legend>Setting</legend>

              <fieldset>
                <div class="form-group">
                  <label class="col-sm-2 control-label">Select sensor</label>
                  <div class="col-sm-10">
                    <p-radio label="1" v-model="radios.radio2">Light</p-radio>
                    <p-radio label="2" v-model="radios.radio2">Water</p-radio>
                  </div>
                </div>
              </fieldset>

              <div class="form-group">
                <label class="col-sm-2 control-label">Select day</label>
                <!-- <div class="col-sm-4 col-sm-offset-1">
                  <p-checkbox v-model="checkboxes.unchecked">Unchecked</p-checkbox>
                  <p-checkbox v-model="checkboxes.checked">Unchecked</p-checkbox>
                  <p-checkbox v-model="checkboxes.disabledUnchecked" :disabled="true">Disabled unchecked</p-checkbox>
                  <p-checkbox v-model="checkboxes.disabledChecked" :disabled="true">Disabled checked</p-checkbox>
                </div> -->

                <div class="col-sm-2">
                  <p-radio label="1" v-model="radios.radio3">Mon</p-radio>
                  <p-radio label="4" v-model="radios.radio3">Thurs</p-radio>
                  <p-radio label="7" v-model="radios.radio3">Sun</p-radio>
                </div>

                <div class="col-sm-2">
                  <p-radio label="2" v-model="radios.radio3">Tue</p-radio>
                  <p-radio label="5" v-model="radios.radio3">Fri</p-radio>
                </div>

                <div class="col-sm-2">
                  <p-radio label="3" v-model="radios.radio3">Wed</p-radio>
                  <p-radio label="6" v-model="radios.radio3">Sat</p-radio>
                </div>
              </div>
            </fieldset>

            <fieldset>
              <div class="form-group">
                <label class="col-sm-2 control-label">Input with success</label>
                <div class="col-sm-3">
                  <input type="text" placeholder="enter value" value="0" class="form-control"/>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>  <!-- end card -->
    </div> <!-- end col-md-12 -->
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
        timePicker: '',
        radios: {
          radio1: '1',
          radio2: '2',
          radio3: '2'
        },
        checkboxes: {
          first: false,
          second: false,
          a: false,
          b: false,
          c: false,
          unchecked: false,
          checked: true,
          disabledUnchecked: false,
          disabledChecked: true
        }
      }
    }
  }
</script>
<style>
</style>
