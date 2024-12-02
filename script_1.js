const image = document.getElementById('image-hover');
const video = document.getElementById('video-hover');

// Quand la souris passe sur l'image
image.addEventListener('mouseenter', () => {
    image.style.display = 'none'; // Cache l'image
    video.style.display = 'block'; // Affiche la vidéo
    video.play(); // Lance la vidéo
});

// Quand la souris quitte la zone
video.addEventListener('mouseleave', () => {
    video.pause(); // Met en pause la vidéo
    video.currentTime = 0; // Réinitialise la vidéo
    video.style.display = 'none'; // Cache la vidéo
    image.style.display = 'block'; // Réaffiche l'image
});
