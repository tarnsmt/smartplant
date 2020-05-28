<template>
  <div class="user">
    <div class="photo">
      <img src="static/img/faces/face-2.png"/>
    </div>
    <div class="info">
      <a>
        <span>
          {{username}}
        </span>
      </a>
    </div>
  </div>
</template>
<script>
  import store from 'src/vuex/store'
  export default {
    store,
    data () {
      return {
        username: store.state.username
      }
    }
  }
</script>
<style>
  .collapsed {
    transition: opacity 1s;
  }
</style>
