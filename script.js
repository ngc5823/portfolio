// Select all video elements with the class 'hover-video'
const videos = document.querySelectorAll('.hover-video');

// Add event listeners for mouseenter and mouseleave
videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
        video.play(); // Play the video on hover
    });

    video.addEventListener('mouseleave', () => {
        video.pause(); // Pause the video when hover ends
        video.currentTime = 0; // Reset to the beginning
    });
});