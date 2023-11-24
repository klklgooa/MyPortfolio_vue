<!-- import witty2 from '../../image/witty2.png';
import witty3 from '../../image/witty3.png';
import '../CSS/Project.css';

const Witty = () => {
  return (
    <div>
      <h1>Witty(React 기반 Web Application)</h1>
      <img class ='witty_logo' src={witty3} alt="witty" />
      <br/><br/><br/>
      <div>
        &nbsp;
        <img class ='witty_img' src={witty2} alt="witty" />
      </div>
      <br/><br/><br/>
      <fieldset>
        <legend>witty 프로젝트 개요</legend>
        <ul>
          <li>이메일 형식의 회원관리</li>
          <li>피드(게시물)마다 '좋아요'기능</li>
          <li>개인 프로필 커스텀 기능</li>
          <li>팔로우 한 사람들의 피드를 CardView 형태로 보여줌</li>
          <li>피드에 답글을 적을 수 있는 부가 기능</li>
        </ul>
      </fieldset>
    </div>
  );
};

export default Witty; -->

<template>
  <div>
    <img class="witty_logo" :src="require('../../image/witty3.png')" alt="witty" />
    <h1>Witty(React 기반 Web Application)</h1>
    <br /><br /><br />
    <br /><br /><br /><br />
    <hr>
    <br /><br />
    <div>
      <span id="p_keyard">Diagram of Witty</span>
      <br /><br /><br /><br />
      <img id="witty_4" :src="require('../../image/witty4.png')" alt="witty" />
    </div>
    <br /><br /><br /><br />
    <hr>
    <br /><br />
    <div>
      <span id="p_keyard">API_form of Witty</span>
      <br /><br /><br /><br />
      <img id="witty_5" :src="require('../../image/witty5.png')" alt="witty" />
    </div>
    <br /><br /><br /><br />
    <hr>
    <br /><br />
    <div>
      <span id="p_keyard">Interface of Witty</span>
      <br /><br /><br /><br />
      <img class="witty_img" :src="require('../../image/witty6.png')" alt="witty" />
      <img class="witty_img" :src="require('../../image/witty8.png')" alt="witty" />
      <img class="witty_img" :src="require('../../image/witty7.png')" alt="witty" />
    </div>
    <br /><br /><br /><br />

    <div>
      &nbsp;
    </div>
    <br /><br /><br />
    <fieldset>
      <legend>witty 프로젝트 개요</legend>
      <ul>
        <li>이메일 형식의 회원관리</li>
        <li>피드(게시물)마다 '좋아요'기능</li>
        <li>개인 프로필 커스텀 기능</li>
        <li>팔로우 한 사람들의 피드를 CardView 형태로 보여줌</li>
        <li>피드에 답글을 적을 수 있는 부가 기능</li>
      </ul>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'Witty',
};
</script>

<style scoped>
@import '../CSS/Project.css'
</style>

