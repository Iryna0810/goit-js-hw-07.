import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const makeGalleryCard = ({ preview, original, description }) => {
    return `<a class="gallery__item" 
  href="${original}">
  <img class="gallery__image" 
  src="${preview}"
  alt="${description}" />
</a>`;   
}

const imagesList = document.querySelector('.gallery');

const markup = galleryItems.map((data) => makeGalleryCard(data)).join("");

imagesList.insertAdjacentHTML('afterbegin', markup);

    const lightbox = new SimpleLightbox(".gallery a", {
     captionSelector: 'img',
     captionsData: 'alt',
     captionPosition: 'bottom',
     captionDelay: 250,
     scrollZoom: false,
    });

