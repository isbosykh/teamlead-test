<template>
    <div class="main-view">
        <List :list="list" :namespace="path"/>
    </div>
</template>

<script>
    import List from "@/views/List";

    export default {
        name: "Main",
        components: {List},
        computed: {
            list() {
                return this.$store.state[this.path][this.path] || []
            },
            path() {
                return this.$route.name
            },
        },
        mounted() {
            if (this.path === 'posts') {
                return this.$store.dispatch('posts/updatePosts')
            } else return this.$store.dispatch('users/getUsers')
        }
    }
</script>

<style lang="scss" scoped>

</style>