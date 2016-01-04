<template>
    <div class="mdl-tabs">
        <div class="tab-container">
            <a v-for="tab in tabs" 
                class="tab-item"
                :class="{ 'active': selected === tab }"
                title="{{tab.title || tab.name}}"
                :style="tabItemStyles"
                @click="selected = tab">
                {{tab.name}}
            </a>
        </div>
        <div class="active-line"
            :style="activeLineStyles">
        </div>
    </div>
</template>

<script>
    module.exports = {
        props: {
            tabs: { type: Array, required: true, default: [] }
        },
        created: function() {
            this.selected = this.tabs[0];
        },
        watch: {
            'selected': function(val) {
                this.$emit('tab-changed', val);
            }
        },
        data: function() {
            return {
                selected: null
            }
        },
        computed: {
            tabItemStyles: function() {
                return {
                    width: 100 / this.tabs.length + '%'
                };
            },
            activeLineStyles : function() {
                return {
                    width: 100 / this.tabs.length + '%',
                    left: this.tabs.indexOf(this.selected) / this.tabs.length * 100 + '%'
                };
            }
        },
        methods: {
        }
    };
</script>

<style lang="less">
    .mdl-tabs, .mdl-tabs * {
        box-sizing: border-box;
    }

    .mdl-tabs {
        width: 100%;
        height: 100%;
        position: relative;

        .tab-container {
            display: table;
            width: 100%;
            height: 100%;
            font-size: 14px;
            background: #00bcd4;

            .tab-item {
                height: 100%;
                display: table-cell;
                text-align: center; 
                vertical-align: middle;
                cursor: pointer;
                color: rgba(255, 255, 255, .6);

                &.active {
                    color: #fff;
                }
            }
        }

        .active-line {
            position: absolute;
            top: 0;
            height: 2px;
            background: red;
            transition: left 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms;
        }

    }
</style>

