<template>
<button @click="addOne">Add</button>
</template>

<script>
export default{
    methods:{
        addOne(){
            this.$store.commit('increment')
        }
    }
}
</script>