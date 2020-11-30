
//***************************************finish.html JS ***************************************
//Get required objects
var thisWinHighScore = document.getElementById("highScore");

//Get previous window variable quizTimeSent and write to this window's variable
var prevWindowHScore = getPrevWinValues("highScoreSent");

thisWinHighScore.textContent = prevWindowHScore;

//Get previous window variables function
function getPrevWinValues(prevValue) {
    var quizTime = localStorage.getItem(prevValue);
    return quizTime;
}




