<template>
    <div class="personal-info">
        <div class="top-bar">
            <img src="../assets/images/id_user_default_80.png">
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
    </div>
</template>

<script>
    module.exports = {

    };
</script>
