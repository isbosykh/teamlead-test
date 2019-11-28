import {getUser} from "@/api/api";

export default ({
    namespaced: true,
    state: {
        profile: {}
    },
    mutations: {
        updateUser(state, payload) {
            state.profile = payload
        },
        resetUser(state) {
            state.profile = {}
        }
    },
    actions: {
        login({commit}, {login, password}) {
            return getUser(login)
                .then(response => {
                    response = response[0];
                    if (response.password.toString() === password) {
                        commit('updateUser', response);
                    } else {
                        response.status = 'Пароль не пароль';
                    }
                    return response
                })
        },
        logout({commit}) {
            commit('resetUser');
        }
    },
    getters: {
        isAuth(state) {
            return !!state.profile.id
        },
        role(state) {
            return state.profile.role
        }
    },
    modules: {}
});
