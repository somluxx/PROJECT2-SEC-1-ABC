<script setup>
import FirstPage from './components/FirstPage.vue';
import TimeDisplay from './components/TimeDisplay.vue';
import { ref } from 'vue';

let showPage = ref(false)

const goNextPage = (x) => {
  showPage.value = x

}

</script>

<template>
  <div class="w-screen h-screen ">

    <div :style="[showPage ?  {'display': 'none'} : {'width': '100vw'}]">
      <FirstPage @nextPage="goNextPage"/>
    </div>

    <div :style="[showPage ? {'width': '100vw'} : {'display': 'none'} ]">
      <TimeDisplay />
    </div>
  </div>
</template>

<style scoped>
</style>
