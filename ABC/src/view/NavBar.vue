// Navbar
<script setup>
import { RouterLink } from 'vue-router'
</script>
 
<template>
<div>
    <div class="navbar bg-[#4D455D] fixed">
        <div class="title absolute">
            <RouterLink to="/"><img src="../../public/images/TOMATO_POMODORO.png" class="w-40 ml-2"></RouterLink>
        </div>
        <ul class="list-menu flex flex-row gap-x-10 w-full h-full justify-end mr-5">
            
            <li><RouterLink to="/timer">TIMER</RouterLink></li>
            <li><RouterLink to="/list">LIST</RouterLink></li>
            <li><RouterLink to="/comment">COMMENT</RouterLink></li>
        </ul>
  </div>
</div>
</template>
 
<style scoped>
.list-menu > li{
    color: white;
}
</style>