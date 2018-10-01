var numSquares = 6;
var colors = generateRandomColors(numSquares);
var messageDisplay=document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");
var resetButton = document.querySelector("#reset");
var modeButtons =document.querySelectorAll(".mode");

for(var i=0; i< modeButtons.length;i++){
    modeButtons[i].addEventListener("click",function(){
    modeButtons[0].classList.remove("selected");
    modeButtons[1].classList.remove("selected");
    this.classList.add("selected");
    //figure out how many squares to show "mode"
    this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
    // if(this.textContent === "Easy"){
    //     numSquares = 3;
    // }else{
    //     numSquares = 6;
    // }
    //generate new colors
    //pick a new pickedColor
    //update page to reflect changes
    reset();
    });
};
function reset(){
    colors = generateRandomColors(numSquares);
    pickedColor= pickColor();
    messageDisplay.textContent = "";
    colorDisplay.textContent= pickedColor;
    resetButton.textContent = "New Colors";
    for (var i=0 ; i < squares.length; i++){
        if (colors[i]){
        squares[i].style.display = "block";
        squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor="steelblue";
    }
// easyButton.addEventListener("click",function(){
// easyButton.classList.add("selected");
// hardButton.classList.remove("selected");
// numSquares=3;
// colors = generateRandomColors(numSquares);
// pickedColor= pickColor();
// colorDisplay.textContent= pickedColor;
// for (var i=0; i < squares.length; i++){
//     if(colors[i]){
//         squares[i].style.backgroundColor = colors[i];
//     }else {
//         squares[i].style.display= "none";
//     }
// }
// });
// hardButton.addEventListener("click",function(){
//     easyButton.classList.remove("selected");
//     hardButton.classList.add("selected");
//     numSquares=6;
//     colors = generateRandomColors(numSquares);
//     pickedColor= pickColor();
//     colorDisplay.textContent= pickedColor;
// for (var i=0; i < squares.length; i++){
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display= "block";
// }
// });

resetButton.addEventListener("click",function(){
reset();
});
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
        resetButton.textContent = "Play Again!";
    } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
    }
    });
}
//function to assign color to each square once the correct answer is selected
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