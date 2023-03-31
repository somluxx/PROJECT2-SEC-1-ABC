//Time component
<!-- เวลา -->
<script setup>
import { ref, computed, defineProps, watch } from "vue";
import alert from "/alert.mp3"
import ThatThongSound from '/ThatThongSound.mp3'
const audio = new Audio(alert)
// const thatThongSound = new Audio(ThatThongSound)
const showModal = ref(false);
const showModalStyle = 'block visible';
const collapseModalStyle = 'hidden';
let intervalId;
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
  console.log(pomodoroDefaultTimer.value)
  return Math.floor(pomodoroDefaultTimer.value / 60); // Calculate Minutes (Use Integer)
});
// คำนวณออกมาเป็นวินาที 
const seconds = computed(() => {
  return Math.floor(pomodoroDefaultTimer.value % 60); // Calculate Seconds (Use Remainder)
});

//Overall Countdown Timer System Function
const countDownSystem = () => {
  startBtnText.value = !startBtnText.value; // set text button to opposite boolean to display specify text
  if (startBtnText.value) { // startBtn === true
    intervalId = setInterval(() => { //start IntervalTime (1 second each process)
      if (pomodoroDefaultTimer.value > 0) {
        pomodoroDefaultTimer.value--; 
        // console.log(pomodoroDefaultTimer.value) 
        // if time is not reach 0 sec, decreasing the time
      } else {
        clearInterval(intervalId); //if reachs 0, clearInterval (Stop)
        audio.play() // play an audio
        showModal.value = true; // set modal boolean to true, text time's up will dislpay
      }
    }, 1000); // specify interval time in ms
  } else {
    clearInterval(intervalId); // else --> clearInterval
  }
};
// console.log(pomodoroDefaultTimer.value)
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
resetTimer(); // execute resetTimer function


</script>

<template>
  <div class="w-full h-full">
    <!-- ใส่เเล้ว -->
  <!-- <div class="whatis-modal mt-7 flex justify-center">
    <label for="my-modal-5" class="btn">Know more !</label>

    <input type="checkbox" id="my-modal-5" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box w-11/12 max-w-5xl">
        <h3 class="font-bold text-lg">WHAT IS POMODORO ?</h3>
        <p class="py-4">The Pomodoro Technique is a time management method that breaks down work into focused intervals, typically 25 minutes each. After each Pomodoro session, a short break of 5 minutes is taken to rest and recharge. After completing a set of four Pomodoros, a longer break of 15-30 minutes is taken. This cycle of working and resting continues until a task is accomplished.</p>
        <div class="modal-action">
          <label for="my-modal-5" class="btn">Let's Get Start !</label>
        </div>
      </div>
    </div>
  </div> -->
    <!-- <div class="flex text-center gap-x-6 text-3xl justify-center mt-10">
      <p>Minutes</p>
      <span class="countdown font-mono text-6xl">
        <span :style="{ '--value': minutes }"></span>
      </span>
      <p>Seconds</p>
      <span class="countdown font-mono text-6xl">
        <span :style="{ '--value': seconds }"></span>
      </span>
    </div> -->

    <button class="btn btn-success text-center justify-center flex ml-40 mt-5" @click="countDownSystem">{{ startBtnText ? 'Pause' : 'Start' }}</button>

    <div :class="showModal ? showModalStyle : collapseModalStyle" class="flex mt-6">
      <div class="alert alert-info shadow-lg w-96">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>ไม่มีหรอกเวลาพัก มีแต่เวลาแดนซ์ซ์ซ์</span>
  </div>
</div>
      <button @click="resetTimer" class="flex border-2 border-red-300 rounded-xl p-3 m-2 justify-center text-center">Restart</button>
    </div>
    <div>
    </div>
  </div>
</template>

<style scoped>

</style>

