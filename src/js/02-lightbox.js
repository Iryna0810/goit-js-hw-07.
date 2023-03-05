import { galleryItems } from './gallery-items.js';
// Change code below this line
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";

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
const imageEl = document.querySelectorAll('.gallery__image');


imagesList.addEventListener("click", event => {

  event.preventDefault();
    
  if (event.target.nodeName !== 'IMG') {
        return;
  }
    
    console.log(event.target)
    const bannerUrl = event.target.src;
  
    let gallery = $('.gallery__image a').simpleLightbox();
    gallery.sourceAttr = bannerUrl;
    console.log(gallery);
    gallery.open();
    
//     gallery.on('show.simplelightbox', function () {
//     gallery.open();
// });
}
)

