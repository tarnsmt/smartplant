<template>
  <div>
    <!--Stats cards-->
    <h3>Location: {{location}}</h3>
    <div class="row">
      <div class="col-lg-3 col-sm-6" v-for="stats in statsCards" >
        <stats-card v-bind:style="stats.styleObject" >
          <div class="icon-big text-center" slot="header" >
            <i :class="stats.icon" v-bind:style="stats.styleIcon"></i>
          </div>
          <div class="numbers" slot="content" >
            <p>{{stats.title}}</p>
            <p style="font-size: 19px;">{{stats.value}}</p>
          </div>
          <div class="stats" slot="footer" v-bind:style="stats.styleIcon">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>

    <div class="col-lg-6 col-sm-6">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">User guideline</h4>
          <p class="category">Growing plants takes time and significant resources, it is also tedious to manually water and monitor the environment for the plants. Let us take care your plant. </p>
        </div>
        <div class="card-content">
          <el-collapse>
            <el-collapse-item title="About AutoPlant" name="1">
              <div>
                Different plants have different requirements. For example, a cactus and a sanchezia are polar opposite of each other, one requires little water while the others thrive on it. The software aims to take care of the tedious bits to growing plants by letting users define the plan they want for the plants.
              </div>
            </el-collapse-item>
            <el-collapse-item title="Sensors" name="2">
              <div>
                There are sensors that will show the information of the plants including water level, soil condition, humidity, and temperature. The weter sensor can be set by users by adding the level to the plan.
              </div>
            </el-collapse-item>
            <el-collapse-item title="How to use" name="3">
              <div>
                Users are able to get the information and create a plan for water sensor based on daily, weekly, monthly. The sumamary table is also provided for users each day to see the sensor information.
              </div>
            </el-collapse-item>
          </el-collapse>
          <br>
          <br>
        </div>
      </div>
    </div>

    <div class="col-lg-6 col-sm-6">
      <div class="card">
        <div class="card-header">
          <h4 class="card-title">Temperature</h4>
          <p class="category">5 day Extended Forecast</p>
        </div>
        <div class="card-content">
          <div id="chartViews" class="ct-chart"></div>
          <i class="fa fa-circle text-info"></i> Temperature
          <i class="fa fa-circle text-warning"></i> Feels like
        </div>
      </div>
    </div>

    <div class="col-lg-6 col-sm-6">
      <chart-card :chart-data="usersChart.data" :chart-options="usersChart.options">
        <div slot="header">
          <h4 class="card-title">Humidity</h4>
          <p class="category">24 hours forecast</p>
        </div>

        <div class="stats" slot="footer-title">
          <i class="ti-reload"></i> Updated now
        </div>
        <div slot="footer">
          <div class="chart-legend">
            <i class="fa fa-circle text-info"></i> Cloudiness
            <i class="fa fa-circle text-warning"></i> Humidity
          </div>
        </div>
      </chart-card>
    </div>

    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import axios from 'axios'
  import {Collapse, CollapseItem} from 'element-ui'
  import CircleChartCard from 'src/components/UIComponents/Cards/CircleChartCard.vue'
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import store from 'src/vuex/store'

  Vue.use(Collapse)
  Vue.use(CollapseItem)

  export default {
    components: {
      StatsCard,
      ChartCard,
      CircleChartCard
    },
    store,
    data () {
      return {
        $Chartist: null,
        statsCards: [
          {
            styleObject: {
              background: '#83bfb3',
              color: 'white'
            },
            styleIcon: {
              color: '#f8ffd8'
            },
            icon: 'ti-shine',
            title: 'Temperature',
            value: '',
            footerText: 'In the last hour',
            footerIcon: 'ti-timer'
          },
          {
            styleObject: {
              background: '#b2dbbf',
              color: 'white'
            },
            styleIcon: {
              color: 'white'
            },
            icon: 'ti-cloud',
            title: 'Humidity',
            value: '',
            footerText: 'In the last hour',
            footerIcon: 'ti-timer'
          },
          {
            styleObject: {
              background: '#f3ffbd',
              color: '#555c35'
            },
            styleIcon: {
              color: '#85924d'
            },
            icon: 'ti-face-smile',
            title: 'UV (moderate)',
            value: '',
            footerText: 'In the last hour',
            footerIcon: 'ti-timer'
          },
          {
            styleObject: {
              background: '#eb547c',
              color: 'white'
            },
            styleIcon: {
              color: '#ffd0dd'
            },
            icon: 'ti-world',
            title: 'Condition',
            value: '',
            footerText: 'In the last hour',
            footerIcon: 'ti-timer'
          }
        ],
        usersChart: {
          data: {
            labels: [
              this.getNow(3),
              this.getNow(6),
              this.getNow(9),
              this.getNow(12),
              this.getNow(15),
              this.getNow(18),
              this.getNow(21),
              this.getNow(24),
              this.getNow(27)
            ],
            series: [
              [10, 10, 10, 10, 10, 10, 10, 10, 10],
              [10, 10, 10, 10, 10, 10, 10, 10, 10]
            ],
            timestamp: ''
          },
          options: {
            low: 10,
            high: 100,
            showArea: true,
            height: '245px',
            axisX: {
              showGrid: false
            },
            axisY: {
              labelInterpolationFnc (value) {
                return `${value}%`
              }
            },
            showLine: true,
            showPoint: false
          }
        },
        info: {},
        timer: '',
        count: 0,
        connection: null,
        session: store.state.session,
        userid: store.state.userid,
        controllerid: store.state.controllerid,
        username: store.state.username,
        password: store.state.password,
        login: store.state.login,
        uv: null,
        humidity: null,
        temperature: null,
        information: null,
        condition: null,
        plantTemp: null,
        plantHumidity: null,
        plantLight: null,
        plantWaterLevel: null,
        soilmoisture: null,
        location: null,
        summary: null,
        temp: null,
        chart_info: store.state.chart_info,
        lowesthumiditypos: store.state.lowesthumiditypos
      }
    },
    async created () {
      this.usersChart['data']['series'] =
      [[Number(this.chart_info[0]['clouds']['all']),
        Number(this.chart_info[1]['clouds']['all']),
        Number(this.chart_info[2]['clouds']['all']),
        Number(this.chart_info[3]['clouds']['all']),
        Number(this.chart_info[4]['clouds']['all']),
        Number(this.chart_info[5]['clouds']['all']),
        Number(this.chart_info[6]['clouds']['all']),
        Number(this.chart_info[7]['clouds']['all']),
        Number(this.chart_info[8]['clouds']['all']),
        Number(this.chart_info[9]['clouds']['all'])],
      [Number(this.chart_info[0]['main']['humidity']),
        Number(this.chart_info[1]['main']['humidity']),
        Number(this.chart_info[2]['main']['humidity']),
        Number(this.chart_info[3]['main']['humidity']),
        Number(this.chart_info[4]['main']['humidity']),
        Number(this.chart_info[5]['main']['humidity']),
        Number(this.chart_info[6]['main']['humidity']),
        Number(this.chart_info[7]['main']['humidity']),
        Number(this.chart_info[8]['main']['humidity']),
        Number(this.chart_info[9]['main']['humidity'])]]
      this.fetchData()
      setInterval(this.fetchData, 10000)
      await axios.get('https://api.openweathermap.org/data/2.5/uvi/forecast?appid=e5f182d43d4937602e0e6797b0ec068f&lat=13.75&lon=100.50').then(
        res => {
          this.uv = res.data
          this.uv = this.uv[0]['value']
          this.statsCards[2]['value'] = this.uv
        }
      )
      await axios.get('https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=e5f182d43d4937602e0e6797b0ec068f').then(
        res => {
          this.information = res.data
          this.humidity = res.data
          this.humidity = this.humidity['main']['humidity']
          this.temperature = res.data['main']['temp']
          this.condition = res.data['weather'][0]['description']
          this.location = res.data['name']
          this.statsCards[0]['value'] = (Number(this.temperature) / 10).toFixed(2) + ' °C'
          this.statsCards[1]['value'] = this.humidity + ' %'
          this.statsCards[3]['value'] = this.condition
        }
      )
    },
    methods: {
      async initViewsChart () {
        var today = new Date()
        var date1 = (today.getDate() + 1) + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
        var date2 = (today.getDate() + 2) + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
        var date3 = (today.getDate() + 3) + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
        var date4 = (today.getDate() + 4) + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
        var date5 = (today.getDate() + 5) + '-' + (today.getMonth() + 1) + '-' + today.getFullYear()
        const dataViews = {
          labels: [date1, date2, date3, date4, date5],
          series: [
            [Number(Number(this.chart_info[3]['main']['temp']) / 10).toFixed(2),
              Number(Number(this.chart_info[11]['main']['temp']) / 10).toFixed(2),
              Number(Number(this.chart_info[19]['main']['temp']) / 10).toFixed(2),
              Number(Number(this.chart_info[27]['main']['temp']) / 10).toFixed(2),
              Number(Number(this.chart_info[35]['main']['temp']) / 10).toFixed(2)],
            [Number(Number(this.chart_info[3]['main']['feels_like']) / 10).toFixed(2),
              Number(Number(this.chart_info[11]['main']['feels_like']) / 10).toFixed(2),
              Number(Number(this.chart_info[19]['main']['feels_like']) / 10).toFixed(2),
              Number(Number(this.chart_info[27]['main']['feels_like']) / 10).toFixed(2),
              Number(Number(this.chart_info[35]['main']['feels_like']) / 10).toFixed(2)]
          ]
        }
        const optionsViews = {
          seriesBarDistance: 10,
          axisX: {
            showGrid: false
          },
          axisY: {
            labelInterpolationFnc (value) {
              return `${value}°C`
            }
          },
          height: '250px',
          low: (Number(Number(this.chart_info[19]['main']['temp']) / 10) - 3).toFixed(2),
          high: (Number(Number(this.chart_info[19]['main']['temp']) / 10) + 2).toFixed(2)
        }
        const responsiveOptionsViews = [
          ['screen and (max-width: 640px)', {
            seriesBarDistance: 10,
            axisX: {
              labelInterpolationFnc (value) {
                return value[0]
              }
            }
          }]
        ]
        this.$Chartist.Bar('#chartViews', dataViews, optionsViews, responsiveOptionsViews)
      },
      initCharts () {
        this.initViewsChart()
      },
      getNow: function (num) {
        var numm = 0
        if (num === 24) {
          numm = 0
        } else if (num === 27) {
          numm = 3
        } else {
          numm = num
        }
        var hr = new Date().getHours() + Number(numm)
        var mid = 'AM'
        if (hr === 0) {
          hr = 12
        } else if (hr > 12) {
          hr = hr % 12
          mid = 'PM'
        }
        this.timestamp = hr + mid
        return this.timestamp
      },
      async fetchData () {
        if (this.login) {
          await axios.get('http://34.87.108.195/api/v1/summary/ea60c35b-79d1-49b1-9b55-86554f8c4afa', {headers: {'session': this.session}}).then(
          res => {
            this.info = res.data
            this.summary = res.data['summary_list']
            this.info = this.info['summary_list'][0]
            this.plantTemp = this.info['median_temperature']
            this.plantHumidity = this.info['median_humidity']
            this.plantLight = this.info['median_light']
            this.plantWaterLevel = this.info['median_water_level']
            this.soilmoisture = this.info['median_soil_moisture'] / 10
            store.commit('TEMP_CHANGE', this.plantTemp)
            store.commit('LIGHT_CHANGE', this.plantLight)
            store.commit('HUMIDITY_CHANGE', this.plantHumidity)
            store.commit('WATERLEVEL_CHANGE', this.plantWaterLevel)
            store.commit('SOILMOISTURE_CHANGE', this.soilmoisture)
            store.commit('SUMMARY_CHANGE', this.summary)
          }
          )
        }
      }
    },
    async mounted () {
      const Chartist = await import('chartist')
      this.$Chartist = Chartist
      this.initCharts()
    },
    beforeDestroy () {
      clearInterval(this.timer)
    }
  }
</script>
<style>

</style>
