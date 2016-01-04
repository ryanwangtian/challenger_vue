<template>
    <div class="more-form">
        <div class="top-nav-bar">更多</div>
        <div class="btn-list">
            <mdl-raised-button style="margin: 0; text-align: left;">更新</mdl-raised-button>
            <mdl-raised-button style="margin: 0; text-align: left;"
                @click="logout">
                退出账号
            </mdl-raised-button>
        </div>
    </div>
</template>

<script>
    module.exports = {
        methods: {
            logout: function() {
                sessionStorage.removeItem('current_user_id');
                this.$route.router.go('/login');
            }
        },
        components: {
            'mdl-raised-button': require('../components/mdl-raised-button.vue')
        }
    }
</script>

<style lang="less">
    .more-form {
        height: 100%;
        width: 100%;

        .top-nav-bar {
            width: 100%;
            height: 3rem;
            line-height: 3rem;
            background-color: #393f4b;
            color:#fff ;
            font-size: 1rem;
            text-align: center;
        }
    }
</style>