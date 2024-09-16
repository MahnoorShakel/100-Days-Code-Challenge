const displayResult = document.querySelector(".output input");
const equalBtn= document.querySelector(".cal-buttons .equal-btn");

equalBtn.addEventListener("click", function() {
   if(!displayResult.value){
       displayResult.value = "";
   } else{
    displayResult.value = eval(displayResult.value.replace("%" , "/100"));
   }
});

//Dark mode

const toggle = document.getElementById("toggle");
const body = document.querySelector(".container");

toggle.onclick = () => {
    body.classList.toggle("active");
};