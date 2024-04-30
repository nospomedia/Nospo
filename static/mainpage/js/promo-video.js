document.addEventListener('DOMContentLoaded', function () {
    var promoVideo = document.getElementById('promo-video');

    // Loop the video
    promoVideo.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    });

    // Play the video
    promoVideo.play();
});
