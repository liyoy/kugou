<template>
  <div class="logo-container container">
    <div class="head-logo">
      <a href="#">
        <img src="http://m.kugou.com/v3/static/images/index/logo.png" class="logo">
        <!--<img src="http://download.kugou.com/static/images/logo.png" class="logo">-->
      </a>
    </div>
    <div class="head-search">
      <!--<img src="http://m.kugou.com/v3/static/images/index/search.png" class="search">-->
    </div>
  </div>
</template>

<script type="es6">
  export default {
    methods: {
      searchRouter(){
        // this.$store.commit('showDetailPlayer',false);
        // this.$router.push({path: '/search'});
      }
    }
  }
</script>
