import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const store = new Vuex.Store({
  state:{
    headNav: 'head-nav1',
  },
  getters:{
    headNav: state => state.headNav,
  },
  mutations:{
    setHeadNav: (state, nav) => {
      state.headNav = nav
    }
  }
})
export default store
