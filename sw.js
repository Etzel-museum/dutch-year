// Offline cache. Bump VERSION whenever any file changes.
const VERSION = 'dy-2';
const FILES = [
  './', 'index.html', 'style.css', 'manifest.webmanifest', 'icon.svg',
  'content/course.js', 'content/week01.js', 'content/week02.js', 'content/week03.js', 'content/week04.js',
  'js/store.js', 'js/speech.js', 'js/srs.js', 'js/exercises.js', 'js/app.js',
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

// Network first (so updates arrive), cache as fallback when offline.
self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET' || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(VERSION).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request).then(r => r || caches.match('index.html')))
  );
});
