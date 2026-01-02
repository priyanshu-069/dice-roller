var n = Math.floor(Math.random() * 6) + 1
var image = "./images/dice" + n + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", image);

var n2 = Math.floor((Math.random())*6)+1 ;
var image = "./images/dice" + n2 + ".png";
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src" , image);

if(n>n2){
    document.querySelector("h1").innerHTML="Player 1 wins!";
}
else if (n === n2){
    document.querySelector("h1").innerHTML= "Draw!"
}
else{
    document.querySelector("h1").innerHTML = "Player 2 wins!"
}
