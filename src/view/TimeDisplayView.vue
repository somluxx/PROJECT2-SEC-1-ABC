<script setup>
import TimeDisplay from '../components/TimeDisplay.vue'
import {ref} from 'vue'

const sentTocustomized = (x) => {
  // console.log(x)
    customized_min.value = x.min
    customized_sec.value = x.sec
}
///////////////////////////////////////////////////////////////////////////
// // เวลา
// import TimerComponent from './components/TimerComponent.vue';
// import CustomTime from './components/CustomTime.vue';
// // เวลา
const customized_min = ref() // initial minutes
const customized_sec = ref()
</script>
 
<template>
<div>
    <TimeDisplay :minutes="customized_min" :seconds="customized_sec" @sendValue="sentTocustomized"/>
</div>
</template>
 
<style scoped>

</style>