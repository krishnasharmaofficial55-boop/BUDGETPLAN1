self.addEventListener("install",e=>self.skipWaiting());
self.addEventListener("fetch",e=>{}); // network-only: required for installability, no stale financial data cached
