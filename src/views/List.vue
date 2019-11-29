<template>
    <div>
        <div class="columns is-mobile is-centered padding-bottom">
            <b-pagination
                    class="is-centered"
                    :total="options.amount"
                    :current.sync="current"
                    :per-page="options.paginate">
            </b-pagination>
        </div>

        <div class="columns is-gapless is-mobile is-centered">
            <div v-if="list" class="column is-8-widescreen is-12-tablet is-10-mobile is-multiline">
                <Post v-for="(el, index) in list"
                      :key="index"
                      :post="el"/>
            </div>
        </div>
    </div>
</template>

<script>
    import Post from "@/components/Post";

    export default {
        name: "List",
        components: {Post},
        props: {
            list: Array,
            namespace: String
        },
        data() {
            return {
                current: 1,
            }
        },
        computed: {
            options() {
                this.$store.dispatch(`${this.namespace}/amount`);
                return {
                    amount: this.$store.state[this.namespace].sortOptions.amount,
                    paginate: this.$store.state[this.namespace].sortOptions.paginate
                }
            },
        },
        watch: {
            current() {
                this.$store.commit('posts/changeSortOptions', {page: this.current})
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>