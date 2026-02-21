import { fetchImages } from './api.js';
import { renderGallery } from './gallery.js';

let allImages = []; 
let page = 1;

export function initializeEventListeners(initialData) {
    allImages = initialData; 
    page = 2; 

    document.getElementById('loadMore').addEventListener('click', async () => {
        const newData = await fetchImages(page);
        allImages = [...allImages, ...newData];
        renderGallery(allImages);
        page++;
    });

    document.getElementById('clearGallery').addEventListener('click', () => {
        allImages = [];
        renderGallery(allImages);
    });

    document.getElementById('deleteLast').addEventListener('click', () => {
        allImages.pop();
        renderGallery(allImages);
    });

    document.getElementById('reverseGallery').addEventListener('click', () => {
        allImages.reverse();
        renderGallery(allImages);
    });
}
