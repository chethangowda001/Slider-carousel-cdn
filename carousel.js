// if (!window.carouselConfig) {
//     console.error('carouselConfig not defined. Please define carouselConfig before including this script.');
//     window.carouselConfig = {
//         width: '600px',
//         height: '400px',
//         autoplayInterval: 2000,
//         transitionSpeed: '0.5s',
//         buttonBg: 'rgba(0, 0, 0, 0.5)',
//         buttonColor: 'white',
//         images: []
//     };
// }

// const carouselContainer = document.querySelector('.carousel-container');
// carouselContainer.style.setProperty('--carousel-width', carouselConfig.width);
// carouselContainer.style.setProperty('--carousel-height', carouselConfig.height);
// carouselContainer.style.setProperty('--transition-speed', carouselConfig.transitionSpeed);
// carouselContainer.style.setProperty('--button-bg', carouselConfig.buttonBg);
// carouselContainer.style.setProperty('--button-color', carouselConfig.buttonColor);

// const carousel = document.querySelector('.carousel');
// const prevButton = document.querySelector('.prev');
// const nextButton = document.querySelector('.next');
// let currentIndex = carouselConfig.images.length;
// let autoPlayInterval;
// let isTransitioning = false;

// const originalImages = carouselConfig.images;
// originalImages.forEach(img => {
//     const imgElement = document.createElement('img');
//     imgElement.src = img.src;
//     imgElement.alt = img.alt;
//     carousel.appendChild(imgElement);
// });
// originalImages.forEach(img => {
//     const cloneFirst = document.createElement('img');
//     cloneFirst.src = img.src;
//     cloneFirst.alt = img.alt;
//     carousel.appendChild(cloneFirst);
// });
// originalImages.forEach(img => {
//     const cloneLast = document.createElement('img');
//     cloneLast.src = img.src;
//     cloneLast.alt = img.alt;
//     carousel.insertBefore(cloneLast, carousel.firstChild);
// });

// const allImages = document.querySelectorAll('.carousel img');
// const totalImages = originalImages.length;
// const slideWidth = parseFloat(carouselConfig.width);

// function showSlide(index, useTransition = true) {
//     if (isTransitioning) return;
//     isTransitioning = true;

//     if (index >= allImages.length) {
//         currentIndex = index % totalImages + totalImages;
//     } else if (index < totalImages) {
//         currentIndex = (index % totalImages + totalImages) % totalImages + totalImages;
//     } else {
//         currentIndex = index;
//     }

//     carousel.style.transition = useTransition ? `transform ${carouselConfig.transitionSpeed} ease-in-out` : 'none';
//     carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

//     if (useTransition) {
//         setTimeout(() => {
//             isTransitioning = false;
//         }, parseFloat(carouselConfig.transitionSpeed) * 1000);
//     } else {
//         isTransitioning = false;
//     }
// }

// function nextSlide() {
//     showSlide(currentIndex + 1);
// }

// function prevSlide() {
//     if (currentIndex === totalImages) {
//         // At first original slide, jump to last cloned slide without transition
//         currentIndex = totalImages * 2 - 1;
//         carousel.style.transition = 'none';
//         carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
        
//         // Force reflow
//         carousel.offsetHeight;
        
//         // Then smoothly go to previous slide
//         setTimeout(() => {
//             showSlide(currentIndex - 1);
//         }, 10);
//     } else {
//         showSlide(currentIndex - 1);
//     }
// }

// function startAutoPlay() {
//     autoPlayInterval = setInterval(nextSlide, carouselConfig.autoplayInterval);
// }

// function stopAutoPlay() {
//     clearInterval(autoPlayInterval);
// }

// showSlide(currentIndex, false);

// nextButton.addEventListener('click', () => {
//     stopAutoPlay();
//     nextSlide();
//     startAutoPlay();
// });

// prevButton.addEventListener('click', () => {
//     stopAutoPlay();
//     prevSlide();
//     startAutoPlay();
// });

// carousel.addEventListener('transitionend', () => {
//     if (currentIndex >= allImages.length - totalImages) {
//         showSlide(currentIndex % totalImages + totalImages, false);
//     } else if (currentIndex < totalImages) {
//         showSlide(currentIndex % totalImages + totalImages, false);
//     }
//     isTransitioning = false;
// });

// carousel.addEventListener('mouseenter', stopAutoPlay);
// carousel.addEventListener('mouseleave', startAutoPlay);

// startAutoPlay();
