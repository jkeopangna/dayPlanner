
var currentHour = moment().format('h')
console.log(currentHour);
var today = moment().format('dddd, MMMM Do YYYY');
console.log(today);
document.getElementById('currentDay').innerHTML = today
var save = document.getElementsByClassName('saveBtn')
console.log(save);


////////////////////////////////////////////////////////////////

    //current hour = currentHour
    //get the hour for each inputfield $(this).getAttribute
    // is this current input field = > or < the current time
    // add the appropiate class
    // Set data value/id to each input field to compare to currentHour


// function timeBlock()
// console.log(currentHour)
// $('.task').each(function(index){
//     console.log($(this));
//     if ( < currentHour) {
//         $(this).addClass('current')
//     }

// })
// }
// timeBlock();


//////////////////////////////////////////////////////////////


// add your event listners and get to console.log the value of the related input

// $(save).click(function(saveData) {
// // var entry = document.querySelectorAll('.task');
// var saveEntry = localStorage.getElementsByClassName('task')
// console.log(saveEntry);
// localStorage.setItem('input', JSON.stringify(entry));

// })

$('.saveBtn').on("click", function() {
  var entry = $(this).siblings('.task').val()
    var time = $(this).siblings().attr('data-time')
localStorage.setItem(time, entry);
localStorage.getItem('.task', 'data-time');
    }
  );
  
 
$('#9AM .task').val(localStorage.getItem('.task'))
