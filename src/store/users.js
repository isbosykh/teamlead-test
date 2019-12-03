import {deleteUser, getUsers} from "@/api/api";

export default ({
    namespaced: true,
    state: {
        users: [],
        amount: 0,
        sortOptions: {
            paginate: 10,
            page: 1,
        }
    },
    mutations: {
        updateUsers(state, payload) {
            state.users = payload
        },
        updateAmount(state, payload) {
            state.amount = payload
        },
        deleteUser(state, payload) {
            state.users.splice(payload, 1)
        },
        changeSortOptions(state, payload) {
            state.sortOptions = Object.assign(state.sortOptions, payload);
            this.dispatch('users/updateUsers');
        }
    },
    actions: {
        updateUsers({commit, state}, _page = state.sortOptions.page, _limit = state.sortOptions.paginate) {
            return getUsers({_page, _limit}).then(response => {
                commit('updateUsers', response.items);
                commit('updateAmount', response.count);
                return response
            })
        },
        deleteUser({commit}, data) {
            return deleteUser(data.id).then(response => {
                commit('deleteUser', data.index);
                return response
            })
        }
    }
    ,
    getters: {
        users(state) {
            return state.users
        },
        amount(state) {
            return state.users.length
        }
    }
})