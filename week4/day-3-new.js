// Q1:
// prevent myForm from refreshing the page on submit
// if the value of the input is "multiply"
// grab the value of #num1 and #num2
// and show the answer as an alert.

const multiplication = document.querySelector("#myForm");
const num1 = document.querySelector("#num1");
const num2 = document.querySelector("#num2");
const answer = document.querySelector("#answer");

console.log(num1)

multiplication.addEventListener("submit", function (e) {
  e.preventDefault();
  if (answer.value == "multiply") {  
    alert (num1.textContent * num2.textContent)
  } else {
    alert ('Clean your room. -Your Mom')
  }

});

// Q2:
// update #box to the background color green when
//myBtn is clicked.

const myBtn = document.querySelector("#myBtn");
const box = document.querySelector("#box");

myBtn.addEventListener("click", function(e))








