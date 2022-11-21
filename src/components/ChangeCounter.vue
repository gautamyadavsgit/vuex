<template>
<button @click="addOne">Add 1</button>
</template>

<script>
export default{
    methods:{
        addOne(){
            
            this.$store.dispatch({
        type:'increment',
        value:10
      });
        }
    }
}
</script>