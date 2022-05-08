(function() {
    let myChart = echarts.init(document.querySelector(".bar .chart"));
    option = {
        color: ["#2f89cf"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            left: '0%',
            top: "10px",
            right: '0%',
            bottom: '4%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
            axisTick: {
                alignWithLabel: true
            },
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "10"
            },
            axiosLine: {
                show: false
            }
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                color: "rgba(255,255,255,.6)",
                fontSize: "10"
            },
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },
        }],
        series: [{
            name: '直接访问',
            type: 'bar',
            barWidth: '35%',
            data: [200, 300, 300, 900, 1500, 1200, 600],
            itemStyle: {
                barBorderRadius: 5
            }
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    })
    var dataAll = [
        { year: "2019", data: [200, 300, 300, 900, 1500, 1200, 600] },
        { year: "2020", data: [300, 400, 350, 800, 1800, 1400, 700] }
    ];

    $(".bar h2 ").on("click", "a", function() {
        option.series[0].data = dataAll[$(this).index()].data;
        myChart.setOption(option);
    });
})();
(function() {

    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    let myChart = echarts.init(document.querySelector(".bar1 .chart"));
    let option = {
        xAxis: [{
            show: false
        }],
        yAxis: [{
                type: 'category',
                data: ["HTML5", "CSS3", "javascript", "VUE", "NODE"],
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff"
                }
            },
            {
                data: [702, 350, 610, 793, 664],
                inverse: true,
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: "#fff"
                }
            }
        ],
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%"
        },
        series: [{
            name: '条',
            type: "bar",
            barCategoryGap: 50,
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                }
            },
            data: [70, 34, 60, 78, 69],
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: "{c}%"
                }
            },
            itemStyle: {
                normal: {
                    barBorderRadius: 20,
                    color: function(params) {
                        return myColor[params.dataIndex]
                    }
                }
            }
        }, {
            name: "框",
            type: "bar",
            barCategoryGap: 50,
            barWidth: 15,
            yAxisIndex: 1,
            data: [100, 100, 100, 100, 100],
            itemStyle: {
                color: "none",
                borderColor: "#00c1de",
                borderWidth: 3,
                barBorderRadius: 15
            }
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
(function() {
    var yearData = [{
            year: "2020", // 年份
            data: [
                // 两个数组是因为有两条线
                [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ]
        },
        {
            year: "2021", // 年份
            data: [
                // 两个数组是因为有两条线
                [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
                [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
            ]
        }
    ];
    let myChart = echarts.init(document.querySelector(".line .chart"));
    let option = {
        legend: {
            textStyle: {
                color: "#4c9bfd",
                right: "10%"
            }
        },
        grid: {
            top: "20%",
            bottom: "10%",
        },
        tooltip: {
            trigger: "axis"
        },
        xAxis: {
            type: "category",
            data: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#fff",
                fontSize: 10
            }

        },
        yAxis: {
            type: "value",
            axisTick: {
                show: false
            },
            axisLabel: {
                color: "#fff",
                fontSize: 10
            },
            axisLine: {
                show: false
            },
            splitLine: {
                lineStyle: {
                    color: "#012f4a" // 分割线颜色
                }
            }
        },
        series: [{
            name: "新增粉丝",
            type: "line",
            smooth: true,
            stack: "总量",
            data: yearData[0].data[0],
            color: "#00f2f1"
        }, {
            name: "新增游客",
            type: "line",
            smooth: true,
            stack: "总量",
            data: yearData[0].data[1],
            color: "#ed3f35"
        }]
    }
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();
(function() {
    let myChart = echarts.init(document.querySelector(".line1 .chart"));
    let option = {
        legend: {
            top: "0%",
            textStyle: {
                color: "#4c9bfd",
                fontSize: "10"
            }
        },
        tooltip: {
            trigger: "axis"
        },
        grid: {
            top: "20%",
            bottom: "10%",
        },
        xAxis: {
            type: "category",
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.3)"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: "10"
                }
            },
            axisTick: { show: false },
            data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"]
        },
        yAxis: {
            type: "value",
            axisLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.3)"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#fff",
                    fontSize: "10"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },
            axisTick: {
                show: false
            }
        },
        series: [{
            name: '播放量',
            type: 'line',
            data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 30, 40, 30, 40, 30, 40, 20, 60, 50, 40],
            lineStyle: {
                color: "#0184d5",
                width: 2
            },
            smooth: true,
            areaStyle: {
                color: new echarts.graphic.LinearGradient(
                    0,
                    0,
                    0,
                    1, [{
                            offset: 0,
                            color: "rgba(1, 132, 213, 0.4)" // 渐变色的起始颜色
                        },
                        {
                            offset: 0.8,
                            color: "rgba(1, 132, 213, 0.1)" // 渐变线的结束颜色
                        }
                    ],
                    false
                ),
                shadowColor: "rgba(0, 0, 0, 0.1)"
            },
            showSymbol: false,
        }, {
            name: '转发量',
            type: 'line',
            data: [130, 10, 20, 40, 30, 40, 80, 60, 20, 40, 90, 40, 20, 140, 30, 40, 130, 20, 20, 40, 80, 70, 30, 40, 30, 120, 20, 99, 50, 20],
            color: "#00d887",
            smooth: true,
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0,
                        0,
                        0,
                        1, [{
                                offset: 0,
                                color: "rgba(0, 216, 135, 0.4)"
                            },
                            {
                                offset: 0.8,
                                color: "rgba(0, 216, 135, 0.1)"
                            }
                        ],
                        false
                    ),
                    shadowColor: "rgba(0, 0, 0, 0.1)"
                }
            },
            showSymbol: false,
        }]
    }
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    })
})();
(function() {
    let myChart = echarts.init(document.querySelector(".pie .chart"));
    option = {
        tooltip: {
            trigger: 'item'
        },
        legend: {
            bottom: "0%",
            itemWidth: 10,
            itemHeight: 10,
            textStyle: {
                color: "rgba(255,255,255,.4)"
            }
        },
        series: [{
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '60%'],
            center: ["50%", "50%"],
            data: [
                { value: 1048, name: "0岁以下" },
                { value: 735, name: "20-29岁" },
                { value: 580, name: "30-39岁" },
                { value: 484, name: "40-49岁" },
                { value: 300, name: "40岁以上" }
            ],
            color: [
                "#065aab",
                "#066eab",
                "#0682ab",
                "#0696ab",
                "#06a0ab",
            ],
            labelLine: {
                show: false
            },
            label: {
                show: false
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 30,
                    shadowOffsetX: 30,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();