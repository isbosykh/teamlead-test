<template>
    <div class="columns is-mobile is-centered">
        <div class="column is-5-widescreen is-6-tablet is-10-mobile is-multiline">
            <div class="notification is-white">

                <div class="edit">
                    <b-input type="text" placeholder="Заголовок" maxlength="30" v-model="title"/>
                    <b-input type="textarea" placeholder="Описание" maxlength="200" v-model="description"/>
                </div>

                <footer>
                    <div class="buttons">
                        <b-button :disabled="title.length === 0 || description.length === 0" class="is-success" icon-left="check-square" @click="save">Сохранить</b-button>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from "moment";

    export default {
        name: "NewPost",
        data() {
            return {
                title: '',
                description: ''
            }
        },
        mounted() {
            if (this.$store.getters['user/role'] !== 'writer') {
                this.$router.push({name: 'main'})
            }
        },
        methods: {
            save() {
                let post = {
                    title: this.title,
                    description: this.description,
                    createdAt: moment().format(),
                    updateAt: moment().format(),
                    claps: 0,
                    userId: this.$store.state.user.profile.id
                };

                this.$store.dispatch('posts/createPost', post);
                this.$router.push({name: 'main'})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .notification {
        padding: 20px;

        footer {
            display: flex;
            justify-content: flex-end;
        }
    }
</style>