<script setup>
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
import NavBar from './view/NavBar.vue';

onMounted(() => {
  document.title = 'Tomato Pomodoro'
})

</script>

<template>
  <div class="w-screen h-screen ">
    <NavBar />
    <RouterView />
  </div>
</template>
<style scoped>

</style>