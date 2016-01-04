<template>
    <div class="login-form">
        <div class="logo-bg"></div>
        <div class="credentials">
            <mdl-textfield hint-text="用户名" :value.sync="username"></mdl-textfield>
            <mdl-textfield hint-text="密 码" :value.sync="password" type="password"></mdl-textfield>
            <mdl-raised-button @click="login">登录</mdl-raised-button>
        </div>
        <loading v-if="isFetching"></loading>
    </div>
</template>

<script>
    var superagent = require('superagent'),
        envUris = require('../utils/envUris.js');

    module.exports = {
        data: function() {
            return {
                username: '',
                password: '',
                isFetching: false
            }
        },
        methods: {
            login: function() {
                this.isFetching = true;
                superagent.post(envUris.urlLogin)
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json')
                    .send(JSON.stringify({
                        'username': this.username,
                        'password': this.password
                    }))
                    .end(function(err, res) {
                        this.isFetching = false;
                        this.$route.router.go('/main');
                        console.log(res);
                    }.bind(this));
            }
        },
        components: {
            'loading': require('../components/loading.vue'),
            'mdl-textfield': require('../components/mdl-textfield.vue'),
            'mdl-raised-button': require('../components/mdl-raised-button.vue')
        }
    };
</script>

<style lang="less">
    @import "../assets/less/envcolors.less";

    .login-form{
        width: 100%;
        height: 100%;
        overflow: hidden; 
        .logo-bg{
            width: 142px;
            height: 159px;
            margin: 0 auto;
            margin-top: 100px;
            background: url(../assets/images/ic_splash@2x.png) no-repeat;
            background-size: 100%;
        }
        .credentials{
            vertical-align: middle;
            margin-left: 20px;
            margin-right: 20px;
        }
        .loginbutton{
            margin-top: 10px;
        }
        .error-tip{
            width: 100%;
            height: 30px;
            background-color: @ErrorBarBg;
            color: @ErrorBarText;
            position: absolute;
            left: 0px;
            top: -30px;
            text-align: center;
            line-height: 30px;
            transition: top 0.5s linear;
            &.show{
                top: 0px;
            }
        }
    }
</style>