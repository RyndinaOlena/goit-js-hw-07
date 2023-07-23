import { galleryItems } from './gallery-items.js';
// Change code below this line

// const galleryEl = document.querySelectorAll('.galleryItems')
// console.log(galleryEl)
console.log(galleryItems);
const galleryItem = document.querySelector('.gallery')

const galleryEl = galleryItems.reduce((acc, img) => {
    return acc + `<li class="gallery__item">
  <a class="gallery__link" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
    />
  </a>
</li>`
}, '')
galleryItem.insertAdjacentHTML('beforeend', galleryEl)


galleryItem.addEventListener('click', showOriginalImg)
function showOriginalImg(e) {
    e.preventDefault()

    if (e.target.nodeName !== 'IMG') {
        return false
    }

    const imgSource = e.target.getAttribute('data-source')
    const instance = basicLightbox.create(`
    <img src ="${imgSource}"/>
    `)

    instance.show()
    window.addEventListener('keydown', (evt) => onEscape(evt, instance), { once: true })

}
function onEscape(evt, instance) {
    if (evt.code === 'Escape') {
        instance.close()
    }
}
