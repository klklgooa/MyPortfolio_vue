<!-- <template>
  <nav>
    <ul id="nav_ul">
      <li><router-link to="/introduction"><div class="nav_div">나의 소개</div></router-link></li>
      <li><router-link to="/project"><div class="nav_div">프로젝트</div></router-link></li>
      <li><router-link to="/career"><div class="nav_div">나의 경력</div></router-link></li>
      <li><router-link to="/vision"><div class="nav_div">목표</div></router-link></li>
    </ul>
    
    
    
    
  </nav>
</template>

<script>
export default {
  // 필요한 로직이 있으면 추가
};
</script>

<style scoped>
/* 원하는 스타일을 추가하세요. */
<style> -->

<template>
  <nav>
    <div id="container">
      <div id="nav">
        <ul class="menu">
          <li class="nav_tab"> <a href="#">Introduce</a>
            <ul class="submenu">
              <li class="nav_li"><router-link to="/resume"> 이력서 </router-link></li>
              <li class="nav_li"><router-link to="/selfintro"> 자기 소개서 </router-link></li>
            </ul>
          </li>
          <li class="nav_tab"> <a href="#">Project</a>
            <ul class="submenu">
              <li class="nav_li"><router-link to="/Keyard"> Keyard </router-link></li>
              <li class="nav_li"><router-link to="/Hdiary"> Hdiary </router-link></li>
              <li class="nav_li"><router-link to="/Witty"> Witty </router-link></li>
            </ul>
          </li>
          <li class="nav_tab"> <a href="#">Career</a>
            <ul class="submenu">
              <li class="nav_li"><router-link to="/MSTC"> MSTC </router-link></li>
              <li class="nav_li"><router-link to="/DeepLearning"> DeepLearning</router-link></li>
              <li class="nav_li"><router-link to="/Wooa"> 우아한 테크코스</router-link></li>
            </ul>
          </li>
          <li class='nav_tab'> <a href="#">Vision</a>
            <ul class="submenu">
              <li class="nav_li"><router-link to="/Ability"> 목표 능력치 </router-link></li>
              <li class="nav_li"><router-link to="/Ssafy"> Ssafy </router-link></li>
              <li class="nav_li"><router-link to="/Field"> 목표 분야 </router-link></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  // 필요한 로직이 있으면 추가
};
</script>

<style scoped>
@import './CSS/Nav.css';
</style>

