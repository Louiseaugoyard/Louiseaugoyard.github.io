!function(){"use strict";const e=["client/unterricht.a2e9c05f.js","client/index.f11968bc.js","client/index.68518f36.js","client/biographie.ad7ee854.js","client/impressum.19401217.js","client/nachtigall.dbe87a5c.js","client/datenschutz.9b11c3ae.js","client/trio-sophora.86119ba2.js","client/termine.a0e2c1ed.js","client/index.e264b467.js","client/client.1bff12c6.js"].concat(["service-worker-index.html","audio/renie_legende.mp3","favicon.png","fonts/Cormorant-Bold-webfont.eot","fonts/Cormorant-Bold-webfont.ttf","fonts/Cormorant-Bold-webfont.woff","fonts/Cormorant-Light-webfont.eot","fonts/Cormorant-Light-webfont.ttf","fonts/Cormorant-Light-webfont.woff","fonts/Cormorant-LightItalic-webfont.eot","fonts/Cormorant-LightItalic-webfont.ttf","fonts/Cormorant-LightItalic-webfont.woff","fonts/OpenSans-Light-webfont.eot","fonts/OpenSans-Light-webfont.ttf","fonts/OpenSans-Light-webfont.woff","fonts/OpenSans-LightItalic-webfont.eot","fonts/OpenSans-LightItalic-webfont.ttf","fonts/OpenSans-LightItalic-webfont.woff","fonts/OpenSans-Regular-webfont.eot","fonts/OpenSans-Regular-webfont.ttf","fonts/OpenSans-Regular-webfont.woff","fonts/OpenSans-Semibold-webfont.eot","fonts/OpenSans-Semibold-webfont.ttf","fonts/OpenSans-Semibold-webfont.woff","fonts.css","global.css","images/bio-1024.jpg","images/bio-512.jpg","images/bio-mobile.jpg","images/contact-mobile.jpg","images/events-1024.jpg","images/events-512.jpg","images/events-mobile.jpg","images/landing-page-1024.jpg","images/landing-page-1366.jpg","images/landing-page-1680.jpg","images/landing-page-1920.jpg","images/landing-page-mobile.jpg","images/laura-512.jpg","images/lerche-512.jpg","images/lessons-1024.jpg","images/lessons-512.jpg","images/lessons-mobile.jpg","images/louise-augoyard-1024.jpg","images/louise-augoyard-512.jpg","images/louise-augoyard-portrait-128.jpg","images/louise-augoyard-portrait-384.jpg","images/monet-nenuphars-512.jpg","images/projects-mobile.jpg","images/rossignol-1372.jpg","images/rossignol-800.jpg","images/rossignol-mobile.jpg","images/rossignol.jpg","images/tekla-varga-1024.jpg","images/tekla-varga-512.jpg","images/tekla-varga-portrait-128.jpg","images/tekla-varga-portrait-384.jpg","images/verena-weber-1024.jpg","images/verena-weber-512.jpg","images/verena-weber-portrait-128.jpg","images/verena-weber-portrait-384.jpg","nachtigall.pdf"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1620824779805").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1620824779805"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1620824779805").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const a=await t.match(e.request);if(a)return a;throw n}}))))})}();
