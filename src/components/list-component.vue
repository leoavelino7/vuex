<script>
    import Vue from "vue";

    export default {
        props: ["pokemon"],
        filters: {
            sprite(number) {
                return `//serebii.net/pokedex-xy/icon/${number}.png`;
            }
        }    
    }
</script>

<template>
    <ul id="pokeList" class="poke-list">
        <router-link :to="pokemon.number" v-for="pokemon in $parent.pokeList" :key="pokemon.number">
            <li class="poke-list-item">
                <img class="poke-list-item-image" :src="pokemon.number | sprite"/>
                <span> {{ pokemon.number | pokeNumber }} - {{pokemon.name}}</span>
            </li>
        </router-link>
    </ul>
</template>