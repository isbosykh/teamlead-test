import Vue from "vue";
import Vuex from "vuex";
import {deletePost, updatePost, getPosts, createPost, amount} from "@/api/api";
import user from "@/store/user";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [],
        postsOptions: {
            paginate: 10,
            page: 1,
            amount: 0
        }
    },
    mutations: {
        updatePosts(state, payload) {
            state.posts = payload
        },
        updatePost(state, payload) {
            state.post = payload
        },
        changePostsOptions(state, payload) {
            Object.assign(state.postsOptions, payload);
            this.dispatch('updatePosts')
        }
    },
    actions: {
        updatePosts({commit, state}, page = state.postsOptions.page,paginate = state.postsOptions.paginate) {
            return getPosts(page, paginate).then(response => commit('updatePosts', response))
        },
        amount({commit}, category = 'posts') {
            return amount(category).then(response => {
                return commit('changePostsOptions', {amount: response[0].id});
            })
        },
        createPost({dispatch}, data) {
            return createPost(data).then(response => {
                dispatch('updatePosts');
                return response
            })
        },
        deletePost({dispatch}, id) {
            return deletePost(id).then(response => {
                dispatch('updatePosts');
                return response
            })
        },
        updatePost({dispatch}, data) {
            return updatePost(data).then(response => {
                dispatch('updatePosts');
                return response
            })
        }
    },
    getters: {
        post(state) {
            return function(id) {
                for (let post of state.posts) {
                    if (post.id === id) return post
                }
            }
        },
        posts(state) {
            return state.posts
        },
        postsOptions(state) {
            return state.postsOptions
        }
    },
    modules: {
        user
    }
});
