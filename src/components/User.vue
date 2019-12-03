<template>
    <div class="columns is-mobile is-centered padding-bottom">
        <div v-if="data" class="column is-6-fullhd is-6-tablet is-10-mobile notification is-white">
            <header class="title is-5">
                <p class="is-7">{{ data.login }}</p>
            </header>

            <div class="content">
                <div>{{ data.role }}</div>
            </div>

            <div class="buttons is-grouped is-right">
                <b-button v-if="role === 'writer'" class="is-light" icon-left="edit" @click="makeEditable">
                    <span v-if="this.$route.name === 'edit'">Отмена</span>
                    <span v-else>Изменить</span>
                </b-button>
                <b-button v-if="role === 'writer'" class="is-danger" icon-left="trash-alt" @click="del">Удалить</b-button>
            </div>
        </div>
    </div>
</template>

<script>
    import moment from "moment";

    export default {
        name: "User",
        props: {
            data: {
                type: Object,
                default: function () {
                    return this.$store.getters['users/user'](this.$route.params.id)
                }
            },
            index: Number
        },
        computed: {
            role() {
                return this.$store.getters['user/role']
            }
        },
        methods: {
            makeEditable() {
                if (this.$route.name !== "edit") {
                    this.$router.push({name: 'edit', params: {id: this.data.id}
                    })}
                else this.$router.push({name: 'main'});
                this.editable = !this.editable;
                this.title = this.data.title;
                this.description = this.data.description;
            },
            del() {
                this.$store.dispatch('users/deleteUser', {id: this.data.id, index: this.index});
            },
            edit() {
                this.data.updateAt = moment(Date.now()).format();
                this.editable = !this.editable;
                this.$store.dispatch('posts/updatePost', this.data);
                this.$router.push({name: 'main'})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .notification {
        text-align: left;
        padding: 20px;
    }
</style>