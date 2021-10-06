const input=document.querySelector('#font-size-control');
const span=document.querySelector('#text');
console.dir(input);
console.dir(span);
const sizeControl=function(event){
        input.value === span.fontSize;
        return span.fontSize;
}


    
input.addEventListener('change', sizeControl)