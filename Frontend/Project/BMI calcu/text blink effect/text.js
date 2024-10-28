const blinkText = document.getElementById('blinkText');
let isVisible = true;

setInterval(() => {
    isVisible = !isVisible;
    blinkText.style.opacity = isVisible ? '1' : '0';
}, 1000);
