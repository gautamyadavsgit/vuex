import { createApp } from 'vue';
import { createStore } from 'vuex';
import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
    };
  },
  getters: {
    timesTwo(state) {
      return state.counter * 15;
    },
    nomralizedCounter(_, getters) {
      const finalCounter = getters.timesTwo;
      if (finalCounter < 0) {
        return 0;
      }
      if (finalCounter > 100) {
        return 100;
      }
      return finalCounter;
    },
  },
});

const app = createApp(App);
app.use(store);

app.mount('#app');
