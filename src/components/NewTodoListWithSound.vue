<script setup>
import { ref, onMounted, computed, onBeforeMount } from 'vue'
import HeroiconsSolidPlus from './icons/HeroiconsSolidPlus.vue'
import HeroiconsSolidMinus from './icons/HeroiconsSolidMinus.vue'
const notCompleteTasks = ref([]);
const completedTasks = ref([]);
const newTask = ref("");
// const playFalse = 'bg-green-500 text-black hover:bg-green-600 duration-200' 
// const playTrue = 'bg-red-500 text-white hover:bg-red-600 duration-200'

const fetchTasks = async () => {
  const notCompleteRes = await fetch("http://localhost:3000/notCompleteTasks");
  const completedRes = await fetch("http://localhost:3000/completedTasks");


  if (notCompleteRes.ok && completedRes.ok) {
    const notCompleteData = await notCompleteRes.json();
    notCompleteTasks.value = notCompleteData
    
    const completedData = await completedRes.json();
    completedTasks.value = completedData
  }
};
onBeforeMount(fetchTasks);

const addTask = async () => {
  if (newTask.value.trim() !== "") {
    const task = { task: newTask.value.trim(), checked: false };
    console.log(task)
    const res = await fetch("http://localhost:3000/notCompleteTasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    if (res.ok) {
      const data = await res.json();
      notCompleteTasks.value.push(data);
      newTask.value = "";
    }
  }
};

const toggleTask = async (task, section) => {
  if (section === "Not Completed" && task.checked) { // ส่วนของ Section Not Complated
    notCompleteTasks.value.splice(notCompleteTasks.value.indexOf(task), 1); // removing an incomplete task from an notCompleteTasks array that is tracking a list of incomplete tasks.
    const completedTask = { ...task, checked: false }; // รวบรวม Task ทั้งหมดที่ checked เป็น false ใส่เข้าไปในตัวแปร completedTask
    // console.log(task)
    completedTasks.value.push(completedTask); // Add Task จากตัวแปร completedTask ข้างบน เข้าไปใน Array completeTasks
    
    await fetch(`http://localhost:3000/notCompleteTasks/${task.id}`, {
      method: "DELETE"
    }); // Method Delete ลบจาก Not completed เพื่อเตรียมย้ายไปยัง Completed เมื่อกด checkbox
    await updateTask(task, false);
    
  } else if (section === "Completed" && task.checked) {  // ส่วนของ Section Complated
    completedTasks.value.splice(completedTasks.value.indexOf(task), 1); // ลบตัว Task ในส่วนของ Completed ออก
    
    await fetch(`http://localhost:3000/completedTasks/${task.id}`, {
      method: "DELETE" // ลบจาก Completed ออกจาก JSON File ถาวร เมื่อกด checkbox
    });
  }
};

const updateTask = async (task, checked) => {
  if (checked === false) {
    await fetch("http://localhost:3000/completedTasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(task)
    });
  }
};

const sounds = ref([
      { name: 'Bird', ref: 'song1', src: '/Sounds/Bird.mp3', playing: false, volume: 50,audio: new Audio('/Sounds/Bird.mp3')},
      { name: 'Forest', ref: 'song2', src: '/Sounds/Forest.mp3', playing: false, volume: 50,audio: new Audio('/Sounds/Forest.mp3')  },
      { name: 'Mall', ref: 'song3', src: '/Sounds/Mall.mp3', playing: false, volume: 50, audio: new Audio('/Sounds/Mall.mp3') },
      { name: 'Piano', ref: 'song4', src: '/Sounds/Piano.mp3', playing: false, volume: 50, audio: new Audio('/Sounds/Piano.mp3') },
      { name: 'Rain', ref: 'song5', src: '/Sounds/Rain.mp3', playing: false, volume: 50, audio: new Audio('/Sounds/Rain.mp3') },

      { name: 'Relax', ref: 'song6', src: '/Sounds/Relax.mp3', playing: false, volume: 50, audio: new Audio('/Sounds/Relax.mp3') },
      { name: 'Sea', ref: 'song7', src: '/Sounds/Sea.mp3', playing: false, volume: 50, audio: new Audio('/Sounds/Sea.mp3') },
      { name: 'Traffic', ref: 'song8', src: '/Sounds/Traffic.mp3', playing: false, volume: 50, audio: new Audio('/Sounds/Traffic.mp3') },
      { name: 'Water', ref: 'song9', src: '/Sounds/Traffic.mp3', playing: false, volume: 50, audio: new Audio('/Sounds/Water.mp3') }
    ]);

    const playSound = (sound) => {
          sound.playing = !sound.playing
         if(sound.playing){
            sound.audio.play()
         }else{
         sound.audio.pause()
         }
    };

    const decreaseVolume = (sound) => {
     if(sound.volume > 0){
      sound.volume-=10
      sound.audio.volume = sound.volume / 100
     }
    };

    const increaseVolume = (sound) => {
      if (sound.volume < 100) {
        sound.volume += 10;
        sound.audio.volume = sound.volume / 100 ;
      }
    };

