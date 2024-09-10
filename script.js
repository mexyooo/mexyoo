// Lightbox Logik
let currentImageIndex = 0;
const images = document.querySelectorAll('.gallery .tile img');

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        openLightbox(index);
    });
});

function openLightbox(index) {
    currentImageIndex = index;
    const img = images[index];
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox-caption').textContent = img.alt; // Bildunterschrift
    document.getElementById('lightbox').classList.remove('hidden');
}

function closeLightbox() {
    document.getElementById('lightbox').classList.add('hidden');
}

function changeImage(step) {
    currentImageIndex = (currentImageIndex + step + images.length) % images.length;
    const img = images[currentImageIndex];
    document.getElementById('lightbox-img').src = img.src;
    document.getElementById('lightbox-caption').textContent = img.alt; // Bildunterschrift
}