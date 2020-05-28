<template>
  <div>
    <div class="row">
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
  import CircleIntChartCard from 'src/components/UIComponents/Cards/IntCard.vue'
  import CircleChartCard from 'src/components/UIComponents/Cards/CircleChartCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import store from 'src/vuex/store'
  import Vuex from 'vuex'
  global.vuex = Vuex

  export default {
    store,
    components: {
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
