(function() {
  // Inject CSS styles for the carousel
  var css = `
    /* Carousel Container */
    .video-testimonials-carousel {
      position: relative;
      max-width: 800px;
      margin: 30px auto;
      overflow: hidden;
      border: 1px solid #ddd;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      background: #fff;
      font-family: Arial, sans-serif;
    }
    /* Carousel Title */
    .video-testimonials-carousel .carousel-title {
      text-align: center;
      font-size: 24px;
      font-weight: bold;
      padding: 20px;
      background: #f7f7f7;
      border-bottom: 1px solid #ddd;
    }
    /* Carousel Wrapper */
    .video-testimonials-carousel .carousel-wrapper {
      display: flex;
      transition: transform 0.5s ease;
    }
    /* Carousel Items */
    .video-testimonials-carousel .carousel-item {
      min-width: 100%;
      box-sizing: border-box;
      padding: 20px;
    }
    .video-testimonials-carousel .carousel-item iframe {
      width: 100%;
      height: 450px;
      border: none;
      border-radius: 4px;
    }
    /* Navigation Buttons */
    .video-testimonials-carousel .carousel-nav {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      width: 100%;
      display: flex;
      justify-content: space-between;
      pointer-events: none;
    }
    .video-testimonials-carousel .carousel-nav button {
      pointer-events: all;
      background: rgba(0, 0, 0, 0.5);
      border: none;
      color: #fff;
      padding: 10px 15px;
      cursor: pointer;
      border-radius: 50%;
      margin: 0 10px;
    }
    .video-testimonials-carousel .carousel-nav button:hover {
      background: rgba(0, 0, 0, 0.7);
    }
    /* Responsive adjustments */
    @media (max-width: 600px) {
      .video-testimonials-carousel .carousel-item iframe {
        height: 250px;
      }
      .video-testimonials-carousel .carousel-title {
        font-size: 20px;
        padding: 15px;
      }
    }
  `;
  var styleTag = document.createElement('style');
  styleTag.type = 'text/css';
  if (styleTag.styleSheet) {
    styleTag.styleSheet.cssText = css;
  } else {
    styleTag.appendChild(document.createTextNode(css));
  }
  document.head.appendChild(styleTag);

  // Testimonials data (can be replaced with dynamic data)
  var testimonials = [
    { id: '12345', title: 'Testimonial 1', src: 'https://kaaymond.net/cdn/shop/videos/c/vp/4fa90398de784387969fb1c32caa406a/4fa90398de784387969fb1c32caa406a.HD-1080p-2.5Mbps-30002973.mp4?v=0' },
    { id: '67890', title: 'Testimonial 2', src: 'https://kaaymond.net/cdn/shop/videos/c/vp/4fa90398de784387969fb1c32caa406a/4fa90398de784387969fb1c32caa406a.HD-1080p-2.5Mbps-30002973.mp4?v=0' },
    { id: 'abcde', title: 'Testimonial 3', src: 'https://kaaymond.net/cdn/shop/videos/c/vp/4fa90398de784387969fb1c32caa406a/4fa90398de784387969fb1c32caa406a.HD-1080p-2.5Mbps-30002973.mp4?v=0' }
  ];

  // Create the main carousel container
  var container = document.createElement('div');
  container.className = 'video-testimonials-carousel';

  // Create and append the title element
  var title = document.createElement('div');
  title.className = 'carousel-title';
  title.innerText = 'Video Testimonials';
  container.appendChild(title);

  // Create the carousel wrapper that will hold all testimonial items
  var carouselWrapper = document.createElement('div');
  carouselWrapper.className = 'carousel-wrapper';

  // For each testimonial, create a carousel item with an iframe
  testimonials.forEach(function(testimonial) {
    var item = document.createElement('div');
    item.className = 'carousel-item';
    // Optionally, you can add a subtitle or description here

    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', testimonial.src);
    iframe.setAttribute('allowfullscreen', '');
    iframe.setAttribute('allow', 'autoplay; encrypted-media; fullscreen; picture-in-picture');
    item.appendChild(iframe);

    carouselWrapper.appendChild(item);
  });

  container.appendChild(carouselWrapper);

  // Create navigation buttons for the carousel
  var nav = document.createElement('div');
  nav.className = 'carousel-nav';

  var prevBtn = document.createElement('button');
  prevBtn.innerHTML = '&#10094;'; // Left arrow
  var nextBtn = document.createElement('button');
  nextBtn.innerHTML = '&#10095;'; // Right arrow

  nav.appendChild(prevBtn);
  nav.appendChild(nextBtn);
  container.appendChild(nav);

  // Insert the carousel container into the page (after the current script tag)
  var scriptTag = document.currentScript || (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();
  scriptTag.parentNode.insertBefore(container, scriptTag.nextSibling);

  // Carousel functionality
  var currentIndex = 0;
  function updateCarousel() {
    carouselWrapper.style.transform = 'translateX(' + (-currentIndex * 100) + '%)';
  }
  prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? testimonials.length - 1 : currentIndex - 1;
    updateCarousel();
  });
  nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateCarousel();
  });

  // Optionally: Auto-advance the carousel every 5 seconds
  setInterval(function() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateCarousel();
  }, 5000);
})();
