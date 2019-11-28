<template>
    <div class="auth-modal-wrapper">
        <div class="column is-6-mobile is-6-tablet is-3-desktop is-8-mobile is-multiline field">
            <b-field>
                <b-input type="email"
                         placeholder="Email"
                         v-model="emailField"
                         maxlength="30">
                </b-input>
            </b-field>

            <b-field :type="{'is-danger': error}" :message="error">
                <b-input type="password"
                         maxlength="30"
                         v-model="passwordField"
                         placeholder="Пароль"/>
            </b-field>

            <b-button expanded type="is-blue" @click="login">Вход</b-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Authorization",
        data() {
            return {
                emailField: '',
                passwordField: '',
                error: undefined
            }
        },
        computed: {
            isAuth() {
                return this.$store.getters['user/isAuth']
            }
        },
        methods: {
            login() {
                this.$store.dispatch('user/login', {login: this.emailField, password: this.passwordField})
                    .then(response => response.status ? this.error = response.status : this.$router.push({name: 'posts'}))
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