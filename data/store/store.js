import Vue from "vue";
import Vuex from "vuex";

import PokemonConstants from "../constants/PokemonConstants";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        pokemonList: [
            {
               "name":"bulbasaur",
               "resource_uri":"api/v1/pokemon/1/",
               "number":"001",
            },
            {
               "name":"ivysaur",
               "resource_uri":"api/v1/pokemon/2/",
               "number":"002"
            },
            {
               "name":"venusaur",
               "resource_uri":"api/v1/pokemon/3/",
               "number":"003"
            }
        ],
        nameFilter: ""
    },
    mutations: {
        ADD_POKEMON(state, newPokemon){
            state.pokemonList.push(newPokemon);
        }
    },
    actions: {
        ADD_POKEMON({commit}, newPokemon) {
            commit(PokemonConstants.ADD, newPokemon);
        },
    }
});