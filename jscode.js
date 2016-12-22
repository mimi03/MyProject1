/* 
 * MMC150 Assignment 9
 * Event handling support code.
 */

// Add code to use the jQuery ready function to load click handlers
function clickToChangeText(){
$(document).ready(function() {
    $('#button1').on('click', makeRed);
    $('#button2').on('click',makeGreen);
    $('#buttion3').on('click',makeBlue);
    $('#textbutton').on('click',clickToChangeText);
    
});

// for each of the buttons.  Be sure to use only jQuery selectors
// in all code that you write.


// Place your functions to perform the button operations here.

 // declaring functions

    
function makeRed() {
    $('#masterdiv').addClass('redish');
}
function makeGreen() {
    $('#masterdiv').addClass('greenish');
}

function makeBlue() {
    $('#masterdiv').addClass('blueish');
}


//Function to change div text.
$(document).ready(function(){
    var response;
    response = prompt('Enter Text');
    $('#textbutton').addClass('masterdiv');

}); 
}
    
     
    
    


// Optionally you may use anonymous functions as are used in the text.
