<script>
export default {
    props: ["pokemon"],
    methods: {
        gif(type) {
            return `//serebii.net/pokedex-bw/type/${type.name}.gif`;
        }
    },
    computed: {
        sprite() {
            return `//serebii.net/sunmoon/pokemon/${this.$route.params.number}.png`;
        }
    }
}
</script>

<template>
    <div>
        <div class="poke-profile">
            <router-link to="/" class="back-button">&lt;</router-link>
            <span class="poke-profile-name">#{{ $route.params.number }} - {{ pokemon.name }}</span>
            <img class="poke-profile-sprite" :src="sprite" />
        </div>

        <!-- <ul class="poke-types">
            <li class="poke-types-item" v-for="'type in $parent.pokemon.types'">
                <img :src="gif(type)" />
            </li>
        </ul> -->

        <table class="stats">
            <tr>
                <td class="stats-info">Attack</td>
                <td class="stats-info">Defense</td>
                <td class="stats-info">Sp Atk</td>
                <td class="stats-info">Sp Def</td>
                <td class="stats-info">Speed</td>
            </tr>
            <tr>
                <td class="stats-info">{{ pokemon.attack }}</td>
                <td class="stats-info">{{ pokemon.defense }}</td>
                <td class="stats-info">{{ pokemon.sp_atk }}</td>
                <td class="stats-info">{{ pokemon.sp_def }}</td>
                <td class="stats-info">{{ pokemon.speed }}</td>
            </tr>
        </table>
    </div>
</template>