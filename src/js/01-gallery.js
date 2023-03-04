import { galleryItems } from './gallery-items.js';
// Change code below this line
const makeGalleryCard = ({ preview, original, description }) => {
    return `<a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>`;   
}
const imagesList = document.querySelector('.gallery');
console.log(imagesList);

const markup = galleryItems.map((data) => makeGalleryCard(data)).join("");

imagesList.insertAdjacentHTML('afterbegin', markup);


console.log(galleryItems);
