import Vue from "vue";
Vue.filter("pokeNumber", number => ("000" + number).slice(-3));