</script>

<template>
<div class="flex flex-col lg:flex-row h-screen">
  <div class="lg:w-1/2 bg-black-100">
    <div class="w-full lg:w-1/2 h-screen flex items-center flex-col justify-center lg:ml-40">
      <h1 class="text-3xl font-bold mb-4">MY TODOLIST</h1>
      <div class="mb-4">
        <label for="task" class="block font-bold mb-2">Add Task:</label>
        <input type="text" id="task" class="border rounded-lg px-3 py-2 w-full" v-model="newTask">
      </div>
      <div class="mb-4">
        <button class="bg-black hover:bg-red-700 duration-200 text-white font-bold py-2 px-4 rounded" @click="addTask" @keydown.enter="addTask">Add</button>
      </div>
      <div>
        <h2 class="text-xl font-bold mb-2">Not Completed:</h2>
        <ul>
          <li v-for="task in notCompleteTasks" :key="task.id" class="flex items-center">
            <input type="checkbox" v-model="task.checked" class="mr-2 mt-1" @change="toggleTask(task, 'Not Completed')">
            <span :class="{ 'line-through': task.checked }">{{ task.task }}</span>
          </li>
        </ul>
      </div>
      <div>
        <h2 class="text-xl font-bold mb-2">Completed:</h2>
        <ul>
          <li v-for="task in completedTasks" :key="task.id" class="flex items-center">
            <input type="checkbox" v-model="task.checked" class="mr-2 mt-1" @change="toggleTask(task, 'Completed')">
            <span :class="{ 'line-through': task.checked }">{{ task.task }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="lg:w-1/2 bg-black-100 flex flex-row justify-center items-center ">
    <div class="h-[60%] w-[70%] lg:w-full grid grid-cols-3 grid-rows-3 gap-2 mr-10">
      <div v-for="sound in sounds" :key="sound.name" class="flex flex-col items-center justify-center rounded-lg shadow-md bg-gray-800">
        <audio :ref="sound.ref" :src="sound.src"></audio>
        <p class="text-lg text-white font-bold">{{ sound.name }}</p>
        <div class="flex items-center justify-center">
          <button class="focus:outline-none text-gray-300 hover:text-red-300" @click="decreaseVolume(sound)">
            <button class="border-2 border-red-200 rounded-xl p-0.5"><HeroiconsSolidMinus/></button> 
          </button>
          <p class="text-lg text-white mx-4">{{ sound.volume }}%</p>
          <button class="focus:outline-none text-gray-300 hover:text-red-300" @click="increaseVolume(sound)">
           <button class="border-2 border-red-200 rounded-xl p-0.5"><HeroiconsSolidPlus/></button> 
          </button>
        </div>
        <button class="bg-red-500 text-white font-bold text-lg p-2 mt-4 rounded-lg shadow-md focus:outline-none hover:bg-red-700" @click="playSound(sound)">
          {{ sound.playing ? 'Stop' : 'Play' }}
        </button>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.eachSoundElementDiv {
  margin-top: 20px;
}

.soundName {
  font-size: 16px;
}

.icon {
  width: 20px;
}

.controller {
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 5px;
  margin-left: 4px;
}

.border-2 {
  border-width: 2px;
}

.rounded-md {
  border-radius: 0.375rem;
}

.w-10 {
  width: 2.5rem;
}

.w-14 {
  width: 3.5rem;
}


@media screen and (max-width: 600px) {
  .eachSoundElementDiv > div {
    margin: 5px;
  }
  
  .eachSoundElementDiv p {
    font-size: 16px;
  }
  
  .eachSoundElementDiv audio {
    max-width: 200px;
  }
  
  .eachSoundElementDiv button {
    margin-top: 10px;
    margin-left: 8px;
  }
}

</style>