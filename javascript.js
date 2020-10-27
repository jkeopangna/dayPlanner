///////////////// Global Variables ////////////////////
var time = moment().format('h');
console.log(time);
var past = moment().format('9:00');
console.log(past)
var future = moment().format('5:00');
console.log(future);
var currentHour = document.getElementsByTagName('textarea')
console.log(currentHour)
var today = moment().format('dddd, MMMM Do YYYY');
console.log(today);
document.getElementById('currentDay').innerHTML = today
var save = document.getElementsByClassName('saveBtn')
console.log(save);


////////////////////Time Function//////////////////////

function timeBlock() {
if (past < time) {
  $(currentHour).addClass('.past')
} else if (past = time) {
  $(currentHour).addClass('.current')
} if (time < future) {
  $(currentHour).addClass('.future')
} else if (future = time) {
  $(currentHour).addClass('.current')
}
}

timeBlock();

//current hour = currentHour
    //get the hour for each inputfield $(this).getAttribute
    // is this current input field = > or < the current time
    // add the appropiate class
    // Set data value/id to each input field to compare to currentHour


////////////////////Local Storage//////////////////////


$('.saveBtn').on("click", function() {
  var entry = $(this).siblings('.task').val()
    var time = $(this).siblings().attr('data-time')
localStorage.setItem(time, entry);
localStorage.getItem('.task', 'data-time');
    });
  
 
$('#9AM .task').val(localStorage.getItem('.task'))
