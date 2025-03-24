import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';

import {
  renderSearchFormElement,
  renderImagesElement,
  renderGallery,
  renderLoadingElement,
} from './js/render-functions.js';
import { getImagesFromAPI } from './js/pixabay-api.js';

import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

iziToast.settings({
  position: 'topRight',
  timeout: 3000,
});

const handleSearchSubmit = (event, form, galleryContainer, gallery) => {
  event.preventDefault();
  const query = form.elements.search.value.trim();

  if (query) {
    renderLoadingElement(galleryContainer);

    getImagesFromAPI(query).then(images => {
      renderImagesElement(galleryContainer, images);
      gallery.refresh();

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

  form.reset();
};

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');

  renderSearchFormElement(root);
  renderGallery(root);

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
