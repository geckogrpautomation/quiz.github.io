
//***************************************quiz.html JS ***************************************

//Intialise variables
var quizIndex = 0;
var quizTimeS = 0;
var rightWrong  = "";
var quizCorrectAnswers = ["c", "c", "d", "c", "d"];


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
    quizTimeS++;
    console.log(quizTimeS);
    quizTimeObj.textContent = "Quiz Time : " + quizTimeS + " sec";
}



function quizRightWrong(index,ans){
   
console.log("question index is : " + index + "Answer is " + ans );
//Quiz correct answer. Display Correct. Well done!
if (quizCorrectAnswers[index] === ans){
   
    quizRightWrongObj.textContent = "Correct. Well done!";
    quizRightWrongObj.style.display="inline";
    nextQuesBtnObj.style.display="inline";
}   

//Quiz correct answer. Display "Incorrect! More study for yo

if (quizCorrectAnswers[index] !== ans){ 
    quizRightWrongObj.textContent  = "Incorrect! Try again!";
    quizRightWrongObj.style.display="inline";
    quizTimeS = quizTimeS + 10;
} 

}

function quizQuesIndex(){

//Quiz state
switch (quizIndex){
    
    case 0:
       
       quizQuesObj.textContent  = "Commonly used data types DO NOT include:";
       answerAObj.textContent = "A - strings"; 
       answerBObj.textContent = "B - booleans";
       answerCObj.textContent = "C - alerts";
       answerDObj.textContent = "D - numbers";
       break;
          
    case 1:
     
       quizQuesObj.textContent  = "The condition in an if / else statement is enclosed within _________";
       answerAObj.textContent = "A - quotes"; 
       answerBObj.textContent = "B - curly brackets" ;
       answerCObj.textContent = "C - parenthesis";
       answerDObj.textContent = "D - square brackets";
       break;
 
    case 2:
       
       quizQuesObj.textContent  = "Arrays in Javascript can be used to store _________";
       answerAObj.textContent = "A - numbers & strings"; 
       answerBObj.textContent= "B - other arrays";
       answerCObj.textContent = "C - booleans";
       answerDObj.textContent = "D - all of the above";
       
       break;

   case 3:
      
       quizQuesObj.textContent  = "String values must be enclosed with __________ when being assigned to variables";
       answerAObj.textContent  = "A - commas"; 
       answerBObj.textContent = "B - curly brackets";
       answerCObj.textContent = "C - quotes";
       answerDObj.textContent = "D - parenthesis";
       
       break;

   case 4:
      
       quizQuesObj.textContent  = "A very useful tool used during development and debugging for printing content to the debugger is:";
       answerAObj.textContent  = "A - javascript"; 
       answerBObj.textContent = "B - terminal/bash" ;
       answerCObj.textContent = "C - for loops";
       answerDObj.textContent = "D - console log";
       
       break;

    case 5:
 
    quizQuesObj.textContent  = "Congratulation your score is " + quizTimeS + " sec." + " Enter your initials below.";

    quizBtnAObj.style.display = "none";
    quizBtnBObj.style.display = "none";
    quizBtnCObj.style.display = "none";
    quizBtnDObj.style.display = "none";
    answerAObj.style.display = "none";
    answerBObj.style.display = "none";
    answerCObj.style.display = "none";
    answerDObj.style.display = "none";
    quizTimeObj.style.display = "none";  
    callFinishWindow();     
    break;

   default:
   break;    
   
}
} 

//sSend required intems to the finish window.
function callFinishWindow(){
    
        var qt = document.getElementById("quizTime").id;
        sessionStorage.setItem("quizTimeSent", quizTimeObj);
        window.open("finish.html","_blank");  

}




