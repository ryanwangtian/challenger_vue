<template>
    <div class="spirit-column-chart">
        <div class="columns-wrapper">
            <div class="column-wrapper"
                v-for="opt in chartData"
                :style="{ width: 100 / chartData.length + '%' }">
                <div class="number"
                    :style="{ 'color': opt.color, bottom: opt.value / maxValue * 70 + '%' }">
                    {{opt.value}}
                </div>
                <div class="column"
                    :style="{ 'background': opt.color, height: opt.value / maxValue * 70 + '%' }">
                </div>
                <div class="label">{{opt.name}}</div>
            </div>
        </div>
        <div class="x-axis"></div>
    </div>
</template>

<script>
    module.exports = {
        props: {
            chartData: { type: Array, required: true }
        },
        computed: {
            maxValue: function() {
                var max = 0;
                this.chartData.forEach(function(d) {
                    if (d.value > max) {
                        max = d.value;
                    }
                });

                return max;
            },
            chartOptions: function() {
                var res = [],
                    max = 0;
                this.chartData.forEach(function(d) {
                    res.push({
                        name: d.name,
                        value: d.value,
                        color: d.color
                    });

                    if (d.value > max) {
                        max = d.value;
                    }
                });

                res.forEach(function(r) {
                    r.colHeight = r.value / max * 70 + '%';
                });

                return res;
            }
        }
    };
</script>

<style lang="less">
    .spirit-column-chart, 
    .spirit-column-chart * {
        box-sizing: border-box;
    }

    .spirit-column-chart {
        position: relative;
        padding: 0 20px;

        .columns-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            padding-bottom: 30px;

            .column-wrapper {
                position: relative;
                float: left;
                height: 100%;

                .number {
                    position: absolute;
                    bottom: 0;
                    height: 20px;
                    width: 100%;
                    line-height: 20px;
                    text-align: center;
                    transition: bottom .3s ease;
                }

                .column {
                    position: absolute;
                    width: 90%;
                    height: 0;
                    left: 5%;
                    bottom: 0;
                    border-left: 1px solid rgba(0,0,0,.3);
                    border-right: 1px solid rgba(0,0,0,.3);
                    border-top: 1px solid rgba(0,0,0,.3);
                    background: rgb(234, 144, 130);
                    transition: height .3s ease;
                }

                .label {
                    position: absolute;
                    bottom: -30px;
                    height: 30px;
                    width: 100%;
                    line-height: 30px;
                    text-align: center;
                }
            }
        }

        .x-axis {
            position: absolute;
            bottom: 30px;
            left: 0;
            width: 100%;
            height: 1px;
            background: gray;
        }
    }
</style>