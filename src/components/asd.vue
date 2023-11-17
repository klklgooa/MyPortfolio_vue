<template>
  <div>
    <Collapse :isOpen="true">
      <template v-if="false">
        <Introduction />
      </template>
      <template v-else>
        <Login />
      </template>
    </Collapse>
  </div>
</template>

<script>
import ref from 'vue';
import Introduction from './Introduction.vue';
import Login from './Login.vue';

export default {
  components: {
    Introduction,
    Login,
  },
  setup() {
    const index = ref(0);

    const contentChange = (event) => {
      index.value = event.target.value;
    };

    return { index, contentChange };
  },
};
</script>

<style scoped>
/* 원하는 스타일을 여기에 추가하세요. */
</style>
