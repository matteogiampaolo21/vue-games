<script>
import {blockColor} from '../state/store'
import { count } from '../state/store'
import { fourRandomColors } from '../state/store'
import { wrongAnswerText } from '../state/store'
import {randomBtnIndex} from '../state/store'


export default {
  props:{
    btnIndex:Number,
  },
  data() {
    return {
        count,
        blockColor,
        randomBtnIndex,
        fourRandomColors,
        wrongAnswerText,
    }
  },
  methods: {
    changeBtnColors(){
      this.fourRandomColors.btnColor1 = this.getRandomColor();
      this.fourRandomColors.btnColor2 = this.getRandomColor();
      this.fourRandomColors.btnColor3 = this.getRandomColor();
      this.fourRandomColors.btnColor4 = this.getRandomColor();
    },
    getRandomColor(){
      return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    },
    handleClick(){
      if (this.btnIndex === this.randomBtnIndex){
        this.count++;
        this.wrongAnswerText = ""
      }else{
        this.count = 0;
        this.wrongAnswerText = `Wrong! The correct answer: ${this.blockColor}`
      }

      this.blockColor = this.getRandomColor();
      this.randomBtnIndex = (Math.floor(Math.random()*4))
      this.changeBtnColors()

    }
  }
}
</script>

<template>
  <li><button class="w-full border-black font-bold border-2 py-5 duration-100 hover:bg-neutral-200" @click="handleClick">{{ btnIndex == randomBtnIndex ? blockColor : fourRandomColors[`btnColor${btnIndex+1}`] }}</button></li>
</template>