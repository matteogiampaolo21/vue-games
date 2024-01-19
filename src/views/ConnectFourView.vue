<script>
import {RouterLink} from 'vue-router'
import {connectBoard, currentColor, connectResult} from '../state/store'

export default {
    data(){
        return{
            connectBoard,
            currentColor,
            connectResult
        }   
    },
    methods:{
        onDropBtn(row,col){
            if (connectBoard[`connectRow${row}`][col].isFilled){
                this.onDropBtn(row-1,col)
            }else{
                connectBoard[`connectRow${row}`][col].isFilled = true;
                connectBoard[`connectRow${row}`][col].color = this.currentColor;
                this.checkRowWin(row,this.currentColor);
                this.checkColWin(col);
                this.checkLeftDiagonalWin(row,col)
                this.checkRightDiagonalWin(row,col)
                this.currentColor == 'Red' ? this.currentColor = 'Blue' : this.currentColor = 'Red';
            }
        },
        checkRowWin(row,color){
            let count = 0;
            for (const circle of this.connectBoard[`connectRow${row}`]){
                console.log(count, color)
                if (circle.color == color){
                    count += 1;
                    if (count >= 4 ){
                        this.connectResult.resultText = `${color}'s Victory! Try again?`
                        this.connectResult.isDropDisabled = true;
                        
                        return
                    }
                }else{
                    count = 0
                }
            }
            return
        },
        checkColWin(col){
            const circle1 = this.connectBoard.connectRow1[col].color;
            const circle2 = this.connectBoard.connectRow2[col].color;
            const circle3 = this.connectBoard.connectRow3[col].color;
            const circle4 = this.connectBoard.connectRow4[col].color;
            

            
            if (circle1 == circle2 && circle2 == circle3 && circle3 == circle4){
                if(circle1 =='white'){return}
                this.connectResult.resultText = `${circle1}'s Victory! Try again?`
                this.connectResult.isDropDisabled = true;
            }
           
            return
        },
        checkLeftDiagonalWin(row,col){
            console.log(row,col)
            if (row < 4 && col > 0){
                console.log("recursion")
                this.checkLeftDiagonalWin(row+1,col-1)
            }else if (row == 4 && this.connectBoard.connectRow1[col+3]){
                if (
                    (this.connectBoard.connectRow1[col+3].color == this.connectBoard.connectRow2[col+2].color) &&
                    (this.connectBoard.connectRow2[col+2].color == this.connectBoard.connectRow3[col+1].color) && 
                    (this.connectBoard.connectRow3[col+1].color == this.connectBoard.connectRow4[col].color)
                ){
                    this.connectResult.resultText = `${this.connectBoard.connectRow4[col].color}'s Victory! Try again?`
                    this.connectResult.isDropDisabled = true;
                }else{
                    console.log(col)
                    console.log(this.connectBoard.connectRow1[col].color)
                }
                
            }else{
                console.log('not possible')
            }
        },
        checkRightDiagonalWin(row,col){
            console.log(row,col)
            if (row < 4 && col < 6){
                console.log("recursion")
                this.checkRightDiagonalWin(row+1,col+1)
            }else if (row == 4 && this.connectBoard.connectRow1[col-3]){
                if (
                    (this.connectBoard.connectRow1[col-3].color == this.connectBoard.connectRow2[col-2].color) &&
                    (this.connectBoard.connectRow2[col-2].color == this.connectBoard.connectRow3[col-1].color) && 
                    (this.connectBoard.connectRow3[col-1].color == this.connectBoard.connectRow4[col].color)
                ){
                    this.connectResult.resultText = `${this.connectBoard.connectRow4[col].color}'s Victory! Try again?`
                    this.connectResult.isDropDisabled = true;
                }else{
                    console.log(col)
                    console.log(this.connectBoard.connectRow1[col].color)
                }
                
            }else{
                console.log('not possible')
            }
        },
        clearBoard(){
            console.log('e')
            for (let i = 1; i < 5;i++){
                for (const circle of this.connectBoard[`connectRow${i}`]){
                    circle.color = 'white';
                    circle.isFilled = false;
                }
            }
            this.connectResult.isDropDisabled = false;
            this.connectResult.resultText = '';
            this.currentColor = 'Red';
        }
        
    },
    components:{RouterLink}
}
</script>

<template>
  <header class="w-400 mx-auto flex flex-col justify-center">
    <RouterLink to="/" class=" border-2 border-black p-1 fixed left-3 z-50 bg-white">Return to Home</RouterLink>
    <h1 class="text-4xl font-black text-center my-5">Connect Four</h1>
    <p id="end-text" class="text-center">
        {{connectResult.resultText}}
    </p>
    <button @click="clearBoard" class="border-black border-2 px-3 py-1 ">Restart</button>
  </header>

  <main class="grid grid-cols-7 gap-6 justify-center items-center w-600 mt-20 mb-10 mx-auto">
    <button :disabled="connectResult.isDropDisabled" @click="() => {onDropBtn(4,0)}" class="bg-neutral-200 border-2 h-5 rounded hover:bg-neutral-400 border-black"></button>
    <button :disabled="connectResult.isDropDisabled" @click="() => {onDropBtn(4,1)}" class="bg-neutral-200 border-2 h-5 rounded hover:bg-neutral-400 border-black"></button>
    <button :disabled="connectResult.isDropDisabled" @click="() => {onDropBtn(4,2)}" class="bg-neutral-200 border-2 h-5 rounded hover:bg-neutral-400 border-black"></button>
    <button :disabled="connectResult.isDropDisabled" @click="() => {onDropBtn(4,3)}" class="bg-neutral-200 border-2 h-5 rounded hover:bg-neutral-400 border-black"></button>
    <button :disabled="connectResult.isDropDisabled" @click="() => {onDropBtn(4,4)}" class="bg-neutral-200 border-2 h-5 rounded hover:bg-neutral-400 border-black"></button>
    <button :disabled="connectResult.isDropDisabled" @click="() => {onDropBtn(4,5)}" class="bg-neutral-200 border-2 h-5 rounded hover:bg-neutral-400 border-black"></button>
    <button :disabled="connectResult.isDropDisabled" @click="() => {onDropBtn(4,6)}" class="bg-neutral-200 border-2 h-5 rounded hover:bg-neutral-400 border-black"></button>

    
    
    </main>

    <section v-for="row in Object.values(connectBoard)" class="flex flex-row my-5  w-600 mx-auto">
        <div v-for="circle in row" :class="`${circle.color } circle`">
        </div>
    </section> 
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
.White{
    background-color: #ffffff;
}
.Red{
    background-color: #ca3b3b;
}
.Blue{
    background-color: #3f3fd2;
}
</style>

