<template>
  <div id="career">
    <button v-for="(career, idx) in careers" :key="idx" @click="contentChange(idx)">
      {{ career.tab }}
    </button>
    <component :is="currentComponent" :userInfo="userInfo" />
  </div>
</template>

<script>
import DeepLearning from "./Career/DeepLearning.vue";
import Mstc from "./Career/Mstc.vue";
import Wooa from "./Career/Wooa.vue";

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
      careers() {
        return [
          { tab: "DeepLearning", component: DeepLearning },
          { tab: "Mstc", component: Mstc },
          { tab: "Wooa", component: Wooa }
        ];
      },
      currentComponent() {
        return this.careers[this.index].component;
      },
    },
  };
  </script>

<style scoped>
/* "./CSS/Career.css" 파일의 스타일을 여기에 추가하세요. */
</style>
