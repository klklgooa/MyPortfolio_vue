<template>
  <div class="container-fluid main-section overflow-hidden">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-12">
          <div class="banner-left">
            <h1>꿈꾸는 개발자...</h1>
            <img class="index_face" :src="indexFace" alt="keyard" />
            <p style="border: 0px; font-size: 25px; font-family: sans-serif;">
              Inchan Hwang
            </p>
            <h3 class="typing">A Dreaming Developer. . .</h3>
            <p>
              Hello, I'm Hwang Inchan, dreaming of becoming a developer. I am
              currently in my third year of Gachon University and I am
              learning web programs.
            </p>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <div class="banner-top"></div>
        </div>
      </div>
    </div>
    <!-- <BarChart :chart-data="data" :chart-options="options" /> -->
  </div>
</template>

<script>
// import BarChart from './Chart/IndexChart.vue';

export default {
  // components: {
  //   BarChart, // 수정된 부분
  // },
  data() {
    return {
      indexFace: require('../image/index_face.png')
    //   data: {
    //     labels: ['업무', '협업', '성실', '체력', '노력', '열정'],
    //     datasets: [
    //       {
    //         label: '황인찬의 능력치',
    //         data: [7, 8, 10, 2, 9, 7],
    //         backgroundColor: 'rgba(38, 200, 4)',
    //         borderColor: 'rgba(255, 99, 132, 1)',
    //         borderWidth: 1,
    //       },
    //     ],
    //   },
    //   options: {
    //     responsive: true,
    //     maintainAspectRatio: false,
    //   },
     };
  }
};
</script>

<style scoped>
/* 원하는 스타일을 추가하세요. */
</style>
