self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).then(response => {
      if (event.request.mode === 'navigate' || event.request.destination === 'document' || event.request.url.endsWith('index.html') || event.request.url.endsWith('/gujie/')) {
        const newHeaders = new Headers(response.headers);
        newHeaders.set('Cross-Origin-Embedder-Policy', 'require-corp');
        newHeaders.set('Cross-Origin-Opener-Policy', 'same-origin');
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders
        });
      }
      return response;
    })
  );
});
