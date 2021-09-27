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
  const imagesCall =document.querySelector('#gallery');
  const imagesPicker=images.map(element=>{
    const imagesEl=document.createElement('li');
    // imagesEl.textContent=element.alt;
    const imagesImg=document.createElement('img');
    imagesImg.setAttribute('src', element.url);
    imagesImg.setAttribute('alt', element.alt);
    imagesEl.insertAdjacentHTML('afterbegin', `<img> ${src=element.url, alt=element.alt};`)
 return imagesEl});
  imagesCall.append(...imagesPicker);

//   src=element.url, alt=element.alt
