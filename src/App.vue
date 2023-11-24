<template>
  <div>
    <Header></Header>
    <div class="container">
      <Nav></Nav>

      <router-view></router-view>
      <Article></Article>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Nav from "./components/Nav.vue";
import Article from "./components/Article.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Header,
    Nav,
    Article,
    Footer,
  },
};
</script>

<style>
@import './components/CSS/App.css';
</style>
