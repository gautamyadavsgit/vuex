<template>
  <button @click="increment({value:10})">Add 1</button>
  <button @click="increase({value:10})"> Add 1</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  methods: {
    // addOne() {
    //   this.$store.dispatch({
    //     type: 'increment',
    //     value: 10,
    //   });

    // },
    ...mapActions(['increment','increase']),
  },
};
</script>
