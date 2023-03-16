<script setup>
import FirstPage from './components/FirstPage.vue';
import TimeDisplay from './components/TimeDisplay.vue';
import { ref } from 'vue';

const closeFirstPage = ref(true)
const showTimeDisplayPage = ref(false)

const goNextPage = (x) => {
  if(x === true){
    closeFirstPage.value = !closeFirstPage.value
    showTimeDisplayPage.value = !showTimeDisplayPage.value
  }
}

</script>

<template>
  <div class="w-screen h-screen ">
      <FirstPage @nextPage="goNextPage" v-show="closeFirstPage"/>
      <TimeDisplay v-show="showTimeDisplayPage"/>
  </div>
</template>

<style scoped>
</style>