<template>
  <div id="career">
    <button v-for="(career, i) in careers" :key="i" @click="contentChange(i)">
      {{ career.tab }}
    </button>
    {{ careers[index].content }}
  </div>
</template>

<script>
import { ref } from 'vue';
import careers from './Data/careers';

export default {
  setup() {
    const index = ref(0);

    const contentChange = (i) => {
      index.value = i;
    };

    return {
      careers,
      index,
      contentChange,
    };
  },
};
</script>

<style scoped>
/* "./CSS/Career.css" 파일의 스타일을 여기에 추가하세요. */
</style>
