"use strict";var precacheConfig=[["/index.html","8ee062299840e3ed77fe1b9fdc01dd8c"],["/static/css/main.606dca5a.css","986dc2fcbfcca9de3d292a8c121c0f2f"],["/static/js/main.b690450f.js","4a5905d84ffa01b14dfaef76fe9fb85c"],["/static/media/Montserrat-Bold.88932dad.ttf","88932dadc42e1bba93b21a76de60ef7a"],["/static/media/Poppins-Bold.7940efc4.ttf","7940efc40d8e3b477e16cc41b0287139"],["/static/media/Poppins-Medium.a4e11dda.ttf","a4e11dda40531debd374e4c8b1dcc7f4"],["/static/media/Poppins-Regular.731a28a4.ttf","731a28a413d642522667a2de8681ff35"],["/static/media/Poppins-SemiBold.e63b93df.ttf","e63b93dfac2600782654e2b87910d681"],["/static/media/forex.3fabdc05.jpg","3fabdc05c7bbed0b56f14202d79c5a0c"],["/static/media/framework.3a2b25a5.svg","3a2b25a5e8d2da606edd5ed4a32022f2"],["/static/media/guidance.b56e5e72.svg","b56e5e724ee782a5d1d0f40077b5dd31"],["/static/media/price_mag.a24ba983.png","a24ba9836f3bf220e1422a718374aba9"],["/static/media/reliability.06c04455.svg","06c04455d3869c2bd1021013474f53d8"],["/static/media/research.44c9fd21.jpg","44c9fd21c1f15c6acafb08b646606db0"],["/static/media/security.8eb002af.svg","8eb002affc185ff5ef4fb8485259e501"],["/static/media/startup-0.6dbe2445.svg","6dbe244583fdea04a1943039722e3180"],["/static/media/toolkit-entypo.0fbc3669.woff","0fbc36693a308e921eb302f6ad96496c"],["/static/media/toolkit-entypo.2cc116da.ttf","2cc116dad56b2a488c17666a6ea292d9"],["/static/media/toolkit-entypo.2e612670.woff2","2e6126703f1f6591cce2f9ea2c2f0eda"],["/static/media/toolkit-entypo.873cd9ce.eot","873cd9ced335a8d4b7c58ff231f0aa9c"],["/static/media/tools.8b968dd9.svg","8b968dd9ca9dbb05f6b79dbd42295e82"],["/static/media/trade.7802283f.svg","7802283f44ad192790e473a509dab13d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),n="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),t=urlsToCacheKeys.has(a));var r="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});