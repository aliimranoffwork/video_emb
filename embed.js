(function() {
  // Locate the current script tag
  var script = document.currentScript || (function() {
    var scripts = document.getElementsByTagName('script');
    return scripts[scripts.length - 1];
  })();

  // Retrieve configuration from data attributes
  // Using a sample video ID if not provided
  var videoId = script.getAttribute('data-video-id') || '';
  var width   = script.getAttribute('data-width')   || '560';
  var height  = script.getAttribute('data-height')  || '315';

  // Predefined iframe source URL with the videoId appended
  // Replace "https://example.com/embed/" with your actual endpoint
  var iframeSrc = "https://kaaymond.net/cdn/shop/files/preview_images/4fa90398de784387969fb1c32caa406a.thumbnail.0000000000.jpg?v=1717487457&width=2400" + videoId;

  // Create the iframe element
  var iframe = document.createElement('iframe');
  iframe.setAttribute('src', iframeSrc);
  iframe.setAttribute('width', width);
  iframe.setAttribute('height', height);
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allowfullscreen', '');
  // Optionally, add any additional iframe attributes, e.g.:
  iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');

  // Insert the iframe right after the current script tag
  script.parentNode.insertBefore(iframe, script.nextSibling);
})();
