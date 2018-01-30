var cacheName = 'puma';
var dataCacheName = 'puma-v1';
var filesToCache = [];

self.addEventListener('install', event => {
    console.log('[SW] Install');
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            console.log('[SW] Cacheing app shell');
            return cache.addAll(filesToCache);
        });
    );
});

self.addEventListener('activate', event => {
    console.log('[SW] Activate');
    caches.keys().then(keyList => {
        return Promise.all(keyList.map(key => {
            console.log('[SW] Remove old cache');
            return caches.delete(key);
        }
    })):
    return self.clients.claim();
});

self.addEventListener('fetch', event => {
  	console.log('[SW] Fetch', e.request.url);
});

