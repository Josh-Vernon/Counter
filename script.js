const number = document.getElementById("number");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const reset = document.getElementById("zero");
let value = 0;

plus.addEventListener("click",()=>{
    value += 1;
    color(value);
    number.innerHTML = value;
});
minus.addEventListener("click",()=>{
    value -= 1;
    color(value);
    number.innerHTML = value;
});
reset.addEventListener("click",()=>{
    value = 0;
    color(value);
    number.innerHTML = value;
});
 const color = (value) =>{
    if(value < 0){
        number.style.color = "red";
    }
    else if(value > 0){
        number.style.color = "green";
    }
    else{
        number.style.color = "black";
    }
 }