let environmentTitle = "Kidnapping";

let environmentElements = ["webs", "dust", "stormy clouds", "half-open windows"];

let mainEntity = {
    name: "SpiderMan",
    type: "Candy Striped Legs",
    mood: "Swift and Creepy",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

let buttonText = "you fractured me.";


$("#dust-button").click( function() {
    //what to do when the button is clicked
    
    buttonimg = "<img src='" + mainEntity.favoriteElement +"creepyeye.png'>";


    $("#dust-button").html( buttonimg );
     
    $("body").css("background-color",);
    
    $("body").css("size", "20px")

});


$( "#eye-button" ).click( function() {

    let message = "<p> you fractured me. </p>";

    $("#eye-button").html( message );

    $("body").css("background-color", "black");

    $("body").css("text-color", "blue ");

});

$( "#stormyclouds-button" ).click( function() {

    buttonimg = "<img src='" + mainEntity.favoriteElement +"stormycloudsflower.png'>";

    $("#stormyclouds-button").html( buttonimg );
    

});
