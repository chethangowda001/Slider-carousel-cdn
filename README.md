Slider Carousel CDN
This repository provides a simple, customizable, and continuous-loop image carousel, served via jsDelivr. The carousel features smooth sliding transitions, navigation buttons, a 2-second autoplay interval, and hover-to-pause functionality. It’s designed to be easy to integrate and customize for any website.
Features

Continuous Loop: Seamlessly loops through images (1, 2, 3, 1, 2, 3, ...).
Autoplay: Automatically transitions every 2 seconds (configurable).
Navigation Buttons: Previous (❮) and next (❯) buttons for manual control.
Hover-to-Pause: Pauses autoplay when hovering over the carousel.
Customizable: Easily adjust dimensions, transition speed, button styles, and images via a configuration object.
CDN-Hosted: Fast and reliable delivery via jsDelivr, backed by Cloudflare, Fastly, and other providers.

Getting Started
Prerequisites

A modern web browser (Chrome, Firefox, Safari, Edge).
Basic HTML knowledge to integrate the carousel.

Integration

Create an HTML File:Copy the following code into your HTML file (e.g., index.html):
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Slider Carousel</title>
    <!-- CDN CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/chethangowda001/Slider-carousel-cdn@latest/carousel.min.css">
</head>
<body>
    <div class="carousel-container">
        <div class="carousel" id="carousel"></div>
        <button class="nav-button prev">❮</button>
        <button class="nav-button next">❯</button>
    </div>

    <!-- Configuration -->
    <script>
        const carouselConfig = {
            width: '600px', // Carousel width
            height: '400px', // Carousel height
            autoplayInterval: 2000, // Time per slide in milliseconds
            transitionSpeed: '0.5s', // Transition duration
            buttonBg: 'rgba(0, 0, 0, 0.5)', // Button background
            buttonColor: 'white', // Button text/icon color
            images: [
                { src: 'https://via.placeholder.com/600x400/FF0000/FFFFFF?text=Image+1', alt: 'Image 1' },
                { src: 'https://via.placeholder.com/600x400/00FF00/FFFFFF?text=Image+2', alt: 'Image 2' },
                { src: 'https://via.placeholder.com/600x400/0000FF/FFFFFF?text=Image+3', alt: 'Image 3' }
            ]
        };
    </script>
    <!-- CDN JavaScript -->
    <script src="https://cdn.jsdelivr.net/gh/chethangowda001/Slider-carousel-cdn@latest/carousel.min.js"></script>
</body>
</html>


Customize the Configuration:Modify the carouselConfig object in the <script> section to suit your needs:

width: Set the carousel width (e.g., '800px').
height: Set the carousel height (e.g., '500px').
autoplayInterval: Time per slide in milliseconds (e.g., 3000 for 3 seconds).
transitionSpeed: Transition duration (e.g., '0.3s' for faster slides).
buttonBg: Button background color (e.g., 'rgba(255, 255, 255, 0.7)').
buttonColor: Button text/icon color (e.g., 'black').
images: Array of image objects with src (URL) and alt (description).

Example customization:
const carouselConfig = {
    width: '800px',
    height: '500px',
    autoplayInterval: 3000,
    transitionSpeed: '0.3s',
    buttonBg: 'rgba(255, 255, 255, 0.7)',
    buttonColor: 'black',
    images: [
        { src: 'https://your-site.com/image1.jpg', alt: 'First Image' },
        { src: 'https://your-site.com/image2.jpg', alt: 'Second Image' },
        { src: 'https://your-site.com/image3.jpg', alt: 'Third Image' }
    ]
};


Host Images (Optional):

For best performance, host images on a CDN (e.g., jsDelivr, Cloudinary, or Imgur).
Add images to the same GitHub repository (e.g., Slider-carousel-cdn/images/) and use jsDelivr URLs:images: [
    { src: 'https://cdn.jsdelivr.net/gh/chethangowda001/Slider-carousel-cdn@latest/images/image1.jpg', alt: 'First Image' },
    { src: 'https://cdn.jsdelivr.net/gh/chethangowda001/Slider-carousel-cdn@latest/images/image2.jpg', alt: 'Second Image' },
    { src: 'https://cdn.jsdelivr.net/gh/chethangowda001/Slider-carousel-cdn@latest/images/image3.jpg', alt: 'Third Image' }
]




Optional CSS Overrides:

Add custom CSS to tweak the carousel’s appearance:<style>
    .nav-button {
        padding: 15px;
        font-size: 24px;
    }
    .carousel-container {
        margin: 20px auto;
    }
</style>




Test the Carousel:

Open your HTML file in a browser.
Verify the carousel loops continuously (1, 2, 3, 1, 2, 3, ...).
Test the previous (❮) and next (❯) buttons for smooth navigation.
Confirm autoplay (default: 2 seconds) and hover-to-pause functionality.
Ensure images load quickly via jsDelivr’s CDN.



CDN Links (via jsDelivr)
Use these links to include the carousel in your project. The .min versions are automatically minified for faster loading.

CSS:
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/chethangowda001/Slider-carousel-cdn@latest/carousel.min.css">


JavaScript:
<script src="https://cdn.jsdelivr.net/gh/chethangowda001/Slider-carousel-cdn@latest/carousel.min.js"></script>


Stable Version (optional):Replace @latest with a specific release tag (e.g., @v1.0.0) to pin a stable version:
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/chethangowda001/Slider-carousel-cdn@v1.0.0/carousel.min.css">
<script src="https://cdn.jsdelivr.net/gh/chethangowda001/Slider-carousel-cdn@v1.0.0/carousel.min.js"></script>



Notes

Image Requirements: Ensure all images match the configured width and height in carouselConfig for consistent display.
HTTPS: Use https:// for all image URLs to avoid mixed content issues.
Performance: jsDelivr’s multi-CDN setup (Cloudflare, Fastly, Bunny, Gcore) ensures fast global delivery.
Browser Support: Compatible with modern browsers (Chrome, Firefox, Safari, Edge).
Versioning: Use @latest for automatic updates or a specific tag (e.g., @v1.0.0) for stability.

Troubleshooting

Files Not Loading: Verify the jsDelivr URLs are correct and the repository is public at github.com/chethangowda001/Slider-carousel-cdn.
Images Not Displaying: Check that image URLs are valid and match the configured dimensions.
Looping Issues: Ensure carouselConfig is defined before the carousel.js script in your HTML.
Slow Loading: Optimize images (e.g., use compressed JPEG or WebP) and verify jsDelivr’s CDN is serving files.

Contributing
To contribute to this carousel:

Fork the repository: github.com/chethangowda001/Slider-carousel-cdn.
Make changes to carousel.css or carousel.js in the dist folder.
Create a pull request with a clear description of your changes.

License
This project is licensed under the MIT License. See the LICENSE file for details.
Acknowledgments

Built with HTML, CSS, and JavaScript.
Hosted via jsDelivr for fast, reliable delivery.
Inspired by the need for a simple, customizable carousel for web projects.

