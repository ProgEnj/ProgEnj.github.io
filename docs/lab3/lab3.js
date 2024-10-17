const imageElement = document.getElementById('slider-image');
const captionElement = document.getElementById('slider-caption');

const images = [
    { src: "pic1.jpg", caption: "Підпис до зображення 1" },
    { src: "pic2.jpg", caption: "Підпис до зображення 2" },
    { src: "pic3.jpg", caption: "Підпис до зображення 3" },
    { src: "pic4.jpg", caption: "Підпис до зображення 4" }
];

let currentIndex = 0;

// Функція для оновлення зображення та підпису
function updateSlider() {
    imageElement.src = images[currentIndex].src;
    imageElement.alt = images[currentIndex].caption;
    captionElement.textContent = images[currentIndex].caption;
}

// Функція для перемикання на попереднє зображення
function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateSlider();
}

// Функція для перемикання на наступне зображення
function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
}