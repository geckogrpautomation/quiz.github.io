
//***************************************finish.html JS ***************************************
//Get required objects
var thisWinHighScore = document.getElementById("highScore");

//Get previous window variable quizTimeSent and write to this window's variable
var prevWindowHScore = getPrevWinValues("highScoreSent");

thisWinHighScore.textContent = "Your High Score is : " + prevWindowHScore;

//Get previous window variables function
function getPrevWinValues(prevValue) {
    var quizTime = sessionStorage.getItem(prevValue);
    return quizTime;
}

//Get Save High Score button
var saveHighScore = document.getElementById("storeHighScore");


//Add event listener highscore save button 
saveHighScore.addEventListener("click",function(){
    storeHS();
});



function storeHS(){
//Start high score function

//Get user name input box object
var userName = document.getElementById("nameInput");


var lastHS = localStorage.getItem(userName.value);
var thisHS = prevWindowHScore;
console.log(lastHS);
console.log(thisHS);
console.log(userName.value);


if (lastHS ===  null || lastHS === undefined) {
    localStorage.setItem(userName.value , thisHS);
    
  } else if ((lastHS != "null") && (parseInt(lastHS) >= parseInt(thisHS)) && (lastHS > 0)) {
    localStorage.setItem(userName.value , thisHS);

  } else {
    alert("Your last score was better. Try again!");
  }

 
//End function
}


