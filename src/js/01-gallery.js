// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";


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
