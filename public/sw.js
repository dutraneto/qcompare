if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const o=e=>n(e,a),r={module:{uri:a},exports:c,require:o};s[a]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(i(...e),c)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/MKNzxjuq2tg840QVR8MoR/_buildManifest.js",revision:"MKNzxjuq2tg840QVR8MoR"},{url:"/_next/static/MKNzxjuq2tg840QVR8MoR/_middlewareManifest.js",revision:"MKNzxjuq2tg840QVR8MoR"},{url:"/_next/static/MKNzxjuq2tg840QVR8MoR/_ssgManifest.js",revision:"MKNzxjuq2tg840QVR8MoR"},{url:"/_next/static/chunks/698-88fbbefc14ae399e.js",revision:"MKNzxjuq2tg840QVR8MoR"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"MKNzxjuq2tg840QVR8MoR"},{url:"/_next/static/chunks/main-861fcccdeb0665c0.js",revision:"MKNzxjuq2tg840QVR8MoR"},{url:"/_next/static/chunks/pages/_app-3ffbb79b59e20fb7.js",revision:"MKNzxjuq2tg840QVR8MoR"},{url:"/_next/static/chunks/pages/_error-2280fa386d040b66.js",revision:"MKNzxjuq2tg840QVR8MoR"},{url:"/_next/static/chunks/pages/index-e2c0ee00118524b9.js",revision:"MKNzxjuq2tg840QVR8MoR"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"MKNzxjuq2tg840QVR8MoR"},{url:"/_next/static/chunks/webpack-69bfa6990bb9e155.js",revision:"MKNzxjuq2tg840QVR8MoR"},{url:"/_next/static/css/944e34b39ef48bbc.css",revision:"MKNzxjuq2tg840QVR8MoR"},{url:"/favicon.ico",revision:"5de4c1e99a773a782613a103dee45ece"},{url:"/images/favicon-152px.png",revision:"11d17508fd18a8191535484a9f0343c8"},{url:"/images/favicon.png",revision:"ab41c9e49e28d6b5ad570a081e125f3b"},{url:"/images/icontip.png",revision:"0e8da0f469d93aa96c3dfb51bc999fd1"},{url:"/images/icontip.svg",revision:"df85777ce611fd3b49e8140309d48adb"},{url:"/images/logo-quarry.png",revision:"1f26d42b421d88168a8420a6cba1d8c9"},{url:"/images/ri_double-quotes-l.svg",revision:"d7049adbfcaecc504f4294666e9fda87"},{url:"/manifest.json",revision:"063ad5760903dcffc6f479ef11627179"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
