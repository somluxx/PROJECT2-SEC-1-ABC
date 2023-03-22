<!-- หน้าเเรก -->
<script setup>
import { ref, computed, defineProps, defineEmits,  watch, reactive } from "vue";
import alert from "/alert.mp3"
import ThatThongSound from '/ThatThongSound.mp3'

// P 
const audio = new Audio(alert)
const thatThongSound = new Audio(ThatThongSound)
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
  // console.log(pomodoroDefaultTimer.value)
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
        thatThongSound.play() // play an audio
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
  thatThongSound.pause() // pause an audio
};
resetTimer(); // execute resetTimer function

// Best
const tomato = 'images/tomatoman.png'
// const gearimage = 'images/gear.png'
// const box = reactive([25])
const emits = defineEmits(['sendValue','openTask','goBacktoFirstpage'])

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

// const props = defineProps({
//     changetoTimePage: {
//         type:Array
//     }
// })
// const displayChangetoTimePage = ref(props.changetoTimePage)

// const timedisplay = () =>{
//     if(box[0] !== 0){
//     let timestop = setInterval(() => {
//         box[0] = box[0] - 1 
    
//         if(box[0] <= 0){
//         clearInterval(timestop)
//         }
//     },1000)
//     }
//     else{
//         alert('1234')
//     }
// }

// const startTime = () => {
//     timedisplay()
// }
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
 
<template>
<div class="w-screen h-screen">
<div class="w-full h-4/5 bg-red-400 p-2">
    <div class="w-full flex pb-5">
        <div class="w-1/2">
        <!-- <img :src="tomato" class="w-20"/> -->
        <div class="flex justify-start pt-2">
                <button class="w-48 h-12 bg-white rounded-3xl text-4xl tracking-wider " @click="$emit('goBacktoFirstpage',true)">Back</button>
            </div>
        </div>
        <div class="w-1/2">
            <div class="flex justify-end pt-2">
                <button class="w-48 h-12 bg-white rounded-3xl text-4xl tracking-wider ">Setting</button>
            </div>
        </div>
    </div>
    <div class="flex-col justify-center">
        <!-- <h1 class="text-9xl font-bold text-white flex justify-center">{{ box[0] }} : 00</h1> -->
        <div class="flex text-center gap-x-6 text-6xl justify-center mt-10 text-white">
            <p>Minutes</p>
            <span class="countdown font-mono text-6xl">
                <span :style="{ '--value': minutes }"></span>
            </span>
            <p>Seconds</p>
            <span class="countdown font-mono text-6xl">
                <span :style="{ '--value': seconds }"></span>
            </span>
        </div>











        
        <div class="flex justify-end">
            <button class="bg-red-300 rounded-xl w-64 h-24 text-white text-6xl font-bold pr-24" @click="$emit('openTask',true)">Task</button>
        </div>

        <div class="w-full flex justify-center pt-20">
        <button class="bg-white rounded-xl w-64 h-32 text-red-400 text-6xl font-bold tracking-wider" @click="countDownSystem">
            {{ startBtnText ? 'Pause' : 'Start' }} 
        </button>
        </div>
        <div :class="showModal ? showModalStyle : collapseModalStyle" class="w-full flex mt-6 justify-center">
            <div class="alert alert-info shadow-lg w-96 bg-white">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current flex-shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>ไม่มีหรอกเวลาพัก มีแต่เวลาแดนซ์ซ์ซ์</span>
                </div>
            </div>
                <button @click="resetTimer" class="flex border-2 border-white rounded-xl p-3 m-2 justify-center text-center text-white">Restart</button>
        </div>
    </div>
</div>
<div class="w-full h-1/5 bg-gray-800 p-10">
    <div class="flex justify-center space-x-7">
        <button class="bg-red-400 rounded-xl w-64 h-24 text-white text-4xl font-semibold" value="pomo" @click="$emit('sendValue',20)">
            โพโมโดโร่
        </button>
        <button class="bg-green-400 rounded-xl w-64 h-24 text-white text-4xl font-semibold" value="short" @click="$emit('sendValue',5)">
            เบรคสั้น
        </button>
        <button class="bg-green-600 rounded-xl w-64 h-24 text-white text-4xl font-semibold" value="long" @click="$emit('sendValue',15)">
            เบรคยาว
        </button>
    </div>
</div>
</div>
</template>
 
<style scoped>
</style>