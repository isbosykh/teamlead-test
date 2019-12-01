import {getUsers} from "@/api/api";

export default ({
    namespaced: true,
    state: {
        users: [],
        sortOptions: {
            paginate: 10,
            page: 1,
            amount: 0
        }
    },
    mutations: {
        updateUsers(state, payload) {
            state.users = payload
        },
    },
    actions: {
        getUsers({commit}) {
            return getUsers().then(response => {
                commit('updateUsers', response);
                return response
            })
        },
    },
    getters: {
        users(state) {
            return state.users
        },
        amount(state) {
            return state.users.length
        }
    }
})