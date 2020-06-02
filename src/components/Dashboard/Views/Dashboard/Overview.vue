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
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
              </div>
            </el-collapse-item>
            <el-collapse-item title="How to use" name="3">
              <div>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
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
          <p class="category">6 day Extended Forecast</p>
        </div>
        <div class="card-content">
          <div id="chartViews" class="ct-chart"></div>
        </div>
      </div>
    </div>

    <div class="col-lg-6 col-sm-6">
      <chart-card :chart-data="usersChart.data" :chart-options="usersChart.options">
        <div slot="header">
          <h4 class="card-title">Humidity</h4>
          <p class="category">6 hours forecast</p>
        </div>

        <div class="stats" slot="footer-title">
          <i class="ti-reload"></i> Updated now
        </div>
        <div slot="footer">
          <div class="chart-legend">
            <i class="fa fa-circle text-info"></i> Raining Chance
            <i class="fa fa-circle text-warning"></i> Humidity
          </div>
          <hr>
          <div class="stats">
            <i class="ti-reload"></i> Updated now
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
  import r from 'rethinkdb'
  // import rethinkdb from 'rethinkdb'
  import CircleChartCard from 'src/components/UIComponents/Cards/CircleChartCard.vue'
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import store from 'src/vuex/store'
  // var r = null
  // var connection = null
  var RethinkdbWebsocketClient = require('rethinkdb-websocket-client')
  var r = RethinkdbWebsocketClient.rethinkdb
  // var Promise = RethinkdbWebsocketClient.Promise

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
              this.getNow(0),
              this.getNow(1),
              this.getNow(2),
              this.getNow(3),
              this.getNow(4),
              this.getNow(5),
              this.getNow(6),
              this.getNow(7)
            ],
            series: [
              [58, 60, 54, 64, 64, 63, 57, 68, 65],
              [43, 43, 45, 45, 56, 44, 34, 34, 54]
            ],
            timestamp: ''
          },
          options: {
            low: 0,
            high: 90,
            showArea: true,
            height: '245px',
            axisX: {
              showGrid: false
            },
            axisY: {
              labelInterpolationFnc (value) {
                return `${value} %`
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
        temp: null
      }
    },
    created () {
      // var r = require('rethinkdb')
      /*
      connection = r.connect({ host: '35.240.205.254', port: 28015, db: 'production' }, function (err, conn) {
        if (err) throw err
        connection = conn
        console.log(conn)
      })
      */
      // this.conre()
      // console.log(r)
      this.fetchData()
      // this.rethink()
      this.timer = setInterval(this.fetchData, 5000)
      /*
      axios.get('http://34.87.108.195/api/v1/summary/acac4896-6458-45a8-a51d-781012ade0db', {headers: {'session': '91040f98-e558-488e-aaf8-69c5bc2d8cc7'}}).then(
        res => {
          this.info = res.data
        },
        console.log(this.info),
        this.statsCards[0]['value'] = this.info.median_temperature,
        this.statsCards[1]['value'] = this.info.median_humidity
        // statsCards[2]['value'] = this.info.median_temperature,
        // statsCards[3]['value'] = this.info.median_temperature
      )
      */
      axios.get('https://api.openweathermap.org/data/2.5/uvi/forecast?appid=e5f182d43d4937602e0e6797b0ec068f&lat=13.75&lon=100.50').then(
        res => {
          this.uv = res.data
          this.uv = this.uv[0]['value']
          this.statsCards[2]['value'] = this.uv
        }
      )
      axios.get('https://api.openweathermap.org/data/2.5/weather?q=Bangkok&appid=e5f182d43d4937602e0e6797b0ec068f').then(
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
      initViewsChart () {
        const dataViews = {
          labels: ['Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
          series: [
            [35, 32, 36, 37, 30, 32, 37],
            [27, 25, 22, 25, 25, 26, 28]
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
          low: 20,
          high: 50
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
        var hr = new Date().getHours() + Number(num)
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
      fetchData () {
        if (this.login) {
          axios.get('http://34.87.108.195/api/v1/summary/ea60c35b-79d1-49b1-9b55-86554f8c4afa', {headers: {'session': this.session}}).then(
          res => {
            this.info = res.data
            this.summary = res.data['summary_list']
            this.info = this.info['summary_list'][0]
            this.plantTemp = this.info['median_temperature']
            this.plantHumidity = this.info['median_humidity']
            this.plantLight = this.info['median_light']
            this.plantWaterLevel = this.info['median_water_level']
            this.soilmoisture = this.info['median_soil_moisture']
            store.commit('TEMP_CHANGE', this.plantTemp)
            store.commit('LIGHT_CHANGE', this.plantLight)
            store.commit('HUMIDITY_CHANGE', this.plantHumidity)
            store.commit('WATERLEVEL_CHANGE', this.plantWaterLevel)
            store.commit('SOILMOISTURE_CHANGE', this.soilmoisture)
            store.commit('SUMMARY_CHANGE', this.summary)
            // this.info = this.timer
          }
          )
        }
        // this.statsCards[0]['value'] = this.count
        // console.log('Count = ', this.count)
        // console.log(this.timer)
      },
      rethink () {
        r.table('sensor')
        .run()
        .then(function (response) {
          console.log(response)
        })
        .error(function (err) {
          console.log(err)
        })
      },
      conre () {
        /*
        r = require('rethinkdbdash')({
          host: '35.240.205.254',
          port: 28015,
          db: 'production'
        })
        r.getPoolMaster().on('healthy', function (healthy) {
          if (healthy === true) { console.log('We can run queries.') } else { console.log('No queries can be run.') }
        })
        r.table('sensor').run().then(response => { console.log(response) })
        */
        let options = {
          host: '35.240.205.254',
          port: 28015,
          db: 'production',
          path: '/',               // HTTP path to websocket route
          wsProtocols: ['binary'], // sub-protocols for websocket, required for websockify
          wsBinary: 'arraybuffer',  // specify which binary type should be used for WS (optional)
          secure: false
        }
        RethinkdbWebsocketClient.connect(options).then(function (conn) {
          var query = r.table('sensor')
          query.run(conn, function (err, cursor) {
            if (err) {
              console.log(err)
            }
            cursor.toArray(function (err, results) {
              if (err) {
                console.log(err)
              } else {
                console.log(results)
              }
            })
          })
        })
        /*
        r.connect({ host: '35.240.205.254', port: 28015, db: 'production' }, (err, conn) => {
          if (err) { console.log(err + 'Hello') } else { console.log('Connected successfully') }
        })
        r.db('production').table('sensor')
        r.table('sensor').run().then(response => { console.log(response) })
        */
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
