<script setup>
import { ref,defineEmits, computed } from 'vue';
const custom_min = ref()
const custom_sec = ref()
const emits = defineEmits(['customizedTime']) // define emits

const emitsClick = () => { // define fucnion onClick button
    // emits values in object term, when user clicked the button a values will emits to parent component (App.vue)
    emits('customizedTime',{min:custom_min.value,sec:custom_sec.value})
}
</script>
 
<template>
<div>
    <div class="custom-time inline-flex gap-x-4 mt-5 ml-10">
            Minutes:<input type="number" min="0" max="99" maxlength="2" placeholder="Min" v-model="custom_min" class="input input-bordered input-warning w-20 max-w-xs"/>
            Sec:<input type="number" min="0" max="59" maxlength="2" placeholder="Sec" v-model="custom_sec" class="input input-bordered input-warning w-20 max-w-xs" />
            <button type="submit" @click="emitsClick" class="border-2 border-red-300 p-2 w-12 rounded-xl">Set</button>
    </div>

</div>
</template>
 
<style scoped>

</style>