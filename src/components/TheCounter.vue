<template>
  <h2>{{ FinalCounter }}</h2>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  computed: {
    ...mapGetters(['FinalCounter']), // getting finalcounter getter with mappers
  },
};
</script>
