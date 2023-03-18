<template>
  <div class="w-1/4 flex items-center justify-center flex-col ">
    <h1 class="text-5xl font-bold mb-12 text-white">Todo List</h1>

    <div v-show="listOpen" class="border p-4 mb-4 text-white">
      <ul class="pl-2 mb-10">
        <li
          v-for="(item, index) in todoList"
          :key="index"
          class="mb-2 text-3xl"
        >
          <span :class="{ 'line-through  ': item.completed }">
            {{ item.task }}
          </span>
          <input type="checkbox" v-model="item.completed" class="ml-4" />
        </li>
      </ul>

      <div class="mt-4">
        <label class="block text-white font-bold mb-4 text-3xl" for="task">
          Add a new task:
        </label>
        <input
          v-model="newTask"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline text-2xl"
          id="task"
          type="text"
          placeholder="Enter new task"
        />
        <button
          @click="addTask"
          class="mt-4 bg-white hover:bg-red-700 text-red-400 font-bold py-2 px-4 rounded text-2xl"
        >
          + Add
        </button>
      </div>
    </div>

    <div class="flex justify-between items-center mb-4">
      <button
        @click="toggleList"
        class="bg-white hover:bg-red-700 text-red-400 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-3xl"
      >
        {{ isListOpen ? "Hide" : "Expand" }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const listOpen = ref(false);
    const newTask = ref("");
    const todoList = ref([
      { task: "Excercise", completed: false },
      { task: "Sleep", completed: true },
      { task: "Wowza", completed: false },
    ]);

    function toggleList() {
      listOpen.value = !listOpen.value;
    }

    function addTask() {
      if (newTask.value.trim() === "") {
        return;
      }
      todoList.value.push({ task: newTask.value.trim(), completed: false });
      newTask.value = "";
    }

    return {
      listOpen,
      newTask,
      todoList,
      toggleList,
      addTask,
    };
  },
};
</script>