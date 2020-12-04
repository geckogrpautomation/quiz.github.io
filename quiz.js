
//***************************************quiz.html JS ***************************************

//Intialise variables
var quizIndex = 0;
var rightWrong  = "";
var quizTimeS = 75;


// Quiz question, choices and answer data object
var questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choices: ["A - strings", "B - booleans", " C - alerts", "D - numbers"],
      answer: "c"
    },

    {
      question: "The condition in an if / else statement is enclosed within ____.",
      choices: ["A - quotes", "B - curly brackets", "C - parentheses", "D - quare brackets"],
      answer: "c"
    },

    {
      question: "Arrays in JavaScript can be used to store ____.",
      choices: ["numbers and strings","other arrays","booleans","all of the above"],
      answer: "d"
    },

    {
      question:"String values must be enclosed within ____ when being assigned to variables.",
      choices: ["commas", "curly brackets", "quotes", "parentheses"],
      answer: "c",
    },

    {
      question:"A very useful tool used during development and debugging for printing content to the debugger is:",
      choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      answer: "d",
    },

    {
        question:"question",
        choices: ["a", "b", "c", "d"],
        answer: "answer",
    }
  ];

  

//Get required objects
var quizHeadingObj = document.getElementById("quizHeading");
var quizQuesObj = document.getElementById("quizQuestion");
var quizRightWrongObj = document.getElementById("quizRightWrong"); 
var quizTimeObj = document.getElementById("quizTime");
var quizBtnAObj = document.getElementById("quizBtnA");
var quizBtnBObj = document.getElementById("quizBtnB");
var quizBtnCObj = document.getElementById("quizBtnC");
var quizBtnDObj = document.getElementById("quizBtnD");
var answerAObj = document.getElementById("answerA");
var answerBObj = document.getElementById("answerB");
var answerCObj = document.getElementById("answerC");
var answerDObj = document.getElementById("answerD");
var nextQuesBtnObj = document.getElementById("nextQuesBtn");



//Hide right/wrong text object on page load
quizRightWrongObj.style.display="none";
//Hide next question button on page load
nextQuesBtnObj.style.display="none";


//Add events
quizBtnAObj.addEventListener("click",function(){
    rightWrong = quizRightWrong(quizIndex,"a");
});

quizBtnBObj.addEventListener("click",function(){
    rightWrong = quizRightWrong(quizIndex,"b");
});

quizBtnCObj.addEventListener("click",function(){
    rightWrong = quizRightWrong(quizIndex,"c");
});


quizBtnDObj.addEventListener("click",function(){
    rightWrong = quizRightWrong(quizIndex,"d");
});

nextQuesBtnObj.addEventListener("click",function(){
    quizIndex++
    quizQuesIndex(quizIndex);
    nextQuesBtnObj.style.display="none";
    quizRightWrongObj.style.display="none";
    
});

//Call quizQuesIndex() to initialise first question values. Index value 0
quizQuesIndex(quizIndex);


//Start quiz timer
var quizCurTime = setInterval( totalQuizTimeS, 1000);


function totalQuizTimeS(){
    quizTimeS--;
    quizTimeObj.textContent = "Quiz Time : " + quizTimeS + " sec";
}


function quizRightWrong(index,ans){
   
    //Quiz correct answer. Display Correct. Well done!
    if (questions[quizIndex].answer=== ans){
    
        quizRightWrongObj.textContent = "Correct. Well done!";
        quizRightWrongObj.style.display="inline";
        nextQuesBtnObj.style.display="inline";
    }   

    //Quiz correct answer. Display "Incorrect! More study for yo

    if (questions[quizIndex].answer !== ans){ 
        quizRightWrongObj.textContent  = "Incorrect! Try again!";
        quizRightWrongObj.style.display="inline";
        quizTimeS = quizTimeS - 10;
    } 

    if (quizTimeS <= 0){
        endQuiz("highScoreSent", quizTimeS + " sec");
    }

}

function quizQuesIndex(i){

    quizQuesObj.textContent  = questions[i].question;
    answerAObj.textContent = questions[i].choices[0];
    answerBObj.textContent = questions[i].choices[1];
    answerCObj.textContent = questions[i].choices[2];
    answerDObj.textContent = questions[i].choices[3];
  
if (i === 5){
   
    endQuiz("highScoreSent", quizTimeS + " sec");
    }   
   
}


//Set required lcoal storage values for the next window to get
function endQuiz(lStorageSetItem, val){
    //Send required intems to the finish window.
    sessionStorage.setItem(lStorageSetItem, val); 
    location.replace("./finish.html");  

}


    
                




