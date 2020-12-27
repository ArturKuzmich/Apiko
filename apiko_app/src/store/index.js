import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";
// import {getByName, getByKeyword} from '../filteredFunction'
const LOADING = 'LOADING';
const SET_PHOTO = 'SET_PHOTO';
const SET_SEARCH = 'SET_SEARCH'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    photoList: [],
    loading: false,
    searchName: '',
    // keywords: '',
    // names: [],
    isNavOpen: false, ///burger open
  /////


  },
  mutations: {
    [LOADING]: (state, loading ) => state.loading = loading,
    [SET_PHOTO]: (state, photoList) => state.photoList = photoList,
    [SET_SEARCH]: (state, value) => state.searchName = value,
    // setKeywords(state, keys) {
    //   state.keywords = keys;
    // },
    // setNames(state, name) {
    //   state.names = name;
    // },
    NEW_ITEM_CREATE : (state,payload) => {
      state.photoList.push(payload)
    },
    setIsNavOpen(yesno, state) {
      state.isNavOpen = yesno;
    },
    toggleNav(state) {
      state.isNavOpen = !state.isNavOpen;
    }
  },
  actions: {
    SAVE_NEW_ITEM : async (context,payload) => {
      context.commit('NEW_ITEM_CREATE',payload)
    },
    getDataFromApi({commit}){
    commit(LOADING, true)
    axios
        .get(`http://www.json-generator.com/api/json/get/coYycynMZe?indent=2`)
        .then(response => {
          console.log(response.data)
          commit(SET_PHOTO, response.data)
          commit(LOADING, false)
        })
        .catch(error => {
          console.log(error)
          commit(LOADING, true)
        })
  },
    getSearchName({commit}, value){
      commit('SET_SEARCH', value)
    },
  },
  getters: {
    getData(state){
      return state.photoList
    },
    SEARCH_VALUE(state){
      return state.searchName
    },
    // loadFilters(state){
    //   // return getByKeyword(getByName(state.photoList, state.names), state.keywords)
    //   return getByKeyword(getByName(state.photoList, state.names), state.keywords)
    // }
  },
  modules: {
  }
})
