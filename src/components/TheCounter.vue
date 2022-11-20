<template>
    <h3>{{ counter }}</h3>
  <button @click="addOne">Add 1</button>
</template>

<script>
export default{
    computed:{
   counter(){
    return this.$store.state.counter;
   }
  },
  methods:{
    addOne(){
      console.log(this.$store.state.counter++);
    }
  }

}
</script>