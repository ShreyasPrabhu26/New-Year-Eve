// A formated Date to get the new year eve
const newYears = "1 Jan " + (new Date().getFullYear() + 1);

// The function does the logic of calculating days, hours, minutes and seconds
function countDown() {
    "use strict";
    // The newYearDate will always give the exact date to the new Years eve
    const newYearsDate = new Date(newYears);
    // The current Date 
    const currentDate = new Date();

    // total seconds
    // To get the time remaining before the new year eve:
    // The new Years Date have to be deducted from the current Date 
    const totalSeconds = (newYearsDate - currentDate) / 1000;

    // return days
    const days = Math.floor(totalSeconds / 3600 / 24);

    // return hours
    const hours = Math.floor(totalSeconds / 3600) % 24;

    // return minutes
    const minutes = Math.floor(totalSeconds / 60) % 60;

    // return seconds
    const seconds = Math.floor(totalSeconds) % 60;

    // ===============================================================
    // Calling the countDownRepo to make changes to the web page
    // ===============================================================
    countDownRepo().days(days);
    countDownRepo().hours(hours);
    countDownRepo().mins(countDownRepo().formatTime(minutes));
    countDownRepo().seconds(countDownRepo().formatTime(seconds));
    // ============================================================
}

// The setInterval here call the countDown as give it an interval of 1000 which make it real time
setInterval(countDown, 1000);


function countDownRepo() {
    return {
        // The is a method that change the days data in the html document
        days: function (day) {
            const days = document.getElementById("days");
            days.innerHTML = day;
        },
        // The is a method that change the hours data in the html document
        hours: function (hour) {
            const hours = document.getElementById("hours");
            hours.innerHTML = hour;
        },
        // The is a method that change the minutes data in the html document
        mins: function (min) {
            const mins = document.getElementById("min");
            mins.innerHTML = min;
        },
        // The is a method that change the seconds data in the html document
        seconds: function (second) {
            const seconds = document.getElementById("sec");
            seconds.innerHTML = second;
        },
        // The is a method that change format time in the html document
        formatTime: function (time) {
            return time < 10 ? `${"0" + time}` : time;
        }
    };
}
