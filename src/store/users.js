import {getUsers} from "@/api/api";

export default ({
    namespaced: true,
    state: {
        users: []
    },
    mutations: {
        updateUsers(state, payload) {
            state.users = payload
        }
    },
    actions: {
        getUsers({commit}) {
            return getUsers().then(response => commit('updateUsers', response))
        }
    },
    getters: {
        users(state) {
            return state.users
        }
    }
})