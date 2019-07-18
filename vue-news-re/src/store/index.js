import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchAskList, fetchJobsList } from '../api';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  mutations: {
    SET_NEWS(state, payload) {
      state.news = payload;
    },
    SET_JOBS(state, payload) {
      state.jobs = payload;
    },
    SET_ASK(state, payload) {
      state.ask = payload;
    },
  },

  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then(response => {
          context.commit('SET_NEWS', response.data);
        })
        .catch(error => console.log(error));
    },
    FETCH_JOBS(context) {
      fetchJobsList()
        .then(response => {
          context.commit('SET_JOBS', response.data);
        })
        .catch(error => console.log(error));
    },
    FETCH_ASK(context) {
      fetchAskList()
        .then(response => {
          context.commit('SET_ASK', response.data);
        })
        .catch(error => console.log(error));
    },
  },
});