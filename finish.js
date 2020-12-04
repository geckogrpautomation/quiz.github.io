//********************************************************************  finsh.html javascript  ****************************************************************************
//Get required objects
var thisWinHighScore = document.getElementById("highScore");
var saveHighScore = document.getElementById("storeHighScore");
var userName = document.getElementById("nameInput");


//Get previous window variable quizTimeSent and write to this window's variable
var usrHS = getPrevWinValues("highScoreSent");

if (parseInt(usrHS)<=0){
  thisWinHighScore.textContent = "Too many wrong answers. Please try again : " + usrHS;
}else{thisWinHighScore.textContent = "Congratulations your score is : " + usrHS;
}




//Get previous window variables function
function getPrevWinValues(prevValue) {
    var quizTime = sessionStorage.getItem(prevValue);
    return quizTime;
}

//create const datbase name variable

const highScTbl = "High Score";

//Add event listener highscore save button 
saveHighScore.addEventListener("click",function(){
    hsClick();
    
});



//********************************************************************  FUNCTIONS  ****************************************************************************

function hsClick(){
  //Check user has inputted something in the input box
  var entryOK = chkEntry(userName.value,usrHS);
  
  if (entryOK){  
    
    //Get user name table and parse variables into array
    var usrTblData = getTable(highScTbl);
            
    if (usrTblData === null){       
      tblCreate(highScTbl);
      }else {   
      tblExisting(highScTbl);
    }     
  }   
}


//Check user has entered something in their name input
function chkEntry(usr,hs){
  
  if (usr !== "" && hs !== "") {
  return true;
  }else {
  alert("Please enter your name");
  return false;
  
}
}


//Get high score table
function getTable(tbl){
  var table = JSON.parse(localStorage.getItem(tbl));
  
  return table;
}


//If no high score table exists. Create the table
function tblCreate(uNmTbl){  
  let obj = {name: [userName.value] , highscore : [usrHS] };  
  let objJSON = JSON.stringify(obj);    
  localStorage.setItem(uNmTbl,objJSON);
  location.replace("./highscore.html");
}


//If a table exists. Insert the data into it.
function tblExisting(uNmTbl){

  //Get high score table from 
  let highScTblData= JSON.parse(localStorage.getItem(uNmTbl)); 
  let obj = {name: [userName.value] , highscore : [usrHS] }; 
  highScTblData.name.push(obj.name);
  highScTblData.highscore.push(obj.highscore);
  localStorage.removeItem(uNmTbl);
  let objJSON = JSON.stringify(highScTblData); 
  localStorage.setItem(uNmTbl, objJSON);
  location.replace("./highscore.html");
}
  