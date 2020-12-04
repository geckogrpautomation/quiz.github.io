
//***************************************index.html JS ***************************************

//Get required objects
var indexHeadingObj = document.getElementById("indexHeading");
var indexQuesObj = document.getElementById("indexQuestion");
var indexStartQuizBtnObj = document.getElementById("indexStartQuizBtn");
var highScoreBtnObj = document.getElementById("highScoreBtn");


highScoreBtn

//Create event listeners
indexStartQuizBtnObj.addEventListener("click", function(){ 
  location.replace("./quiz.html");
});

highScoreBtnObj.addEventListener("click", function(){ 
  location.replace("./highscore.html");
});
 

