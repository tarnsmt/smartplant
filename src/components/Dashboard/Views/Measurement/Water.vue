<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <time-line type="simple">

          <time-line-item class="timeline-inverted" badge-type="primary">
            <span slot="header" class="label label-primary">Soil Moisture</span>
            <p slot="body"><b>1000</b> : the air is saturated at that temperature and can not hold more</p>
            <p slot="body"><b>500 </b>: the air carries 50% of the humidity that would saturate the air</p>
            <p slot="body"><b>0 </b>: zero water content </p>
          </time-line-item>

          <time-line-item class="timeline-inverted" badge-type="warning">
            <span slot="header" class="label label-warning">Water level</span>
            <div slot="body">
              <p>Levels between 300 and 600 are considered optimum for most plants.</p>
            </div>
          </time-line-item>

        </time-line>
      </div>
      <!-- end data info -->
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
  import TimeLine from './InfoData/TimeLine.vue'
  import TimeLineItem from './InfoData/TimeLineItem.vue'
  import CircleNumberChartCard from 'src/components/UIComponents/Cards/NumberCard.vue'
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
