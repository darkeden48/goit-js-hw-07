
const itemH=document.querySelectorAll('li.item');
console.log(`В списке ${itemH.length} категории`);
itemH.forEach(num=>console.log(`Категория: ${num.firstElementChild.textContent}
Количество элементов: ${num.lastElementChild.children.length}`));
