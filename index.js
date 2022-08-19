
var randomNumber1 ="dice" + Math.ceil(Math.random() * 6) + ".png";
var randomImageSource = "images/"+randomNumber1;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

//for Player2

var randomNumber2 ="dice" + Math.ceil(Math.random() * 6) + ".png";
var randomImageSource = "images/"+randomNumber2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);

//deciding winner

if(randomNumber1 === randomNumber2){
  document.querySelector(".result").textContent ="We have a Draw Roll again!";
}
else if(randomNumber1 > randomNumber2){
  document.querySelector(".result").textContent ="Player1 Wins!";
}
else{
  document.querySelector(".result").textContent ="Player2 Wins!";
}
