<template>
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-minimize">
        <button class="btn btn-fill btn-icon" @click="minimizeSidebar">
          <i :class="$sidebar.isMinimized ? 'ti-menu-alt' : 'ti-more-alt'"></i>
        </button>
      </div>
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" :class="{toggled: $sidebar.showSidebar}" @click="toggleSidebar">
          <span class="sr-only">Navigation</span>
          <span class="icon-bar bar1"></span>
          <span class="icon-bar bar2"></span>
          <span class="icon-bar bar3"></span>
        </button>
        <a class="navbar-brand">{{this.$route.name}}</a>
      </div>
      <div class="collapse navbar-collapse">
        <form class="navbar-form navbar-left navbar-search-form" role="search">
          <div class="input-group">
            <input type="text" value="" class="form-control" placeholder="Search...">
            <span class="input-group-addon"><i class="fa fa-search"></i></span>
          </div>
        </form>
        <ul class="nav navbar-nav navbar-right">
          <li class="open">
            <router-link to="/controller" class="dropdown-toggle btn-magnify" data-toggle="dropdown">
              <i class="ti-plus"></i>
              <p>Switch Controller</p>
            </router-link>
          </li>
          <li class="open">
            <a @click='logout' class="dropdown-toggle btn-magnify" data-toggle="dropdown">
              <i class="ti-shift-right"></i>
              <p>Logout</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
  import store from 'src/vuex/store'
  export default {
    store,
    data () {
      return {
        activeNotifications: false,
        login: store.state.login
      }
    },
    methods: {
      logout () {
        store.commit('LOGIN_CHANGE', false)
        store.commit('SESSION_CHANGE', '')
        store.commit('USERID_CHANGE', '')
        store.commit('NAME_CHANGE', '')
        store.commit('PASSWORD_CHANGE', '')
        store.commit('CONTROLLERID_CHANGE', '')
        store.commit('TEMP_CHANGE', '')
        store.commit('LIGHT_CHANGE', '')
        store.commit('HUMIDITY_CHANGE', '')
        store.commit('WATERLEVEL_CHANGE', '')
        store.commit('SOILMOISTURE_CHANGE', '')
        store.commit('SUMMARY_CHANGE', {})
        store.commit('CHARTINFO_CHANGE', [])
        store.commit('PLAN_CHANGE', [])
        store.commit('CONTROLLERLIST_CHANGE', [])
        store.commit('PLANID_CHANGE', '')
        store.commit('CLEAR_ARRAY')
        this.$router.push('/login')
      },
      capitalizeFirstLetter (string) {
        return string.charAt(0).toUpperCase() + string.slice(1)
      },
      toggleNotificationDropDown () {
        this.activeNotifications = !this.activeNotifications
      },
      closeDropDown () {
        this.activeNotifications = false
      },
      toggleSidebar () {
        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)
      },
      hideSidebar () {
        this.$sidebar.displaySidebar(false)
      },
      minimizeSidebar () {
        this.$sidebar.toggleMinimize()
      }
    }
  }

</script>
<style>

</style>
