document.addEventListener("DOMContentLoaded", function () {
    const imageSlider = document.querySelector('.image-slider');
    const images = document.querySelectorAll('.image-slider img');
    let currentIndex = 0;
  
    setInterval(function () {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add('active');
    }, 2000);
  });
