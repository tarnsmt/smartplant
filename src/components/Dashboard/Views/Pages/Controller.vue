<template>
  <div>
    <nav class="navbar navbar-transparent navbar-absolute">
      <div class="container">
        <div class="navbar-header">
          <button type="button"
                  class="navbar-toggle"
                  @click="toggleNavbar"
                  data-toggle="collapse"
                  data-target="#navigation-example-2">
            <span class="sr-only">Navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/admin/overview">AutoPlant</router-link>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">

          </ul>
        </div>
      </div>
    </nav>
    <div class="wrapper wrapper-full-page">
      <div class="full-page lock-page" data-color="" data-image="static/img/background/background-5.jpg">
        <div class="content">
            <div class="card card-lock">
              <div class="author">
                <img class="avatar" src="static/img/faces/face-2.png" alt="...">
              </div>
              <h4 style="margin-bottom:5px">Welcome !</h4>
              <div class="col-md-10 col-md-offset-1">
                <p slot="body">Please select a plant or add new one
                <el-tooltip content="Hardware attrached to the plant"
                            :open-delay="300"
                            placement="right">
                </el-tooltip>
                </p>
                <fieldset>
                <div>
                  <div class="form-group" v-for='controller in controller_list'>
                    <input type="radio" v-model='selected' :name='controller.name' :value='controller.controller_id'>
                    <label>{{controller.name}}</label>
                  </div>
                </div>
              </fieldset>
              <button class="btn btn-block dropdown-toggle" style="margin-top:10px">
                <a style="color:black" @click='enter_dashboard'> Select </a>
              </button>
              <hr>
              <label>Create new controller</label>
              <input type="text" placeholder="Plant name" v-model='plant_name' class="form-control">
                <button class="btn btn-block dropdown-toggle" style="margin-top:30px">
                  <a style="color:black" @click='create_controller'> Create </a>
                </button>
              </div>
            </div>
        </div>
        <footer class="footer footer-transparent">
          <div class="container">
            <div class="copyright">
              &copy; Term Project, 2020
            </div>
          </div>
        </footer>
                <div class="full-page-background" style="background-image: url(static/img/background/background-5.jpg) "></div>
      </div>
    </div>
    <div class="collapse navbar-collapse off-canvas-sidebar">
      <ul class="nav nav-mobile-menu">
        <li>
          <router-link to="/admin">
            Dashboard
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import store from 'src/vuex/store'
  import Vue from 'vue'
  import {Tooltip} from 'element-ui'
  Vue.use(Tooltip)
  export default {
    store,
    data () {
      return {
        controller_list: store.state.controller_list,
        session: store.state.session,
        selected: '',
        plant_name: null
      }
    },
    components: {
      [Tooltip.name]: Tooltip
    },
    methods: {
      async create_controller () {
        let payload = {
          'name': this.plant_name,
          'desc': 'Cute ' + this.plant_name
        }
        await axios.post('http://34.87.108.195/api/v1/controller', payload, {headers: {'session': this.session}}).then(
          res => {
            alert('Successfully create new controller')
            // this.controller_list = store.state.controller_list
            // this.$router.push('/controller')
          }
        )
        await axios.get('http://34.87.108.195/api/v1/controller', {headers: {'session': this.session}}).then(
          res => {
            store.commit('CONTROLLERLIST_CHANGE', res.data['controller_list'])
            this.controller_list = store.state.controller_list
          }
        )
      },
      async enter_dashboard () {
        if (this.selected === '') {
          alert('Please select one controller')
        } else {
          store.commit('CONTROLLERID_CHANGE', this.selected)
          // console.log(store.state.controllerid)
          // store.commit('PLAN_CHANGE', [])
          store.commit('SUMMARY_CHANGE', {})
          await axios.get('http://34.87.108.195/api/v1/controller', {headers: {'session': this.session}}).then(
            res => {
              var temp = res.data['controller_list']
              var i
              for (i = 0; i < temp.length; i++) {
                if (temp[i]['controller_id'] === this.selected) {
                  store.commit('PLANID_CHANGE', temp[i]['plan'])
                  store.commit('CONTROLLERNAME_CHANGE', temp[i]['name'])
                }
              }
            }
          )
          await axios.get('http://34.87.108.195/api/v1/plan', {headers: {'session': this.session}}).then(
              res => {
                var i
                var t = 0
                store.commit('CLEAR_PLAN')
                for (i = 0; i < res.data['result'].length; i++) {
                  if (res.data['result'][i]['plan_id'] === store.state.planid) {
                    store.commit('PLAN_CHANGE', res.data['result'][i])
                    t = 1
                  }
                }
                if (t === 0) {
                  store.commit('PLAN_CHANGE', [])
                }
              }
            )
          await axios.get('http://34.87.108.195/api/v1/summary/' + store.state.controllerid, {headers: {'session': this.session}}).then(
              res => {
                store.commit('SUMMARY_CHANGE', res.data['summary_list'])
              }
            )
          this.$router.push('/admin/overview')
        }
      },
      toggleNavbar () {
        document.body.classList.toggle('nav-open')
      },
      closeMenu () {
        document.body.classList.remove('nav-open')
        document.body.classList.remove('off-canvas-sidebar')
      }
    },
    beforeDestroy () {
      this.closeMenu()
    }
  }
</script>
<style>
.toggleController {
  color: #333333;
}

.toggleController:hover {
  color: #ffffff;
}

</style>
