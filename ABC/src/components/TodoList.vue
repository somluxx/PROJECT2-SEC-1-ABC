<script setup>
import { ref, computed } from 'vue'

const tasks = ref([])
const showAddTaskPopup = ref(false)
const showAllTasksPopup = ref(false)
const newTaskName = ref('')

const countTask = computed(() => {
  return tasks.value.length
})

const addTask = () => {
  if (!newTaskName.value || newTaskName.value.trim() === '') {
    return
  } else {
    tasks.value.push(newTaskName.value.trim())
    showAddTaskPopup.value = false
    newTaskName.value = ''
  }
}

const toggleShowAllTasksPopup = () => {
  showAllTasksPopup.value = !showAllTasksPopup.value
}

const toggleCompleted = (index) => {
  tasks.value[index].completed = !tasks.value[index].completed
}

</script>

<template>
   <div class="bg-red-500 h-screen flex flex-row items-center justify-center">
    <div class="w-1/2 h-screen border-r flex items-center justify-center">
      <div class="flex-col items-center justify-center">
      <h1 class="text-white text-5xl mb-4">My To-Do Lists</h1>
      <div class="flex flex-col items-center justify-center">
      <button @click="toggleShowAllTasksPopup()" class="py-2 px-4 bg-gray-500 text-gray-200 font-semibold rounded-lg shadow-md hover:bg-white focus:outline-none">
          Expand
      </button>
      </div>
      <div v-if="showAllTasksPopup">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div class="bg-white rounded-lg p-6">
            <h3 class="text-lg font-medium mb-4">All Tasks</h3>
            <ul class="list-disc">
              <li v-for="(task, index) in tasks" :key="index" class="text-black text-xl">
                {{ task }}
              </li>
            </ul>
            <div class="flex justify-end mt-4">
              <button type="button" class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded mr-2" @click="showAllTasksPopup = false">
                 Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      
    
    <ul class="list-disc">
      <li v-for="(task, index) in tasks" :key="index" class="text-white text-xl">
        {{ task }} <input type="checkbox" @click="toggleCompleted(index)"  :checked="task.completed" class="ml-4">
      </li>
    </ul>
    <div class="flex flex-col items-center justify-center">
    <button @click="showAddTaskPopup = true" class="absolute hover:text-red-200 text-white text-3xl mt-20 ml-20">
        +Add
      </button>
    </div>  

    <div v-if="showAddTaskPopup">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
        <div class="bg-white rounded-lg p-6">
          <h3 class="text-lg font-medium mb-4">Add Task</h3>
          <form @submit.prevent="addTask(newTaskName)">
            <input v-model="newTaskName" type="text" placeholder="Task Name" class="border rounded-lg px-2 py-1 w-full mb-4">
            <div class="flex justify-end">
              <button type="button" class="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded mr-2" @click="showAddTaskPopup = false">
                Cancel
              </button>
              <button type="submit" class="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">
                OK
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  </div> 
  </div>
</template>

<style scoped>
</style>