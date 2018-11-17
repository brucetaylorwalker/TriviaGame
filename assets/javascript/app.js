var number = 60;
var intervalId;

var correct = 0;
    console.log("correct: " + correct);
var incorrect = 0;
    console.log("incorrect: " + incorrect);
var unanswered = 0;
    console.log("unanswered: " + unanswered);

 

$("#correct").text(correct);
$("#incorrect").text(incorrect);
$("#unanswered").text(unanswered);

$("#start").on("click", run);
$("#finished").on("click", stop);

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    $("#question").show();
    $("#start").hide();
    $("#start-header").hide();
}
function decrement() {
    number--;
    $("#timer-display").html("<h1>" + number + "</h1>");
    if (number === 0) {
        stop();
        $("#question").hide();
    }
}

function stop() {
    clearInterval(intervalId);
    $("#question").hide();
    $("#results").show();
    $("#timer-display").hide();
   
    // var selValue = $('input[name=q-1]:checked').val();
    // console.log(selValue);
    
    }

 
    
    

    

    
   



