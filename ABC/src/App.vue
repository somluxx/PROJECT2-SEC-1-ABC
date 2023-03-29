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
const showFirstPage = ref(true)
const showTimeDisplayPage = ref(false)
const showTodoListPage = ref(false)

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
  customized_min.value = x
  customized_sec.value = 0
}
//dsadsad
///////////////////////////////////////////////////////////////////////////
// // เวลา
// import TimerComponent from './components/TimerComponent.vue';
// import CustomTime from './components/CustomTime.vue';

// // เวลา
const customized_min = ref(0) // initial minutes
const customized_sec = ref(10) // initial seconds


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
      <FirstPage v-show="showFirstPage" @nextPage="goNextPage"/>
      <TimeDisplay  v-show="showTimeDisplayPage" :minutes="customized_min" :seconds="customized_sec" 
      @sendValue="sentTocustomized" @openTask="goTodoList" @goBacktoFirstpage="backFirstpage"/>
      <TodoList v-show="showTodoListPage"/>
  </div>
</template>
<style scoped>

.purple { 
	background-color:rgba(77.00000301003456, 69.00000348687172, 93.00000205636024, 1);
}
.e1_9 { 
	color:rgba(255, 255, 255, 1);
	width:320px;
	height:49.26315689086914px;
	position:absolute;
	left:33px;
	top:13.894744873046875px;
	font-family:Inter;
	text-align:left;
	font-size:32px;
	letter-spacing:0;
}
.e1_10 { 
	color:rgba(255, 255, 255, 1);
	width:149px;
	height:39.157894134521484px;
	position:absolute;
	left:119px;
	top:53.052642822265625px;
	font-family:Inter;
	text-align:left;
	font-size:24px;
	letter-spacing:0;
}
.font { 
	color:rgba(255, 255, 255, 1);
	width:158px;
	height:37.894737243652344px;
	font-family:Inter;
	text-align:center;
	font-size:24px;
	letter-spacing:0;
}
</style>
