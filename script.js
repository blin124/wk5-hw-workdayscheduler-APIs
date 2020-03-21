// it needs to display the current day/date
var intervalId = setInterval (function(){ 
    var currentdate = moment().format('dddd MMMM Do YYYY,');
    var currenttime = moment().format('h:mm:ss a');
    
    $("#current-date").text(currentdate)
    $("#current-time").text(currenttime)

    var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
    for (var i = 0; i < times.length; i++) {
        

    }
    // if time is less than current time then .past, 
    // if time is current then .present,
    // if time more than current time then .future,
}, 1000);


// tips:
// moment().hour()

// for loops

// what is the purpose
// to create a todo list for each time frame

// each time before current time is grey (component)
// each time after current is green
// current time is red



var inputDescription = "";
// when lock button is clicked, input is stored in the localstorage (feature-component of app)
$(".save-buttons").click(function(event) {
    var colText = $(this).parent().parent().children(".col-text").children(".description").val();

    var time = $(this).attr("id")
   
    localStorage.setItem(time, (colText));
});

// localStorage.getItem("key")

var times = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
for (var i = 0; i < times.length; i++) {
    var timeValue = localStorage.getItem(times[i]);

    // set the timeValue to the appropriate text area for each time.
    var textAreaDiv = $('#' + times[i]).parent().siblings(".col-text")[0];
    var description = $(textAreaDiv).children(".description")[0];


    $(description).val(timeValue);
};
