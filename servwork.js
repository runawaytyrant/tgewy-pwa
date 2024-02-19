self.addEventListener('install', (event) => {
    event.waitUntil(
        console.log('Service Worker instalado')
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        console.log('Service Worker activado')
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        console.log('Solicitud de recurso detectada:', event.request.url),
        fetch(event.request)
    );
});