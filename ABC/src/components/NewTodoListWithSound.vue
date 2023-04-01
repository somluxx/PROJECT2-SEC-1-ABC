// New Todolist With Sound
<script setup>
import { ref, onMounted, computed, onBeforeMount } from 'vue'
import HeroiconsSolidPlus from './HeroiconsSolidPlus.vue'
import HeroiconsSolidMinus from './HeroiconsSolidMinus.vue'
const notCompleteTasks = ref([]);
const completedTasks = ref([]);
const newTask = ref("");
const playFalse = 'bg-green-500 text-black hover:bg-green-600 duration-200' 
const playTrue = 'bg-red-500 text-white hover:bg-red-600 duration-200'

const fetchTasks = async () => {
  const notCompleteRes = await fetch("http://localhost:3000/notCompleteTasks");
  const completedRes = await fetch("http://localhost:3000/completedTasks");

  if (notCompleteRes.ok && completedRes.ok) {
    const notCompleteData = await notCompleteRes.json();
    notCompleteTasks.value = notCompleteData.filter(task => !task.checked);

    const completedData = await completedRes.json();
    completedTasks.value = completedData.filter(task => !task.checked);
  }
};
onBeforeMount(fetchTasks);

const addTask = async () => {
  if (newTask.value.trim() !== "") {
    const task = { task: newTask.value.trim(), checked: false };
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

const updateTask = async (task, checked) => {
  const endpoint = checked ? "completedTasks" : "notCompleteTasks";
  const res = await fetch(`http://localhost:3000/${endpoint}/${task.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...task, checked }),
  });
  if (res.ok && checked) {
    const completedTask = { ...task, checked };
    const completedRes = await fetch("http://localhost:3000/completedTasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(completedTask),
    });
  }
};

const toggleTask = async (task, section) => {
  if (section === "Not Completed" && task.checked) {
    notCompleteTasks.value.splice(notCompleteTasks.value.indexOf(task), 1); // removing an incomplete task from an notCompleteTasks array that is tracking a list of incomplete tasks.

    const completedTask = { ...task, checked: false };
    completedTasks.value.push(completedTask);

    const res = await fetch("http://localhost:3000/completedTasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(completedTask),
    });
    const deleteRes = await fetch(`http://localhost:3000/notCompleteTasks/${task.id}`, {
      method: "DELETE",
    });
    await updateTask(task, false);
  } else if (section === "Completed" && task.checked) {
    completedTasks.value.splice(completedTasks.value.indexOf(task), 1);

    const deleteRes = await fetch(`http://localhost:3000/completedTasks/${task.id}`, {
      method: "DELETE",
    });
    
  } else if (section === "Completed" && !task.checked) {
    completedTasks.value.splice(completedTasks.value.indexOf(task), 1);

    const notCompleteTask = { ...task, checked: false };
    notCompleteTasks.value.push(notCompleteTask);

    const res = await fetch("http://localhost:3000/notCompleteTasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(notCompleteTask),
    });
    await updateTask(task, false);
  }
};

const sounds = ref([
      { name: 'Bird', ref: 'song1', src: '/Bird.mp3', playing: false, volume: 50,audio: new Audio('/Bird.mp3')},
      { name: 'Forest', ref: 'song2', src: '/Forest.mp3', playing: false, volume: 50,audio: new Audio('/Forest.mp3')  },
      { name: 'Mall', ref: 'song3', src: '/Mall.mp3', playing: false, volume: 50, audio: new Audio('/Mall.mp3') },
      { name: 'Piano', ref: 'song4', src: '/Piano.mp3', playing: false, volume: 50, audio: new Audio('/Piano.mp3') },
      { name: 'Rain', ref: 'song5', src: '/Rain.mp3', playing: false, volume: 50, audio: new Audio('/Rain.mp3') },

      { name: 'Relax', ref: 'song6', src: '/Relax.mp3', playing: false, volume: 50, audio: new Audio('/Relax.mp3') },
      { name: 'Sea', ref: 'song7', src: '/Sea.mp3', playing: false, volume: 50, audio: new Audio('/Sea.mp3') },
      { name: 'Traffic', ref: 'song8', src: '/Traffic.mp3', playing: false, volume: 50, audio: new Audio('/Traffic.mp3') },
      { name: 'Water', ref: 'song9', src: '/Traffic.mp3', playing: false, volume: 50, audio: new Audio('/Water.mp3') }
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
        <button class="bg-black hover:bg-red-700 duration-200 text-white font-bold py-2 px-4 rounded" @click="addTask">Add</button>
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
        <button class="bg-red-500 text-white font-bold text-lg p-2 mt-4 rounded-lg shadow-md focus:outline-none hover:bg-red-700" :class="sound.playing? playTrue:playFalse" @click="playSound(sound)">
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