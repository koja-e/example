import Vue from 'vue'
import Vuex from 'vuex'
import auth from './Auth'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {},
  mutations: {},
  modules: {
    auth,
  },
  getters: {},
  actions: {}
})
export default store
