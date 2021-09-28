const decr=document.querySelector('[data-action="decrement"]');
const incr=document.querySelector('[data-action="increment"]');
const counterValue=document.getElementById("value");
const increment=function(){
    counterValue.textContent++;
    console.log(counterValue);
    
};
const decrement=function(){
    counterValue.textContent--;
    console.log(counterValue);
}

decr.addEventListener('click',decrement);
incr.addEventListener('click',increment);


