<script>
    import PokemonConstants from "../../data/constants/PokemonConstants.js";
    import CompSearch from "../components/search-component.vue";
    import CompList from "../components/list-component.vue";
    
    export default {
        components: { CompSearch, CompList },
        data() {
            return {
                pokemonList: this.$store.state.pokemonList,
                nameFilter: this.$store.state.nameFilter
            }
        },
        computed: {
            pokeList() {
                let nameFilter = this.nameFilter.toLowerCase();
                return this.pokemonList.filter(pokemon => pokemon.name.includes(nameFilter));
            }
        },
        methods: {
            add() {
                this.$store.dispatch(PokemonConstants.ADD, {
                    "name":"charmeleon",
                    "resource_uri":"api/v1/pokemon/5/",
                    "number":"005"
                })
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

        <comp-search></comp-search>
        <comp-list></comp-list>
        <button @click="add()" class="button-add">Adicionar</button>
    </div>
</template>