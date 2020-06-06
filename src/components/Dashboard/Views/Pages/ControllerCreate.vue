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
              <h4>New controller</h4>
              <div class="form-group">
                <input  placeholder="Enter Name" class="form-control">
              </div>
              <router-link to="/admin/overview" >
                  <button class="btn btn-wd btn-fill" @click="showSwal()">Create</button>
              </router-link>
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
  import swal from 'sweetalert2'
  export default {
    methods: {
      showSwal () {
        swal({
          title: `Success!`,
          text: 'New controller is created',
          buttonsStyling: false,
          confirmButtonClass: 'btn btn-success btn-fill',
          type: 'success'
        })
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
