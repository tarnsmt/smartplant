<template>
  <div>
    <div class="row">

      <div class="col-lg-3 col-sm-6">
        <circle-number-chart-card :number="50"
                           title="Water level"
                           description="Soil Moisture"
                           color="orange">
        </circle-number-chart-card>
      </div>
    </div>
  </div>
</template>
<script>
  import CircleNumberChartCard from 'src/components/UIComponents/Cards/NumberCard.vue'
  import ChartCard from 'src/components/UIComponents/Cards/ChartCard.vue'

  export default {
    components: {
      ChartCard,
      CircleNumberChartCard
    },
    data () {
      return {

      }
    }
  }

</script>
<style>

</style>
