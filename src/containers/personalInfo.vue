<template>
    <div class="personal-info">
        <div class="top-bar">
            <a class="avatar"
                v-link="{ path: '/main/personalDetail' }">
                <img src="../assets/images/id_user_default_80.png">
            </a>
            <div class="desc">
                <label class="name">{{userInfo.cn_name}}</label>
                <label class="title">{{userInfo.title}}</label>
            </div>
            <div class="contact">
                <div class="ion-ios-telephone-outline contact-col tel"></div>
                <div class="ion-ios-email-outline contact-col email"></div>
                <div class="ion-android-list contact-col leftmsg"></div>
          </div>
        </div>

        <div class="spirit-chart-container">
            <spirit-column-chart
                :chart-data="chartData"
                style="height:200px; width:250px; margin: 0 auto;">
            </spirit-column-chart>
        </div>

        <div class="events">
            <div class="new-event">
                <div class="ion-happy-outline"></div>
            </div>

            <div class="events-list"></div>
        </div>
    </div>
</template>

<script>
    var superagent = require('superagent'),
        envUris = require('../utils/envUris.js');

    module.exports = {
        data: function() {
            return {
                userInfo: {},
                envSpirit: {},
                chartData: [{name:'意志', value: 0, color: 'rgb(234, 200, 93)'}, 
                    {name:'智慧', value: 0, color: 'rgb(77, 175, 124)'}, 
                    {name:'博爱', value: 0, color: 'rgb(234, 144, 130)'}
                ]
            };
        },
        created: function() {
            this.fetchUserInfo();
            this.fetchEnvSpirit();
        },
        methods: {
            fetchUserInfo: function() {
                superagent.get(envUris.getUserInfoUrl(this.$root.curUserId))
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json')
                    .send()
                    .end(function(err, res) {
                        if (res.ok) {
                            this.userInfo = res.body;
                        }
                    }.bind(this));
            },
            fetchEnvSpirit: function() {
                superagent.get(envUris.getEnvSpiritUrl(this.$root.curUserId, this.$root.curUserId))
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json')
                    .send()
                    .end(function(err, res) {
                        if (res.ok) {
                            //this.userInfo = res.body;
                            this.chartData[0].value = Number(res.body.will.praise_total);
                            this.chartData[1].value = Number(res.body.wisdom.praise_total);
                            this.chartData[2].value = Number(res.body.love.praise_total);
                        }
                    }.bind(this));
            }
        },
        components: {
            'spirit-column-chart': require('../components/spirit-column-chart.vue')
        }
    }
</script>

<style lang="less">
    .personal-info {
        box-sizing: border-box;
        position: relative;
        height: 100%;
        padding-top: 20px;
        background-color: #efefef;

        .top-bar {
                width: 100%;
                height: 60px;
                position: relative;

            a.avatar {
                position: absolute;
                width: 38px;
                height: 38px;
                left: 10px;
                top: 11px;
                border: 1px solid rgba(0,0,0,.08);
                border-radius: 50%;
                cursor: pointer;

                img {
                    width: 100%;
                    height: 100%;
                }
            }

            .desc {
                margin-left: 60px;

                .name {
                    position: absolute;
                    top: 10px;
                    font-size: 14px;
                    font-weight: 400;
                }

                .title {
                    position: absolute;
                    top: 30px;
                    font-size: 14px;
                    font-weight: 400;
                }
            }

            .contact {
                    float: right;
                    width: 100px;

                    .contact-col {
                        margin-top: 14px;
                        display: inline-block;
                        width: 25px;
                        height: 25px;
                        cursor: pointer;
                    }
            }
        }

        .events {
            position: absolute;
            top: 320px;
            bottom: 0;
            left: 0;
            right: 0;

            .new-event {
                .ion-happy-outline {
                    width: 56px;
                    height: 56px;
                    line-height: 56px;
                    text-align: center;
                    border-radius: 50%;
                    margin: 0 auto;
                    background: #fff;
                    color: #ea9082!important;
                    font-size: 2em;
                    box-shadow: rgba(0, 0, 0, 0.188235) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px;
                    cursor: pointer;

                    &:active {
                        box-shadow: rgba(0, 0, 0, 0.156863) 0px 10px 30px, rgba(0, 0, 0, 0.227451) 0px 6px 10px;
                    }
                }
            }

            .events-list {
                position: absolute;
                top: 72px;
                bottom: 0;
                left: 0;
                right: 0;
                background: #fff;

                &:before {
                    content: "";
                    display: block;
                    position: absolute;
                    border: 8px solid transparent;
                    border-bottom-color: #fff;
                    top: -16px;
                    left: 50%;
                    margin-left: -8px;
                } 
            }
        }
    }
</style>