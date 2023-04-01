// Comment
<script setup >
import {ref, onBeforeMount, onMounted} from 'vue'
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
const comment = ref()

// onMounted((textchat) => {
//   comment.value.addEventListener('keypress',(e) => {
//     if(e.key === 'Enter'){
//       sendTextChat(textChat)
//     }
//   })
// })

onBeforeMount(async() => {
  comments.value = await getComments()
  commentsaddtoFiveComments()
})

//commentsFunction 
const commentsaddtoFiveComments = () => {
  if(comments.value.length > 5){
    fiveComments.value = []
    fiveComments.value = comments.value.slice(-5)
    // console.log(fiveComments.value)
  }
  else{
    for(const loop in comments.value){
      if(fiveComments.value[loop] !== comments.value[loop]){
        fiveComments.value.push(comments.value[loop])
        console.log(fiveComments.value)
      }
    }
  }
}

//POST 
const textChat = ref()
const showError = ref(false)
const sendTextChat = async(x) => {
  if(x != undefined){
    sendToBackEnd(x)
  }
  // ไว้เด้ง POPUP ขึ้นมาสำหรับไม่ใส่ค่า 
  else{
    showError.value = true
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
  }
    else throw new Error('Comment add failed.')
  } catch (err){
    console.log(err)
  }
}
</script>
<template>
  <div>
    <div class="bg-[#E96479] min-h-screen flex flex-col items-center justify-center w-full">
      <div class="title-text">
        <h1 class="text-4xl text-white">Comment Section</h1>
      </div>
      
      <div class="form mt-10 h-[100%] w-[60%] bg-[#D9D9D9] rounded-xl">
          <div class="border-2 border-red-600 rounded-md mt-14 ml-10 mr-10 px-2 sm:px-10 flex flex-row m-auto pt-5 pb-5">
              <div class="comment flex flex-col gap-y-5 w-full">
               <ul v-for="comment in fiveComments" :key="comment.id">
                  <li class="text-black text-xl">{{ comment.chat }}</li>
              </ul>
              </div>
          </div>

          <div class="input-form flex flex-col justify-start mt-8 gap-y-5 px-2 sm:px-44 relative">
                <input placeholder="Write Comment Here ..." type="text" name="comment" id="comment" class="pl-3 rounded-xl w-full h-10 focus:border-b-4 border-blue-400 duration-200 bg-white text-black font-bold" v-model="textChat" ref="comment">
                <div class="flex flex-row items-center justify-between">
                  <button class="btn btn-active btn-error w-20 mt-2 mb-10" @click="sendTextChat(textChat)">Submit</button>
                  <span class="ml-28 top-16 absolute mt-2 text-red-600 font-bold sm:block" v-show="showError">กรุณากรอกข้อมูล...</span>
                </div>
          </div>
      </div>
</div>

    <!-- <div class="w-1/2 h-screen flex items-center justify-center">
      <div class="space-y-6 flex flex-col mt-20">
          <h1 class="text-6xl text-white justify-center flex">Comment</h1>
          <h2 class="text-4xl text-white pt-8 justify-center flex"> เชิญ comment กลุ่ม ABC</h2>
          <input type="text" class="bg-gray-200 w-96 h-16 rounded-xl justify-center flex text-gray-500 text-2xl p-2" v-model="textChat"/>
          <div class="w-full justify-center flex">
          <button class="w-48 h-16 rounded-xl bg-white text-4xl text-gray-500" @click="sendTextChat(textChat)">Submit</button>
          </div>

          <div>
            <div class="space-y-6 flex flex-col pt-5">
          <h1 class="text-4xl text-white justify-center flex">Comment...</h1>
          <div class="w-96 h-74 bg-gray-200 border-black rounded-xl">
            <ul v-for="comment in fiveComments" :key="comment.id" >
            <li class="p-3 text-gray-500 text-3xl">{{ comment.chat }}</li>
            </ul>
        </div>
      </div>
      </div>
      </div>
    </div> -->
  </div>

</template>

<style scoped>
.comment-section {
  padding: 20px;
  margin: 0 auto;
  max-width: 800px;
}

@media only screen and (max-width: 600px) {
  .comment-section {
    padding: 10px;
  }
}
.comment p {
  color:black;
}

</style>
