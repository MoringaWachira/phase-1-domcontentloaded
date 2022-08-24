// Your code goes here
// document.addEventListener("DOMContentLoaded", function() {
//     console.log("The DOM has loaded");
//     const text = document.getElementById("text").value;
//     text.innerHTML = "This is really cool!"
// });
// console.log("Before the DOM loads");



document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    document.getElementById("text").innerHTML = "This is really cool!";
    
});
console.log("Before the DOM loads");
