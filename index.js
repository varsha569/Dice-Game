function promptname(PlayerNumber){
const name= prompt(`Enter the name for Player ${PlayerNumber}`).toUpperCase();
const PlayerName= document.getElementById(`player${PlayerNumber}-name`);
PlayerName.textContent = name;
return name;
}
var player1name=promptname(1);
var player2name=promptname(2);
function rollDice() {
var randomnumber1=Math.random();
randomnumber1=randomnumber1*6;
randomnumber1=Math.floor(randomnumber1)+1;
console.log(randomnumber1);

//For Player1
if (randomnumber1 === 1) {
    document.querySelector(".dice .one").setAttribute("src", "images/dice1.png");
} 
else if (randomnumber1 === 2) {
    document.querySelector(".dice .one").setAttribute("src", "images/dice2.png");
}
else if (randomnumber1 === 3) {
    document.querySelector(".dice .one").setAttribute("src", "images/dice3.png");
}
else if (randomnumber1 === 4) {
    document.querySelector(".dice .one").setAttribute("src", "images/dice4.png");
}
else if (randomnumber1 === 5) {
    document.querySelector(".dice .one").setAttribute("src", "images/dice5.png");
}
else{
    document.querySelector(".dice .one").setAttribute("src", "images/dice6.png");
}

//For Player2
var randomnumber2=Math.random();
randomnumber2=randomnumber2*6;
randomnumber2=Math.floor(randomnumber2)+1;
console.log(randomnumber2);

if (randomnumber2 === 1) {
    document.querySelector(".dice .two").setAttribute("src", "images/dice1.png");
} 
else if (randomnumber2 === 2) {
    document.querySelector(".dice .two").setAttribute("src", "images/dice2.png");
}
else if (randomnumber2 === 3) {
    document.querySelector(".dice .two").setAttribute("src", "images/dice3.png");
}
else if (randomnumber2 === 4) {
    document.querySelector(".dice .two").setAttribute("src", "images/dice4.png");
}
else if (randomnumber2 === 5) {
    document.querySelector(".dice .two").setAttribute("src", "images/dice5.png");
}
else{
    document.querySelector(".dice .two").setAttribute("src", "images/dice6.png");
}
change(randomnumber1,randomnumber2)
}
function change(randomnumber1,randomnumber2){
    if (randomnumber1 === randomnumber2)
    {
        document.querySelector("h1").innerHTML = "It's a Tie,TRY AGAIN!!";
        var tie  =  new Audio("sounds/tie.mp3");
        tie.play();
    }
    else if (randomnumber2 <= randomnumber1)
    {
        document.querySelector("h1").innerHTML = `${player1name} Wins 🥳🎉`;
    }
    else {
        document.querySelector("h1").innerHTML = `${player2name} Wins🥳🎉`;
    }
}
function diceRoll(){
    var audio = new Audio("sounds/diceRoll.mp3");
    audio.play();
}