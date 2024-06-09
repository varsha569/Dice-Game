// script.js
function startGame() {
    var audio = new Audio("sounds/start.mp3");
    audio.play();
    setTimeout(function() {
        window.location.href = "dice.html"; // redirect to the ludo game page
    }, 2000);
}
