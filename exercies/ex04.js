// the clicker button program

let counter=0;

$("#butt-button").click( function(){
    //what to do when the button is clicked
    counter = counter + 1;
    $("#butt-button").html("I was clicked " + counter + " times");

});