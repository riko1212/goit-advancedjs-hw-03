import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { displayImages, showLoadingIndicator } from './js/render-functions.js';
import { getImagesFromAPI } from './js/pixabay-api.js';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

iziToast.settings({
  position: 'topRight',
  timeout: 3000,
});

// Функція для обробки форми пошуку
const handleSearchSubmit = (event, form, galleryContainer, gallery) => {
  event.preventDefault();
  const query = form.elements.search.value.trim();

  // Якщо запит не порожній
  if (query) {
    showLoadingIndicator(galleryContainer); // Показуємо індикатор завантаження

    // Отримуємо зображення з API
    getImagesFromAPI(query).then(images => {
      displayImages(galleryContainer, images); // Відображаємо зображення
      gallery.refresh(); // Оновлюємо галерею

      // Якщо зображень немає
      if (!images.length) {
        iziToast.error({
          title: '❌ Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
    });
  } else {
    iziToast.warning({
      title: '⚠️ Warning',
      message: 'Please enter a search query!',
    });
  }

  form.reset(); // Очищаємо форму
};

// Ініціалізація після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  // Рендеринг елементів
  const form = document.querySelector('#search-form');
  const galleryContainer = document.querySelector('#gallery');

  const gallery = new SimpleLightbox('#gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
  });

  form.addEventListener('submit', event => {
    handleSearchSubmit(event, form, galleryContainer, gallery);
  });
});
