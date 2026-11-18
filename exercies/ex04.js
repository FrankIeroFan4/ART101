// the clicker button program

let count=0;

let colors=["green","orange","brown","yellow","gold","purple","red","pink"];

let buttonText="";

$("#butt-button").click( function() {
    //what to do when the button is clicked
    
    count = count + 1;

    console.log(count);
    console.log(colors[count-1]);

    buttonText="VAGINA: " + count + " " + colors[count-1];


    $("#butt-button").html( buttonText );
     
    $("body").css("background-color", colors[count-1]);
    
    $("body").append("<img src='" +colors[count-1] +".jpg'>" );

    
});

