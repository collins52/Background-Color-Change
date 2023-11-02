// var x = document.getElementById("myDiv");
// var CSSstyle = getComputedStyle(x);
// var backgroundColor = CSSstyle.backgroundcolor;
// function myFunction() {
//     if (backgroundColor === "rgb(173, 216, 230)") {
//         x.style.background = "rgb(255, 0, 0)";
//     } else if (backgroundColor === "rgb(255, 0, 0)"){
//         x.style.backgroundcolor = "rgb(255, 255, 0)";
//     } else if (backgroundColor === "rgb(255, 255, 0)"){
//         x.style.background = "blue";
//     } else if (backgroundColor === "blue"){
//         x.style.background = "orange";
//     } else if (backgroundColor === "orange"){
//         x.style.background = "purple";
//     } else if (backgroundColor === "purple"){
//         x.style.background = "green";
//     } else{
//         x.style.background = "pink";
//     }
// }


var x = document.getElementById("myDiv");

    function myFunction() {
      var CSSstyle = getComputedStyle(x);
      var backgroundColor = CSSstyle.backgroundColor;

      if (backgroundColor === "rgb(173, 216, 230)") {
        x.style.backgroundColor = "rgb(255, 0, 0)"; // Change to red
      } else if (backgroundColor === "rgb(255, 0, 0)") {
        x.style.backgroundColor = "rgb(255, 255, 0)"; // change to yellow
      } else if (backgroundColor === "rgb(255, 255, 0)") {
        x.style.backgroundColor = "rgb(0, 0, 255)"; // Change to blue
      } else if (backgroundColor === "rgb(0, 0, 255)") {
        x.style.backgroundColor = "rgb(255, 165, 0)"; // Change to orange
      } else if (backgroundColor === "rgb(255, 165, 0)") {
        x.style.backgroundColor = "rgb(128, 0, 128)"; // Change to purple
      } else if (backgroundColor === "rgb(128, 0, 128)") {
        x.style.backgroundColor = "rgb(0, 128, 0)"; // Change to green
      } else if(backgroundColor === "rgb(0, 128, 0)") {
        x.style.backgroundColor = "rgb(255, 192, 203)"; // Change to pink
      } else if(backgroundColor === "rgb(255, 192, 203)"){
        x.style.backgroundColor = "rgb(173, 216, 230)" //changes to skyblue
      }
    }