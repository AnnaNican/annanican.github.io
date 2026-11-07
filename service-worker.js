// Retire the previous app's offline worker at its original URL.
// No fetch listener: requests go to the network.
self.addEventListener('install', (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.registration.unregister());
});
