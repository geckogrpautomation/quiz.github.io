
//***************************************finish.html JS ***************************************
//Get required objects
var thisWinHighScore = document.getElementById("highScore");

//Get previous window variable quizTimeSent and write to this window's variable
var prevWindowHScore = getPrevWinValues("quizTimeSent");
thisWinHighScore.textContent = prevWindowHScore.textContent;

//Get previous window variables function
function getPrevWinValues(prevValue) {
    var quizTime = sessionStorage.getItem(prevValue);
    return prevValue;
}




