/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // Initialize empty states for Instagram..
    searches: [],
    shopping: [],
    settings: {},
    information_about_you: {},
    stories_activities: {},
    saved: [],
    seen_content: {},
    devices: {},
    likes: {},
    fundraisers: [],
    profile: {},
    guides: [],
    messages: [],
    connections: {},
    account_history: {},
    comments: {},
    autofill: [],
    uploaded_contacts: [],

    // Initialize empty feed data
    currentFeed: []
  },

  mutations: {
    setInstagramData(state, { key, value }: {
      key: keyof typeof state;
      value: any;
    }) {
      state[key] = value;
    },

    setFeed(state, items) {
      state.currentFeed = items;
    }
  },

  actions: {
    setInstagramData(context, payload) {
      context.commit('setInstagramData', {
        key: payload.key,
        value: payload.value
      });
    },

    setFeed(context, items) {
      context.commit('setFeed', items);
    },
  },

  getters: {
    currentFeed(state) {
      return state.currentFeed;
    },

    informationAboutYou(state) {
      return state.information_about_you;
    },

    profileData(state) {
      return state.profile;
    },

    accountHistory(state) {
      return state.account_history;
    },

    comments(state) {
      return state.comments;
    },

    likes(state) {
      return state.likes;
    }
  },

  plugins: [createPersistedState()]
})
