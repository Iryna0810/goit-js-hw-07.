import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const makeGalleryCard = ({ preview, original, description }) => {
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;   
}
const imagesList = document.querySelector('.gallery');

const markup = galleryItems.map((data) => makeGalleryCard(data)).join("");

imagesList.insertAdjacentHTML('afterbegin', markup);

const imageEl = document.querySelectorAll('.gallery__image')



imagesList.addEventListener("click", event => {


  event.preventDefault();
    
  if (event.target.nodeName !== 'IMG') {
        return;
    }
  const bannerUrl = event.target.dataset.source;
  const instance = basicLightbox.create(`
    <img src="${bannerUrl}" width="800" height="600">
`)
    instance.show()
}
)


