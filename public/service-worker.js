let cacheName = "prappo"; 
let dynamicCacheName = "prince"; 

this.addEventListener("install", event => {
    event.waitUntil(
        caches.open(cacheName).then(cache => {
            if(!cache){ return; }
            cache.addAll([
                '/static/js/bundle.js',
                '/favicon.ico',
                '/index.html',
                'https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;500;700&display=swap',
                '/'
            ])
        })
    )
})

this.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then(res => {
            return res || fetch(event.request, { cors: true }).then(res => {
                return caches.open(dynamicCacheName).then(cache => {
                    if(res){ 
                        cache.put(event.request.url, res.clone());
                    }
                    return res;
                })
            })
        })
        .catch((err) => caches.match('/index.html'))
    )
})