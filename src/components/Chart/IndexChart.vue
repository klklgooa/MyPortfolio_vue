<template>
    <div>
      <bar-chart :data="chartData" :options="chartOptions"></bar-chart>
    </div>
  </template>
  
  <script>
  import { Bar, mixins } from 'vue-chartjs';
  
  export default {
    extends: Bar,
    mixins: [mixins.reactiveProp],
    props: ['chartData', 'chartOptions'],
    mounted() {
      // mixin.reactiveProp을 사용하여 데이터를 차트에 연결
      this.renderChart(this.chartData, this.chartOptions);
    },
  };
  </script>