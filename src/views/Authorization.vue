<template>
    <div class="auth-modal-wrapper">
        <div v-if="path === 'login'" class="column is-6-mobile is-6-tablet is-3-desktop is-8-mobile is-multiline field">
            <b-field>
                <b-input type="email"
                         :use-html5-validation="false"
                         placeholder="Email"
                         v-model="loginField"
                         maxlength="30">
                </b-input>
            </b-field>

            <b-field :type="{'is-danger': errors.length !== 0 ? errors : undefined}" :message="errors.length !== 0 ? errors : undefined">
                <b-input type="password"
                         maxlength="30"
                         v-model="passwordField"
                         placeholder="Пароль"/>
            </b-field>

            <b-button expanded class="button margin-bottom" type="is-blue" @click="login">Вход</b-button>
            <b-button expanded class="button" type="is-blue" tag="router-link" :to="{name: 'register'}">К регистрации</b-button>
        </div>
        <div v-if="path === 'register'" class="column is-6-mobile is-6-tablet is-3-desktop is-8-mobile is-multiline field">
            <b-field>
                <b-input type="email"
                         :use-html5-validation="false"
                         placeholder="Email"
                         v-model="loginField"
                         maxlength="30">
                </b-input>
            </b-field>

            <b-field :type="{'is-danger': errors.length !== 0 ? errors : undefined}" :message="errors.length !== 0 ? errors : undefined">
                <b-input type="password"
                         maxlength="30"
                         v-model="passwordField"
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
                loginField: '',
                passwordField: '',
                errors: [],
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
        beforeRouteUpdate(to, from, next) {
            this.loginField = '';
            this.passwordField = '';
            this.errors = [];
            next();
        },
        methods: {
            isValid() {
                this.errors = [];

                if (this.passwordField.length === 0) {
                    this.errors.push('Поле пароля не может быть пустым');
                    return false
                }

                if (this.loginField.length === 0) {
                    this.errors.push('Поле логина не может быть пустым');
                    return false
                }

                if (this.errors.length === 0) {
                    return true
                }
            },
            login() {
                if (this.isValid()) {
                    this.errors = [];
                    this.$store.dispatch('user/login', {
                        login: this.loginField,
                        password: this.passwordField
                    })
                        .then(response => {
                            if (response) {
                                response.error ? this.errors = response.error : this.$router.push({name: 'main'})
                            }
                        })
                }
            },
            register() {
                if (this.isValid() && /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.loginField)) {
                    this.errors = [];
                    this.$store.dispatch('user/register', {
                        login: this.loginField,
                        password: this.passwordField,
                        role: "reader"
                    })
                        .then(response => {
                            if (response) {
                                response.error ? this.errors = response.error : this.$router.push({name: 'main'})
                            }
                        })
                }
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