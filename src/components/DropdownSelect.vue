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
            options: Array
        },
        data() {
            return {
                postsAmount: undefined,
            }
        },
        methods: {
            changePaginate(value) {
                    return this.$store.commit('changePostsOptions', {paginate: value})
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>