<template>
  <div>
    <h1>우아한 테크 코스</h1>
    <h3>풀스택 프로그램</h3>
    <img id="wooimage" :src="require('../../image/woo1.png')" alt="woo_img" />&nbsp;
    <br /><br /><br /><br /><br />
    <hr>
      <br/><br/><br/>
      <span class='p_mstc'>우아한 테크 코스 멘토 미팅</span>
      <br/><br/><br/>
      <img class="woo_img" :src="require('../../image/woo2.png')" alt="woo_img" />

      <hr>
      <br/><br/><br/>
      <span class='p_mstc'>우아한 테크 코스 발표</span>
      <br/><br/><br/>
      <img class="woo_img" :src="require('../../image/woo3.png')" alt="woo_img" />
      <br/><br/><br/><br/><br/><br/>
    <fieldset>
      <legend>테크 코스 개요</legend>
      <ol>
        <li>프로그래밍 기본, 자바 및 코드 개선 교육</li>
        <li>스프링 프레임워크 기반 웹 프로그래밍 및 DB설계</li>
        <li>프로세스 기반 협업 팀 프로젝트. 기획, 구현, 배포</li>
        <li>대용량 서비스 데이터 처리 및 아키텍처 설계</li>
        <li>취업 및 진로 준비. 개발자 레벨에 따라 진로 정하기</li>
      </ol>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'Wooa',
};
</script>

<style scoped>
@import "../CSS/Career.css"
</style>
