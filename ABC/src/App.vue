// App
<script setup>
import { ref,onMounted, reactive } from 'vue';
import CustomeTime from './components/CustomeTime.vue';
import { RouterView } from 'vue-router'
///////////////////////////////////////////////////////////////////////////
//หน้าเเรก FirstPage มีการใช้ defineEmits เชื่อมกับ @Click  
import FirstPage from './components/FirstPage.vue';
//หน้าสอง TimeDisplay เป็นคัวโชวเวลา
import TimeDisplay from './components/TimeDisplay.vue';
// import TimerComponent from './components/TimerComponent.vue';
import TodoList from './components/Comment.vue'
import NavBar from './view/NavBar.vue';
import NewTodoListWithSound from './components/NewTodoListWithSound.vue';
// ตัวเเปรในการใช้ v-show 
const showFirstPage = ref(true)
const showTimeDisplayPage = ref(false)
const showTodoListPage = ref(false)
const showEnvAndTodoListPage = ref(false)

onMounted(() => {
  document.title = 'Tomato Pomodoro | 🍅'
})

// function ที่ทำให้หน้าเเรกกับหน้าสองนั้นเชื่อมโยงกัน
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
///////////////////////////////////////////////////////////////////////////
// // เวลา
// import TimerComponent from './components/TimerComponent.vue';
// import CustomTime from './components/CustomTime.vue';

// // เวลา
const customized_min = ref() // initial minutes
const customized_sec = ref() // initial seconds


// // เวลา
// const timeSelected = (data) =>{
//     console.log(`Min:${data.min},Sec:${data.sec}`)
//         customized_min.value = data.min
//         customized_sec.value = data.sec
// }

// onMounted(()=>{
//     document.title = "Tomadoro Timer"
// })
///////////////////////////////////////////////////////////////////////////
</script>

<template>
  <div class="w-screen h-screen ">
    <NavBar />
    <RouterView />
      <!-- <TimeDisplay v-show="showTimeDisplayPage" :minutes="customized_min" :seconds="customized_sec" 
      @sendValue="sentTocustomized" @openTask="goTodoList" @goBacktoFirstpage="backFirstpage"/>
      <TodoList v-show="showTodoListPage"/>
      <NewTodoListWithSound v-show="showEnvAndTodoListPage"/> -->
  </div>
</template>
<style scoped>

</style>