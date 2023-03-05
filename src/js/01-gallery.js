import { galleryItems } from './gallery-items.js';
// Change code below this line

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
    if (event.target.nodeName!== 'IMG') {
        return;
    }
    console.log(event.target.dataset)
    const bannerUrl = event.target.dataset.source;
    console.log(bannerUrl);
    // bannerImgEl.src = bannerUrl;
const instance = basicLightbox.create(`
    <img src="${bannerUrl}" width="800" height="600">
`)

instance.show()
}
)




