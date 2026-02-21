import { fetchImages } from './api.js';
import { renderGallery } from './gallery.js';

let allImages = []; 
let page = 1;

export function initializeEventListeners(initialData) {
    allImages = initialData; // Запам'ятовуємо перші картинки
    page = 2; // Наступна порція буде з 2-ї сторінки

    // Кнопка "Завантажити ще"
    document.getElementById('loadMore').addEventListener('click', async () => {
        const newData = await fetchImages(page);
        allImages = [...allImages, ...newData];
        renderGallery(allImages);
        page++;
    });

    // Кнопка "Очистити"
    document.getElementById('clearGallery').addEventListener('click', () => {
        allImages = [];
        renderGallery(allImages);
    });

    // Кнопка "Видалити останню"
    document.getElementById('deleteLast').addEventListener('click', () => {
        allImages.pop();
        renderGallery(allImages);
    });

    // Кнопка "Перевернути"
    document.getElementById('reverseGallery').addEventListener('click', () => {
        allImages.reverse();
        renderGallery(allImages);
    });
}