<template>
  <div id="project">
    <button v-for="(project, idx) in projects" :key="idx" @click="contentChange(idx)">
      {{ project.tab }}
    </button>
    <component :is="currentComponent" :userInfo="userInfo" />
  </div>
</template>

<script>
import Keyard from "./Project/Keyard.vue";
import Hdiary from "./Project/Hdiary.vue";
import Witty from "./Project/Witty.vue";

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
      projects() {
        return [
          { tab: "Keyard", component: Keyard },
          { tab: "Hdiary", component: Hdiary },
          { tab: "Witty", component: Witty }
        ];
      },
      currentComponent() {
        return this.projects[this.index].component;
      },
    },
  };
  </script>

<style scoped>
/* 프로젝트 페이지의 CSS 스타일이 필요하다면 추가하세요. */
</style>