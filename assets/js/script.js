const bodyElement = document.body;
const dateTime = document.getElementById("currentDay");
const currentHour = moment().hour();
// Get data from Local Storage
const nineEvent = localStorage.getItem("Nine");
const tenEvent = localStorage.getItem("Ten");
const elevenEvent = localStorage.getItem("Eleven");
const twelveEvent = localStorage.getItem("Twelve");
const oneEvent = localStorage.getItem("One");
const twoEvent = localStorage.getItem("Two");
const threeEvent = localStorage.getItem("Three");
const fourEvent = localStorage.getItem("Four");
const fiveEvent = localStorage.getItem("Five");

// OnLoad Function
$(document).ready(function  () {
    function update() {
        $("#currentDay").text(moment().format("dddd Do MMMM, HH:mm:ss"));
    }
    setInterval(update, 1000);
    $("#nine").text(nineEvent);
    $("#ten").text(tenEvent);
    $("#eleven").text(elevenEvent);
    $("#twelve").text(twelveEvent);
    $("#one").text(oneEvent);
    $("#two").text(twoEvent);
    $("#three").text(threeEvent);
    $("#four").text(fourEvent);
    $("#five").text(fiveEvent);
})

// Using Time Blocks to determine whether the time is past present or future
const timeBlocks = $(".container .row");
const callback = function () {
    const timeBlockTime = $(this).data("time");
    if (timeBlockTime === currentHour) {
        $(this).find("textarea").removeClass("past").addClass("present");
    }
    if(timeBlockTime > currentHour) {
        $(this).find("textarea").removeClass("past").addClass("future");
    }
};
timeBlocks.each(callback);