<template>
    <div class="hierachy-form">
        <a v-link="'/main/hierarchy'">横向</a><a v-link="'/main/hierarchy/vertical'">纵向  </a>
        <router-view transition="fade" transition-mode="out-in"></router-view>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
            };
        },
        methods: {
        },
        components: {
        }
    }
</script>

<style lang="less">
</style>