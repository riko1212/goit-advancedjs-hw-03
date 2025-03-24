import SimpleLightbox from 'simplelightbox';

// Функція для вставки HTML-контенту
const insertHTML = (parent, content, position = 'beforeend') => {
  parent.insertAdjacentHTML(position, content);
};

// Функція для очищення вмісту елемента
const clearHTML = node => {
  node.innerHTML = '';
};

// Функція для відображення елементів галереї
const renderGalleryItem = (node, images) => {
  const content = images
    .map(
      image => `
    <li class="gallery-item">
      <a href="${image.largeImageURL}">
        <img src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a>
      <div class="gallery-item-info">
        <div>
          <b>Likes</b>
          ${image.likes}
        </div>
        <div>
          <b>Views</b>
          ${image.views}
        </div>
        <div>
          <b>Comments</b>
          ${image.comments}
        </div>
        <div>
          <b>Downloads</b>
          ${image.downloads}
        </div>
      </div>
    </li>
  `
    )
    .join('');

  insertHTML(node, content);
};

// Функція для відображення елементів
export const displayImages = (node, images) => {
  clearHTML(node);

  if (images && images.length) {
    renderGalleryItem(node, images);
  }
};

// Функція для відображення індикатора завантаження
export const showLoadingIndicator = node => {
  clearHTML(node);

  const content = `
    <div class="loading">Loading images, please wait...</div>
    <span class="loader"></span>
  `;

  insertHTML(node, content);
};
