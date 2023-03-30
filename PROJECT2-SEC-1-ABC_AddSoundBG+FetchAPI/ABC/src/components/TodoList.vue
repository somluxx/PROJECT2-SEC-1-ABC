<script setup>
import { ref, computed } from 'vue'
import SystemUiconsVolumeHigh from "./SystemUiconsVolumeHigh.vue";
import SystemUiconsVolumeDisabled from "./SystemUiconsVolumeDisabled.vue";


const tasks = ref([])
const showAddTaskPopup = ref(false)
const showAllTasksPopup = ref(false)
const newTaskName = ref('')
// const showAlertComment = ref(false)

// const countTask = computed(() => {
//   return tasks.value.length
// })

// const addTask = () => {
//   if (!newTaskName.value || newTaskName.value.trim() === '') {
//     return
//   } else {
//     tasks.value.push(newTaskName.value.trim())
//     showAddTaskPopup.value = false
//     newTaskName.value = ''
//   }
// }

// const toggleShowAllTasksPopup = () => {
//   showAllTasksPopup.value = !showAllTasksPopup.value
// }

// const toggleCompleted = (index) => {
//   tasks.value[index].completed = !tasks.value[index].completed
// }


// const comments = ref([])
// const comment = ref('')
// const submitComment = () => {
//   if (!comment.value || comment.value.trim() === '') {
//     return
//   } else {
//     comments.value.push(comment.value.trim())
//     comment.value = ''
//   }
// }




const comments = ref([])
    const comment = ref('')

    const fetchComment = async () => {
      try {
        const response = await fetch('http://localhost:5000/storeComment')
        const data = await response.json()
        comments.value = data
      } catch (error) {
        console.error('Error fetching comments:', error)
      }
    }

    const submitComment = async () => {
      if (!comment.value || comment.value.trim() === '') {
        return
      } else {
        try {
          const response = await fetch('http://localhost:5000/storeComment', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              comment: comment.value.trim(),
              completed: false
            })
          })
          const data = await response.json()
          comments.value.push(data)
          comment.value = ''
        } catch (error) {
          console.error('Error submitting comment:', error)
        }
      }
    }




   
//     const value = ref(50);

// const thumb1Position = ref((value.value / 100) * 68 - 2);
// const thumb2Position = ref((value.value / 100) * 68 + 66);
// const fillWidth = ref(`${value.value}%`);

// watch(value, (val) => {
//   // ปรับเสียงตามทิศทาง
//   const audio = new Audio('path/to/sound.mp3');
//   if (val === 0) {
//     audio.volume = 0.2;
//   } else if (val === 100) {
//     audio.volume = 0.8;
//   } else {
//     audio.volume = 0.5;
//   }
//   audio.play();

//   thumb1Position.value = (val / 100) * 68 - 2;
//   thumb2Position.value = (val / 100) * 68 + 66;
//   fillWidth.value = `${val}%`;
// });

const SoundBird = ref("Bird.mp3");
const SoundForest = ref("Forest.mp3");
const SoundMall = ref("Mall.mp3");
const SoundPiano = ref("Piano.mp3");
const SoundRain = ref("Rain.mp3");
const SoundRelax = ref("Relax.mp3");
const SoundSea = ref("Sea.mp3");
const SoundTraffic = ref("Traffic.mp3");
const SoundWater = ref("Water.mp3");

const playing1 = ref(true);
const song1 = ref(null);
const vp1 = ref(0);
const playSong1 = () => {
  if (playing1.value) song1.value.play();
  else song1.value.pause();
  playing1.value = !playing1.value;
}
const increaseVolume1 = () => {
  if (song1.value.volume < 1) {
    song1.value.volume += 0.1;
    vp1.value = Math.round(song1.value.volume * 100);
  }
}
const decreaseVolume1 = () => {
  if (song1.value.volume > 0) {
    song1.value.volume -= 0.1;
    vp1.value = Math.round(song1.value.volume * 100);
  }
}


