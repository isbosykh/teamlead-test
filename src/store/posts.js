import {amount, createPost, deletePost, getPosts, updatePost} from "@/api/api";

export default ({
    namespaced: true,
    state: {
        posts: [],
        sortOptions: {
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
        changeSortOptions(state, payload) {
            Object.assign(state.sortOptions, payload);
            this.dispatch('posts/updatePosts')
        }
    },
    actions: {
        updatePosts({commit, state}, page = state.sortOptions.page, paginate = state.sortOptions.paginate) {
            return getPosts(page, paginate).then(response => commit('updatePosts', response))
        },
        amount({commit}, category = 'posts') {
            return amount(category).then(response => {
                return commit('changeSortOptions', {amount: response[0].id});
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
    },
})