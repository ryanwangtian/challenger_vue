<template>
    <div>
        <div class="app-wrapper envision-app">
            <div class="device-silhouette">
                <div class="app-root">
                    <router-view transition="fade" transition-mode="out-in"></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    module.exports = {
        
    };
</script>

<style lang="less">
     @import "./assets/less/common.less";
</style>