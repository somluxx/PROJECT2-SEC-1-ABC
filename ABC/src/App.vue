<script setup>
import { ref,onMounted, reactive } from 'vue';
import { RouterView } from 'vue-router'
import TodoList from './components/Comment.vue'
import NavBar from './view/NavBar.vue';
import NewTodoListWithSound from './components/NewTodoListWithSound.vue';

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