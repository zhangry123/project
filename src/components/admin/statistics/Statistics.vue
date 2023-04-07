
<script setup lang="ts">
import * as echarts from 'echarts';
import { onMounted, ref } from 'vue';
const barChart = ref<HTMLElement>();
const myChart1 = ref<any>();
// 绘制柱形图
function initBarEcharts() {
  myChart1.value = echarts.init(barChart.value!);
  myChart1.value.setOption({
    title: {
      text: '学习输出',
      x: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      data: ['输出量', '输入量'],
      orient: 'vertical',
      right: 60,
      top: 20
    },
    xAxis: {
      data: ['六月', '七月', '八月', '九月', '十月']
    },
    yAxis: {},
    color: ['#c38bef', '#6dbcf7'],
    series: [
      {
        name: '输出量',
        type: 'line',
        data: [2, 9, 6, 3, 1],
        smooth: true,
        label: {
          show: true,
          position: 'top'
        }
      },
      {
        name: '输入量',
        type: 'bar',
        data: [9, 18, 12, 9, 6],
        barWidth: '20',
        label: {
          show: true,
          position: 'top'
        }
      }
    ]
  });
}
//绘制饼图
const pieChart = ref<HTMLElement>();
const myChart2 = ref<any>();
function initPieEcharts() {
  myChart2.value = echarts.init(pieChart.value!)
  myChart2.value.setOption({
    title: {
      text: '文章分类',
      x: 'center'
    },
    tooltip: {
      trigger: 'item',
      formatter: '{b}:{c}({d}%)'
    },
    legend: {
      type: 'scroll',
      orient: 'vertical',
      left: 0,
      top: 30,
      height: 150,
      data: ['html', 'css', 'javascript', 'typescript', 'vue2', 'vue3', 'react', 'angular', 'uniapp', 'taro', 'vite', 'webpack', 'node', 'others']
    },
    color: ['#61adf2', '#56dae8', '#efa49e', '#7ea1ed', '#5ae05a', '#f2d2a2', '#5881e8', '#63d6c0', '#edc29f', '#5b97d3', '#3eceb3', '#6a96ed', '#426ed1', '#65d18b'],
    series: [
      {
        name: '文章分类数量',
        type: 'pie',
        radius: '30%',
        center: ['60%', '50%'],
        data: [
          { name: 'html', value: 10 },
          { name: 'css', value: 12 },
          { name: 'javascript', value: 20 },
          { name: 'typescript', value: 15 },
          { name: 'vue2', value: 13 },
          { name: 'vue3', value: 12 },
          { name: 'react', value: 3 },
          { name: 'angular', value: 2 },
          { name: 'uniapp', value: 12 },
          { name: 'taro', value: 5 },
          { name: 'vite', value: 2 },
          { name: 'webpack', value: 3 },
          { name: 'node', value: 9 },
          { name: 'others', value: 10 },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0,0,0,0.5)'
          }
        },
        label: {
          show: true,
          position: 'outside',
          formatter: '{b}:{c}({d}%)'
        }
      }
    ]
  })
}
onMounted(() => {
  initBarEcharts();
  initPieEcharts()
});
</script>

<template>
  <div class="title">
    <el-icon>
      <IEpCaretRight />
    </el-icon>
    <span style="font-weight:bold">统计图</span>
  </div>
  <div class="charts">
    <div ref="barChart" :style="{ width: '400px', height: '300px' }"></div>
    <div ref="pieChart" :style="{ width: '500px', height: '300px' }"></div>
  </div>
</template>
<style scoped>
.charts {
  margin-left: 400px;
}
.title{
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>

