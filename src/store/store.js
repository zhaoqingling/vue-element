
import Vue from 'vue'
import Vuex from 'vuex'
import sale from '../page/sale/store'
import $http from 'axios'

Vue.use(Vuex)

const state = {
  pjtnews: 0,
  count: 18
}
 
const mutations = {
  add(state,payload) {
    state.count += payload;
  },
  reduce(state,payload) {
    state.count -= payload;
  }
}

const modules = {
  sale
}

export default new Vuex.Store({
  state,
  mutations,
  modules
});