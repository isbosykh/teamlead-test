<template>
    <div>
        <div class="columns is-mobile is-centered padding-bottom">
            <b-pagination
                    class="is-centered"
                    :total="options.amount"
                    :current.sync="current_"
                    :per-page="options.paginate">

            </b-pagination>
        </div>

        <div class="columns is-mobile is-centered">
            <ul v-if="list" class="column is-8-widescreen is-12-tablet is-10-mobile is-multiline">
                <transition-group name="fade">
                    <li v-for="(item, index) in list" :key="index" class="padding-bottom">
                        <slot :index="index" :item="item"></slot>
                    </li>
                </transition-group>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List",
        components: {},
        props: {
            list: { type: Array, default: () => [] },
            options: { type: Object, default: () => {} },
            current: { type: Number, default: 1 }
        },
        computed: {
            current_: {
                get() {
                    return this.current
                },
                set(value) {
                    this.$emit('update:current', value);
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
</style>