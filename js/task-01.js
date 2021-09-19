
const navH=document.querySelectorAll('li.item');
console.log(`В списке ${navH.length} категории`);
navH.forEach(num=> console.log('Категория:', num.firstElementChild.textContent, 
'Количество элементов:', num.lastElementChild.children.length));

