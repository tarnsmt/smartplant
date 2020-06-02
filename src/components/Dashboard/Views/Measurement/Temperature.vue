<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <time-line type="simple">

          <time-line-item class="timeline-inverted" badge-type="warning">
            <span slot="header" class="label label-warning">Humidity</span>
            <p slot="body"><b>40 %</b> : most desert dwellers such as cacti</p>
            <p slot="body"><b>50-60 %</b> : general plants including house plant</p>
          </time-line-item>

          <time-line-item class="timeline-inverted" badge-type="danger">
            <span slot="header" class="label label-danger">Temperature</span>
            <div slot="body">
              <p>The optimum temperature for photosynthesis is 25°C (Plants growing in a carbon dioxide enriched environment thrive in slightly warmer conditions 28°C)</p>
            </div>
          </time-line-item>

        </time-line>
      </div>
      <!-- end data info -->
      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage="humidityvalue"
                           title="Plant"
                           description="Humidity"
                           color="blue">
        </circle-chart-card>
      </div>

      <div class="col-lg-3 col-sm-6">
        <circle-int-chart-card :int="temperaturevalue"
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
        humidityvalue: store.state.humidityvalue
      }
    }
  }

</script>
<style>

</style>
