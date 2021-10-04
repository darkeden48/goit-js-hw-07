const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ingredientsCall =document.querySelectorAll('#ingredients');
  const ingredientsPicker=ingredients.map(element=>{
    const ingredientsEl=document.createElement('li');
    ingredientsEl.textContent=element;
 return element});
  ingredientsCall.appendChild(element);
   