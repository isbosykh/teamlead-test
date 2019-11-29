import Vue from "vue";
import Vuex from "vuex";
import user from "@/store/user";
import users from "@/store/users";
import posts from "@/store/posts";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    modules: {
        user,
        posts,
        users
    }
});
