// Зроби таку саму галерею як в першому завданні, але використовуючи бібліотеку
// SimpleLightbox, яка візьме на себе обробку кліків по зображеннях, відкриття і 
// закриття модального вікна, а також гортання зображень за допомогою клавіатури.

import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryList.insertAdjacentHTML('beforeend', itemsMarkup);

// rendered items
function createGalleryItemsMarkup(items) {
return items.map(({ preview, original, description }) => {
    return `<li>
<a class="gallery__item" href="${original}">
    <img
class="gallery__image"
src="${preview}"
alt="${description}"
    />
</a>
</li>`
}).join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});
