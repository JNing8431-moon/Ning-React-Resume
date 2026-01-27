const CACHE_NAME = 'ning-resume-v1';
const ASSETS = [
    '/Ning-React-Resume/',
    '/Ning-React-Resume/globals.css',
    '/Ning-React-Resume/photo.webp',
    '/Ning-React-Resume/manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
