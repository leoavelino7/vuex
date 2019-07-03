import Vue from "vue";
import App from "./App.vue";
import store from "./store";

new Vue({
   el: "#app",
   store, // alias para store: store (ES2015)
   render: h => h(App) 
});