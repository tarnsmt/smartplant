<template>
  <div>
    <nav class="navbar navbar-transparent navbar-absolute">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle"
                  data-toggle="collapse"
                  data-target="#navigation-example-2"
                  @click="toggleNavbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <p class="navbar-brand" to="/admin">Smart plant</p>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <router-link to="/register" tag="li">
              <a>Register</a>
            </router-link>
            <router-link to='' tag="li">
              <a @click='checkLogin'>Dashboard</a>
            </router-link>
          </ul>
        </div>
      </div>
    </nav>

    <div class="wrapper wrapper-full-page">
      <div class="full-page login-page" data-color=""
           data-image="static/img/background/background-2.jpg">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                <form action="#" method="#">
                  <div class="card" data-background="color" data-color="blue">
                    <div class="card-header">
                      <h3 class="card-title">Login</h3>
                    </div>
                    <div class="card-content">
                      <div class="form-group">
                        <label>Username</label>
                        <input type="text" placeholder="Enter username" class="form-control input-no-border" v-model='username'>
                      </div>
                      <div class="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Password" class="form-control input-no-border" v-model='password'>
                      </div>
                    </div>
                    <div class="card-footer text-center">
                      <button class="btn btn-fill btn-wd ">
                        <a @click='login'>Login</a>
                      </button>
                      <div class="forgot">
                        <router-link to="/register">
                          Need an account? Sign up
                        </router-link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
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
        <div class="full-page-background" style="background-image: url(static/img/background/background-2.jpg) "></div>
      </div>
    </div>
    <div class="collapse navbar-collapse off-canvas-sidebar">
      <ul class="nav nav-mobile-menu">
        <router-link to="/register" tag="li">
          <a>Register</a>
        </router-link>
        <router-link to="/admin/overview" tag="li">
          <a>Dashboard</a>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import store from 'src/vuex/store'
  import Vuex from 'vuex'
  global.vuex = Vuex
  export default {
    data () {
      return {
        username: null,
        password: null,
        info: {},
        loginstate: store.state.login
      }
    },
    store,
    methods: {
      checkLogin () {
        if (this.loginstate) { this.$router.push('/admin/overview') } else { alert('Please Login or Register before enter the dashboard') }
      },
      login () {
        if (this.username === null || this.password === null) {
          alert('Please enter username and password')
          // this.$router.push('#')
        } else {
          let payload = {
            'name': this.username,
            'password': this.password
          }
          store.commit('NAME_CHANGE', this.username)
          store.commit('PASSWORD_CHANGE', this.password)
          return axios.post('http://34.87.108.195/api/v1/session', payload).then(
            res => {
              this.info = res.data
              store.commit('SESSION_CHANGE', this.info['session'])
              store.commit('USERID_CHANGE', this.info['user_id'])
              store.commit('NAME_CHANGE', this.info['user'])
              store.commit('CONTROLLERID_CHANGE', this.info)
              store.commit('LOGIN_CHANGE', true)
              this.$router.push('/admin/overview')
            }
          )
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
</style>
