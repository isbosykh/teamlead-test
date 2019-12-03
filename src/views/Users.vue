<template>
    <List :key="page" v-if="list" :list="list" :current.sync="page" :options="{ amount, paginate }" namespace="posts">
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
                return this.$store.getters['users/users']
            },
            amount() {
                return this.$store.getters['users/amount']
            },
            paginate() {
                return this.$store.state['users'].sortOptions.paginate
            },
            page: {
                get() {
                    return parseInt(this.$route.params.page) || 1;
                },
                set(value) {
                    this.$router.push({
                        name: 'users',
                        params: {
                            page: value
                        }})
                }
            }
        },
        methods: {
            updateUsers(params) {
                this.$store.dispatch('users/updateUsers', params.page)
            }
        },
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.updateUsers(to.params)
            });
        },
        beforeRouteUpdate(to, from, next) {
            this.$nextTick(() => this.updateUsers(to.params));
            next();
        },
    }
</script>

<style scoped>

</style>