<script>
    export default {
        computed: {
            list() {
                return this.$store.state.categories;
            }
        }   
    }
</script>


<template>
    <div>
        <h2 v-for="number in list"> {{ number }}</h2>
    </div>
</template>


<style scoped>
    h2 {
        background-color: green;
        color: #fff;
        text-align: center;
        margin: 2px;
        padding: 10px;
        font-family: Helverica;
    }
</style>