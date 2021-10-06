const input= document.querySelector('#name-input');
const span= document.querySelector('#name-output');

const showName=function(event){
console.log(event.currentTarget.value);
if(input.value===""){
span.textContent="незнакомец";
}
else{
span.textContent=event.currentTarget.value;
}
};

input.addEventListener('input', showName);