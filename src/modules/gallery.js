export function renderGallery(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = ''; // Очищуємо перед малюванням
    images.forEach(img => {
        const imageElement = document.createElement('div');
        imageElement.className = 'photo-card';
        imageElement.innerHTML = `
            <img src="https://picsum.photos/id/${img.id}/300/200" alt="Photo">
            <p>${img.author}</p>
        `;
        gallery.appendChild(imageElement);
    });
}