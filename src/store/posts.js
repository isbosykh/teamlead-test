import {createPost, deletePost, getPosts, updatePost} from "@/api/api";

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
        addPost(state, payload) {
            state.posts.push(payload)
        },
        updatePost(state, payload) {
            state.post = payload
        },
        deletePost(state, payload) {
            state.posts.splice(payload, 1)
        },
        changeSortOptions(state, payload) {
            Object.assign(state.sortOptions, payload);
            this.dispatch('posts/updatePosts');
        }
    },
    actions: {
        updatePosts({commit, state}, page = state.sortOptions.page, paginate = state.sortOptions.paginate) {
            return getPosts(page, paginate).then(response => {
                commit('updatePosts', response)
            })
        },
        createPost({commit}, data) {
            return createPost(data).then(response => {
                if (response) {
                    commit('addPost', response);
                    return response
                }
            })
        },
        deletePost({commit}, {id, index}) {
            return deletePost(id).then(response => {
                commit('deletePost', index);
                return response
            })
        },
        updatePost({commit}, data) {
            return updatePost(data).then(response => {
                if (response) {
                    commit('addPost', response);
                    return response
                }
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
        amount(state) {
            return state.posts.length
        }
    },
})