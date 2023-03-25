<script setup>
import TimerComponent from './components/TimerComponent.vue';
import CustomTime from './components/CustomTime.vue';
import TodoList from './components/TodoList.vue';
import { ref,onMounted } from 'vue';


const customized_min = ref(25) // initial minutes
const customized_sec = ref(0) // initial seconds

const timeSelected = (data) =>{
    console.log(`Min:${data.min},Sec:${data.sec}`)
        customized_min.value = data.min
        customized_sec.value = data.sec
    
}
onMounted(()=>{
    document.title = "Tomadoro Timer"
})

</script>
 
<template>
    <div>
        <p class="text-center mt-4 text-xl font-bold text-red-400">Timer Component</p>
        <div class="flex justify-center">
            <div>
                <TimerComponent :minutes="customized_min" :seconds="customized_sec"></TimerComponent>
                <div class="flex justify-center mt-5">
                   <p class="font-bold text-xl text-red-400 text-center ">Customize Component</p>
                </div>
               <CustomTime @customizedTime="timeSelected" class="mt-5" />
            </div>
        </div>
        <p class="flex justify-center mt-10 line-through">Disclaimer: All alert sounds featured in this Web Application are sourced from Windows 11 Media, which is owned by &copy; Microsoft Corporation.</p>
        <TodoList/>
    </div>

</template>

<style scoped>

</style>