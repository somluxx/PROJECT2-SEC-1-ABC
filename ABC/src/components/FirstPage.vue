// First Page
<script setup>
import { RouterLink } from "vue-router";
    import { ref, defineEmits } from 'vue';
    import NavBar from '../view/NavBar.vue'
    const emits = defineEmits(['nextPage'])
</script>

<template>
    <div class="bg-[#E96479] min-h-screen flex flex-col items-center justify-center">
        <h1 class="text-6xl font-normal text-white font-sans tracking-widest mt-10">Pomodoro</h1> 
        <h1 class="text-4xl font-normal text-white font-sans mt-5">Timer wow</h1>
        <img src="/images/tomatoman.png" class="w-40 md:w-64 pt-5"/>
        <RouterLink to="/timer"><button class="bg-red-600 rounded-xl w-52 h-24 text-white text-4xl md:text-5xl font-semibold mt-5">Enter</button></RouterLink>
        <div class="whatis-modal mt-7">
            <label for="my-modal-5" class="btn text-white">Know more !</label>
            <input type="checkbox" id="my-modal-5" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box w-11/12 max-w-5xl bg-[#4D455D] text-white">
                    <h3 class="font-bold text-lg">WHAT IS POMODORO ?</h3>
                    <p class="py-4">The Pomodoro Technique is a time management method that breaks down work into focused intervals, typically 25 minutes each. After each Pomodoro session, a short break of 5 minutes is taken to rest and recharge. After completing a set of four Pomodoros, a longer break of 15-30 minutes is taken. This cycle of working and resting continues until a task is accomplished.</p>
                    <div class="modal-action">
                        <label for="my-modal-5" class="btn text-white">Let's Get Start !</label>
                    </div>
                </div>
            </div>
        </div>
        <h1 class="text-sm font-normal text-white font-sans tracking-widest absolute bottom-2">
            Developed by ABC Group
        </h1> 

    </div>
    </template>
     
<style scoped>
    @media (min-width: 768px) {
        .modal-box {
            max-width: 70%;
        }
    }
</style>
    