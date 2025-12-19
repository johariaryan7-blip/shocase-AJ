const cacheName = 'aryan-audio-cache-v1';
const filesToCache = [
  './',
  './index.html',
  './style.css',
  './Perfect - Ed Sheeran (ringtone).mp3',
  './IMG_20251124_205203_308.webp'
];

// Install SW and cache files
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
});

// Fetch cached files when offline
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});

