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
      <div class="full-page lock-page" data-color="green" data-image="static/img/background/background-5.png"
           style="background-image: url('static/img/background/background-5.png')">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <form method="#" action="#">
            <div class="card card-lock">
              <div class="author">
                <img class="avatar" src="static/img/faces/face-2.png" alt="...">
              </div>
              <h4>Welcome !</h4>
              <div class="form-group">
                <input type="password" placeholder="Enter Password" class="form-control">
              </div>
              <div class="col-md-10 col-md-offset-1">
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
          </form>
        </div>
        <footer class="footer footer-transparent">
          <div class="container">
            <div class="copyright">
              &copy; Term Project, 2020
            </div>
          </div>
        </footer>
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
  export default {
    methods: {
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
