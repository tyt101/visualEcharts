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
            axiosLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(255,255,255,.1)"
                }
            }
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
})();