const playing2 = ref(true);
const song2 = ref(null);
const vp2 = ref(0);
const playSong2 = () => {
  if (playing2.value) song2.value.play();
  else song2.value.pause();
  playing2.value = !playing2.value;
}
const increaseVolume2 = () => {
  if (song2.value.volume < 1) {
    song2.value.volume += 0.1;
    vp2.value = Math.round(song2.value.volume * 100);
  }
}
const decreaseVolume2 = () => {
  if (song2.value.volume > 0) {
    song2.value.volume -= 0.1;
    vp2.value = Math.round(song2.value.volume * 100);
  }
}

const playing3 = ref(true);
const song3 = ref(null);
const vp3 = ref(0);
const playSong3 = () => {
  if (playing3.value) song3.value.play();
  else song3.value.pause();
  playing3.value = !playing3.value;
}
const increaseVolume3 = () => {
  if (song3.value.volume < 1) {
    song3.value.volume += 0.1;
    vp3.value = Math.round(song3.value.volume * 100);
  }
}
const decreaseVolume3 = () => {
  if (song3.value.volume > 0) {
    song3.value.volume -= 0.1;
    vp3.value = Math.round(song3.value.volume * 100);
  }
}

const playing4 = ref(true);
const song4 = ref(null);
const vp4 = ref(0);
const playSong4 = () => {
  if (playing4.value) song4.value.play();
  else song4.value.pause();
  playing4.value = !playing4.value;
}
const increaseVolume4 = () => {
  if (song4.value.volume < 1) {
    song4.value.volume += 0.1;
    vp4.value = Math.round(song4.value.volume * 100);
  }
}
const decreaseVolume4 = () => {
  if (song4.value.volume > 0) {
    song4.value.volume -= 0.1;
    vp4.value = Math.round(song4.value.volume * 100);
  }
}

const playing5 = ref(true);
const song5 = ref(null);
const vp5 = ref(0);
const playSong5 = () => {
  if (playing5.value) song5.value.play();
  else song5.value.pause();
  playing5.value = !playing5.value;
}
const increaseVolume5 = () => {
  if (song5.value.volume < 1) {
    song5.value.volume += 0.1;
    vp5.value = Math.round(song5.value.volume * 100);
  }
}
const decreaseVolume5 = () => {
  if (song5.value.volume > 0) {
    song5.value.volume -= 0.1;
    vp5.value = Math.round(song5.value.volume * 100);
  }
}

const playing6 = ref(true);
const song6 = ref(null);
const vp6 = ref(0);
const playSong6 = () => {
  if (playing6.value) song6.value.play();
  else song6.value.pause();
  playing6.value = !playing6.value;
}
const increaseVolume6 = () => {
  if (song6.value.volume < 1) {
    song6.value.volume += 0.1;
    vp6.value = Math.round(song6.value.volume * 100);
  }
}
const decreaseVolume6 = () => {
  if (song6.value.volume > 0) {
    song6.value.volume -= 0.1;
    vp6.value = Math.round(song6.value.volume * 100);
  }
}

const playing7 = ref(true);
const song7 = ref(null);
const vp7 = ref(0);
const playSong7 = () => {
  if (playing7.value) song7.value.play();
  else song7.value.pause();
  playing7.value = !playing7.value;
}
const increaseVolume7 = () => {
  if (song7.value.volume < 1) {
    song7.value.volume += 0.1;
    vp7.value = Math.round(song7.value.volume * 100);
  }
}
const decreaseVolume7 = () => {
  if (song7.value.volume > 0) {
    song7.value.volume -= 0.1;
    vp7.value = Math.round(song7.value.volume * 100);
  }
}


const playing8 = ref(true);
const song8 = ref(null);
const vp8 = ref(0);
const playSong8 = () => {
  if (playing8.value) song8.value.play();
  else song8.value.pause();
  playing8.value = !playing8.value;
}
const increaseVolume8 = () => {
  if (song8.value.volume < 1) {
    song8.value.volume += 0.1;
    vp8.value = Math.round(song8.value.volume * 100);
  }
}
const decreaseVolume8 = () => {
  if (song8.value.volume > 0) {
    song8.value.volume -= 0.1;
    vp8.value = Math.round(song8.value.volume * 100);
  }
}

