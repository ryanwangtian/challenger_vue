<template>
    <div class="env-alert"
        v-show="isShown"
        transition="move-down">
        <span class="message" :class="{ error: isError, info: isInfo }">{{message}}</span>
    </div>
</template>

<script>
    module.exports = {
        props: {
            duration: { type: Number, default: 3000 }
        },
        data: function() {
            return {
                message: '',
                isShown: false,
                type: 'error'
            };
        },
        computed: {
            isError: function() {
                return this.type == 'error';
            },
            isInfo: function() {
                return this.type == 'info';
            }
        },
        methods: {
            showError: function(msg) {
                this.type = 'error';
                this.showAlert(msg);
            },
            showInfo: function(msg) {
                this.type = 'info';
                this.showAlert(msg);
            },
            showAlert: function(msg) {
                this.message = msg || '';
                this.isShown = true;

                clearTimeout(this.hideCallback);
                this.hideCallback = setTimeout(this.hideAlert, this.duration);
            },
            hideAlert: function() {
                this.isShown = false;
            }
        },
        events: {
            'alert-error': function(msg) {
                this.showError(msg);
            },
            'alert-info': function(msg) {
                this.showInfo(msg);
            }
        }
    };
</script>

<style lang="less">

    @alert-height: 40px;

    .env-alert {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: @alert-height;
        line-height: @alert-height;
        text-align: center;
        z-index: 9999;

        .message {
            display: inline-block;
            max-width: 500px;
            height: @alert-height;
            margin: auto;
            padding: 0 10px;
            border-radius: 5px;
            color: #fff;
            box-shadow: rgba(0, 0, 0, .7) 0 0 10px;
            background: rgba(255, 0, 0, .7);

            &.error {
                background: rgba(255, 0, 0, .7);
            }
            &.info {
                background: rgba(0, 255, 100, .7);
            }
        }

        &.move-down-transition {
            transition: top .5s ease;
        }

        &.move-down-enter, &.move-down-leave {
            top: -@alert-height;
        }
    }
</style>
