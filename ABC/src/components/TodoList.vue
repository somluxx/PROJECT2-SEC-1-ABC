<script type="module">
  import { ref, defineEmits, defineProps } from 'vue';
  export default {
  data() {
    return {
      tasks: [],
      showAddTaskPopup: false,
      showAllTasksPopup: false, 
      newTaskName: "",

      //comment
      newComment: '',
      comments: [],
    }
  },
  computed: {
    taskCount() {
      return this.tasks.length
    },
  },
  methods: {
    addTask() {
      if (this.newTaskName.trim() === "") {
        return;
      }
      this.tasks.push(this.newTaskName.trim())
      this.showAddTaskPopup = false
      this.newTaskName = ""
    },
    toggleShowAllTasksPopup() { 
        this.showAllTasksPopup = !this.showAllTasksPopup;
      },
      toggleCompleted(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
      },

      // add comment ไป
      addComment() {
      if (this.newComment !== '') {
        this.comments.push(this.newComment);
        this.newComment = '';
      }
    },
  
  },
}

</script>

<template>
   <div class="bg-red-400 h-screen flex flex-row items-center justify-center">
    
    <!-- <div class="w-1/2 h-screen border-r border-black flex flex-col items-center justify-center">
      <div class="bg-red-400 text-white text-9xl font-bold rounded-lg p-4 mb-9">22:46</div>
      
      <div class="mt-2">
          <button class="bg-white text-5xl text-red-500 py-2 px-4 rounded-lg"
                  @click="toggleTimer">
             {{ isTimerRunning ? 'Start' : 'Pause'}} 
          </button>
      </div>    
    </div> -->

    <div class="w-1/2 h-screen border-r border-black flex flex-col items-center justify-center">
    <h2 class="text-white text-5xl mb-4">Comment</h2>
    <p class="text-white text-2xl mb-4">Let's comment มามะ</p>

    <div class="w-full max-w-md  text-center">
      <textarea
        class="shadow appearance-none border rounded w-full py-2 px-3 mb-4 text-gray-700"
        placeholder="Write your comment here..."
        v-model="newComment"
      ></textarea>
      <button
        class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
        @click="addComment"
      >
        Submit
      </button>
    </div>

    <div class="w-full max-w-md mt-4" style="height: 300px; overflow-y: auto;">
      <div v-for="(comment, index) in comments" :key="index" class="bg-white shadow-md rounded p-4 my-2">
        <p class="text-gray-700">{{ comment }}</p>
      </div>
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
  <div class="fixed bottom-4 right-4">
      <button class="bg-white text-red-500 py-2 px-4 rounded-full shadow-lg" @click="$emit('closeTask')">
        Back
      </button>
      </div>
  </div>
</template>

<style scoped>

</style>
