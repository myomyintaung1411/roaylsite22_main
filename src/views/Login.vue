<template>
    <section class="w-full h-full relative bg_login">
        <div class=" flex items-center justify-center max-w-xs w-96 bg-white bg-opacity-90 py-3 rounded">

         <form @click.prevent>
            <div class="flex flex-col py-4">
                <label for="name" class=" text-lg tracking-wide font-bold text-center"  >请输入账号</label >
            <div class="relative py-2">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-100  tracking-wider">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>

              </div>

              <input
                v-model="name"
                id="name"
                type="name"
                autocomplete="off"
                name="name"
                class="text-sm placeholder-gray-100  text-white pl-10 pr-4 border border-none bg-gray-400 w-full py-2 focus:outline-none outline-none"
                placeholder="请输入账号"
              />
            </div>
            <div class="relative py-3">
              <div
                class="inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400"
              >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 text-gray-100  tracking-wider ">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>


              </div>

              <input
                v-model="password"
                id="password"
                type="password"
                autocomplete="off"
                name="password"
                class="text-sm placeholder-gray-100 text-white  pl-10 pr-4 border focus-within:outline-none border-none bg-gray-400   w-full py-2 focus:outline-none outline-none"
                placeholder="请输入密码"
              />
            </div>
            <div class="relative py-3">
                <button @click="loginSection" class="w-full bg-blue-500 py-2 text-white cursor-pointer">登录</button>
            </div>
            </div>
         </form>
        </div>
    </section>
</template>

<script setup>

import {ref} from 'vue'
import { getCurrentInstance } from 'vue';

const name = ref('')
const password = ref('')
const instance = getCurrentInstance()

const loginSection = () => {
    if(name.value == '' && password.value == '') instance.proxy.$message({ message: '请输入所有字段', duration: 2 })
    if(name.value !== '66666' && password.value !== '66666')  instance.proxy.$message({ message: '用户名和密码不正确', duration: 2 })
}
</script>

<style scoped>
 .bg_login{
    background-image: url("../assets/images/Loginbg.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  /* position: fixed;
   right: 0;
    bottom: 0; */
  width: 100%;
  height: 100%;
  overflow-y: auto;
 }
</style>