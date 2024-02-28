;
//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_cache_tgewy',
  urlsToCache = [
    './',
    'https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap',
    'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@300;400&display=swap',
    './style.css',
    './script.js',
    './img/City_Skyline.png',
    './img/Panthera_Cantus.png',
    './img/W1D1.webp','./img/W1D2.webp','./img/W1D3.webp','./img/W1D4.webp','./img/W1D5.webp','./img/W1D6.webp','./img/W1D7.webp',
    './img/W2D1.webp','./img/W2D2.webp','./img/W2D3.webp','./img/W2D4.webp','./img/W2D5.webp','./img/W2D6.webp','./img/W2D7.webp',
    './img/W3D1.webp','./img/W3D2.webp','./img/W3D3.webp','./img/W3D4.webp','./img/W3D5.webp','./img/W3D6.webp','./img/W3D7.webp',
    './img/Secret_Day_X.webp',
    './img/favicon.ico'
  ]

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})