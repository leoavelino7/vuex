<script>
    import FisRed from "../components/Red.vue";
    import FisGreen from "../components/Green.vue";
    export default {
        components: { FisRed, FisGreen },
        methods: {
            add(){
                this.$store.dispatch('add_category', 'alo!');
            }
        }     
    }
</script>

<template>
    <div>
        <router-link to="/about/">ABOUT</router-link>
        <button @click="add()">Add to Vuex State</button>
        <fis-red></fis-red>
        <fis-green></fis-green>
    </div>
</template>