<template>
    <List :list="list" @update:current="current" :options="{ amount, paginate }" namespace="posts">
        <template slot-scope="{ item, index }">
            <User :index="index" :data="item"/>
        </template>
    </List>
</template>

<script>
    import List from "@/components/List";
    import User from "@/components/User";

    export default {
        name: "Users",
        components: { List, User },
        computed: {
            list() {
                return this.$store.state.users.users
            },
            amount() {
                return this.$store.getters['users/amount']
            },
            paginate() {
                return this.$store.state['users'].sortOptions.paginate
            }
        },
        mounted() {
            this.$store.dispatch('users/updateUsers')
        },
        methods: {
            current(page) {
                this.$store.commit('users/changeSortOptions', page);
                this.$store.dispatch('users/updateUsers')
            }
        }
    }
</script>

<style scoped>

</style>