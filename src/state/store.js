import { ref, reactive } from 'vue'

///////////////////////////////////////////////////////////////////
////////////////////////CONNECT FOUR///////////////////////////////
///////////////////////////////////////////////////////////////////
export const currentColor = ref('Red')


export const connectRow1 = reactive([
  {index:1,color:"white",isFilled:false},
  {index:2,color:"white",isFilled:false},
  {index:3,color:"white",isFilled:false},
  {index:4,color:"white",isFilled:false},
  {index:5,color:"white",isFilled:false},
  {index:6,color:"white",isFilled:false},
  {index:7,color:"white",isFilled:false},
])
export const connectRow2 = reactive([
  {index:1,color:"white",isFilled:false},
  {index:2,color:"white",isFilled:false},
  {index:3,color:"white",isFilled:false},
  {index:4,color:"white",isFilled:false},
  {index:5,color:"white",isFilled:false},
  {index:6,color:"white",isFilled:false},
  {index:7,color:"white",isFilled:false},
])
export const connectRow3 = reactive([
  {index:1,color:"white",isFilled:false},
  {index:2,color:"white",isFilled:false},
  {index:3,color:"white",isFilled:false},
  {index:4,color:"white",isFilled:false},
  {index:5,color:"white",isFilled:false},
  {index:6,color:"white",isFilled:false},
  {index:7,color:"white",isFilled:false},
])
export const connectRow4 = reactive([
  {index:1,color:"white",isFilled:false},
  {index:2,color:"white",isFilled:false},
  {index:3,color:"white",isFilled:false},
  {index:4,color:"white",isFilled:false},
  {index:5,color:"white",isFilled:false},
  {index:6,color:"white",isFilled:false},
  {index:7,color:"white",isFilled:false},
])


export const connectBoard = reactive({
  connectRow1,
  connectRow2,
  connectRow3,
  connectRow4,
})

export const connectResult = reactive({
  resultText:'',
  slotsFilled:0,
  isDropDisabled:false,
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




