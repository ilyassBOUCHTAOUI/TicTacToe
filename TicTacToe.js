
var winner = document.getElementById("winner");
var winWord = document.getElementById("winWord");
var tictactoe = document.getElementById("tictactoe");
var x_wins = document.getElementById("x_wins");
var o_wins = document.getElementById("o_wins");
var GameOver = document.getElementById("GameOver");

var xWins = 0;
var oWins = 0;
o_wins.innerHTML = oWins;
x_wins.innerHTML = xWins;
var GameFinished ;

function ArenaDesign() {
    for (let i = 1; i <= 9; i++) {
        let element = document.getElementById(i);
        if (i == 3 || i == 6) {
            element.style.borderRight = "5px solid";
        } else if (i > 6 && i < 9) {
            element.style.borderBottom = "6px solid";
        } else if (i == 9) {
        }
        else {
            element.style.borderBottom = "6px solid";
            element.style.borderRight = "5px solid";
        }
        element.style.borderColor = "#0075C1";
        element.innerHTML = "";
    }
}
ArenaDesign();

//pick a random player to play 1st 
var role = Math.floor(Math.random() * (1 - 0 + 1) ) + 0;
const xplayer =  document.getElementById("xplayer");
const oplayer =  document.getElementById("oplayer");
const underline = document.getElementById("underline");
function FirstRole() {
    underline.style.display = "block";
    if (role == 0) {
        xplayer.style.color = "#FC2E00";
        underline.style.animationName = "x_firstrole";
        
    } else {
        oplayer.style.color = "#FC2E00";
        underline.style.animationName = "o_firstrole";
    }
}
function displayArena(){
    winner.style.display = "none";
    winWord.style.display = "none";
    xplayer.style.visibility = "visible";
    oplayer.style.visibility = "visible";
    winner.innerHTML = "";
    winner.style.animationName = "";
    tictactoe.style.display = "flex";
    FirstRole();
}
displayArena();

function Play(element){
    if(element.innerHTML == ""){
        if(role == 0){
            element.innerHTML = "X";
            Check("X");
            xplayer.style.color = "";
            oplayer.style.color = "#FC2E00";
            underline.style.animationName = "o_role";
            role++;
        }else{
            element.innerHTML = "O";
            Check("O");
            oplayer.style.color = "";
            xplayer.style.color = "#FC2E00";
            underline.style.animationName = "x_role";
            role--;
        }    
    }
}    

function Check(symbole){
    var CheckDraw = 0;
    var GameisDraw = true;
    var e1 = document.getElementById("1").innerHTML;
    var e2 = document.getElementById("2").innerHTML;
    var e3 = document.getElementById("3").innerHTML;
    var e4 = document.getElementById("4").innerHTML;
    var e5 = document.getElementById("5").innerHTML;
    var e6 = document.getElementById("6").innerHTML;
    var e7 = document.getElementById("7").innerHTML;
    var e8 = document.getElementById("8").innerHTML;
    var e9 = document.getElementById("9").innerHTML;
    if(e1 == symbole &&  e2 == symbole && e3 == symbole  ){
        displayWinner(symbole);
        GameisDraw = false;
    }else if(e4 == symbole && e5 == symbole  && e6 == symbole ){
        displayWinner(symbole);
        GameisDraw = false;
    }else if(e7 == symbole && e8== symbole  && e9== symbole ){
        displayWinner(symbole);
        GameisDraw = false;
    }else if(e1 == symbole && e4== symbole  && e7 == symbole ){
        displayWinner(symbole);
        GameisDraw = false;
    }else if(e2 == symbole && e5== symbole  && e8== symbole ){
        displayWinner(symbole);
        GameisDraw = false;
    }else if(e3 == symbole && e6== symbole  && e9== symbole ){
        displayWinner(symbole);
        GameisDraw = false;
    }else if(e1 == symbole && e5== symbole  && e9== symbole ){
        displayWinner(symbole);
        GameisDraw = false;
    }else if(e3 == symbole && e5== symbole  && e7== symbole ){
        displayWinner(symbole);
        GameisDraw = false;
    }
    for(let i=1;i<=9;i++){
        var Element = document.getElementById(i);
        if(Element.innerHTML != ""){
            CheckDraw++;
        }
    }
    if(CheckDraw == 9 && GameisDraw==true){
        DisplayDraw();
    }
}

function displayWinner(symbole){
    HideArena();
    winWord.style.display = "block";
    winner.style.display = "flex";
    if(symbole == "O"){
        winner.style.animationName = "o_winner";
        oWins +=1;
        o_wins.innerHTML = oWins;
        
    }else{
        winner.innerHTML = "+";
        winner.style.animationName = "x_winner";
        xWins +=1;
        x_wins.innerHTML = xWins;
    }
}
function DisplayDraw(){
    HideArena();
    winner.style.display = "flex";
    winner.innerHTML = "Draw";
    winner.style.animationName = "draw";
}

function HideArena(){
    tictactoe.style.display = "none";
    xplayer.style.visibility = "hidden";
    oplayer.style.visibility = "hidden";
    underline.style.display = "none";
}
function PlayAgain(){
    displayArena();
    ArenaDesign();
}
