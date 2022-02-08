<template>
    <div class="phone_home">
        <van-nav-bar
                title="电话统计"
                left-arrow
                bind:click-left="onClickLeft"
                bind:click-right="onClickRight"
        />
        <div class="d1" style="position: relative">
            <div><img src="./xiangshang.jpg" style="position: absolute;top: 5px">  <span style="color: red">未上传电话(0)</span></div>
            <div>
                <van-icon name="arrow-down" />
            </div>
        </div>

        <div class="d2">
            <div style="position: relative"><img src="./zhuzhuang.jpg" style="position: absolute;top: -5px">  <span style="padding-left: 45px">今日通话统计</span></div>
        </div>

        <div class="table1">
            <table>
                <tr>
                    <th>电话总数: 147</th>
                    <th>接通数: 41</th>
                    <th>接通率: 28%</th>
                </tr>
                <tr>
                    <td>呼出电话总数: 147</td>
                    <td>接通数: 41</td>
                    <td>接通率: 28%</td>
                </tr>
                <tr>
                    <td>呼出电话总数: 0</td>
                    <td>接通数: 0</td>
                    <td>接通率: 0%</td>
                </tr>
            </table>
        </div>

        <div class="d3" style="color: #4e4e4e">
            通话时长总计: 62分21秒
        </div>

        <div class="d1">
            <div style="position: relative"><img src="./zhexian.jpg" style="position: absolute;top: -5px">  <span>7日电话量统计</span></div>
            <div>
                总量 <i style="font-size: 14px" class="fa fa-caret-down"></i>
            </div>
        </div>
        <div id="alarmChart" style="width: 100%;height: 200px;">

        </div>
        <div class="d1">
            <div style="position: relative"><img src="./zhexian.jpg" style="position: absolute;top: -5px">  <span>30日电话量统计</span></div>
            <div>
                总量 <i style="font-size: 14px" class="fa fa-caret-down"></i>
            </div>
        </div>
    </div>
</template>

<script>
import echarts from 'echarts'
    export default {
        name: "home",
        methods: {

        },


        mounted() {
            this.alarmChart = echarts.init(document.getElementById('alarmChart'))
            let option = {
                tooltip : {
                    trigger: 'axis'
                },
                grid: {
                    top: '5%',
                    left: '0%',
                    right: '5%',
                    bottom: '0%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : ['12.5', '12.6', '12.7', '12.8', '12.9', '12.10', '12.11'],
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(97,97,97,0.37)',
                            }
                        }
                    }
                ],
                yAxis : [
                    {
                        type : 'value',
                        min: 0,
                        max: 270,
                        splitNumber: 2,
                        interval: 135,
                        axisLine: {
                            lineStyle: {
                                color: 'rgba(97,97,97,0.37)',
                            }
                        }
                    }
                ],
                series : [
                    {
                        name:'邮件营销',
                        type:'line',
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[31, 266, 256,0,12,0,147],
                        symbol: 'circle',
                        itemStyle: {
                            normal: {
                                color:'#56BADE',
                                lineStyle: {
                                    color: "#56BADE",
                                    width:2
                                },
                                areaStyle: {
                                    //color: '#94C9EC'
                                    color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                        offset: 0,
                                        color: '#fff'
                                    }, {
                                        offset: 1,
                                        color: '#56BADE'
                                    }]),
                                }
                            }
                        },
                    }
                ]
            }
            this.alarmChart.setOption(option);
        }
    }
</script>

<style lang="scss" scoped>
    .phone_home {
        img {
            width: 35px;
            height: 35px;
            left: 5px;
        }
        .van-nav-bar {
            background: #34AAE3;


            .van-nav-bar__title,.van-nav-bar__left i{
                color: #fff !important;
            }
        }

        .table1 {
            table {
                font-size: 16px;
                text-align: left;
                padding: 8px;
                width: 100%;

                th,td {
                    line-height: 40px;
                }

                th {
                    color: #4e4e4e;
                }

                td {
                    color: #8e8e8e;
                }
            }

        }

    }

    .d1 {
        display: flex;
        justify-content: space-between;
        padding: 10px 10px 10px 0px;

        &>div:first-child {
            span {
                /*color: red;*/
                padding-left: 45px;
            }
        }

        border-bottom: 1px solid #CCC;
    }

    .d2 {
        padding: 10px 0;
        border-bottom: 1px solid #CCC;
    }

    .d3 {
        font-size: 16px;
        padding-left: 10px;
        border-bottom: 1px solid #CCC;
        padding-bottom: 10px;
        font-weight: bold;
    }

    .d1,.d2 {
        font-size: 18px;
        color: #7F7F7F;
    }
</style>