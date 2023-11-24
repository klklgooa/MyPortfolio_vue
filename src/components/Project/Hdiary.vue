<template>
  <div>
    <img :src="require('../../image/hdiary_1.png')" alt="hdiary" id="hdiary_logo"/>
    <h1>Hdiary (건강관리 Android 어플리케이션)</h1>
    <p></p>
    <br/><br/><br/><br/>
    <hr>
    <br/><br/>
    <span class="p_hdiary">프로젝트 개요</span>
    <br/><br/><br/><br/>
    <div>
      <img id="hdiary_img8" :src="require('../../image/hdiary_8.png')" alt="hdiary" />
      <br/><br/><br/><br/>
      <hr>
      <br/><br/>
      <span class="p_hdiary">개발 과정</span>
      <br/><br/>
      <img id="hdiary_img9" :src="require('../../image/hdiary_9.png')" alt="hdiary" />
      <br/><br/><br/><br/>
      <hr>
      <br/><br/><br/>
      <span class="p_hdiary">실제 구현 기능</span>
    <br/><br/><br/><br/>
      <img class="hdiary_img" :src="require('../../image/hdiary_2.png')" alt="hdiary" />&nbsp;
      <img class="hdiary_img" :src="require('../../image/hdiary_3.png')" alt="hdiary" />
      <img class="hdiary_img" :src="require('../../image/hdiary_4.png')" alt="hdiary" />
      <img class="hdiary_img" :src="require('../../image/hdiary_5.png')" alt="hdiary" />
      <img class="hdiary_img" :src="require('../../image/hdiary_6.png')" alt="hdiary" />
      <img class="hdiary_img" :src="require('../../image/hdiary_7.png')" alt="hdiary" />
    </div>
    <br /><br /><br /><br />
    <fieldset>
      <legend>Hdiary 프로젝트 개요</legend>
      <ul>
        <li>이메일 형식의 회원관리</li>
        <li>사용자들의 관심을 끌고 유용한 정보들을 자연스럽게 제공하는 AutoScroll banner 사용</li>
        <li>BMI 계산 기능으로 자신의 체형을 객관적으로 판단, 만보기 기능으로 활동량 측정</li>
        <li>약 먹는 시간, 운동 시간, 비타민 섭취 확인 알림을 함으로써 건강하고 규칙적인 생활습관 유지</li>
        <li>현재 걸음 수와 목표치의 %를 바 형태로 보여주는 만보기 기능</li>
      </ul>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'Hdiary',
};
</script>

<style scoped>
 @import '../CSS/Project.css'
</style>

