/***************************************************************************************
*    Title: Nostalgia: Dragging the Windows XP error dialog
*    Author: Marco (Marcofolio.net)
*    Date: 2017 - 2018
*    Availability: http://old.marcofolio.net/webdesign/nostalgia_dragging_the_windows_xp_error_dialog.html
*
***************************************************************************************/

// // Time for the interval to duplicate the dialog
// var DUPLICATIONTIME = 50;
 
// // Maxium count of windows before BSOD
// var MAXWINDOWCOUNT = 200;

 
// $(document).ready(function()
// {
//    // Handle for the intervalID
//    var intervalId;
   
//    // Make the dialog draggable
//    $("#errordialog").draggable({
//       handle : 'img', // Only the heading is draggable
//       containment : 'animate', // Prevent the window getting dragged out the parent
//       start: function(event, ui) {
//          // Create an interval when the user starts dragging the window
//          intervalId = setInterval("duplicateWindow()", DUPLICATIONTIME);
//       },
//       stop: function(event, ui) {
//          // Clear the interval when the user stopped dragging
//          clearInterval(intervalId)
//       }
//    });
// });


// var windowCount = 0;
// var errorDialogZIndex = 1;
// function duplicateWindow() {
//    // Clone the error dialog and append it to the Windows XP screen
//    var clone = $("#errordialog").clone().appendTo('#animate');
   
//    // Bring the dragging error dialog up front by changing the Z-index
//    errorDialogZIndex++;
//    $("#errordialog").css('z-index', errorDialogZIndex);
   
//    // Check if the maximum window count has been reached
//    windowCount++;
//    if(windowCount == MAXWINDOWCOUNT) {
//       $("#animate")
//          .empty()
//          .css('background-color', 'black');
//    }
// }

// let c = document.getElementById("canvas");
// var ctx = c.getContext("2d");

let img;

function preload() {
  img = loadImage('assets/images/comp.svg');
}

function setup() {
  let canvas = createCanvas(window.innerWidth, 600);
  canvas.parent('animate');
  background("white");
  translate(width/2 - img.width/2, height/2 - img.height/2);
  image(img,0,0);
  img.resize(100%,100%);
}

function draw() {
   // background(220);
   if (mouseIsPressed === true){
      translate(-img.width/2, -img.height/2);
      image(img,mouseX,mouseY);
      img.resize(100%,100%);
   }
}




