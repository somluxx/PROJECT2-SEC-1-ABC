<script setup>
import { ref,onMounted, reactive } from 'vue';
import { RouterView } from 'vue-router'


import FirstPage from './components/FirstPage.vue';

import TimeDisplay from './components/TimeDisplay.vue';

import TodoList from './components/Comment.vue'
import NavBar from './view/NavBar.vue';
import NewTodoListWithSound from './components/NewTodoListWithSound.vue';

onMounted(() => {
  document.title = 'Tomato Pomodoro'
})

const goNextPage = (x) => {
  if(x === true){
    showFirstPage.value = !showFirstPage.value
    showTimeDisplayPage.value = !showTimeDisplayPage.value
  }
}

const goTodoList = (x) => {
  if(x === true){
    showTimeDisplayPage.value = !showTimeDisplayPage.value
    showTodoListPage.value = !showTodoListPage.value
  }
}

const backFirstpage = (x) => {
  if(x === true){
    showTimeDisplayPage.value = !showTimeDisplayPage.value
    showFirstPage.value = !showFirstPage.value
  }
}

const sentTocustomized = (x) => {
  // console.log(x)
    customized_min.value = x.min
    customized_sec.value = x.sec
}

const customized_min = ref() // initial minutes
const customized_sec = ref() // initial seconds


</script>

<template>
  <div class="w-screen h-screen ">
    <NavBar />
    <RouterView />
  </div>
</template>
<style scoped>

</style>