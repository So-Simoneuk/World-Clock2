


let location1Element = document.querySelector ("#location1");
let location1DateElement = document.querySelector(".date");
let location1TimeElement = document.querySelector(".time");
let location1Time = moment();
location1DateElement.innerHTML = location1Time.format("MMMM Do YYYY");
location1TimeElement.innerHTML = location1Time.format("h:mm:ss [<small>]A[</small>]");

