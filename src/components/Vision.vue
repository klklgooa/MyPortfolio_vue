<!-- <template>
  <div id="vision">
    <button v-for="(vision, idx) in visions" :key="idx" @click="contentChange(idx)">
      {{ vision.tab }}
    </button>
    {{ visions[index].content }}
  </div>
</template>

<script>
import { ref } from "vue";
import visions from "./Data/visions"; // Vision 데이터가 있는 경로로 변경

export default {
  setup() {
    const index = ref(0);
    
    const contentChange = (idx) => {
      index.value = idx;
    };

    return {
      index,
      visions,
      contentChange,
    };
  },
};
</script>

<style scoped>
/* Vision 페이지의 CSS 스타일이 필요하다면 추가하세요. */
</style> -->

<!-- Vision.vue -->
<template>
  <div id="vision">
    <button v-for="(vision, idx) in visions" :key="idx" @click="contentChange(idx)">
      {{ vision.tab }}
    </button>
    <component :is="visions[index].content"></component>
  </div>
</template>

<script>
import { ref } from "vue";
import visions from "./Data/visions"; // Vision 데이터가 있는 경로로 변경

export default {
  setup() {
    const index = ref(0);
    
    const contentChange = (idx) => {
      index.value = idx;
    };

    return {
      index,
      visions,
      contentChange,
    };
  },
};
</script>

<style scoped>
/* Vision 페이지의 CSS 스타일이 필요하다면 추가하세요. */
</style>

