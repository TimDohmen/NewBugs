import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'


Vue.use(Vuex)

let base = window.location.host.includes('localhost:8080') ? '//localhost:3000/' : '/'

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
})

export default new Vuex.Store({
  state: {
    bugs: [],
    activeBug: {}
  },
  mutations: {
    setBugs(state, bug) {
      state.bugs = bug
    },
    setActiveBug(state, bug) {
      state.activeBug = bug
    }
  },
  actions: {
    async getBugs({ commit, dispatch }) {
      try {
        let res = await api.get(`bugs`)
        commit("setBugs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createBug({ commit, dispatch }, bug) {
      try {
        let res = await api.post('bugs', bug)
        dispatch("getBugs")
      } catch (error) {
        console.error(error)
      }
    },
    async getBugById({ commit, dispatch }, bugId) {
      try {
        let res = await api.get('bugs/' + bugId)
        commit("setActiveBug", res.data)
      } catch (error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
