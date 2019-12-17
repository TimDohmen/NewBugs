import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import { createContext } from 'vm'


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
    activeBug: {},
    notes: []
  },
  mutations: {
    setBugs(state, bug) {
      state.bugs = bug
    },
    setActiveBug(state, bug) {
      state.activeBug = bug
    },
    setNotes(state, notes) {
      state.notes = notes
    }
  },
  actions: {
    async getBugs({ commit, dispatch }, page) {
      try {
        let res = await api.get(`bugs?page=` + page)
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
    },
    async closeBug({ commit, dispatch }, bugId) {
      try {
        let res = await api.delete('bugs/' + bugId)
        dispatch("getBugById", bugId)
      } catch (error) {
        console.error(error)
      }
    },
    async getNotes({ commit, dispatch }, bugId) {
      try {
        let res = await api.get('bugs/' + bugId + '/notes')
        commit("setNotes", res.data)
      } catch (error) {

      }
    },
    async createNote({ commit, dispatch }, note) {
      try {
        let res = await api.post('notes', note)
        dispatch("getNotes", note.bug)
      } catch (error) {

      }
    },
    async removeNote({ commit, dispatch }, note) {
      try {
        let res = await api.delete('notes/' + note.noteId)
        dispatch("getNotes", note.bugId)
      } catch (error) {

      }
    }
  },
  modules: {
  }
})
