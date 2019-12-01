<template>
    <div>
        <div class="columns is-mobile is-centered padding-bottom">
            <b-pagination
                    class="is-centered"
                    :total="options.amount"
                    :current.sync="current"
                    :per-page="options.paginate">

                <b-pagination-button
                        style="background-color: #3273dc"
                        slot-scope="props"
                        :page="props.page"
                        :id="`page${props.page.number}`"
                        tag="router-link"
                        :to="`/documentation/pagination#page${props.page.number}`">
                    {{ props.page.number }}
                </b-pagination-button>
            </b-pagination>
        </div>

        <div class="columns is-gapless is-mobile is-centered">
            <div v-if="list" class="column is-8-widescreen is-12-tablet is-10-mobile is-multiline">
                <Post v-for="(el, index) in list"
                      :key="index"
                      :index="index"
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
                return {
                    amount: this.$store.getters[`${[this.namespace]}/amount`],
                    paginate: this.$store.state[this.namespace].sortOptions.paginate
                }
            },
        },
        watch: {
            current() {
                this.$store.commit(`${this.namespace}/changeSortOptions`, {page: this.current})
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>