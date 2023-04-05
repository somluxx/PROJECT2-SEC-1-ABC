<script setup>
import TimeDisplay from '../components/TimeDisplay.vue'
import {ref} from 'vue'

const sentTocustomized = (x) => {
    customized_min.value = x.min
    customized_sec.value = x.sec
}

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