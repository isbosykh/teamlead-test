<template>
    <b-navbar class="is-blue">
        <template slot="start">
            <b-navbar-item v-if="path === 'posts'" tag="div">
                <DropdownSelect :options="options"/>
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons is-right">
                    <b-button tag="router-link" class="button is-blue" v-if="role === 'writer'" :to="{name: 'new-post'}">
                        Новый пост
                    </b-button>
                    <b-button tag="router-link" class="button is-blue" :to="{name: 'posts'}">
                        К постам
                    </b-button>
                    <b-button v-if="isAuth" class="button is-blue" @click="logout">Выйти</b-button>
                    <b-button tag="router-link" class="button is-blue" v-else :to="{name: 'auth'}">
                        Войти
                    </b-button>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
    import DropdownSelect from "@/components/DropdownSelect";

    export default {
        name: "Header",
        components: {DropdownSelect},
        data() {
            return {
                postsAmount: undefined,
                options: [1, 5, 10, 20]
            }
        },
        computed: {
            isAuth() {
                return this.$store.getters['user/isAuth']
            },
            role() {
                return this.$store.getters['user/role']
            },
            path() {
                return this.$route.name
            }
        },
        methods: {
            logout() {
                this.$store.dispatch('user/logout');
                if (this.$route.name !== 'posts') this.$router.push({name: 'posts'})
            },
        }
    }
</script>

<style lang="scss" scoped>

</style>