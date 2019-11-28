<template>
    <div class="columns is-gapless is-mobile is-centered">
        <div class="column is-5-widescreen is-12-tablet is-10-mobile is-multiline" v-if="posts">
            <Post v-for="(post, index) in posts"
                  :key="index"
                  :post="post"/>
        </div>
    </div>
</template>

<script>
    import Post from "@/components/Post";

    export default {
        name: "Main",
        components: {Post},
        computed: {
            posts() {
                return this.$store.getters.posts
            }
        },
        mounted() {
            this.$store.dispatch('updatePosts');
        },
    }
</script>

<style lang="scss" scoped>
</style>