const validation=document.querySelector('#validation-input')

const borderReplace=function(event){
if(validation.value.length==validation.dataset.length){
validation.classList.add('valid');
validation.classList.remove('invalid');
}
else{
    validation.classList.add('invalid');
    validation.classList.remove('valid');
};
};
    
validation.addEventListener('blur', borderReplace)