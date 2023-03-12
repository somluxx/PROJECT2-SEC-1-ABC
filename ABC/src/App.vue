<script>
import Timer from './components/Timer.vue';
import TodoList from './components/TodoList.vue'

export default {
  components: {
    Timer,TodoList
  },
  
  // ------------
  
};
</script>


<template>
 


 <div class="flex h-screen">

  <div class="w-1/2 flex items-center justify-center bg-orange-200 ">
    <Timer />
  </div>

  <div class="w-1/2 flex items-center justify-center flex-col bg-red-400">
    <TodoList />
  
</div>

  </div>


</template>



<style>
img {
  max-width: 100%;
  height: auto;
}

p {
    margin-top: -0.25em;
  }
</style>