<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <time-line type="simple">

          <time-line-item class="timeline-inverted" badge-type="warning">
            <span slot="header" class="label label-danger">Soil moisture</span>
            <p slot="body"><b>0-20 %</b> : Extremely dry soil</p>
            <p slot="body"><b>21-40 %</b> : Well drained soil</p>
            <p slot="body"><b>41-60 %</b> : Moist soil</p>
            <p slot="body"><b>61-80 %</b> : Wet soil</p>
            <p slot="body">** 20%-60% is suitable for most general plants **</p>
          </time-line-item>

          <time-line-item class="timeline-inverted" badge-type="primary">
            <span slot="header" class="label label-info">Water container</span>
            <p slot="body"><b>61-100 %</b> : High</p>
            <p slot="body"><b>31-60 %</b> : Medium</p>
            <p slot="body"><b>&lt;30 %</b> : Low (Need to refill)</p>
          </time-line-item>

        </time-line>
      </div>
      <!-- end data info -->
      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage=Number(realtimesoilmois)
                           title="Plant"
                           description="Soil Moisture"
                           color="orange">
        </circle-chart-card>
      </div>
      <div class="col-lg-3 col-sm-6">
        <circle-chart-card :percentage="waterlevelvalue"
                           title="Water Container"
                           description="Water Level"
                           color="blue">
        </circle-chart-card>
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
        waterlevelvalue: store.state.waterlevelvalue,
        soilmoisturevalue: store.state.soilmoisturevalue,
        realtimesoilmois: store.state.soilmoisturevalue
      }
    },
    created () {
      if (Number(this.waterlevelvalue) <= 300) {
        this.waterlevelvalue = 100
      } else if (Number(this.waterlevelvalue) <= 600) {
        this.waterlevelvalue = 60
      } else if (Number(this.waterlevelvalue) <= 1000) {
        this.waterlevelvalue = 25
      } else if (Number(this.waterlevelvalue) > 10000) {
        this.waterlevelvalue = 0
      }
      this.refreshsoilmois()
      setInterval(this.refreshsoilmois, 15000)
    },
    methods: {
      refreshsoilmois () {
        /*
        var t = Math.floor(Math.random() * 10) + 1
        var r = Math.floor(Math.random() * 2)
        if (r === 0) {
          this.realtimesoilmois = (this.soilmoisturevalue + t).toFixed(1)
        } else {
          this.realtimesoilmois = (this.soilmoisturevalue - t).toFixed(1)
        }
        */
        this.soilmoisturevalue = store.state.soilmoisturevalue
        this.realtimesoilmois = store.state.soilmoisturevalue
      }
    }
  }

</script>
<style>

</style>
