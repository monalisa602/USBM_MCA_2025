const images = [
    'riverimage.jpg',
    'back.jpeg',

];

let currentIndex = 0;
const slide = document.getElementById('slide');

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    slide.style.opacity = 0; // Fade out
    setTimeout(() => {
        slide.src = images[currentIndex]; // Change image
        slide.style.opacity = 1; // Fade in
    }, 6000); // Matches the CSS transition duration
}

setInterval(showNextImage, 3000); // Change image every 3 seconds
