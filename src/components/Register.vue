<!-- // import React, { createContext, useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './CSS/Login.css'
// const Register = ({ onRegister }) => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

//     const handleRegister = () => {
//         if (username === "user" && password === "1234") {
//             // Register 버튼 클릭 시, 부모 컴포넌트에서 전달받은 콜백 호출
//             onRegister(username, password);
//             // Login 페이지로 이동
//             navigate('/login');
//         }

//     };

//     return (
//         <div className="register-container">
//             <h1 id='login_h1'>Login</h1>
//             <table id='login_table'>
//                 <tr className='login_tr'>
//                     <td className='register_text'>Username</td>
//                     <td className='register_input'><input type="text" value={username} onChange={(e) => setUsername(e.target.value)} /></td>
//                 </tr>
//                 <tr className='login_tr'>
//                     <td className='register_text'>Password</td>
//                     <td className='register_input'><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} id='register_password' /></td>
//                 </tr>
//             </table>
//             <br />
//             <button onClick={handleRegister}>Submit</button>
//             <div id='space'>
//             </div>
//         </div >
//     );
// };

// export default Register; -->

<template>
  <div class="register-container">
    <h1 id="login_h1">Login</h1>
    <table id="login_table">
      <tr class="login_tr">
        <td class="register_text">Username</td>
        <td class="register_input"><input type="text" v-model="username" /></td>
      </tr>
      <tr class="login_tr">
        <td class="register_text">Password</td>
        <td class="register_input"><input type="password" v-model="password" id="register_password" /></td>
      </tr>
    </table>
    <br />
    <button @click="handleRegister">Submit</button>
    <div id="space"></div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useNavigate } from "vue-router";

export default {
  setup() {
    const username = ref("");
    const password = ref("");
    const navigate = useNavigate();

    const handleRegister = () => {
      if (username.value === "user" && password.value === "1234") {
        // Register 버튼 클릭 시, 부모 컴포넌트에서 전달받은 콜백 호출
        // onRegister(username.value, password.value); // 만약 부모 컴포넌트에서 전달받은 콜백을 사용하려면 주석 해제
        // Login 페이지로 이동
        navigate('/login');
      }
    };

    return {
      username,
      password,
      handleRegister,
    };
  },
};
</script>

<style scoped>
/* 원하는 스타일을 추가하세요. */
</style>
