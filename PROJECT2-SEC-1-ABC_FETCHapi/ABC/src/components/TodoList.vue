<script setup>
import { ref, computed } from 'vue'


const tasks = ref([])
const showAddTaskPopup = ref(false)
const showAllTasksPopup = ref(false)
const newTaskName = ref('')
// const showAlertComment = ref(false)

// const countTask = computed(() => {
//   return tasks.value.length
// })

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


// const comments = ref([])
// const comment = ref('')
// const submitComment = () => {
//   if (!comment.value || comment.value.trim() === '') {
//     return
//   } else {
//     comments.value.push(comment.value.trim())
//     comment.value = ''
//   }
// }




const comments = ref([])
    const comment = ref('')

    const fetchComment = async () => {
      try {
        const response = await fetch('http://localhost:5000/comments')
        const data = await response.json()
        comments.value = data
      } catch (error) {
        console.error('Error fetching comments:', error)
      }
    }

    const submitComment = async () => {
      if (!comment.value || comment.value.trim() === '') {
        return
      } else {
        try {
          const response = await fetch('http://localhost:5000/comments', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              comment: comment.value.trim(),
              completed: false
            })
          })
          const data = await response.json()
          comments.value.push(data)
          comment.value = ''
        } catch (error) {
          console.error('Error submitting comment:', error)
        }
      }
    }




// const fetchComment = () => {
//   fetch('http://localhost:5173/src/components/TodoList.vue?t=1679662602062')
//     .then(response => response.json())
//     .then(data => {
//       comments.value = data
//     })
//     .catch(error => {
//       console.error('Error fetching comments:', error)
//     })
// }





</script>

<template>
   <div class="bg-red-500 h-screen flex flex-row items-center justify-center">
    <div class="w-1/2 h-screen border-r border-black flex flex-col items-center justify-center">
      <div class="flex flex-col items-center">
        
    <h1 class="text-6xl text-red-100 font-bold mb-4">Comment ABC</h1>
    <div>
  </div>
  
    <div class="w-full flex items-center">
      <div class="w-1/3">
      <input
        class="border-2 border-gray-300 py-2 px-150 rounded-lg mb-4 mr-4"
        type="text"
        placeholder="comment this"
        v-model="comment"
      />
    </div>
    <!-- <div v-if="showAlertComment" class="fixed top-0 left-0 w-full h-full flex items-center justify-center">
    <div class="bg-white rounded-lg p-8">
      <h2 class="text-lg font-bold mb-4">Hey!</h2>
      <p class="text-gray-700">You need to enter a comment before submitting.</p>
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" @click="hidePopup">OK</button>
    </div>
  </div> -->
</div>
      <div class="w-1/3">
      <button
        class="bg-red-400 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
        @click="submitComment"
      >
        Submit
      </button></div>
    
    <div class="w-1/3"> 
      <h2 class="text-lg font-bold mb-2">Comments</h2>
    <div v-if="comments.length" class="w-full">     
      <ul class="pl-4 w-auto border-2 border-gray-300 text-white py-2 px-4 rounded-lg mb-4 mr-4">
        <li v-for="(comment, index) in comments" :key="index">{{ comment }}</li>
      </ul>
    </div></div>
  </div>  
    </div>



    


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
        {{ task }} <input type="checkbox" @click="toggleCompleted(index)" :checked="task.completed" class="ml-4">
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
          <form @submit.prevent="addTask">
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
