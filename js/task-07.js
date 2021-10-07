const input=document.querySelector('#font-size-control');
const span=document.querySelector('#text');
console.dir(input);
console.dir(span);
const sizeControl=function(event){
        span.style.fontSize=event.target.value+'em'
}
input.addEventListener('input', sizeControl)