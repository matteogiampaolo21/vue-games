<script>
import {blockColor} from '../state/store'
import {count} from '../state/store'
import {wrongAnswerText} from '../state/store'
import MyButton from '../components/MyButton.vue';
import { handleError,ref } from 'vue';
import {RouterLink} from 'vue-router';


const isOpen = ref(true);

export default {
    data() {
        return {
            isOpen,
            blockColor,
            count,
            wrongAnswerText,
        };
    },
    watch: {
      
    },
    methods: {

    },
    components: {MyButton,RouterLink}
}

</script>

<template>
    <RouterLink to="/" class=" border-2 border-black p-1 fixed left-3 z-50 bg-white">Return to Home</RouterLink>
    <header class="flex flex-col mt-5 items-center">
        <h1 class="text-4xl text-center font-black">Color Guesser</h1>
        <h2 class="text-7xl text-center font-black flex flex-row items-center"><span class="text-3xl mr-5">Score : </span> {{ count }}</h2>
        <p class="text-lg">{{ wrongAnswerText }}</p>
    </header>

    <section class="w-400 mx-auto">
        <article id="blockColor" class="w-400 h-400 my-5 border-black border-2">

        </article>
        <ul class="grid gap-2  grid-cols-2">
        <MyButton :btnIndex="0"/>
        <MyButton :btnIndex="1"/>
        <MyButton :btnIndex="2"/>
        <MyButton :btnIndex="3"/>
        </ul>
    </section>

    <!-- <section>
        <div id="root" class="relative">

        <teleport to="body">
            <div id="modal" class="absolute top-0 left-0 bg-black-rgba w-full h-full flex justify-center items-center" v-if="isOpen">
            <div>
                <h2 class="text-2xl font-bold">Notification !</h2>
                <p>This site uses ads.</p>
                <button class="border-2 mt-5 rounded border-black text-lg px-2" @click="isOpen = false">Close</button>
            </div>
            </div>
        </teleport>

        </div>    

    </section> -->

</template>
<style scoped>
  #blockColor{
    background-color: v-bind('blockColor');
  }
  #modal > div {
    background-color: #fff;
    padding: 20px;
    width: 500px;
    border: solid black 3px;
  }
</style>

