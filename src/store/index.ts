/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

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
    fundRaisers: [],
    profile: {},
    guides: [],
    messages: [],
    connections: {},
    account_history: {},
    comments: {},
    autofill: [],
    uploaded_contacts: [],

    // Initialize empty feed data
    feed: {}
  },

  mutations: {
    setInstagramData (state, { key, value }: {
      key: keyof typeof state;
      value: any;
    }) {
      state[key] = value;
    },
  },

  actions: {
    setInstagramData(context, payload) {
      context.commit('setInstagramData', {
        key: payload.key,
        value: payload.value
      });
    },
  },

  modules: {
  }
})
