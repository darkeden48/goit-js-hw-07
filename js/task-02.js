const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
  const ingredientsCall =document.querySelector('#ingredients');
  const iou = ingredients.map(ingredient=> {
      const item = document.createElement("li");
      item.textContent = ingredient;
      return item;
  });
    ingredientsCall.append(...iou);