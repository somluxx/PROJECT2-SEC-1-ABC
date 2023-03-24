<!-- หน้าเเรก -->
<script setup>

    import { ref, defineEmits } from 'vue';
   
    // import {router} from '../router/router.js'


import TodoList from './TodoList.vue';
   
//
    // import { RouterView } from 'vue-router'
    // import { RouterLink } from 'vue-router'
    // import { createRouter, createWebHashHistory } from 'vue-router'
    const tomato = 'images/tomatoman.png'
    const emits = defineEmits(['nextPage'])
   
    const handleClick = () => {
    router.push('/todo')
  }

//   const routes = [
//   { path: '/', component: () => import('../components/FirstPage.vue') },
//   { path: '/todo', component: TodoList },
// ]

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes,
// })

</script>
 
<template>
<div class="w-screen h-screen bg-red-400">
     <router-link to="/todo">Go to TodoList</router-link>
    <button @click="handleClick">Go to TodoList</button> 
    <div class="flex flex-col ">
        <div class="flex w-full justify-center">  
            <h1 class="pt-14 pb-5 text-7xl font-normal text-white font-sans tracking-widest">Pomodoro</h1> 
        </div>
        <div class="flex w-full justify-center">  
            <h1 class="text-7xl font-normal text-white font-sans tracking-widest">Timer wow</h1>
        </div>
        <div class="flex w-full justify-center">  
            <img :src="tomato" class="w-96 pt-5"/>
        </div>
        <div class="w-full "> 
            <div class="flex justify-center">
            <button class="bg-red-600 rounded-xl w-72 h-32 text-white text-5xl font-semibold" @click="$emit('nextPage',true)">ENTER</button>
            </div>
            <div class="whatis-modal mt-7 flex justify-center">
                <label for="my-modal-5" class="btn text-white">Know more !</label>
                <input type="checkbox" id="my-modal-5" class="modal-toggle" />
                <div class="modal">
                <div class="modal-box w-11/12 max-w-5xl">
                    <h3 class="font-bold text-lg">WHAT IS POMODORO ?</h3>
                    <p class="py-4">The Pomodoro Technique is a time management method that breaks down work into focused intervals, typically 25 minutes each. After each Pomodoro session, a short break of 5 minutes is taken to rest and recharge. After completing a set of four Pomodoros, a longer break of 15-30 minutes is taken. This cycle of working and resting continues until a task is accomplished.</p>
                    <div class="modal-action">
                    <label for="my-modal-5" class="btn">Let's Get Start !</label>
                    </div>
                </div>
                </div>
            </div>
            <div class="flex justify-end">
            <h1 class="text-5xl font-normal text-white font-sans tracking-widest p-5">by ABC group</h1> 
          

            </div>
        </div>
     
    </div>

</div>
</template>
 
<style scoped>

</style>
