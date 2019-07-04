import Vue from "vue";
import VueRouter from "vue-router";

import store from "./data/store/store"
import "./data/filters";
import "./data/directives";

import routes from "./routes";

const router = new VueRouter({routes});

router.beforeEach((to, from, next) => {
   if(to.path !== "/") {
       let pkmNumber = to.path.slice(1);

       if(!pkmNumber.match(/\D/g)){
           next();
       }else {
           next("/");
       }
   } else {
       next();
   }
});


Vue.use(VueRouter);
new Vue({
   el: "#app",
   store,
   router
});