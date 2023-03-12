<script setup>

import { ref } from 'vue';

const todos = ref([])
const inputTodo = ref('')

const addTodo = () => {
  const inputValue = inputTodo.value.trim();
  if (inputValue !== '') {
    todos.value.push(inputValue);
    inputTodo.value = '';
  }
}

const remove = (e) => {
    console.log(e.target.id)
    console.log(e.type)
    console.log(e.currentTarget)
}
</script>
 
<template>
<div class="" id="main">
    <div class="text-white" id="time"><p class="" id="textTime">22:22</p></div>
    <div id="pause"><button id="textPause">PAUSE</button></div>
    <div id="line"></div>
    <div id="todoList">My Todo Lists</div>
    <input type="text" id="addTodo" class="text-center text-black" placeholder="Add Your Todo" v-model="inputTodo">
    <div class="" id="list">
        <ul>
            <li v-for="(todo, index) in todos" :key="index" >{{ todo }} <input type="checkbox"  @click="remove"></li>
        </ul>
    </div>
    <div id="add"><button id="addBtn" @click="addTodo">+Add</button></div>
</div>
</template>
 
<style scoped>
#main{
    position: absolute;
    width: 1078px;
    height: 629px;  
    background: #CB4F5E;
}

#time {
    position: absolute;
    width: 377px;
    height: 137px;
    background: #FA8A98;
    backdrop-filter: blur(2px);
    border-radius: 20px;
    top: 138px;
    left: 60px;
}

#textTime {
    position: absolute;
    width: 258px;
    height: 116px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 96px;
    line-height: 116px;
    color: #FFFFFF;
    top: 10px;
    left: 80px;
}

#pause {
    position: absolute;
    width: 202px;
    height: 68px;
    background: #FA8A98;
    backdrop-filter: blur(2px);
    border-radius: 20px;
    top: 337px;
    left: 140px;
}

#textPause {
    position: absolute;
    width: 124px;
    height: 43px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 37.5521px;
    line-height: 45px;
    color: #FFFFFF;
    top: 12px;
    left: 40px;
}

#line {
    position: absolute;
    width: 552.01px;
    height: 0px;
    border: 1px solid #000000;
    transform: rotate(89.58deg);
    top: 310px;
    left: 270px;
}

#todoList{
    position: absolute;
    width: 265px;
    height: 45px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 37.5521px;
    line-height: 45px;
    color: #FFFFFF;
    top: 56px;
    right: 110px;
}

#addTodo {
    box-sizing: border-box;
    position: absolute;
    width: 161px;
    height: 33px;
    background: #D9D9D9;
    border: 1px solid #000000;
    border-radius: 82px;
    top: 138px;
    right: 185px;
}

#list {
    position: absolute;
    width: 330px;
    height: 182px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 39px;
    color: #FFFFFF;
    top: 205px;
    right: 96px;
}

#add {
    position: absolute;
    width: 73px;
    height: 30px;
    font-family: 'Josefin Slab';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
    right: 50px;
    bottom: 184px;
}

ul {
  list-style: disc;
}
</style>