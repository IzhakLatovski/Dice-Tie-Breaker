var name1 = prompt("Player 1 name:");
var name2 = prompt("Player 2 name:");
var sound = new Audio("sounds/rollSound.mp3");

document.querySelector(".player1").innerHTML = name1;
document.querySelector(".player2").innerHTML = name2;

function playGame() {
  var randomNumber1 = Math.floor(Math.random()*6)+1;
  var randomNumber2 = Math.floor(Math.random()*6)+1;
  sound.play();

  document.querySelector(".img1").setAttribute("src","images/dice" + randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src","images/dice" + randomNumber2 + ".png");

  if(randomNumber1<randomNumber2) {
    document.querySelector("h1").innerHTML = (name2 +" Wins! 🚩");
  } else if (randomNumber1>randomNumber2) {
    document.querySelector("h1").innerHTML = ("🚩 " + name1 + " Wins!");
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }
}

  playGame();

  document.querySelector(".roll-button").addEventListener("click", function() {
    playGame();
  });
