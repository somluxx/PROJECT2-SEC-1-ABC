<script setup>
import { ref, computed, defineProps, defineEmits,  watch, reactive } from "vue";
import alert from "/Sounds/alert.mp3"
import { RouterLink } from "vue-router";

const custom_min = ref()
const custom_sec = ref()
const audio = new Audio(alert)
const showModal = ref(false);
const showModalStyle = 'block visible';
const collapseModalStyle = 'hidden';
const props = defineProps({ // define props minutes and seconds for binding props attributes in App.vue
  minutes: {
    type: Number,
    required: true,
    default:0
  },
  seconds: {
    type: Number,
    required:true,
    default:0
  }
});

const startBtnText = ref(false); // make text button show "Start"
// คำนวณเวลาที่ส่งมา
const pomodoroDefaultTimer = ref(props.minutes * 60  + props.seconds); // DefaultPomodoroTimer will refers by props value which is valued by user in App.vue page (Passing props), this will stored timer in 'SECONDS' unit
// เก็บค่าตัวเเปลที่ส่งมาเป็น default 
const defaultPomodoroTime = props.minutes * 60 + props.seconds; // Duplicate define defaultPomodoroTimer for specific purpose (Reset Timer)

// computed คือจัดเก็บค่าที่เปลี่ยนเเปลง 
// คำนวณออกมาเป็น นาที 
const minutes = computed(() => {
  return Math.floor(pomodoroDefaultTimer.value / 60); // Calculate Minutes (Use Integer)
});
// คำนวณออกมาเป็นวินาที 
const seconds = computed(() => {
  return Math.floor(pomodoroDefaultTimer.value % 60); // Calculate Seconds (Use Remainder)
});

let intervalId = null
//Overall Countdown Timer System Function
const countDownSystem = () => {
  startBtnText.value = !startBtnText.value; // set text button to opposite boolean to display specify text
  if (startBtnText.value) { // startBtn === true
      intervalId = setInterval(() => { //start IntervalTime (1 second each process)
      if (pomodoroDefaultTimer.value > 0) {
        pomodoroDefaultTimer.value--; 
        // if time is not reach 0 sec, decreasing the time
      } else {
        clearInterval(intervalId) //if reachs 0, clearInterval (Stop)
        audio.play() // play an audio
        showModal.value = true; // set modal boolean to true, text time's up will dislpay
      }
    }, 1000); // specify interval time in ms
  } 
  
  else {
    clearInterval(intervalId); // else --> clearInterval
  }
};
// ใช้สำหรับในการเปลี่ยนหากมีการส่ง defineProps มาจาก Components อื่นมาใหม่
watch(() => props.minutes, (newValue) => {
  // Use watcher to tracking the minutes changes in props value to update to Parent Component
  pomodoroDefaultTimer.value = newValue * 60 + props.seconds;
});

watch(() => props.seconds, (newValue) => {
  // Use watcher to tracking the changes in props value to update to Parent Component
  pomodoroDefaultTimer.value = props.minutes * 60 + newValue;
});

//P.S Watcher is used to track changes to the target element and update it accordingly with the new value. 

const resetTimer = () => {
  pomodoroDefaultTimer.value = defaultPomodoroTime; //define timer to initial time when timer reachs 00:00
  showModal.value = false; //set showModal to false to hide time's up text when restart the timer
  startBtnText.value = false // make the startbtn text to 'Start' again instead of 'Pause'
  audio.pause() // pause an audio
};

const tomato = 'images/tomatoman.png'
const emits = defineEmits(['sendValue'])

</script>
 
<template>
<div class="w-screen h-screen bg-[#E96479]">
<div class="bg w-full h-4/5 p-2">
    <div class="w-full flex pb-5">
        <div class="w-1/2">
        <div class="flex justify-start pt-2">
                <RouterLink to="/"><button class="w-48 h-12 bg-white rounded-3xl text-4xl tracking-wider">Back</button></RouterLink>
            </div>
        </div>
        <div class="w-1/2">
            <div class="flex justify-end pt-2">
                <button class="w-48 h-12 bg-white rounded-3xl text-4xl tracking-wider">Setting</button>
            </div>
        </div>
    </div>
    <div class="flex-col justify-center">
        <div class="flex text-center gap-x-6 text-6xl justify-center mt-4 text-white">
            <p>Minutes</p>
            <span class="countdown font-mono text-6xl">
                <span class="mt-1" :style="{ '--value': minutes }"></span>
            </span>
            <p>Seconds</p>
            <span class="countdown font-mono text-6xl">
                <span class="mt-1" :style="{ '--value': seconds }"></span>
            </span>
        </div>
        <div class="flex justify-end">
          <RouterLink to="/list">
            <button class="btn btn-xs bg-[#4D455D] hover:bg-[#483b63] text-center rounded-xl w-40 h-20 text-white text-3xl font-bold mr-5 sm:btn-sm md:btn-md lg:btn-lg">Task
          </button>
          </RouterLink>
        </div>

        <div class="custom-time flex gap-x-4 mt-6 w-full justify-center">
            Minutes:<input type="number" min="0" max="99" maxlength="2" placeholder="Min" v-model="custom_min" class="input input-bordered input-warning w-20 max-w-xs"/>
            Sec:<input type="number" min="0" max="59" maxlength="2" placeholder="Sec" v-model="custom_sec" class="input input-bordered input-warning w-20 max-w-xs" />
            <button type="submit" @click="$emit('sendValue',{min:custom_min,sec:custom_sec})"  class="border-2 border-red-300 p-2 w-12 rounded-xl">Set</button>
        </div>

        <div class="w-full flex justify-center pt-10">
        <button class="bg-white rounded-xl w-64 h-32 text-red-400 text-6xl font-bold tracking-wider hover:bg-[#d3d2d6] duration-300" @click="countDownSystem">
            {{ startBtnText ? 'Pause' : 'Start' }} 
          </button>
        </div>
        <div :class="showModal ? showModalStyle : collapseModalStyle" class="flex mt-6 gap-x-3 justify-center">
            <div class="alert alert-info shadow-lg w-96 bg-red-200">
                <div class="text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span class="text-black">Focus Session has Ended. Time to break! :3 </span>
                </div>
            </div>
            <button @click="resetTimer" class="border-2 border-white rounded-xl p-2 m-2 mt-6 justify-center text-center text-white">Restart</button>
          </div>
    </div>
</div>

<div class="w-full h-1/5 bg-gray-800 p-10">
    <div class="flex justify-center space-x-7">
        <button class="f1 btn btn-xs bg-red-400 w-64 h-36 hover:bg-red-500 text-white text-4xl font-semibold sm:btn-sm md:btn-md lg:btn-lg" 
        value="pomo" @click="$emit('sendValue',{min:25,sec:0})">Pomodoro</button>
        <button class="f2 btn btn-xs bg-green-400 w-64 h-24 hover:bg-green-500 text-white text-4xl font-semibold sm:btn-sm md:btn-md lg:btn-lg" 
        value="pomo" @click="$emit('sendValue',{min:5,sec:0})">Short Break</button>
        <button class="f3 btn btn-xs bg-green-600 w-64 h-24 hover:bg-green-700   text-white text-4xl font-semibold sm:btn-sm md:btn-md lg:btn-lg" 
        value="pomo" @click="$emit('sendValue',{min:15,sec:0})">Long Break</button>

    </div>
</div>
</div>
</template>
 
<style scoped>
div{
    color:white;
}

</style>