"use strict";var precacheConfig=[["/index.html","f37605a205100b8719f95b2441dbc9a5"],["/static/css/main.d51cdc2b.css","9af995f7ee74d7a44346e85e97b65c78"],["/static/js/main.ebb0d206.js","afb160709d86ef8f2685c463fb2762b9"],["/static/media/Montserrat-Bold.88932dad.ttf","88932dadc42e1bba93b21a76de60ef7a"],["/static/media/Poppins-Bold.7940efc4.ttf","7940efc40d8e3b477e16cc41b0287139"],["/static/media/Poppins-Medium.a4e11dda.ttf","a4e11dda40531debd374e4c8b1dcc7f4"],["/static/media/Poppins-Regular.731a28a4.ttf","731a28a413d642522667a2de8681ff35"],["/static/media/Poppins-SemiBold.e63b93df.ttf","e63b93dfac2600782654e2b87910d681"],["/static/media/bondinvestment.df01bbc4.svg","df01bbc4db42c15adc01e7244939c5c7"],["/static/media/dematerialisationassistance.f69ff721.svg","f69ff7215d6693fd220cdbfc131716fb"],["/static/media/financialeducation.786212fc.svg","786212fc6abbaa77f61dc8248af47b4a"],["/static/media/forex.3fabdc05.jpg","3fabdc05c7bbed0b56f14202d79c5a0c"],["/static/media/iepfstockrecovery.b81c4cfc.svg","b81c4cfc1b5ab180c169902fe6293a30"],["/static/media/mutualfunds.a7e38207.svg","a7e3820779e641917c97abbaed42295e"],["/static/media/portfolioguidance.c3acadfb.svg","c3acadfbf0903090bba6baf644beb0f9"],["/static/media/price_mag.94124361.png","94124361c2a48bd201870142ccdd9ac8"],["/static/media/research.44c9fd21.jpg","44c9fd21c1f15c6acafb08b646606db0"],["/static/media/startup-0.6dbe2445.svg","6dbe244583fdea04a1943039722e3180"],["/static/media/toolkit-entypo.0fbc3669.woff","0fbc36693a308e921eb302f6ad96496c"],["/static/media/toolkit-entypo.2cc116da.ttf","2cc116dad56b2a488c17666a6ea292d9"],["/static/media/toolkit-entypo.2e612670.woff2","2e6126703f1f6591cce2f9ea2c2f0eda"],["/static/media/toolkit-entypo.873cd9ce.eot","873cd9ced335a8d4b7c58ff231f0aa9c"],["/static/media/trading.c084bbc3.svg","c084bbc363e4a36bebdd98c6ac22a72e"],["/static/media/transferofstocks.d776b35a.svg","d776b35a10236e7b0dda47dd096749a8"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),c="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),t=urlsToCacheKeys.has(a));var n="/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});