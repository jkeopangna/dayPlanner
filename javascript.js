
var currentHour = moment().format('h')
console.log(currentHour);
var today = moment().format('dddd, MMMM Do YYYY');
console.log(today);

document.getElementById('currentDay').innerHTML = today
// var entry = document.getElementsByTagName('INPUT');
// console.log(entry)

    //current hour = currentHour
    //get the hour for each inputfield $(this).getAttribute
    // is this current input field = > or < the current time
    // add the appropiate class
    // Set data value/id to each input field to compare to currentHour


function timeBlock(){
console.log(currentHour)
$('.task').each(function(index){
    console.log($(this))

})
}
timeBlock();



// add your event listners and get to console.log that vlue of the related inpu
