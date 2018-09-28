var colors = generateRandomColors(6);
var messageDisplay=document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor= pickColor();
colorDisplay.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
var h1= document.querySelector("h1");
for (var i=0 ; i < squares.length; i++){
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listener to squares
    squares[i].addEventListener("click", function(){
    //get the clicked square Color.
    var clickedColor = this.style.backgroundColor;
    //compare the clicked square color with the picked Color.
    if (clickedColor === pickedColor){
        messageDisplay.textContent = "Correct!";
        changeColors(pickedColor);
        h1.style.backgroundColor = pickedColor;
    } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }
    });
}
//function to assign color to each square
function changeColors(color){
//loop through all squares
for(var i = 0 ; i < squares.length ; i++){
//change the background color to match given color
squares[i].style.backgroundColor = color;
}
}
//function to random select a color - to be the goal Goal color of the game!
function pickColor(){
var random = Math.floor(Math.random()*colors.length);
return colors[random];
}
//function to generate random Array of Colors at the start of game.
function generateRandomColors(num){
//create an array.
var arr = [];
//repeat num times.
//push random color into the array
for (var i=0; i< num ; i++){
arr.push(randomColor());
}
//return array
return arr;
}
//function to generate random colors
function randomColor(){
    //pick a red from 0 - 255
    var r = Math.floor(Math.random()* 256);
    //pick a green from 0 - 255
    var g = Math.floor(Math.random()* 256);
    //pick a blue from 0 - 255
    var b = Math.floor(Math.random()* 256);
    return "rgb(" + r + ", "+ g +", " + b +")";
    }