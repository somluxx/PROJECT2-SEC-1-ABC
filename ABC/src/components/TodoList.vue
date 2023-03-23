<script setup>
import { onMounted, ref, computed, onBeforeMount} from "vue";
///////////////////////////////////////////////////////
//   export default {
//   data() {
//     return {
//       tasks: [],
//       showAddTaskPopup: false,
//       showAllTasksPopup: false, 
//       newTaskName: "",
//     }
//   },
//   computed: {
//     taskCount() {
//       return this.tasks.length
//     },
//   },
//   methods: {
//     addTask() {
//       if (this.newTaskName.trim() === "") {
//         return;
//       }
//       this.tasks.push(this.newTaskName.trim())
//       this.showAddTaskPopup = false
//       this.newTaskName = ""
//     },
//     toggleShowAllTasksPopup() { 
//         this.showAllTasksPopup = !this.showAllTasksPopup;
//       },
//       toggleCompleted(index) {
//         this.tasks[index].completed = !this.tasks[index].completed;
//       },
//   },
// }
///////////////////////////////////////////////////////
// const commentText = ref()
// const clickToshow = async(text) =>{
//   try{
//     const res = await fetch('http://localhost:3000/comments',{
//       method: 'POST',
//       headers:{
//         'content-type': 'application/json'
//       },
//       body:JSON.stringify({
//         chat:text
//       })
//     })
//   if(text != undefined && res.status === 201){
//     // const showComment = await res.json()
//     // allComment.value.push(showComment)
//     commentText.value = undefined
//     sliceComment()
//   }
//   else throw new Error('ไม่ส่ง Comment มา')
//     } catch (err) {
//       console.log(err)
//     }
//   }

// const showDisplay = () => {
//   console.log(allComment.value)
//   // for(const loop in x.value){
//   //     showAllFive.value.push(loop)
//   //   }
//     // if(x.value.length > 5){
//     //   let x = x.value.length
//     //   let lastValue = --x
//     //   let firstValue = x-5
//     //   showAllFive.value =showAllFive.value.pop(firstValue,lastValue)
//     //   console.log(showAllFive.value)
//     // }
// }

// const showDisplay = async() => {
//   try{
//     const res = await fetch('http://localhost:3000/comments')
//     if(res.ok){
//       const allComment = res.json()
//       // console.log(allComment)
//       return allComment
//     }
//     else throw new Error('Error')
//   } catch (err) {
//     console.log(err)
//   }
// }
// const allRefComment = ref([])

// onMounted(async() => {
//   allRefComment.value = await showDisplay()
// // console.log(allRefComment.value)
//   sliceComment()
// })
// const showCommentToUser = ref([])
// const showCommentUpdate = computed(() => {
//   return showCommentToUser
// })
// const sliceComment = () => {
//   if(allRefComment.value.length > 5){
//   let countComment = allRefComment.value.length
//   let lastIndexComment = countComment
//   let firstIndexComment = countComment-5
//   showCommentToUser.value = allRefComment.value.slice(firstIndexComment,lastIndexComment)
//   }
//   else{
//     for(const loop in allRefComment.value){
//       showCommentToUser.value.push(loop)
//       console.log(showCommentToUser.value)
//     }
//   }
// }
// console.log(showCommentUpdate.value)
/////////////////////////////////////////////////////////////////////
//GET 
const getComments = async() => {
  const res = await fetch('http://localhost:3000/comments')
  try{
    if(res.ok){
    const allComments = res.json()
    return allComments
    }
  } catch (err) {
    console.log(err)
  }
}

const comments = ref([])
const fiveComments = ref([])
onBeforeMount(async() => {
  comments.value = await getComments()
  commentsaddtoFiveComments()
  // console.log(comments.value)
  // if(comments.value.length > 5){
  //   let countComment = comments.value.length
  //   let lastIndexComment = countComment
  //   let firstIndexComment = countComment-5
  //   fiveComments.value = comments.value.splice(firstIndexComment,lastIndexComment)
  //   // console.log(fiveComments.value)
  // }
  // else{
  //   for(const loop in comments.value){
  //     fiveComments.value.push(loop)
  //   }
  //   // console.log(fiveComments.value)
  // }
})

//commentsFunction 
const commentsaddtoFiveComments = () => {
  if(comments.value.length > 5){
    fiveComments.value = []
    // let countComment = comments.value.length
    // console.log(countComment)
    // let lastIndexComment = countComment-1
    // console.log(lastIndexComment)
    // let firstIndexComment = countComment-5
    // console.log(firstIndexComment)
    // console.log(comments.value)
    fiveComments.value = comments.value.slice(-5)
    console.log(fiveComments.value)
    // console.log(fiveComments.value)
  }
  else{
    for(const loop in comments.value){
      if(fiveComments.value[loop] !== comments.value[loop]){
        fiveComments.value.push(comments.value[loop])
        console.log(fiveComments.value)
      }
    }
    // console.log(fiveComments.value)
  }
}

//POST 
const textChat = ref()
const sendTextChat = async(x) => {
  if(x != undefined){
    sendToBackEnd(x)
  }
  // ไว้เด้ง POPUP ขึ้นมาสำหรับไม่ใส่ค่า 
  else{
    alert('ส่งไรมาครับผม')
  }
  textChat.value = null
  // console.log(x)
}
const sendToBackEnd = async(text) => {
  try{
    const res = await fetch('http://localhost:3000/comments',{
      method: 'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify({
        chat:text
      })
    })
    if(res.status === 201){
      console.log('added')
      const addComments = await res.json()
      console.log(addComments)
      comments.value.push(addComments)
      commentsaddtoFiveComments()
      // console.log(fiveComments.value)
      // console.log(comments.value)
      // commentsaddtoFiveComments()
      //ติดไว้ก่อน
  }
    else throw new Error('ไม่สามารถทำการส่งค่ามาได้')
  } catch (err){
    console.log(err)
  }
}

</script>

<template>
   <div class="bg-red-400 h-screen flex flex-row items-center justify-center">
    <div class="w-1/2 h-screen border-r flex items-center justify-center">
      <!-- <div class="flex-col items-center justify-center">
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
  </div> -->
  </div> 
  <div class="w-1/2 h-screen border-r border-black flex flex-col items-center pt-5">
      <!-- <div class="bg-red-400 text-white text-9xl font-bold rounded-lg p-4 mb-9">22:46</div>
      
      <div class="mt-2">
          <button class="bg-white text-5xl text-red-500 py-2 px-4 rounded-lg"
                  @click="toggleTimer">
            {{ isTimerRunning ? 'Start' : 'Pause'}}
          </button> -->
      <!-- </div>     -->
      <div class="space-y-6 flex flex-col">
          <h1 class="text-6xl text-white justify-center flex">Comment</h1>
          <h2 class="text-4xl text-white pt-8 justify-center flex"> เชิญ comment กลุ่ม ABC</h2>
          <input type="text" class="bg-gray-200 w-96 h-20 rounded-xl justify-center flex text-gray-500 text-2xl p-2" v-model="textChat"/>
          <div class="w-full justify-center flex">
          <button class="w-60 h-20 rounded-xl bg-white text-4xl text-gray-500" @click="sendTextChat(textChat)">SUMMIT</button>
          </div>
      </div>
      <div class="space-y-6 flex flex-col pt-10">
        <h1 class="text-6xl text-white justify-center flex">Comment...</h1>
        <div class="w-96 h-74 bg-gray-200 border-black rounded-xl">
          <ul v-for="comment in fiveComments" :key="comment.id" >
            <li class="p-3 text-gray-500 text-3xl">{{ comment.chat }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
