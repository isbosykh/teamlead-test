<template>
    <div class="columns is-mobile is-centered padding-bottom">
        <div v-if="post" class="content column is-6-fullhd is-6-tablet is-10-mobile notification is-white">
            <h2 class="title is-5" v-if="!editable">{{ post.title }}</h2>
            <p class="is-7" v-if="!editable">{{ post.description }}</p>

            <div v-if="editable" class="edit">
                <b-input type="text" maxlength="30" v-model="post.title"/>
                <b-input type="textarea" maxlength="200" v-model="post.description"/>
            </div>

            <footer>
                <div class="date">
                    {{ createDate(post.updateAt) }}
                </div>
                <div class="buttons asfas is-grouped">
                    <b-button v-if="editable" class="is-success is-hidden-touch" icon-left="check-square" @click="edit">Сохранить</b-button>
                    <b-button v-if="role === 'writer'" class="is-light is-hidden-touch" icon-left="edit" @click="makeEditable">
                        <span v-if="this.$route.name === 'edit'">Отмена</span>
                        <span v-else>Изменить</span>
                    </b-button>
                    <b-button v-if="role === 'writer'" class="is-danger is-hidden-touch" icon-left="trash-alt" @click="del">Удалить</b-button>
                    <b-button v-if="role !== 'writer'" class="is-light" :disabled="role !== 'reader'" icon-left="sign-language" @click="clap">{{ post.claps }}</b-button>

                    <b-button v-if="editable" class="is-success is-hidden-desktop" icon-left="check-square"
                              @click="edit"/>
                    <b-button v-if="role === 'writer'" class="is-light is-hidden-desktop" icon-left="edit"
                              @click="makeEditable"/>
                    <b-button v-if="role === 'writer'" class="is-danger is-hidden-desktop" icon-left="trash-alt"
                              @click="del"/>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
    import moment from "moment";

    export default {
        name: "Post",
        props: {
            post: {
                type: Object,
                default: function () {
                    return this.$store.getters['posts/post'](this.$route.params.id)
                }
            },
            index: Number
        },
        data() {
            return {
                editable: false,
                title: '',
                description: '',
            }
        },
        mounted() {
            if (this.$route.name === "edit") {
                if (this.role !== 'writer') {
                    this.$router.push({name: 'main'})
                }
                this.editable = true;
            }
        },
        computed: {
            role() {
                return this.$store.getters['user/role']
            },
        },
        methods: {
            createDate(date) {
                moment.locale('ru');
                return moment(new Date(date)).fromNow()
            },
            makeEditable() {
                if (this.$route.name !== "edit") {
                    this.$router.push({name: 'edit', params: {id: this.post.id}
                    })}
                else this.$router.push({name: 'main'});
                this.editable = !this.editable;
                this.title = this.post.title;
                this.description = this.post.description;
            },
            clap() {
                this.post.claps += 1;
                return this.$store.dispatch('posts/updatePost', this.post)
            },
            del() {
                this.$store.dispatch('posts/deletePost', {id: this.post.id, index: this.index});
            },
            edit() {
                this.post.updateAt = moment(Date.now()).format();
                this.editable = !this.editable;
                this.$store.dispatch('posts/updatePost', this.post);
                this.$router.push({name: 'main'})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .notification {
        text-align: left;
        padding: 20px;

        h2 {
            margin: 0;
            font-weight: bold;
        }

        p,
        textarea {
            margin: 20px 0;
        }

        p {
            word-wrap: break-word;
        }

        footer {
            display: flex;
            justify-content: space-between;

            .date {
                align-self: flex-end;
                color: darkgrey;
            }

            .button::v-deep  {
                .fa-edit, .fa-sign-language {
                    color: #326EF4
                }
            }
        }
    }
</style>