const playing9 = ref(true);
const song9 = ref(null);
const vp9 = ref(0);
const playSong9 = () => {
  if (playing9.value) song9.value.play();
  else song9.value.pause();
  playing9.value = !playing9.value;
}
const increaseVolume9 = () => {
  if (song9.value.volume < 1) {
    song9.value.volume += 0.1;
    vp9.value = Math.round(song9.value.volume * 100);
  }
}
const decreaseVolume9 = () => {
  if (song9.value.volume > 0) {
    song9.value.volume -= 0.1;
    vp9.value = Math.round(song9.value.volume * 100);
  }
}







</script>

<template>
  <div>
    <div class="h1/2 w-full p-5 bg-gray-100">g</div>
   <div class="h-1/2 bg-red-500 flex flex-row items-center justify-center">
    <div class="w-1/3 h-screen flex flex-col items-center justify-center">
      <div class="flex flex-col items-center">
        
    <h1 class="text-6xl text-red-100 font-bold mb-4">Comment ABC</h1>
    <div>
  </div>
  
    <div class="w-full flex items-center">
      <div class="w-1/3">
      <input
        class="border-2 border-gray-300 py-2 px-150 rounded-lg mb-4 mr-4"
        type="text"
        placeholder="comment this"
        v-model="comment"
      />
    </div>
    <!-- <div v-if="showAlertComment" class="fixed top-0 left-0 w-full h-full flex items-center justify-center">
    <div class="bg-white rounded-lg p-8">
      <h2 class="text-lg font-bold mb-4">Hey!</h2>
      <p class="text-gray-700">You need to enter a comment before submitting.</p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" @click="hidePopup">OK</button>
    </div>
  </div> -->
</div>
      <div class="w-1/3">
      <button
        class="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        @click="submitComment"
      >
        Submit
      </button></div>
    
    <div class="w-1/3"> 
      <h2 class="text-lg font-bold mb-2">Comments</h2>
    <div v-if="comments.length" class="w-full">     
      <ul class="pl-4 w-auto border-2 border-gray-300 text-white py-2 px-4 rounded-lg mb-4 mr-4">
        <li v-for="(comment, index) in comments" :key="index">{{ comment }}</li>
      </ul>
    </div></div>
  </div>  
    </div>


 
    


    <div class="w-1/2 h-screen items-center justify-center">
      
      <div class="text-center">
  <audio ref="song1" :src="SoundBird"></audio>
  <p class="text-2xl text-white text-center">Bird</p>
  <button class="text-center pt-1" @click="playSong1">
    <p v-if="playing1 == true"><SystemUiconsVolumeDisabled /></p>
    <p v-else><SystemUiconsVolumeHigh /></p>
  </button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 mr-3 hover:bg-red-300" @click="decreaseVolume1">-</button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 mr-3">{{ vp1 }}%</button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 ml-3 hover:bg-red-300" @click="increaseVolume1">+</button>
</div>

<div class="text-center">
  <audio ref="song2" :src="SoundForest"></audio>
  <p class="text-2xl text-white text-center">Forest</p>
  <button class="text-center pt-1" @click="playSong2">
    <p v-if="playing2 == true"><SystemUiconsVolumeDisabled /></p>
    <p v-else><SystemUiconsVolumeHigh /></p>
  </button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 mr-3 hover:bg-red-300" @click="decreaseVolume2">-</button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 mr-3">{{ vp2 }}%</button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 ml-3 hover:bg-red-300" @click="increaseVolume2">+</button>
</div>

