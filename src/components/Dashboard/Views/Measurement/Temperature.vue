<template>
  <div>
    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage="70"
                           title="Plant"
                           description="Humidity"
                           color="blue">
        </circle-chart-card>
      </div>

      <div class="col-lg-3 col-sm-6">
        <circle-int-chart-card :int="34"
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

  export default {
    components: {
      ChartCard,
      CircleIntChartCard,
      CircleChartCard
    },
    data () {
      return {

      }
    }
  }

</script>
<style>

</style>
