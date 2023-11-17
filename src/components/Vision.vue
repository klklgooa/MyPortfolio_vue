<template>
  <div id="vision">
    <button v-for="(vision, idx) in visions" :key="idx" @click="contentChange(idx)">
      {{ vision.tab }}
    </button>
    <component :is="currentComponent" :userInfo="userInfo" />
  </div>
</template>

<script>
import Ability from "./Vision/Ability.vue";
import Field from "./Vision/Field.vue";
import Ssafy from "./Vision/Ssafy.vue";

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
      visions() {
        return [
          { tab: "Ability", component: Ability },
          { tab: "Field", component: Field },
          { tab: "Ssafy", component: Ssafy }
        ];
      },
      currentComponent() {
        return this.visions[this.index].component;
      },
    },
  };
  </script>

<style scoped>
/* Vision 페이지의 CSS 스타일이 필요하다면 추가하세요. */
</style>

