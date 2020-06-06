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
          <form method="#" action="#">
            <div class="card card-lock">
              <div class="author">
                <img class="avatar" src="static/img/faces/face-2.png" alt="...">
              </div>
              <h4 style="margin-bottom:5px">Welcome !</h4>
              <div class="col-md-10 col-md-offset-1">
                <p slot="body">Please select an option for your controller
                <el-tooltip content="Hardware attrached to the plant"
                            :open-delay="300"
                            placement="right">
                    <p-button type="success" size="sm" icon>
                      <i class="ti-help-alt"></i>
                    </p-button>
                </el-tooltip>
                </p>
                <drop-down>
                  <button slot="title" class="btn btn-block dropdown-toggle" data-toggle="dropdown" style="margin-top:30px">
                    Select Option
                    <b class="caret"></b>
                  </button>
                  <li><router-link to="/controllerselect"><a class="toggleController">Select Controller</a></router-link></li>
                  <li><router-link to="/controllercreate"><a class="toggleController">Create Controller</a></router-link></li>

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
  import Vue from 'vue'
  import {Tooltip} from 'element-ui'
  Vue.use(Tooltip)
  export default {
    components: {
      [Tooltip.name]: Tooltip
    },
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
.toggleController {
  color: #333333;
}

.toggleController:hover {
  color: #ffffff;
}

</style>
