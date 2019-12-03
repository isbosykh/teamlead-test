import {createPost, deletePost, getPosts, updatePost} from "@/api/api";

export default ({
    namespaced: true,
    state: {
        posts: [],
        amount: 0,
        sortOptions: {
            page: 1,
            paginate: 10,
        }
    },
    mutations: {
        addPost(state, payload) {
            state.posts.push(payload)
        },
        updatePosts(state, payload) {
            state.posts = payload
        },
        updateAmount(state, payload) {
            state.amount = payload
        },
        updatePost(state, payload) {
            state.post = payload
        },
        deletePost(state, payload) {
            state.posts.splice(payload, 1)
        },
        changeSortOptions(state, payload) {
            state.sortOptions = Object.assign(state.sortOptions, payload);
        }
    },
    actions: {
        updatePosts({commit, state}, _page = state.sortOptions.page, _limit = state.sortOptions.paginate) {
            return getPosts({_page, _limit}).then(response => {
                commit('updatePosts', response.items);
                commit('updateAmount', response.count);
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
        posts(state) {
            return state.posts
        },
        paginate(state) {
            return state.sortOptions.paginate
        },
        amount(state) {
            return state.amount
        }
    },
})