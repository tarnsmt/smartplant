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
            <p style="font-size: 22px">{{stats.value}}</p>
          </div>
          <div class="stats" slot="footer" v-bind:style="stats.styleIcon">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>

  </div>
</template>
<script>
  import axios from 'axios'
  import r from 'rethinkdb'
  // import rethinkdb from 'rethinkdb'
  import CircleChartCard from 'src/components/UIComponents/Cards/CircleChartCard.vue'
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import store from 'src/vuex/store'
  // var r = null
  // var connection = null

  export default {
    components: {
      StatsCard,
      ChartCard,
      CircleChartCard
    },
    store,
    data () {
      return {
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
            title: 'Weather Condition',
            value: '',
            footerText: 'In the last hour',
            footerIcon: 'ti-timer'
          }
        ],
        earningsChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
            series: [
              [230, 340, 400, 300, 570, 500, 800]
            ]
          },
          options: {
            showPoint: false,
            lineSmooth: true,
            height: '210px',
            axisX: {
              showGrid: false,
              showLabel: true
            },
            axisY: {
              offset: 40,
              showGrid: false
            },
            low: 0,
            high: 'auto',
            classNames: {
              line: 'ct-line ct-green'
            }
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
        location: null
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
      fetchData () {
        axios.get('http://34.87.108.195/api/v1/summary/acac4896-6458-45a8-a51d-781012ade0db', {headers: {'session': store.state.session}}).then(
        res => {
          this.info = res.data
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
          // this.info = this.timer
        }
        )
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
        r.connect({ host: '35.240.205.254', port: 28015, db: 'production' }, (err, conn) => {
          if (err) { console.log(err + 'Hello') } else { console.log('Connected successfully') }
        })
        r.db('production').table('sensor')
        r.table('sensor').run().then(response => { console.log(response) })
      }
    },
    beforeDestroy () {
      clearInterval(this.timer)
    }
  }
</script>
<style>

</style>
