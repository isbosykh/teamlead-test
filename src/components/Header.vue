<template>
    <b-navbar type="is-blue" :mobile-burger="false">

        <template slot="brand">
            <div class="column">
                <div class="columns is-mobile">
                    <b-navbar-item class="column" v-if="path === 'posts'" tag="div">
                        <DropdownSelect :options="options"/>
                    </b-navbar-item>

                    <b-navbar-item tag="div">
                        <div class="buttons">
                            <b-button tag="router-link" class="button is-blue" v-if="role === 'writer'" :to="{name: 'new-post'}">
                                Новый пост
                            </b-button>
                            <b-button v-if="role === 'writer'" tag="router-link" class="button is-blue" :to="{name: 'users'}">
                                Пользователи
                            </b-button>
                            <b-button tag="router-link" class="button is-blue" :to="{name: 'main'}">
                                К постам
                            </b-button>
                            <b-button v-if="isAuth" class="button is-blue" @click="logout">Выйти</b-button>
                            <b-button tag="router-link" class="button is-blue" v-else :to="{name: 'auth'}">
                                Войти
                            </b-button>
                        </div>
                    </b-navbar-item>
                </div>
            </div>
        </template>
    </b-navbar>
</template>

<script>
    import DropdownSelect from "@/components/DropdownSelect";
    import { mapGetters } from 'vuex'

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
            ...mapGetters('user', ['role']),
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

<style lang="scss">
    .navbar {
        &-brand {
            flex-grow: 1;
        }
        &-menu {
            flex: 0 !important;
        }
    }
</style>