import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import { displayImages } from './js/render-functions.js';
import { getImagesFromAPI } from './js/pixabay-api.js';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

iziToast.settings({
  position: 'topRight',
  timeout: 3000,
});

// Функція для обробки форми пошуку
const handleSearchSubmit = (event, form, galleryContainer, gallery, loader) => {
  event.preventDefault();
  const query = form.elements.search.value.trim();

  // Якщо запит не порожній
  if (query) {
    // Показуємо індикатор завантаження
    loader.classList.add('active');

    getImagesFromAPI(query)
      .then(images => {
        // Відображаємо зображення
        displayImages(galleryContainer, images);
        gallery.refresh(); // Оновлюємо галерею

        // Якщо зображень немає
        if (!images.length) {
          iziToast.error({
            title: '❌ Error',
            message:
              'Sorry, there are no images matching your search query. Please try again!',
          });
        }

        // Приховуємо індикатор завантаження після отримання даних
        loader.classList.remove('active');
      })
      .catch(error => {
        // Якщо виникла помилка при отриманні даних
        iziToast.error({
          title: '❌ Error',
          message:
            'An error occurred while fetching images. Please try again later.',
        });

        // Приховуємо індикатор завантаження при помилці
        loader.classList.remove('active');
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

  // Отримуємо доступ до форми, галереї та індикатора завантаження
  const form = document.querySelector('.form');
  const galleryContainer = document.querySelector('#gallery');
  const loader = document.querySelector('.loader');

  const gallery = new SimpleLightbox('#gallery a', {
    captionDelay: 250,
    captionsData: 'alt',
  });

  form.addEventListener('submit', event => {
    handleSearchSubmit(event, form, galleryContainer, gallery, loader);
  });
});
