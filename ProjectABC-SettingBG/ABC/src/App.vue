<script type="module">

  export default {
  data() {
    return {
      tasks: [],
      showAddTaskPopup: false,
      showAllTasksPopup: false, 
      newTaskName: "",
      backgroundColor: '#ff0000', //
      backgroundImageUrl: '',    //
      showSettings: false,      //
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
      handleFileChange(event) {          //
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();

        reader.onload = (e) => {
          this.backgroundImageUrl = e.target.result;
        };

        reader.readAsDataURL(file);
      }
    },                             //
  },
}
  
</script>

<template>
   <div :style="{ backgroundImage: `url(${backgroundImageUrl})`, backgroundColor: backgroundColor }" class="bg-red-500 h-screen flex flex-row items-center justify-center">
    <div class="w-1/2 h-screen border-r border-black flex flex-col items-center justify-center">
      <div class="bg-red-400 text-white text-9xl font-bold rounded-lg p-4 mb-9">22:46</div>
      
      <div class="mt-2">
          <button class="bg-white text-5xl text-red-500 py-2 px-4 rounded-lg"
                  @click="toggleTimer">
            {{ isTimerRunning ? 'Start' : 'Pause'}}
          </button>
      </div>    
    </div>



<div>
    <div class="w-1/2">
      <div class="flex justify-end pt-2">
        <button class="w-48 h-12 bg-white rounded-3xl text-4xl tracking-wider" @click="showSettings = true">Setting</button>
      </div>
    </div>
</div>



<div v-if="showSettings" class="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center">
      <div class="bg-white p-8 rounded-lg">
        <h2 class="text-2xl font-semibold mb-4">Settings</h2>

        <div class="mb-4">
          <label class="block font-medium mb-2">Background Color:</label>
          <input class="rounded border-gray-400 py-2 px-3" v-model="backgroundColor" type="color">
        </div>

        <div class="mb-4">
          <label class="block font-medium mb-2">Background Image:</label>
          <input type="file" @change="handleFileChange">
        </div>

        <button class="bg-blue-500 text-white py-2 px-4 rounded" @click="showSettings = false">Save</button>
      </div>
    </div>
  </div>    
  


    <div class="w-1/2 h-screen border-r flex items-center justify-center">
      <div class="flex-col items-center justify-center">
      <h1 class="w1/2 text-white text-5xl mb-4">My To-Do Lists</h1>
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
  
</template>

<style scoped>

</style>
