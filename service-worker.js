!function(){"use strict";const e=["client/unterricht.a0e091fe.js","client/index.a3b7ffbc.js","client/index.8781c4a1.js","client/impressum.0f002111.js","client/biographie.e9580f67.js","client/nachtigall.a14c7f28.js","client/de-musica.8647671f.js","client/datenschutz.44c0dc5b.js","client/trio-sophora.3cce9b39.js","client/index.02fb1cd2.js","client/termine.250c0797.js","client/client.24cc64e2.js"].concat(["service-worker-index.html","audio/renie_legende.mp3","de-musica-de.pdf","favicon.png","fonts/Cormorant-Bold-webfont.eot","fonts/Cormorant-Bold-webfont.ttf","fonts/Cormorant-Bold-webfont.woff","fonts/Cormorant-Light-webfont.eot","fonts/Cormorant-Light-webfont.ttf","fonts/Cormorant-Light-webfont.woff","fonts/Cormorant-LightItalic-webfont.eot","fonts/Cormorant-LightItalic-webfont.ttf","fonts/Cormorant-LightItalic-webfont.woff","fonts/OpenSans-Light-webfont.eot","fonts/OpenSans-Light-webfont.ttf","fonts/OpenSans-Light-webfont.woff","fonts/OpenSans-LightItalic-webfont.eot","fonts/OpenSans-LightItalic-webfont.ttf","fonts/OpenSans-LightItalic-webfont.woff","fonts/OpenSans-Regular-webfont.eot","fonts/OpenSans-Regular-webfont.ttf","fonts/OpenSans-Regular-webfont.woff","fonts/OpenSans-Semibold-webfont.eot","fonts/OpenSans-Semibold-webfont.ttf","fonts/OpenSans-Semibold-webfont.woff","fonts.css","global.css","images/baum-128.jpg","images/bio-1024.jpg","images/bio-512.jpg","images/bio-mobile.jpg","images/contact-mobile.jpg","images/events-1024.jpg","images/events-512.jpg","images/events-mobile.jpg","images/kirche-128.jpg","images/landing-page-1024.jpg","images/landing-page-1366.jpg","images/landing-page-1680.jpg","images/landing-page-1920.jpg","images/landing-page-mobile.jpg","images/laura-512.jpg","images/laura-louise-512.jpg","images/lerche-128.jpg","images/lerche-512.jpg","images/lessons-1024.jpg","images/lessons-512.jpg","images/lessons-mobile.jpg","images/louise-augoyard-1024.jpg","images/louise-augoyard-512.jpg","images/louise-augoyard-portrait-128.jpg","images/louise-augoyard-portrait-384.jpg","images/monet-nenuphars-512.jpg","images/projects-mobile.jpg","images/rossignol-1372.jpg","images/rossignol-800.jpg","images/rossignol-mobile.jpg","images/rossignol.jpg","images/socrates-128.jpg","images/tekla-varga-1024.jpg","images/tekla-varga-512.jpg","images/tekla-varga-portrait-128.jpg","images/tekla-varga-portrait-384.jpg","images/verena-weber-1024.jpg","images/verena-weber-512.jpg","images/verena-weber-portrait-128.jpg","images/verena-weber-portrait-384.jpg","nachtigall.pdf"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1625775187421").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1625775187421"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const a=new URL(e.request.url);a.protocol.startsWith("http")&&(a.hostname===self.location.hostname&&a.port!==self.location.port||(a.host===self.location.host&&t.has(a.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1625775187421").then(async t=>{try{const a=await fetch(e.request);return t.put(e.request,a.clone()),a}catch(a){const n=await t.match(e.request);if(n)return n;throw a}}))))})}();
