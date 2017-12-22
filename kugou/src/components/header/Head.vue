<template>
  <div class="header">
    <HeadLogo />
    <HeadNav />
  </div>
</template>


<script type="es6">
  import HeadLogo from './HeadLogo'
  import HeadNav from './HeadNav'
  import { mapGetters } from 'vuex'
  import './head.scss'
  export default {
    // computed: {
    //   ...mapGetters(['head'])
    // },
    components: {HeadLogo,HeadNav}
  }
</script>

