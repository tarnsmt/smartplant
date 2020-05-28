<template>
  <div>
    <nav class="navbar navbar-transparent navbar-absolute">
      <div class="container">
        <div class="navbar-header">
          <button type="button"
                  class="navbar-toggle navbar-toggle-black"
                  @click="toggleNavbar"
                  data-toggle="collapse"
                  data-target="#navigation-example-2">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar "></span>
            <span class="icon-bar "></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link to="/login" class="btn">
                Back to login?
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="wrapper wrapper-full-page">
      <div class="register-page">
        <div class="content">
          <div class="container">
            <div class="row">
              <div class="col-md-8 col-md-offset-2">
                <div class="header-text">
                  <h2>Smart Plant</h2>
                  <h4>Use SmartPlant completely free for your first taste of simple plant care.</h4>
                  <hr>
                </div>
              </div>
              <div class="col-md-4 col-md-offset-2">
                <div class="media">
                  <div class="media-left">
                    <div class="icon icon-danger">
                      <i class="ti ti-user"></i>
                    </div>
                  </div>
                  <div class="media-body">
                    <h5>Free Account</h5>
                    We take the thinking out of your plants, you just need to enjoy them.
                  </div>
                </div>
                <div class="media">
                  <div class="media-left">
                    <div class="icon icon-warning">
                      <i class="ti-dashboard"></i>
                    </div>
                  </div>
                  <div class="media-body">
                    <h5>Plat Infomation</h5>
                    Discover a wealth of plants and plant information such as temperature, lighting, humidity.
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <form method="#" action="#">
                  <div class="card card-plain">
                    <div class="content">
                      <div class="form-group">
                        <input type="text" placeholder="Your First Name" class="form-control">
                      </div>
                      <div class="form-group">
                        <input type="text" placeholder="Your Last Name" class="form-control">
                      </div>
                      <div class="form-group">
                        <input type="text" placeholder="Username" class="form-control" v-model='username'>
                      </div>
                      <div class="form-group">
                        <input type="password" placeholder="Password" class="form-control" v-model='password'>
                      </div>
                      <div class="form-group">
                        <input type="password" placeholder="Password Confirmation" class="form-control">
                      </div>
                    </div>
                    <div class="footer text-center">
                      <button class="btn btn-fill btn-danger btn-wd ">
                        <router-link to="/login">
                          <a @click='createAccount'>Create Account</a>
                        </router-link>
                      </button>
                      <button type="button" class="btn btn-fill btn-danger btn-wd">Create Accountaa</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="collapse navbar-collapse off-canvas-sidebar">
      <ul class="nav nav-mobile-menu">
        <li>
          <router-link to="/login">
           Back to login
          </router-link>
        </li>
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
  export default {
    data () {
      return {
        username: null,
        password: null
      }
    },
    methods: {
      createAccount () {
        let payload = {
          'name': this.username,
          'password': this.password
        }
        return axios.post('http://34.87.108.195/api/v1/user', payload).then(
          res => {
            this.info = res.data
            alert('Sucessfully create an account!')
          }
        )
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
