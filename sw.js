const CACHE_NAME = 'geoposition-pwa-v0.3.17';
const APP_BASE = '/geo-position/';
const APP_FILES = [
  APP_BASE,
  APP_BASE + 'index.html',
  APP_BASE + 'manifest.webmanifest',
  APP_BASE + 'version.json',
  APP_BASE + 'assets/geoposition-icon-192-v0.3.1.png',
  APP_BASE + 'assets/geoposition-icon-512-v0.3.1.png',
  APP_BASE + 'assets/geoposition-startbild-v0.3.1.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_FILES)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys
        .filter(key => key.startsWith('geoposition-pwa-') && key !== CACHE_NAME)
        .map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(APP_BASE)) return;
  event.respondWith(
    caches.match(req).then(cached => cached || fetch(req).then(resp => {
      if (resp && resp.ok) {
        const copy = resp.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
      }
      return resp;
    }).catch(() => caches.match(APP_BASE + 'index.html')))
  );
});
