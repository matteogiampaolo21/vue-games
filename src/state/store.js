import { ref, reactive } from 'vue'

///////////////////////////////////////////////////////////////////
////////////////////////CONNECT FOUR///////////////////////////////
///////////////////////////////////////////////////////////////////


export const connectBoard = reactive({
  circle1:{color:"white",isFilled:false},
  circle2:{color:"white",isFilled:false},
  circle3:{color:"white",isFilled:false},
  circle4:{color:"white",isFilled:false},
  circle5:{color:"white",isFilled:false},
  circle6:{color:"white",isFilled:false},
  circle7:{color:"white",isFilled:false},

  circle8:{color:"white",isFilled:false},
  circle9:{color:"white",isFilled:false},
  circle10:{color:"white",isFilled:false},
  circle11:{color:"white",isFilled:false},
  circle12:{color:"white",isFilled:false},
  circle13:{color:"white",isFilled:false},
  circle14:{color:"white",isFilled:false},

  circle15:{color:"white",isFilled:false},
  circle16:{color:"white",isFilled:false},
  circle17:{color:"white",isFilled:false},
  circle18:{color:"white",isFilled:false},
  circle19:{color:"white",isFilled:false},
  circle20:{color:"white",isFilled:false},
  circle21:{color:"white",isFilled:false},

  circle22:{color:"white",isFilled:false},
  circle23:{color:"white",isFilled:false},
  circle24:{color:"white",isFilled:false},
  circle25:{color:"white",isFilled:false},
  circle26:{color:"white",isFilled:false},
  circle27:{color:"white",isFilled:false},
  circle28:{color:"white",isFilled:false},
})



///////////////////////////////////////////////////////////////////
////////////////////////COLOR GUESSER//////////////////////////////
///////////////////////////////////////////////////////////////////
var randomIndex = Math.floor(Math.random()*4)
const getRandomColor = () => {
  return '#'+(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');;
}

// Will set a random color by default.
// Changable after clicking on random color buttons
export const blockColor = ref(getRandomColor())


// Keep track of users score
// Updates after clicking on random color buttons
export const count = ref(0);


// Needed to check for which button will have the correct color
// Updates after clicking on random color buttons
export const randomBtnIndex = ref(randomIndex);

// Will let users know what the correct color was
// Will show on for 1 round after wrong answer and will be removed after
export const wrongAnswerText = ref("");


// Needed to update all button's color from one button
// Updates after clicking on the random color buttons
export const fourRandomColors = reactive({
  btnColor1:getRandomColor(),
  btnColor2:getRandomColor(),
  btnColor3:getRandomColor(),
  btnColor4:getRandomColor(),
})




