<template>
    <div>
        <div class="columns is-mobile is-centered padding-bottom">
            <b-pagination
                    class="is-centered"
                    :total="amount"
                    :current.sync="current"
                    :per-page="paginate">
            </b-pagination>
        </div>

        <div class="columns is-gapless is-mobile is-centered">
            <div class="column is-8-widescreen is-12-tablet is-10-mobile is-multiline" v-if="posts">
                <Post v-for="(post, index) in posts"
                      :key="index"
                      :post="post"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Post from "@/components/Post";

    export default {
        name: "Main",
        components: {Post},
        data() {
            return {
                current: 1,
            }
        },
        computed: {
            posts() {
                return this.$store.getters.posts
            },
            amount() {
                return this.$store.getters.postsOptions.amount
            },
            paginate() {
                return this.$store.getters.postsOptions.paginate
            },
            page() {
                return this.$store.getters.postsOptions.page
            }
        },
        watch: {
            current() {
                this.$store.commit('changePostsOptions', {page: this.current})
            }
        },
        mounted() {
            this.$store.dispatch('amount');
            this.$store.dispatch('updatePosts');
        },
    }
</script>

<style lang="scss" scoped>
</style>