const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ingredientsCall =document.querySelector('#ingredients');
  const ingredientsPicker=ingredients.map(element=>{
    const ingredientsEl=document.createElement('li');
    ingredientsEl.textContent=element;
 return ingredientsEl});
  ingredientsCall.append(...ingredientsPicker);
   