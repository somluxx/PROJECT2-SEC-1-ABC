<script setup>
import { ref, reactive } from 'vue';
const box = reactive([100])

const showpomodoro = (e) => {
    if(e.target.value === 'pomo'){
        const pomodoro = ref(20)
        box[0] = pomodoro.value
    }
    else if(e.target.value === 'long'){
        const longtime = ref(15)
        box[0] = longtime.value
    }
    else if(e.target.value === 'short'){
        const shortime = ref(5) 
        box[0] = shortime.value
    }
    console.log(box[0])
    console.log(e.target.value)
}
</script>
 
<template>
<div class="w-auto h-auto bg-red-400 p-2">
    <div class="flex-col justify-center">
        <h1 class="text-9xl font-bold text-white flex justify-center">{{ box[0] }}</h1>
        <div class="w-full flex justify-center py-10">
        <button class="bg-white rounded-xl flex">
            <span class="text-red-400 text-4xl font-bold m-6">START</span>
        </button>
        </div>
    </div>
</div>
<div class="w-auto h-auto bg-gray-800 p-10">
    <div class="flex justify-center space-x-7">
        <button class="bg-red-400 rounded-xl w-64 h-24 text-white text-4xl font-semibold" @click="showpomodoro" value="pomo">
            โพโมโดโร่
        </button>
        <button class="bg-green-400 rounded-xl w-64 h-24 text-white text-4xl font-semibold" @click="showpomodoro" value="short">
            เบรคสั้น
        </button>
        <button class="bg-green-600 rounded-xl w-64 h-24 text-white text-4xl font-semibold" @click="showpomodoro" value="long">
            เบรคยาว
        </button>
    </div>
</div>
</template>
 
<style scoped>

</style>