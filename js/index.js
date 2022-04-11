/***************************************************************************************
*    Title: JavaScript - How to make multiple divs draggable and movable across the website
*    Author: user6439507
*    Date: June 4, 2019
*    Availability: https://stackoverflow.com/questions/51409650/javascript-how-to-make-multiple-divs-draggable-and-movable-across-the-website
***************************************************************************************/

var draggableElements = document.getElementsByClassName("draggable");
console.log(draggableElements.length); //checking that array exists and is populated

for(var i = 0; i < draggableElements.length; i++){
    dragElement(draggableElements[i]);
}

function dragElement(element) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        element.style.top = (element.offsetTop - pos2) + "px";
        element.style.left = (element.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
/***************************************************************************************/


/***************************************************************************************
*    Title: Randomly Place elements inside the window
*    Author: tiffhockin
*    Date: N.A.
*    Availability: http://jsfiddle.net/tiffhockin/fesvq8u0/
***************************************************************************************/

// // get window width and height
// var winWidth = document.getElementById("projects").offsetWidth - 300;
// var winHeight = document.getElementById("projects").offsetHeight;

// console.log("winWidth = " + winWidth + " winHeight = " + winHeight);

// // i stands for "index". you could also call this banana or haircut. it's a variable
// for (var i=0; i < draggableElements.length; i++) {
//     console.log("running!");
//     // shortcut! the current div in the list
//     var thisDiv = draggableElements[i];
//     // get random numbers for each element
//     randomTop = getRandomNumber(0, winHeight);
//     randomLeft = getRandomNumber(0, winWidth);
//     // update top and left position
//     thisDiv.style.top = randomTop +"px";
//     thisDiv.style.left = randomLeft +"px";
// }

// // function that returns a random number between a min and max
// function getRandomNumber(min, max) {
//   return Math.random() * (max - min) + min;
//   let num = Math.random() * (max - min) + min;
//   console.log(num);
// }
/***************************************************************************************/































