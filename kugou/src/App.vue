<template>
  <div id="app">
    <Head/>
    <div class="main">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

  </div>
</template>

<script>
  import Head from './components/header/Head'

  export default {
    components: {
      Head
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
   .main {
    margin-top:95px;
  }
</style>
