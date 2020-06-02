<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <time-line type="simple">

          <time-line-item class="timeline-inverted" badge-type="info">
            <span slot="header" class="label label-info">Light Intensity</span>
            <p slot="body">
              Light intensity is measured in units called Lux. Lux is equal to one lumen per square meter, lumens is a measure of visible light as perceived by the human eye </p>
          </time-line-item>

          <time-line-item class="timeline-inverted" badge-type="success">
            <span slot="header" class="label label-success">breakdown of the lighting needs of each type of houseplant</span>
            <div slot="body">
              <p><b>Low light plants</b> : Lux 500-2500</p>
              <p><b>Medium light plants</b> : Lux 2500-10000</p>
              <p><b>Bright light plants</b> : Lux 10000-20000</p>
            </div>
          </time-line-item>

        </time-line>
      </div>
      <!-- end data info -->

      <div class="col-lg-3 col-sm-6">
        <circle-number-chart-card :number="lightvalue"
                           title="Plant"
                           description="Light Intensity"
                           color="brown">
        </circle-number-chart-card>
      </div>

    </div>
  </div>
</template>
<script>
  import TimeLine from './InfoData/TimeLine.vue'
  import TimeLineItem from './InfoData/TimeLineItem.vue'
  import CircleNumberChartCard from 'src/components/UIComponents/Cards/NumberCard.vue'
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
      CircleNumberChartCard,
      CircleChartCard
    },
    data () {
      return {
        lightvalue: store.state.lightvalue
      }
    },
    created () {
    }
  }

</script>
<style>

</style>
