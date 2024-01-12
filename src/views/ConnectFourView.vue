<script>
import {RouterLink} from 'vue-router'
import {connectBoard} from '../state/store'
export default {
    data(){
        return{
            connectBoard,
        }   
    },
    methods:{
        onDropBtn(col,row){
            const currentCircle = `circle${col+row}`
            console.log(currentCircle)
            console.log(this.connectBoard[currentCircle].isFilled)
            if (this.connectBoard[currentCircle].isFilled){
                console.log('e')
                this.onDropBtn(col,row-7)
            }else{
                this.connectBoard[currentCircle].isFilled = true
                this.connectBoard[currentCircle].color = 'red';
                return
            }
        }
    },
    components:{RouterLink}
}
</script>

<template>
  <header class="w-400 mx-auto">
    <RouterLink to="/" class=" border-2 border-black p-1 fixed left-3 z-50 bg-white">Return to Home</RouterLink>
    <h1 class="text-4xl font-black text-center my-5">Connect Four</h1>
    <p class="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nisi reprehenderit consectetur impedit veritatis quis iusto?</p>
  </header>

  <main class="grid grid-cols-7 gap-6 justify-center items-center w-600 my-20 mx-auto">
    <button @click="() => {onDropBtn(1,21)}" class="bg-neutral-200 border-2 h-5 rounded hover:bg-neutral-400 border-black"></button>
    <button @click="() => {onDropBtn(2,21)}" class="bg-neutral-200 border-2 h-5 rounded hover:bg-neutral-400 border-black"></button>
    <button @click="() => {onDropBtn(3,21)}" class="bg-neutral-200 border-2 h-5 rounded hover:bg-neutral-400 border-black"></button>
    <button @click="() => {onDropBtn(4,21)}" class="bg-neutral-200 border-2 h-5 rounded hover:bg-neutral-400 border-black"></button>
    <button @click="() => {onDropBtn(5,21)}" class="bg-neutral-200 border-2 h-5 rounded hover:bg-neutral-400 border-black"></button>
    <button @click="() => {onDropBtn(6,21)}" class="bg-neutral-200 border-2 h-5 rounded hover:bg-neutral-400 border-black"></button>
    <button @click="() => {onDropBtn(7,21)}" class="bg-neutral-200 border-2 h-5 rounded hover:bg-neutral-400 border-black"></button>

    
    <div v-for="circle in Object.values(connectBoard)" :class="`${circle.color} circle`"></div> 


  </main>
</template>
<style scoped>

.nav-link{
    border:black 2px solid;
    padding: 5px;
}
.circle{
    width: 65px;
    height: 65px;
    border:2px solid black;
    border-radius: 100%;
    margin: 0 auto;
}
.white{
    background-color: #ffffff;
}
.red{
    background-color: #ca3b3b;
}
.blue{
    background-color: #3f3fd2;
}
</style>

