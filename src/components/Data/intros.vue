<template>
  <div>
    <h1 style="margin-left: 20px">Welcome, {{ userInfo.username }}!</h1>
    <button v-for="(intro, idx) in intros" :key="idx" @click="contentChange(idx)">
      {{ intro.tab }}
    </button>
    <br /><br />
    <component :is="currentComponent" />
  </div>
</template>

<script>
import Resume from "../Intro/Resume.vue";
import SelfIntro from "../Intro/SelfIntro.vue";

export default {
  props: {
    userInfo: Object,
  },
  data() {
    return {
      index: 0,
    };
  },
  methods: {
    contentChange(idx) {
      this.index = idx;
    },
  },
  computed: {
    intros() {
      return [
        { tab: "이력서", component: Resume },
        { tab: "자기소개서", component: SelfIntro },
      ];
    },
    currentComponent() {
      return this.intros[this.index].component;
    },
  },
};
</script>

<style scoped>
/* 원하는 스타일을 추가하세요. */
</style>

