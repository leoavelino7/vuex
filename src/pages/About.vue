<script>
    import CompStats from "../components/stats-component.vue";
    
    export default {
        components: { CompStats },
        data() {
            return {
                pokemonList: this.$store.state.pokemonList,
                pokemonNumber: this.$route.params.number
            }
        },
        methods: {
            getPokemon(){
                const index = this.pokemonList.findIndex(pokemon => pokemon.number === this.pokemonNumber);

                return this.pokemonList[index];
            }
        }
    }
</script>

<template>
    <div>
        <img 
            v-rotate-on-scroll 
            id="pokeballBack" class="pokeball-back" 
            src="/public/svg/pokeball.svg" 
            title="Pokebola"
            alt="Imagem de um Pokebola" />

        <comp-stats :pokemon="getPokemon()"></comp-stats>
    </div>
</template>