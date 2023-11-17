<!-- // import { useState } from "react";
// import projects from "./Data/projects";
// import "./CSS/Project.css";

// function Project() {
//   const [index, setIndex] = useState(0);
//   const contentChange = (event) => {
//     setIndex(event.target.value);
//   };
//   return (
//     <div id="project">
//       {projects.map((project, index) => (
//         <button onClick={contentChange} value={index}>
//           {project.tab}
//         </button>
//       ))}

//       {projects[index].content}
//     </div>
//   );
// }

// export default Project; -->

<template>
  <div id="project">
    <button v-for="(project, idx) in projects" :key="idx" @click="contentChange(idx)">
      {{ project.tab }}
    </button>
    {{ projects[index].content }}
  </div>
</template>

<script>
import { ref } from "vue";
import projects from "./Data/projects"; // 프로젝트 데이터가 있는 경로로 변경

export default {
  setup() {
    const index = ref(0);
    
    const contentChange = (idx) => {
      index.value = idx;
    };

    return {
      index,
      projects,
      contentChange,
    };
  },
};
</script>

<style scoped>
/* 프로젝트 페이지의 CSS 스타일이 필요하다면 추가하세요. */
</style>