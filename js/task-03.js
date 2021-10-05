const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
  const galleryCall = document.querySelector('#gallery');
  const galleryRead= images.map(image=>{
    const imageEl = document.createElement('li');
    const imageImg = document.createElement('img');
    imageImg.setAttribute('src',image.url);
    imageImg.setAttribute('alt',image.alt);
    imageEl.append(imageImg);
   return imageEl;
  });
  // galleryCall.append(...galleryRead)
  galleryCall.insertAdjacentHTML('beforeend', )
    



  // const ingredientsCall =document.querySelector('#ingredients');
  // const iou = ingredients.map(ingredient=> {
  //     const item = document.createElement("li");
  //     item.textContent = ingredient;
  //     return item;
  // });
  //   ingredientsCall.append(...iou);
