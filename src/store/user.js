import {getUser, registerUser} from "@/api/api";

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
                    if (response) {
                        if (response.password.toString() === password) {
                            commit('updateUser', response);
                        } else {
                            response.error = 'Пароль не пароль';
                            return response
                        }
                    } else {
                        return {
                            error: 'Логин не логин'
                        }
                    }
                    return response
                })
        },
        logout({commit}) {
            commit('resetUser');
        },
        register({commit}, data) {
            return registerUser(data).then(response => {
                if (response) {
                    commit('updateUser', response);
                } else {
                    return {
                        error: 'Неизвестная ошибка'
                    }
                }
                return response
            })
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
