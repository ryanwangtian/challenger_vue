<template>
    <div class="mian-container">
        <div class="tab-content">
            <router-view
                transition="fade"
                transition-mode="out-in"
                keep-alive>
            </router-view>
        </div>
        <div class="footer-container">
            <mdl-tabs
                :tabs="tabs"
                @tab-changed="changeTab">
            </mdl-tabs>
        </div>
    </div>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                tabs: [{
                    name: '挑战',
                    url: '/main/personalInfo'
                }, {
                    name: '人员',
                    url: '/main/hierarchy'
                }, {
                    name: '留言',
                    url: '/main/message'
                }, {
                    name: '更多',
                    url: '/main/more'
                }]
            };
        },
        created: function() {
            this.$root.curUserId = window.sessionStorage.getItem('current_user_id');
        },
        methods: {
            changeTab: function(tab) {
                this.$route.router.go(tab.url)
            }
        },
        components: {
            'mdl-tabs': require('../components/mdl-tabs.vue')
        }
    }
</script>

<style lang="less">
    .mian-container {
        height: 100%;
        width: 100%;
        position: relative;

        .tab-content {
            width: 100%;
            height: e("calc(100% - 48px)");
            position: relative;
        }

        .footer-container {
            position: absolute;
            width: 100%;
            height: 48px;
            bottom: 0;
            left: 0;
        }
    }
</style>
