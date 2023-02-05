import { createApp } from 'vue';

import { createStore } from 'vuex';
import App from './App.vue';

const app = createApp(App);
const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  mutations: {
    increment(state) {
      state.counter = state.counter + 1;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
  },
  getters: {
    FinalCounter(state) {
      return state.counter * 3;
    },
    NormalizedCounter(_, getters) {
      if (getters.FinalCounter < 0) {
        return 0;
      }
      if (getters.FinalCounter > 100) {
        return 100;
      }
      return getters.FinalCounter;
    },
  },
  actions: {
    increase(context, payload) {
      console.log(context);
      setTimeout(function () {
        console.log(context);
        context.commit('increase', payload);
      }, 2000);
    },
  },
});
app.use(store);
app.mount('#app');
