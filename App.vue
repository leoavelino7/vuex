<script>
    import FisRed from "./Red.vue";
    import FisGreen from "./Green.vue";
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
        <button @click="add()">Add to Vuex State</button>
        <fis-red></fis-red>
        <fis-green></fis-green>
    </div>
</template>