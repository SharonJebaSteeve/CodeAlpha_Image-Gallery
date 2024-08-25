const images = [
    'img1.jpg',
    'img2.jpg',
    'img3.jpg',
    'img4.jpg',
    'img4.jpg',
    'img5.jpg',
    'img6.jpg',
    'img7.jpg',
    'img8.jpg',
    'img9.jpg',
    'img10.jpg'
];

let currentIndex = 0;

function showImage(index) {
    const galleryImage = document.getElementById('gallery-image');
    galleryImage.style.opacity = 0;
    setTimeout(() => {
        galleryImage.src = images[index];
        galleryImage.style.opacity = 1; 
        updateThumbnails();
    }, 500); 
}

function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length;
    showImage(currentIndex);
}

function currentImage(index) {
    currentIndex = index;
    showImage(currentIndex);
}

function updateThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.classList.toggle('active', index === currentIndex);
    });
}


showImage(currentIndex);