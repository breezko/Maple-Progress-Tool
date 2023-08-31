'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "1336551e45f0d4b08cc00b7442dc8468",
".git/config": "ffee93c00c1da30943c9c4c80fec8b08",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "088124038d26e069021cc5fa08f1ab98",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ea450506888d58aaf422a61d03d88069",
".git/logs/refs/heads/main": "ea450506888d58aaf422a61d03d88069",
".git/logs/refs/remotes/origin/HEAD": "132e86b29085e7ca276fcd2a86108035",
".git/logs/refs/remotes/origin/main": "ea8e8fecb54aeb09854ea86f13c6348a",
".git/objects/10/ded11d010652f7821fb8b5b4db0a628e9d0a24": "56e0045c630d38b0345b1a2f530cfe8f",
".git/objects/16/2313a0f307bf402221947005abe7959db7a238": "7ef2a8cd55937e83413baf74508c3bd2",
".git/objects/1a/9607fa28c33caadef0c5f2825494472b2c1cb5": "12d6bc71cff647995fbc9f3150653539",
".git/objects/30/eb368fbca001e4385c4a602e1896ae718ee7a1": "212c1e437733ec4d9c999b1b3f3721e8",
".git/objects/43/32432881b792ade30451767a4d1f8084be54b8": "1bdbbbb81622063d07a62f1b927f3bd6",
".git/objects/4f/4edaaf91aba0eb0065b199c85deaba9b12ef51": "c8918b23a2ba3d7d78ab8b7947c3c3ca",
".git/objects/72/999c773bfaf128f3ff732e93db1d234644dd39": "49c811948b2a86b21ce30e1942ad4d38",
".git/objects/7e/065bc1bab05616827983bc06631864fb054c9a": "94bed2e2b2a8755cd55be75385b1c20e",
".git/objects/7e/1f49815ca083e08b0d303de0b7719d9ae21bcb": "73110930e76026c17ab948b586e6b4e4",
".git/objects/84/ceac398d76ad08472a37bf15c3c57d8d87907f": "c0cc20250a3ad7cf5bfb7abc3cc42687",
".git/objects/86/e5d7457eae32f6ec73972f0f7e0ed616ad34bc": "1c3f19e693b05e5b2dcd1219bbb37246",
".git/objects/b7/ebe6ef9927d57d44ee0669d50fa283d512b629": "a5c7681660b85b84c93ead0c3b3e9a6a",
".git/objects/c0/2baa3bd3181cd5238af7c3a7c50c5bd8faa53b": "7bd3967ded6a12ad8c841cd08fcbc465",
".git/objects/c1/fce76907a00e93dd6b94a1c6aff3a9de8f36ad": "e976be26d02e169ff4d4023681acc59f",
".git/objects/d1/b87d5b99d1541f5b3ce08aae4054445caea10c": "d7e8952cac54496d3832ae4d56400ae8",
".git/objects/e8/5cbfa605ec50e70406f36ee9df835580d8215d": "1d978eaa18826d540c4aabc6ebaaacd9",
".git/objects/e8/9b388e4a159c156ccc4d2f3e30b3871a0347a1": "70a27de7ca3d002fcd7c8ad5ae339ded",
".git/objects/pack/pack-5a423a30c2dcbeee197f4ebc728e76ec0cc1029c.idx": "4ae4fd9a74bcf0234ae6cb4ef8d2b2c5",
".git/objects/pack/pack-5a423a30c2dcbeee197f4ebc728e76ec0cc1029c.pack": "01504120c8668137430523d27e5628dd",
".git/objects/pack/pack-5a423a30c2dcbeee197f4ebc728e76ec0cc1029c.rev": "d9e0cffa1363746e53c52c3f8d972d34",
".git/packed-refs": "458a89e2b3597ba1930d85fb3cebfdb0",
".git/refs/heads/main": "ad12588d214066794722d38251e4731d",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "ad12588d214066794722d38251e4731d",
"assets/AssetManifest.bin": "6e9f863d0492f0f28bab13c40e44f427",
"assets/AssetManifest.json": "222bc785bdb07236eb8746bafcb02592",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "781a48aa4f8560306df64e8327b6f6c5",
"assets/NOTICES": "dc65a3874d91933e2d72b308320b3f83",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4ff0f675e2a69cd4c32aec1980f002e3",
"/": "4ff0f675e2a69cd4c32aec1980f002e3",
"main.dart.js": "e3872b6573c65dfc26a595166fb0ddd4",
"manifest.json": "e472405b5ab85af8a6ead57db4060747",
"version.json": "f0f873b9991e2dd05699e932e545e273"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
