import { fetchImages } from './modules/api.js';
import { renderGallery } from './modules/gallery.js';
import { initializeEventListeners } from './modules/events.js';

async function init() {
    console.log("Додаток запущено");
    const data = await fetchImages(1); 
    renderGallery(data);               
    initializeEventListeners(data);    
}

init();