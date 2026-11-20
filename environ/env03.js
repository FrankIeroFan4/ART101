let environmentTitle = "Kidnapping";

let environmentElements = ["webs", "dust", "stormy clouds", "half-open windows"];

let mainEntity = {
    name: "SpiderMan",
    type: "Candy Striped Legs",
    mood: "Swift and Creepy",
    isMoving: true,
    favoriteElement: environmentElements[1]
};

$("#butt-button").click( function() {
    //what to do when the button is clicked
    


    buttonimg = "<img src='" + mainEntity.favoriteElement +"creepyeye.png'>";


    $("#butt-button").html( buttonimg );
     
    $("body").css("background-color",);
    
    $("body").append("<img src=creepyeye.png'" );

    $("body").css("size", "50px")

});
