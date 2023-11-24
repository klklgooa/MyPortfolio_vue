<template>
  <div>
    <h1>현재 능력치 그래프</h1>
    <br /><br />
    <div>
    <bar-chart :data="chartData"></bar-chart>
  </div>
    <br /><br /><br />

    <hr />
    <h1>목표 능력치 그래프</h1>
    <br /><br />
    <div class="example">
      <apexcharts v-if="chartOptions" width="500" height="350" type="bar" :options="chartOptions" :series="series" />

	</div>
  </div>
</template>

<script>
</script>

<style scoped>
 @import '../CSS/Vision.css'
</style>
