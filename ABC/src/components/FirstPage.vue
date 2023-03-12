<script setup>
    const tomato = 'images/tomatoman.png'
</script>
 
<template>
<div class="w-screen h-screen bg-red-400">
    <div class="flex flex-col ">
        <div class="flex w-full justify-center">  
            <h1 class="pt-14 pb-5 text-7xl font-normal text-white font-sans tracking-widest">Pomodoro</h1> 
        </div>
        <div class="flex w-full justify-center">  
            <h1 class="text-7xl font-normal text-white font-sans tracking-widest">Timer wow</h1>
        </div>
        <div class="flex w-full justify-center">  
            <img :src="tomato" class="w-96 pt-5"/>
        </div>
        <div class="w-full "> 
            <div class="flex justify-center">
            <button class="bg-red-600 rounded-xl w-72 h-32 text-white text-5xl font-semibold" >ENTER</button>
            </div>
            <div class="flex justify-end">
            <h1 class="text-5xl font-normal text-white font-sans tracking-widest p-5">by ABC group</h1> 
            </div>
        </div>
     
    </div>

</div>
</template>
 
<style scoped>

</style>