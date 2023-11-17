<template>
  <article>
    <h2>{{ title }}</h2>
    <div v-html="body"></div>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    body: String,
  }
};
</script>

<style scoped>
/* 원하는 스타일을 여기에 추가하세요. */
</style>
