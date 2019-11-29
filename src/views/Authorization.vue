<template>
    <div class="auth-modal-wrapper">
        <div v-if="path === 'login'" class="column is-6-mobile is-6-tablet is-3-desktop is-8-mobile is-multiline field">
            <b-field>
                <b-input type="email"
                         placeholder="Email"
                         v-model="loginEmailField"
                         maxlength="30">
                </b-input>
            </b-field>

            <b-field :type="{'is-danger': error}" :message="error">
                <b-input type="password"
                         maxlength="30"
                         v-model="loginPasswordField"
                         placeholder="Пароль"/>
            </b-field>

            <b-button expanded class="button margin-bottom" type="is-blue" @click="login">Вход</b-button>
            <b-button expanded class="button" type="is-blue" tag="router-link" :to="{name: 'register'}">К регистрации</b-button>
        </div>
        <div v-if="path === 'register'" class="column is-6-mobile is-6-tablet is-3-desktop is-8-mobile is-multiline field">
            <b-field>
                <b-input type="email"
                         placeholder="Email"
                         v-model="registerEmailField"
                         maxlength="30">
                </b-input>
            </b-field>

            <b-field :type="{'is-danger': error}" :message="error">
                <b-input type="password"
                         maxlength="30"
                         v-model="registerPasswordField"
                         placeholder="Пароль"/>
            </b-field>

            <b-button expanded class="button margin-bottom" type="is-blue" @click="register">Регистрация</b-button>
            <b-button expanded class="button" tag="router-link" type="is-blue" :to="{name: 'login'}">К логину</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Authorization",
        data() {
            return {
                loginEmailField: '',
                loginPasswordField: '',
                registerEmailField: '',
                registerPasswordField: '',
                error: undefined
            }
        },
        computed: {
            isAuth() {
                return this.$store.getters['user/isAuth']
            },
            path() {
                return this.$route.name
            }
        },
        methods: {
            login() {
                this.$store.dispatch('user/login', {
                    login: this.loginEmailField,
                    password: this.loginPasswordField})
                    .then(response => response.status ? this.error = response.status : this.$router.push({name: 'main'}))
            },
            register() {
                this.$store.dispatch('user/register', {
                    login: this.registerEmailField,
                    password: this.registerPasswordField,
                    role: "reader"
                })
                    .then(response => response.status ? this.error = response.status : this.$router.push({name: 'main'}))
            },
        }
    }
</script>

<style lang="scss" scoped>
    .auth-modal-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: left;
        margin: 50px 0;
    }
</style>