<template>
  <div class="newsongs container">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="(banner, index) in banners" :key="index">
        <a :href="banner.extra.tourl">
          <img :src="banner.imgurl" :title="banner.title">
        </a>
      </mt-swipe-item>
    </mt-swipe>

    <mt-cell v-for="(song, index) in songList" :title="song.filename"  :key="index" id="ddd">
      <img src="../assets/images/icon_music.png" width="18" height="18">
    </mt-cell>
  </div>
</template>

<script type="es6">
  import { Indicator } from 'mint-ui'
  // import { PLAY_AUDIO } from '../mixins'
  export default{
    // mixins: [PLAY_AUDIO],
    data(){
      return {
        banners: [],
        songList: []
      }
    },
    created(){
      console.log('created')
      this.getSongs()
    },
    methods: {
      getSongs(){
        Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        });
        this.$http.get('/proxy/?json=true').then(({data}) => {
          this.banners = data.banner
          this.songList = data.data
          console.log(data)
        }).then(() => {
          Indicator.close()
        })
      },
    }
  }
</script>
<style lang="scss">
  .newsongs{
    .mint-swipe {
      height: 38vw !important;
      max-height: 225px;
      margin-bottom: 26px;
    }
    .mint-cell-title{
      text-align: left;
      font-size: 14px;

    }
    .mint-cell-wrapper{
      padding: 0;
    }

    .mint-swipe-indicator {
      width: 12px !important;
      height: 12px !important;
    }

    .mint-swipe-indicators {
      bottom: 5px !important;
    }
  }

</style>
