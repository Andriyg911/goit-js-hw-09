import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const images = [
  {
    preview: 'https://placehold.co/300x200',
    original: 'https://placehold.co/1200x800',
    description: 'Image 1',
  },
  {
    preview: 'https://placehold.co/300x200?text=2',
    original: 'https://placehold.co/1200x800?text=2',
    description: 'Image 2',
  },
  {
    preview: 'https://placehold.co/300x200?text=3',
    original: 'https://placehold.co/1200x800?text=3',
    description: 'Image 3',
  },
];

const gallery = document.querySelector('.gallery');
gallery.innerHTML = images
  .map(
    ({ preview, original, description }) => `
  <li class="gallery-item">
    <a class="gallery-link" href="${original}">
      <img class="gallery-image" src="${preview}" alt="${description}" />
    </a>
  </li>`
  )
  .join('');

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});