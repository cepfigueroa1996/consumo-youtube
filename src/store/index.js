import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    select:0,
    keyToken:['API KEY'],
  },
  mutations: {
    modify(state, n){
      state.select = n;
    }
  },
  actions: {
  },
  modules: {
  }
})
