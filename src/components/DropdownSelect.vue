<template>
    <b-field>
        <b-select v-model="postsAmount" @input="changePaginate(postsAmount)" placeholder="Posts amount">
            <option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
        </b-select>
    </b-field>
</template>

<script>
    export default {
        name: "DropdownSelect",
        props: {
            options: Array,
            path: String
        },
        data() {
            return {
                postsAmount: undefined,
            }
        },
        methods: {
            changePaginate(value) {
                if (this.path === 'users') {
                    this.$store.commit('users/changeSortOptions', {paginate: value});
                    this.$store.dispatch('users/updateUsers')
                } else if (this.path === 'posts') {
                    this.$store.commit('posts/changeSortOptions', {paginate: value});
                    this.$store.dispatch('posts/updatePosts')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>