<div class="text-center">
  <audio ref="song3" :src="SoundMall"></audio>
  <p class="text-2xl text-white text-center">Mall</p>
  <button class="text-center pt-1" @click="playSong3">
    <p v-if="playing3 == true"><SystemUiconsVolumeDisabled /></p>
    <p v-else><SystemUiconsVolumeHigh /></p>
  </button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 mr-3 hover:bg-red-300" @click="decreaseVolume3">-</button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 mr-3">{{ vp3 }}%</button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 ml-3 hover:bg-red-300" @click="increaseVolume3">+</button>
</div>

<div class="text-center">
  <audio ref="song4" :src="SoundPiano"></audio>
  <p class="text-2xl text-white text-center">Piano</p>
  <button class="text-center pt-1" @click="playSong4">
    <p v-if="playing4 == true"><SystemUiconsVolumeDisabled /></p>
    <p v-else><SystemUiconsVolumeHigh /></p>
  </button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 mr-3 hover:bg-red-300" @click="decreaseVolume4">-</button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 mr-3">{{ vp4 }}%</button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 ml-3 hover:bg-red-300" @click="increaseVolume4">+</button>
</div>


<div class="text-center">
  <audio ref="song5" :src="SoundRain"></audio>
  <p class="text-2xl text-white text-center">Rain</p>
  <button class="text-center pt-1" @click="playSong5">
    <p v-if="playing5 == true"><SystemUiconsVolumeDisabled /></p>
    <p v-else><SystemUiconsVolumeHigh /></p>
  </button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 mr-3 hover:bg-red-300" @click="decreaseVolume5">-</button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 mr-3">{{ vp5 }}%</button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 ml-3 hover:bg-red-300" @click="increaseVolume5">+</button>
</div>

<div class="text-center">
  <audio ref="song6" :src="SoundRelax"></audio>
  <p class="text-2xl text-white text-center">Relax</p>
  <button class="text-center pt-1" @click="playSong6">
    <p v-if="playing6 == true"><SystemUiconsVolumeDisabled /></p>
    <p v-else><SystemUiconsVolumeHigh /></p>
  </button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 mr-3 hover:bg-red-300" @click="decreaseVolume6">-</button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 mr-3">{{ vp6 }}%</button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 ml-3 hover:bg-red-300" @click="increaseVolume6">+</button>
</div>

<div class="text-center">
  <audio ref="song7" :src="SoundSea"></audio>
  <p class="text-2xl text-white text-center">Sea</p>
  <button class="text-center pt-1" @click="playSong7">
    <p v-if="playing7 == true"><SystemUiconsVolumeDisabled /></p>
    <p v-else><SystemUiconsVolumeHigh /></p>
  </button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 mr-3 hover:bg-red-300" @click="decreaseVolume7">-</button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 mr-3">{{ vp7 }}%</button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 ml-3 hover:bg-red-300" @click="increaseVolume7">+</button>
</div>

<div class="text-center">
  <audio ref="song8" :src="SoundTraffic"></audio>
  <p class="text-2xl text-white text-center">Traffic</p>
  <button class="text-center pt-1" @click="playSong8">
    <p v-if="playing8 == true"><SystemUiconsVolumeDisabled /></p>
    <p v-else><SystemUiconsVolumeHigh /></p>
  </button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 mr-3 hover:bg-red-300" @click="decreaseVolume8">-</button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 mr-3">{{ vp8 }}%</button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 ml-3 hover:bg-red-300" @click="increaseVolume8">+</button>
</div>

<div class="text-center">
  <audio ref="song9" :src="SoundWater"></audio>
  <p class="text-2xl text-white text-center">Water</p>
  <button class="text-center pt-1" @click="playSong9">
    <p v-if="playing9 == true"><SystemUiconsVolumeDisabled /></p>
    <p v-else><SystemUiconsVolumeHigh /></p>
  </button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 mr-3 hover:bg-red-300" @click="decreaseVolume9">-</button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 mr-3">{{ vp9 }}%</button>
  <button class="bg-gray-500 text-white text-center pl-5 pr-5 ml-3 hover:bg-red-300" @click="increaseVolume9">+</button>
</div>
      
   </div> 
  </div></div>
</template>

<style scoped>

</style>
