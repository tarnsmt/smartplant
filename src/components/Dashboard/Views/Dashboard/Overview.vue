<template>
  <div>
    <!--Stats cards-->
    {{info}}
    <div class="row">
      <div class="col-lg-3 col-sm-6" v-for="stats in statsCards" >
        <stats-card v-bind:style="stats.styleObject" >
          <div class="icon-big text-center" slot="header" >
            <i :class="stats.icon" v-bind:style="stats.styleIcon"></i>
          </div>
          <div class="numbers" slot="content" >
            <p>{{stats.title}}</p>
            {{stats.value}}
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
  import CircleChartCard from 'src/components/UIComponents/Cards/CircleChartCard.vue'
  import StatsCard from 'src/components/UIComponents/Cards/StatsCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'

  export default {
    components: {
      StatsCard,
      ChartCard,
      CircleChartCard
    },
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
            value: '39 °C',
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
            value: '38%',
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
            value: '3',
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
            icon: 'ti-bolt-alt',
            title: 'Raining chance',
            value: '20%',
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
        info: {}

      }
    },
    created () {
      axios.get('http://34.87.108.195/api/v1/summary/acac4896-6458-45a8-a51d-781012ade0db', {headers: {'session': '9f8ef8d5-cfcf-4c51-ab2e-eadd7ef10653'}}).then(
        res => {
          this.info = res.data
        },
        console.log(this.info),
        this.statsCards[0]['value'] = this.info.median_temperature,
        this.statsCards[1]['value'] = this.info.median_humidity
        // statsCards[2]['value'] = this.info.median_temperature,
        // statsCards[3]['value'] = this.info.median_temperature
      )
    }
  }

</script>
<style>

</style>
