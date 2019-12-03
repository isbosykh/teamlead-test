<template>
    <List :key="page" v-if="list" :list="list" :current.sync="page" :options="{ amount, paginate }" namespace="posts">
        <template slot-scope="{ item, index }">
            <Post :index="index" :data="item"/>
        </template>
    </List>
</template>

<script>
    import List from "@/components/List";
    import Post from "@/components/Post";
    import { mapState } from 'vuex';

    export default {
        name: "Posts",
        components: { List, Post },
        computed: {
            list() {
                return this.$store.getters['posts/posts']
            },
            ...mapState('posts', ['amount']),
            paginate() {
                return this.$store.getters['posts/paginate']
            },
            page: {
                get() {
                    return parseInt(this.$route.params.page) || 1;
                },
                set(value) {
                    this.$router.push({
                        name: 'posts',
                        params: {
                            page: value
                        }})
                }
            }
        },
        methods: {
            updatePosts(params) {
                this.$store.dispatch('posts/updatePosts', params.page)
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.updatePosts(to.params)
            });
        },
        beforeRouteUpdate(to, from, next) {
            this.$nextTick(() => this.updatePosts(to.params));
            next();
        },
    }
</script>