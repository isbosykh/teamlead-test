<template>
    <div class="columns is-mobile is-centered padding-bottom">
        <div v-if="post" class="content column is-5-widescreen is-6-tablet is-10-mobile notification is-white">
            <h2 class="title is-4" v-if="!editable">{{ post.title }}</h2>
            <p v-if="!editable">{{ post.description }}</p>

            <div v-if="editable" class="edit">
                <b-input type="text" maxlength="30" v-model="post.title"/>
                <b-input type="textarea" maxlength="200" v-model="post.description"/>
            </div>

            <footer>
                <div class="date">
                    {{ createDate(post.updateAt) }}
                </div>
                <div class="buttons is-grouped">
                    <b-button v-if="editable" class="is-success is-hidden-touch" icon-left="check-square" @click="edit">Сохранить</b-button>
                    <b-button v-if="userRole === 'writer'" class="is-light is-hidden-touch" icon-left="edit" @click="makeEditable">Изменить</b-button>
                    <b-button v-if="userRole === 'writer'" class="is-danger is-hidden-touch" icon-left="trash-alt" @click="del">Удалить</b-button>
                    <b-button v-if="userRole !== 'writer'" class="is-light" :disabled="userRole !== 'reader'" icon-left="sign-language" @click="clap">{{ post.claps }}</b-button>

                    <b-button v-if="editable" class="is-success is-hidden-desktop" icon-left="check-square" @click="edit"></b-button>
                    <b-button v-if="userRole === 'writer'" class="is-light is-hidden-desktop" icon-left="edit" @click="makeEditable"></b-button>
                    <b-button v-if="userRole === 'writer'" class="is-danger is-hidden-desktop" icon-left="trash-alt" @click="del"></b-button>
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
            postProp: Object
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
                if (this.userRole !== 'writer') {
                    this.$router.push({name: 'posts'})
                }
                this.$store.dispatch('getPost', this.$route.params.id);
                this.editable = true;
            }
        },
        computed: {
            userRole() {
                return this.$store.getters['user/role']
            },
            post() {
                if (this.$attrs.post !== undefined) return this.$attrs.post
                else {
                    return this.$store.state.post
                }
            }
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
                else this.$router.push({name: 'posts'});
                this.editable = !this.editable;
                this.title = this.post.title;
                this.description = this.post.description;
            },
            clap() {
                this.post.claps += 1;
                return this.$store.dispatch('updatePost', this.post)
            },
            del() {
                this.$store.dispatch('deletePost', this.post.id);
            },
            edit() {
                this.post.updateAt = moment(Date.now()).format();
                this.editable = !this.editable;
                this.$store.dispatch('updatePost', this.post);
                this.$router.push({name: 'posts'})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .padding-bottom {
        padding-bottom: 20px;
    }

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
        }
    }
</style>