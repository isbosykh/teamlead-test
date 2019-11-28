<template>
    <div id="app">
        <b-navbar class="is-link">
            <template slot="start">
                <b-navbar-item tag="div">
                    <DropdownSelect :options="options"/>
                </b-navbar-item>
            </template>

            <template slot="end">
                <b-navbar-item tag="div">
                    <div class="buttons is-right">
                        <b-button tag="router-link" class="button is-link" v-if="this.$store.getters['user/role'] === 'writer'" :to="{name: 'new-post'}">
                            Новый пост
                        </b-button>
                        <b-button tag="router-link" class="button is-link" :to="{name: 'posts'}">
                            К постам
                        </b-button>
                        <b-button v-if="isAuth" class="button is-link" @click="logout">Выйти</b-button>
                        <b-button tag="router-link" class="button is-link" v-else :to="{name: 'auth'}">
                            Войти
                        </b-button>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>
        <transition name="fade" mode="out-in">
            <router-view class="view"/>
        </transition>
    </div>
</template>

<script>
    import 'buefy/dist/buefy.css'
    import DropdownSelect from "@/components/DropdownSelect";

    export default {
        name: "app",
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
        },
        methods: {
            logout() {
                this.$store.dispatch('user/logout');
                if (this.$route.name !== 'posts') this.$router.push({name: 'posts'})
            },
        }
    };
</script>

<style lang="scss">
    @import "../node_modules/bulma/sass/utilities/all";
    @import "../node_modules/bulma";
    @import "../node_modules/buefy/src/scss/buefy";

    $colors: (
            "danger": (#326EF4, $primary-invert),
            "light": ($light, $light)
    );

    $link: #326EF4;
    $light: #EBEBEB;

    html {
        min-height: 100%;
        display: flex;
        flex-direction: column;

        body {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            background: #EBEBEB;

            * {
                box-sizing: border-box;
            }
        }

        #app {
            flex-grow: 1;
            font-family: "Avenir", Helvetica, Arial, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-align: center;
            color: #2c3e50;
            padding-bottom: 20px;

            .fade {
                &-enter-active {
                    transition: all .1s ease;
                }
                &-leave-active {
                    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
                }
                &-enter, &-leave-to
                    /* .slide-fade-leave-active до версии 2.1.8 */ {
                    transform: translateX(-10px);
                    opacity: 0;
                }
            }

            .view {
                margin-top: 40px;
            }
        }
    }
</style>
