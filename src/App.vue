<template>
  <base-container title="Vuex">
    <the-counter></the-counter>
    <button @click="inc({ value: 10 })">Add</button>
    <change-counter>Add</change-counter>
    <favorite-value></favorite-value>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import { mapActions } from 'vuex';
export default {
  components: {
    TheCounter,
    BaseContainer,
    ChangeCounter,
    FavoriteValue,
  },
  methods: {
    // ...mapActions(['increase','increment']);
    ...mapActions({
      inc: 'increase',
    }),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
