import Vue from "vue";
import Vuex from "vuex";
import {deletePost, updatePost, getPosts, getPost, createPost} from "@/api/api";
import user from "@/store/user";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [],
        postsPaginate: 10,
        post: {}
    },
    mutations: {
        updatePosts(state, payload) {
            state.posts = payload
        },
        updatePost(state, payload) {
            state.post = payload
        },
        changePaginate(state, payload) {
            state.postsPaginate = payload;
            this.dispatch('updatePosts')
        }
    },
    actions: {
        updatePosts({commit, state}, paginate = state.postsPaginate) {
            return getPosts(paginate).then(response => commit('updatePosts', response))
        },
        getPost({commit}, id) {
            return getPost(id).then(response => commit('updatePost', response))
        },
        createPost(data) {
            return createPost(data).then(response => {
                this.dispatch('updatePosts');
                return response
            })
        },
        deletePost(id) {
            return deletePost(id).then(response => {
                this.dispatch('updatePosts');
                return response
            })
        },
        updatePost(data) {
            return updatePost(data).then(response => {
                this.dispatch('updatePosts');
                return response
            })
        }
    },
    getters: {
        posts(state) {
            return state.posts
        }
    },
    modules: {
        user
    }
});
