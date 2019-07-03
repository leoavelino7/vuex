import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        categories: [1, 2, 3]
    },
    mutations: {
        ADD_CATEGORY(state, newCategory){
            state.categories.push(newCategory);
        }
    },
    actions: {
        add_category({commit}, newCategory) {
            console.log("cheguei");
            commit('ADD_CATEGORY', newCategory);
        }
    }
});