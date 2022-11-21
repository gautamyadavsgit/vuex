<template>
    <h3>{{ timesTwo }}</h3>
  
</template>

<script>

import { mapGetters } from 'vuex';

export default{
    computed:{
//    counter(){
//     return this.$store.getters.timesTwo;
//    }
  ...mapGetters(['timesTwo'])
  }
    
  }

</script>