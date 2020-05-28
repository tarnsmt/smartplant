<template>
  <div>
    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <circle-number-chart-card :number="soilmoisturevalue"
                           title="Plant"
                           description="Soil Moisture"
                           color="orange">
        </circle-number-chart-card>
      </div>
      <div class="col-lg-3 col-sm-6">
        <circle-number-chart-card :number="waterlevelvalue"
                           title="Water Container"
                           description="Water Level"
                           color="blue">
        </circle-number-chart-card>
      </div>
    </div>
  </div>
</template>
<script>
  import CircleNumberChartCard from 'src/components/UIComponents/Cards/NumberCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'
  import store from 'src/vuex/store'
  import Vuex from 'vuex'
  global.vuex = Vuex

  export default {
    store,
    components: {
      ChartCard,
      CircleNumberChartCard
    },
    data () {
      return {
        waterlevelvalue: store.state.waterlevelvalue,
        soilmoisturevalue: store.state.soilmoisturevalue
      }
    }
  }

</script>
<style>

</style>
