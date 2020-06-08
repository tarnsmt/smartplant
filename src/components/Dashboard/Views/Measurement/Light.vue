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
            <span slot="header" class="label label-success">breakdown of the lighting intensity needs of each type of plants</span>
            <div slot="body">
              <p><b>Very low light </b> : Lux 200-500 : Not appropriate for most plants.</p>
              <p><b>Low light </b> : Lux 500-1000 : This light intensity is appropriate for shade-loving plants.</p>
              <p><b>Indirect light </b> : Lux 1000-2000 :  Appropriate for plants that require indirect sunlight.</p>
              <p><b>Direct light</b> : Lux 2000-4000 :  It is ideal for most plants.</p>
              <p><b>Strong light</b> : Lux 4000-5000 : Appropriate for plants that require a lot of strong light.</p>
              <p><b>Very strong light</b> : Lux >5000 : Very bright indoor light, not as strong as outdoors.</p>
              <p><b>Outdoor sun light</b> : Lux >10000</p>
            </div>
          </time-line-item>

        </time-line>
      </div>
      <!-- end data info -->

      <div class="col-lg-3 col-sm-6">
        <circle-number-chart-card :number="realtimelight"
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
        lightvalue: store.state.lightvalue,
        realtimelight: store.state.lightvalue
      }
    },
    created () {
      this.refresh()
      setInterval(this.refresh, 7000)
    },
    methods: {
      refresh () {
        /*
        var t = Math.floor(Math.random() * 100) + 1
        var r = Math.floor(Math.random() * 2)
        if (r === 0) {
          this.realtimelight = this.lightvalue + t
        } else {
          this.realtimelight = this.lightvalue - t
        }
        */
        this.lightvalue = store.state.lightvalue
        this.realtimelight = store.state.lightvalue
      }
    }
  }

</script>
<style>

</style>
