import { galleryItems } from './gallery-items.js';
// Change code below this line



const galleryItem = document.querySelector('.gallery');

const galleryEl = galleryItems.reduce((acc, img) => {
    return acc + `<li class="gallery__item">
   <a class="gallery__link" href="${img.preview}">
      <img class="gallery__image" src="${img.preview}" alt="${img.description}" />
   </a>
</li>`
}, '');
galleryItem.insertAdjacentHTML('beforeend', galleryEl);

const lightbox = new SimpleLightbox('.gallery a', { captions: true, captionSelector: 'img', captionsData: 'alt', captionDelay: 250 })
