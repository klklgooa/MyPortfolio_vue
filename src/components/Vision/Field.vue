<!-- import "../CSS/Vision.css";
import field1 from '..../image/field1.png';
import field2 from '..../image/field2.png';
import field3 from '..../image/field3.png';
import field4 from '..../image/field4.png';
import field5 from '..../image/field5.png';
import field6 from '..../image/field6.png';

const Field = () => {
  return (
    <div>
      <h1>유망 직업 및 분야</h1>
      <img class='field_img' src={field1} alt="field" />
      <img class='field_img' src={field2} alt="field" />
      <img class='field_img' src={field3} alt="field" />
      <img class='field_img' src={field4} alt="field" />
      <img class='field_img' src={field5} alt="field" />
      <img class='field_img' src={field6} alt="field" />
      <fieldset>
        <legend>목표를 위한 준비</legend>
        <ol>
          <li>자격증 준비(SQLD, 리눅스 마스터, 정보통신기사)</li>
          <li>포트폴리오(백엔드 웹 개발 및 인턴 경험)</li>
          <li>코딩 테스트(다양한 알고리즘 공부, 프로그래머스, 백준)</li>
          <li>어학 능력(논문 해석이 가능하고 의사소통에 필요한 영어회화)</li>
          <li>현업 직무 이해 능력(지원 할 회사의 직종에 대한 이해와 노력)</li>
        </ol>
      </fieldset>
    </div>
  );
};

export default Field; -->

<template>
  <div>
    <h1>유망 직업 및 분야</h1>
    <img class="field_img" :src="field1" alt="field" />
    <img class="field_img" :src="field2" alt="field" />
    <img class="field_img" :src="field3" alt="field" />
    <img class="field_img" :src="field4" alt="field" />
    <img class="field_img" :src="field5" alt="field" />
    <img class="field_img" :src="field6" alt="field" />
    <fieldset>
      <legend>목표를 위한 준비</legend>
      <ol>
        <li>자격증 준비(SQLD, 리눅스 마스터, 정보통신기사)</li>
        <li>포트폴리오(백엔드 웹 개발 및 인턴 경험)</li>
        <li>코딩 테스트(다양한 알고리즘 공부, 프로그래머스, 백준)</li>
        <li>어학 능력(논문 해석이 가능하고 의사소통에 필요한 영어회화)</li>
        <li>현업 직무 이해 능력(지원 할 회사의 직종에 대한 이해와 노력)</li>
      </ol>
    </fieldset>
  </div>
</template>

<script>
import field1 from "../../image/field1.png"; // 이미지 경로 수정
import field2 from "../../image/field2.png"; // 이미지 경로 수정
import field3 from "../../image/field3.png"; // 이미지 경로 수정
import field4 from "../../image/field4.png"; // 이미지 경로 수정
import field5 from "../../image/field5.png"; // 이미지 경로 수정
import field6 from "../../image/field6.png"; // 이미지 경로 수정

export default {
  data() {
    return {
      field1,
      field2,
      field3,
      field4,
      field5,
      field6,
    };
  },
};
</script>

<style scoped>
/* Vision 페이지의 CSS 스타일이 필요하다면 추가하세요. */
</style>
