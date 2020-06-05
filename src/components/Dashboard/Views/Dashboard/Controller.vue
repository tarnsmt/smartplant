<template>
  <div class="row">
    <div class="col-sm-6">
      <h4 class="card-title">EDOK</h4>
      <drop-down>
        <button slot="title" class="btn btn-block dropdown-toggle" data-toggle="dropdown">
          Select Option
          <b class="caret"></b>
        </button>
        <li><router-link to="/controllerselect"><a>Select Controller</a></router-link></li>
        <li><router-link to="/controllercreate"><a>Create Controller</a></router-link></li>

      </drop-down>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {Table, TableColumn, Select, Option} from 'element-ui'
  import PPagination from 'src/components/UIComponents/Pagination.vue'
  import store from 'src/vuex/store'
  Vue.use(Table)
  Vue.use(TableColumn)
  Vue.use(Select)
  Vue.use(Option)
  export default{
    store,
    components: {
      PPagination
    },
    computed: {
      pagedData () {
        return this.tableData.slice(this.from, this.to)
      },
      /***
       * Searches through table data and returns a paginated array.
       * Note that this should not be used for table with a lot of data as it might be slow!
       * Do the search and the pagination on the server and display the data retrieved from server instead.
       * @returns {computed.pagedData}
       */
      queriedData () {
        if (!this.searchQuery) {
          this.pagination.total = this.tableData.length
          return this.pagedData
        }
        let result = this.tableData
          .filter((row) => {
            let isIncluded = false
            for (let key of this.propsToSearch) {
              let rowValue = row[key].toString()
              if (rowValue.includes && rowValue.includes(this.searchQuery)) {
                isIncluded = true
              }
            }
            return isIncluded
          })
        this.pagination.total = result.length
        return result.slice(this.from, this.to)
      },
      to () {
        let highBound = this.from + this.pagination.perPage
        if (this.total < highBound) {
          highBound = this.total
        }
        return highBound
      },
      from () {
        return this.pagination.perPage * (this.pagination.currentPage - 1)
      },
      total () {
        this.pagination.total = this.tableData.length
        return this.tableData.length
      }
    },
    data () {
      return {
        pagination: {
          perPage: 5,
          currentPage: 1,
          perPageOptions: [5, 10, 25, 50],
          total: 0
        },
        searchQuery: '',
        propsToSearch: ['date', 'median_humidity', 'median_light', 'mean_soil_moisture', 'mean_temperature', 'mean_water_level'],
        tableColumns: [
          {
            prop: 'date',
            label: 'Date',
            minWidth: 100
          },
          {
            prop: 'median_humidity',
            label: 'Humidity',
            minWidth: 100
          },
          {
            prop: 'median_light',
            label: 'Light',
            minWidth: 100
          },
          {
            prop: 'mean_soil_moisture',
            label: 'Soil Moisture',
            minWidth: 100
          },
          {
            prop: 'mean_temperature',
            label: 'Tempeture',
            minWidth: 100
          },
          {
            prop: 'mean_water_level',
            label: 'Water Level',
            minWidth: 100
          }
        ],
        tableData: store.state.summary
      }
    }
  }
</script>
<style>
</style>
