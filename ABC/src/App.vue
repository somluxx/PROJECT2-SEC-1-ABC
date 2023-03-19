<script setup>
import { ref,onMounted, reactive } from 'vue';
import CustomeTime from './components/CustomeTime.vue';

///////////////////////////////////////////////////////////////////////////
//หน้าเเรก FirstPage มีการใช้ defineEmits เชื่อมกับ @Click  
import FirstPage from './components/FirstPage.vue';
//หน้าสอง TimeDisplay เป็นคัวโชวเวลา
import TimeDisplay from './components/TimeDisplay.vue';
import TimerComponent from './components/TimerComponent.vue';
import TodoList from './components/TodoList.vue'


// ตัวเเปรในการใช้ v-show 
const closeFirstPage = ref(true)
const showTimeDisplayPage = ref(false)
const openTodoListPage = ref(false)

// function ที่ทำให้หน้าเเรกกับหน้าสองนั้นเชื่อมโยงกัน
const goNextPage = (x) => {
  if(x === true){
    closeFirstPage.value = !closeFirstPage.value
    showTimeDisplayPage.value = !showTimeDisplayPage.value
  }
}

const openTodoList = (x) => {
  if(x === true){
    showTimeDisplayPage.value = !showTimeDisplayPage.value
    openTodoListPage.value = !openTodoListPage.value
  }
}

const sentTocustomized = (x) => {
  customized_min.value = x
}

///////////////////////////////////////////////////////////////////////////
// // เวลา
// import TimerComponent from './components/TimerComponent.vue';
// import CustomTime from './components/CustomTime.vue';

// // เวลา
const customized_min = ref(25) // initial minutes
const customized_sec = ref(0) // initial seconds


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
      <FirstPage @nextPage="goNextPage" v-show="closeFirstPage"/>
      <TimeDisplay  v-show="showTimeDisplayPage" :minutes="customized_min" :seconds="customized_sec" 
      @sendValue="sentTocustomized" @openTask="openTodoList"/>
      <TodoList v-show="openTodoListPage" />
  </div>
</template>
<style scoped>

</style>