var colors = [
    "rgb(255, 0, 0)",
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]
var colorDisplay = document.getElementById("colorDisplay");
var pickedColor= colors[3];
colorDisplay.textContent = pickedColor;
var squares = document.querySelectorAll(".square");
for (var i=0 ; i < squares.length; i++){
    //add colors to squares
    squares[i].style.backgroundColor = colors[i];
    //add click listener to squares
    squares[i].addEventListener("click", function(){
    //get the clicked square Color.
    var clickedColor = this.style.backgroundColor;
    //compare the clicked square color with the picked Color.
    if (clickedColor === pickedColor){
        alert ("Correct");
    } else {
        alert("Wrong!!");
    }
    });
}
