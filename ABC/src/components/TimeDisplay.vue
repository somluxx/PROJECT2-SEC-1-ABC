<!-- หน้าเเรก -->
<script setup>
import { ref, reactive } from "vue";
// // เวลา
import TimerComponent from "../components/TimerComponent.vue";
import CustomTime from "../components/CustomTime.vue";
import TodoList from "../components/TodoList.vue";
// // เวลา
const customized_min = ref(25); // initial minutes
const customized_sec = ref(0); // initial seconds

// // เวลา
const timeSelected = (data) => {
  console.log(`Min:${data.min},Sec:${data.sec}`);
  customized_min.value = data.min;
  customized_sec.value = data.sec;
};

// const timeSelected = (time) => {
//   customized_min.value = time;
// }
defineExpose({ customized_min });
// onMounted(()=>{
//     document.title = "Tomadoro Timer"
// })

const tomato = "images/tomatoman.png";
const gearimage = "images/gear.png";
const box = reactive([25]);

// const showpomodoro = (e) => {
//     if(e.target.value === 'pomo'){
//         const pomodoro = ref(20)
//         box[0] = pomodoro.value
//     }
//     else if(e.target.value === 'long'){
//         const longtime = ref(15)
//         box[0] = longtime.value
//     }
//     else if(e.target.value === 'short'){
//         const shortime = ref(5)
//         box[0] = shortime.value
//     }
//     console.log(box[0])
//     console.log(e.target.value)
// }

const props = defineProps({
  changetoTimePage: {
    type: Array,
  },
});
const displayChangetoTimePage = ref(props.changetoTiamePage);

const timedisplay = () => {
  if (box[0] !== 0) {
    let timestop = setInterval(() => {
      box[0] = box[0] - 1;

      if (box[0] <= 0) {
        clearInterval(timestop);
      }
    }, 1000);
  } else {
    alert("1234");
  }
};

const startTime = () => {
  timedisplay();
};

// let datetest = new Date(2003, 4 , 27 , 0 , box[0], 0, 0)
// let datedefault = new Date(2003, 4 , 27 , 0 , 0, 0, 0)
// console.log(datetest.getTime())
// console.log(datedefault.getTime())
// let x = datetest.getTime() - datedefault.getTime()
// let y = datetest.getTime() - 1000 * 60
// console.log(y)
// console.log(x)
// let twetyfivemin = 1000 * 60 * 25
// console.log(twetyfivemin)



</script>

<template v-if="showTodoList">
<TodoList />
  <div class="w-screen h-screen">
    <div class="w-full h-4/5 bg-red-400 p-2">
      <div class="w-full flex pb-5">
        <div class="w-1/2">
          <img :src="tomato" class="w-20" />
        </div>
        <div class="w-1/2">
          <div class="flex justify-end pt-2">
            <button
              class="w-48 h-12 bg-white rounded-3xl text-4xl tracking-wider"
            >
              Setting
            </button>
          </div>
        </div>
      </div>
      <div class="flex-col justify-center">
        <!-- <h1 class="text-9xl font-bold text-white flex justify-center">{{ box[0] }} : 00</h1>
        <div class="flex justify-end">
            <button class="bg-red-300 rounded-xl w-64 h-24 text-white text-6xl font-bold pr-24">Task</button>
        </div>

        <div class="w-full flex justify-center pt-20">
        <button class="bg-white rounded-xl w-64 h-32 text-red-400 text-6xl font-bold tracking-wider" @click="startTime"> 
            START
        </button>
        </div> -->

        <div>
    <p class="text-center mt-4 text-xl font-bold text-white">Timer Component</p>
    <div class="flex justify-center">
      <div>
        <TimerComponent :minutes="customized_min" :seconds="customized_sec"></TimerComponent>
        <div class="flex justify-center mt-5">
          <p class="font-bold text-xl text-white text-center ">Customize Component</p>
        </div>
        <CustomTime @customizedTime="timeSelected" class="mt-5" />
      </div>
      
    </div>
    <div class="flex justify-end">
           <button class="bg-red-300 rounded-xl w-64 h-24 text-white text-6xl font-bold pr-24">Task</button>
       </div>

    <p class="flex justify-center mt-10">Disclaimer: All alert sounds featured in this Web Application are sourced from Windows 11 Media, which is owned by &copy; Microsoft Corporation.</p>
  </div>

  
      </div>
    </div>
    
       
       
      

      
    <div class="w-full h-1/5 bg-gray-800 p-10">
  <div class="flex justify-center space-x-7">
    <button class="bg-red-400 rounded-xl w-64 h-24 text-white text-4xl font-semibold" @click="customized_min = 25" value="">
      Pomodoro
    </button>
    <button class="bg-green-400 rounded-xl w-64 h-24 text-white text-4xl font-semibold" @click="customized_min = 10" value="">
      Short-break
    </button>
    <button class="bg-green-600 rounded-xl w-64 h-24 text-white text-4xl font-semibold" @click="customized_min = 5" value="">
      Long-break
    </button>
  </div>
</div>
  </div>
</template>

<style scoped></style>
