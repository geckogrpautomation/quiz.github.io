
//***************************************index.html JS ***************************************

//Get required objects
var rtnStartQuizObj = document.getElementById("rtnStartQuiz");

//Create event listeners
rtnStartQuizObj.addEventListener("click", function(){ 
  location.replace("./index.html");
});

const highScTbl = "High Score";
const tblID = "ulHighScore";
 
 
//Get high score table from 
highScTblData= JSON.parse(localStorage.getItem(highScTbl));

//Return keyed entries to manage name and array high score move together
// ASK SAM FOR HELP HERE
var highScTblDataEntries = highScTblData.highscore.entries();

buildTable(tblID,highScTblData);


//Call loop function to build list
function buildTable(id,tblData){

  
   var table = document.getElementById(id);

    for (var i=0; i < tblData.name.length; i++) {   

    var row = table.insertRow(i);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = tblData.name[i];
    var cell2 = row.insertCell(1);
    cell2.innerHTML = tblData.highscore[i];
  } 
    
}


