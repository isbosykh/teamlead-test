<template>
    <div class="main-view">
        <transition name="fade" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Main",
        components: {},
        computed: {},
    }
</script>

<style lang="scss" scoped>
</style>