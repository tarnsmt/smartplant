<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <time-line type="simple">

          <time-line-item class="timeline-inverted" badge-type="primary">
            <span slot="header" class="label label-info">Humidity</span>
            <p slot="body"><b> &lt30 %</b> : Humidity level in the average home</p>
            <p slot="body"><b>40 %</b> : most desert dwellers such as cacti</p>
            <p slot="body"><b>50-60 %</b> : general plants including house plant</p>
            <p slot="body"><b>>60 %</b> : Thin-leaf house plants</p>
          </time-line-item>

          <time-line-item class="timeline-inverted" badge-type="success">
            <span slot="header" class="label label-success">Temperature</span>
            <div slot="body">
              <p>The optimum temperature for photosynthesis is 25°C (Plants growing in a carbon dioxide enriched environment thrive in slightly warmer conditions 28°C)</p>
            </div>
          </time-line-item>

        </time-line>
      </div>
      <!-- end data info -->
      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage="realtimehumi"
                           title="Plant"
                           description="Humidity"
                           color="blue">
        </circle-chart-card>
      </div>
      <div class="col-lg-3 col-sm-6">
        <circle-int-chart-card :int="realtimetemp"
                           title="Plant"
                           description="Temperature"
                           color="green">
        </circle-int-chart-card>
      </div>
    </div>
  </div>
</template>
<script>
  import TimeLine from './InfoData/TimeLine.vue'
  import TimeLineItem from './InfoData/TimeLineItem.vue'
  import CircleIntChartCard from 'src/components/UIComponents/Cards/IntCard.vue'
  import CircleChartCard from 'src/components/UIComponents/Cards/CircleChartCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import store from 'src/vuex/store'
  import Vuex from 'vuex'
  global.vuex = Vuex

  export default {
    store,
    components: {
      TimeLine,
      TimeLineItem,
      ChartCard,
      CircleIntChartCard,
      CircleChartCard
    },
    data () {
      return {
        temperaturevalue: store.state.temperaturevalue,
        humidityvalue: store.state.humidityvalue,
        realtimetemp: store.state.temperaturevalue,
        realtimehumi: store.state.humidityvalue
      }
    },
    created () {
      this.refreshtemp()
      this.refreshhumi()
      setInterval(this.refreshtemp, 10000)
      setInterval(this.refreshhumi, 10000)
    },
    methods: {
      refreshtemp () {
        var t = Math.floor(Math.random() * 2) + 1
        var r = Math.floor(Math.random() * 2)
        if (r === 0) {
          this.realtimetemp = this.temperaturevalue + t
        } else {
          this.realtimetemp = this.temperaturevalue - t
        }
      },
      refreshhumi () {
        var t = Math.floor(Math.random() * 5) + 1
        var r = Math.floor(Math.random() * 2)
        if (r === 0) {
          this.realtimehumi = this.humidityvalue + t
        } else {
          this.realtimehumi = this.humidityvalue - t
        }
      }
    }
  }

</script>
<style>

</style>
