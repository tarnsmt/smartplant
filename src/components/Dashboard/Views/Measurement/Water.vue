<template>
  <div>
    <div class="row">
      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage="70"
                           title="Water Level"
                           description="Soil Moisture"
                           color="blue">
        </circle-chart-card>
      </div>

    </div>
  </div>
</template>
<script>
  import CircleChartCard from 'src/components/UIComponents/Cards/CircleChartCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'

  export default {
    components: {
      ChartCard,
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
