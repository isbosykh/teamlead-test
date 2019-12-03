<template>
    <div id="app">
        <Header/>

        <transition name="fade" mode="out-in">
            <router-view class="view"/>
        </transition>
    </div>
</template>

<script>
    import Header from "@/components/Header";

    export default {
        name: "app",
        components: {Header},
    };
</script>

<style lang="scss">
    @import "~bulma/sass/utilities/_all";

    $light: #EBEBEB;
    $navbar-breakpoint: 0;

    $colors: (
            "blue": (#326EF4, $primary-invert),
    );

    @import "~bulma";
    @import "~buefy/src/scss/buefy";

    .padding-bottom {
        padding-bottom: 20px;
    }

    .margin-bottom {
        margin-bottom: 20px;
    }

    html {
        display: flex;
        min-height: 100%;
        flex-direction: column;

        body {
            flex-grow: 1;
            display: flex;
            background: #EBEBEB;
            flex-direction: column;

            * {
                box-sizing: border-box;
            }
        }

        #app {
            flex-grow: 1;
            font-family: Arial, sans-serif;
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
