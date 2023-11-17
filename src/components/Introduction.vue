
  <!-- // import React, { useState } from "react";
  // import intros from "./Data/intros";
  // import Login from "./Login";

  // function Introduction() {
  //   const [index, setIndex] = useState(0);
  //   const contentChange = (event) => {
  //     setIndex(event.target.value);
  //   };

  //   const [id, SetId] = useState("");
  //   const [pwd, SetPwd] = useState("");
  //   const changeId = (e) => {
  //     SetId(e.target.value);
  //   };
  //   const changePwd = (e) => {
  //     SetPwd(e.target.value);
  //   };
  //   if (id === "user" && pwd === "1234") {
  //     return (
  //       <div>
  //         {intros.map((intro, index) => (
  //           <button key={index} onClick={contentChange} value={index}>
  //             {intro.tab}
  //           </button>
  //         ))}
  //         <br /> <br />
  //         {intros[index].content}
  //       </div>);
  //   } else
  //     return (
  //       <Login id={id} pwd={pwd} changeId={changeId} changePwd={changePwd} />
  //     );
  // };

  // export default Introduction;
  //////// -->

  <template>
    <div>
      <!-- <h1 style="margin-left: 20px">Welcome, {{ userInfo.username }}!</h1> -->
      <button v-for="(intro, idx) in intros" :key="idx" @click="contentChange(idx)">
        {{ intro.tab }}
      </button>
      <br /><br />
      <component :is="currentComponent" :userInfo="userInfo" />
    </div>
  </template>
  
  <script>
  import Resume from "./Intro/Resume.vue";
  import SelfIntro from "./Intro/SelfIntro.vue";
  
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
  





