
<script setup>
// หน้าเเรก
import FirstPage from './components/FirstPage.vue';
import TimeDisplay from './components/TimeDisplay.vue';

// // เวลา
// import TimerComponent from './components/TimerComponent.vue';
// import CustomTime from './components/CustomTime.vue';
import { ref,onMounted } from 'vue';
import TodoList from './components/TodoList.vue';
// // เวลา
// const customized_min = ref(25) // initial minutes
// const customized_sec = ref(0) // initial seconds

// หน้าเเรก
const closeFirstPage = ref(true)
const showTimeDisplayPage = ref(false)

// หน้าเเรก
const goNextPage = (x) => {
  if(x === true){
    closeFirstPage.value = !closeFirstPage.value
    showTimeDisplayPage.value = !showTimeDisplayPage.value
  }
}

// // เวลา
// const timeSelected = (data) =>{
//     console.log(`Min:${data.min},Sec:${data.sec}`)
//         customized_min.value = data.min
//         customized_sec.value = data.sec
    
// }
// onMounted(()=>{
//     document.title = "Tomadoro Timer"
// })

</script>

<template>
  <div class="w-screen h-screen ">
      <FirstPage @nextPage="goNextPage" v-show="closeFirstPage"/>
      <TimeDisplay v-show="showTimeDisplayPage"/>
      
      
  </div>
</template>

<style scoped>
</style>