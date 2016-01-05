<template>
    <div class="personal-detail-form">
        <div class="top-navigation-bar">
            <div class="ion-chevron-left goback"
                @click="$route.router.go('/main/personalInfo')"></div>
            <span>详情</span>
        </div>
        <div class="pull-to-refresh-wrapper" id="haha">
            <div>
                <div class="form-group">
                    <div class="form-row">
                        <div class="form-label">员工二级类别</div>
                        <div class="form-value">{{userDetail.two_categories}}</div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-row">
                        <div class="form-label">部门负责人</div>
                        <div class="form-value">{{userDetail.dep_leader_username_cn}}</div>
                    </div>
                    <div class="form-row">
                        <div class="form-label">体系负责人</div>
                        <div class="form-value">{{userDetail.sys_leader_username_cn}}</div>
                    </div>
                    <div class="form-row">
                        <div class="form-label">体系组织部长</div>
                        <div class="form-value">{{userDetail.sys_minister_username_cn}}</div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-row">
                        <div class="form-label">紧急联系人</div>
                        <div class="form-value">{{userDetail.emergency_username}}</div>
                    </div>
                    <div class="form-row">
                        <div class="form-label">紧急联系电话</div>
                        <div class="form-value">{{userDetail.emergency_phone}}</div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-row">
                        <div class="form-label">合同类型</div>
                        <div class="form-value">{{userDetail.contract_type}}</div>
                    </div>
                    <div class="form-row">
                        <div class="form-label">合同终止日</div>
                        <div class="form-value">{{userDetail.contract_end}}</div>
                    </div>
                    <div class="form-row">
                        <div class="form-label">合同签署次数</div>
                        <div class="form-value">{{userDetail.contract_sign_time}}</div>
                    </div>
                </div>

                <div class="form-group">
                    <div class="form-row">
                        <div class="form-label">出生日期</div>
                        <div class="form-value">{{userDetail.date_of_birth}}</div>
                    </div>
                    <div class="form-row">
                        <div class="form-label">国籍</div>
                        <div class="form-value">{{userDetail.nationality}}</div>
                    </div>
                </div>

                <div class="form-group-header">学校名称-最高学历</div>

                <div class="form-group">
                    <div class="form-row">
                        <div class="form-label">{{userDetail.education_school + ' - ' + userDetail.education_degree}}</div>
                    </div>
                </div>

                <div class="form-group-header">之前雇主</div>

                <div class="form-group">
                    <div class="employer-row"
                        v-for="item in userDetail.before_employers">
                        <div class="employment-time-label">{{item.startDate + ' - ' + item.endDate}}</div>
                        <div class="employer-label">{{item.employer}}</div>
                     </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    var superagent = require('superagent'),
        envUris = require('../utils/envUris.js'),
        iScroll = require('iscroll');

    module.exports = {
        data: function() {
            return {
                userDetail: {}
            };
        },
        ready: function() {
            this.fetchUserDetail();
        },
        methods: {
            fetchUserDetail: function() {
                superagent.get(envUris.getUserDetailUrl(this.$root.curUserId))
                    .set('Content-Type', 'application/json')
                    .set('Accept', 'application/json')
                    .send()
                    .end(function(err, res) {
                        if (res.ok) {
                            this.userDetail = res.body;
                            this.$nextTick(function() {
                                new iScroll('#haha', { mouseWheel: true, scrollbars: true });
                            });
                        }
                    }.bind(this));
            }
        },
    };
</script>

<style lang="less">
@import "../assets/less/common.less";

.personal-detail-form{
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0;
    right: 0;
    background-color: #efefef;

    .top-navigation-bar{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 3rem;
        line-height: 3rem;
        background-color: @NavigationBg;
        color: white;
        font-size: 1rem;
        text-align: center;
        z-index: 101;
        .goback{
            float: left;
            cursor: pointer;
            margin-left: 10px;
            &:active{
                color: lightblue;
            } 
        }
    }

    .pull-to-refresh-wrapper{
        position: absolute !important;
        top: 3rem;
        width: 100%;
        bottom: 0;
        .employer-row{
            border-bottom: 1px solid @FormBorderColor;
            margin-left: 20px;
            margin-right: 20px;
            padding-bottom: 15px;
            padding-top: 15px;
            &:nth-last-child(1){
                border-bottom: 0px; 
            }

            .employment-time-label{
                font-size: 0.85rem;
                span{
                    color: @FormTextColor;
                }
                color: black;
                margin-bottom: 0.2em;
            }
            .employer-label{
                font-size: 1rem;
                color: black;
            }
        }
    }
}
</style>
