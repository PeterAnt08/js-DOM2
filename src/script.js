const gallery = document.getElementById('gallery');
const loadMoreBtn = document.getElementById('loadMore');
const clearBtn = document.getElementById('clearGallery');
const deleteLastBtn = document.getElementById('deleteLast');
const reverseBtn = document.getElementById('reverseGallery');

let allImages = []; 
let page = 1;       

async function loadImages(count = 4) {
    try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=${count}`);
        const data = await response.json();
        allImages = [...allImages, ...data]; 
        renderGallery();
        page++;
    } catch (error) {
        console.error('Помилка при завантаженні картинок:', error);
    }
}

function renderGallery() {
    gallery.innerHTML = ''; 
    allImages.forEach(img => {
        const imageElement = document.createElement('img');
        imageElement.src = `https://picsum.photos/id/${img.id}/300/200`;
        gallery.appendChild(imageElement);
    });
}

clearBtn.addEventListener('click', () => {
    allImages = [];
    renderGallery();
});

deleteLastBtn.addEventListener('click', () => {
    allImages.pop();
    renderGallery();
});

reverseBtn.addEventListener('click', () => {
    allImages.reverse();
    renderGallery();
});

loadMoreBtn.addEventListener('click', () => {
    loadImages(4);
});

loadImages(4);
