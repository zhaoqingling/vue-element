
import Vue from 'vue'
import Vuex from 'vuex'
import $http from 'axios'
import storage from '../common/storage'

Vue.use(Vuex)

const state = {
  login:{
    name: storage.sessions.get('cmdb-login')? storage.sessions.get('cmdb-login').name : '',
    password: storage.sessions.get('cmdb-login')? storage.sessions.get('cmdb-login').password : ''
  },
  token:'x-token'
}
 
const mutations = {
  // 请求接口之后再掉这个方法，token也要传入
  intoLogin(state,payload){
    state.login.name = payload.userName;
    state.login.password = payload.pass;
    // 将状态存储到sessionStorage中
    storage.sessions.set('cmdb-login',state.login);
  }
  //还要有退出的方法
}

const modules = {

}

export default new Vuex.Store({
  state,
  mutations,
  modules
});