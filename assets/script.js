$(document).ready(function () {

    var x = false;
    var now = moment().format('LLLL'); // shows: Day, M/D/Y/T format

    let now24 = moment().format('H'); // 12 hour clock format
    let now12 = moment().format('h'); // 24 hour clock format in case person using is outside US.
    if (x) {
        now24 = 13;
        now12 = 1;
    }

    // Displays current date
    const currentDate = $('#currentDay');
    currentDate.text(now);

     // initial date and time
    var initial = new Date();
    // returns 0-23 on a 24 hour clock
    var currentHour = initial.getHours(); 

    for (var i = 8; i < 18; i++) {
        if (i < currentHour) {
            document.getElementById(i.toString()).classList.add('past');
        } else if (i === currentHour) {
            document.getElementById(i.toString()).classList.add('present');
        } else if (i > currentHour) {
            document.getElementById(i.toString()).classList.add('future');
        }
    }
 
