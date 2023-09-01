'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "ac0641886e8b6ceef1b65388a40385f4",
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
".git/index": "d022ea35344a149f616e50b0d472ba25",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4f46319e1150326dda176fa7c4e32dfc",
".git/logs/refs/heads/main": "4f46319e1150326dda176fa7c4e32dfc",
".git/logs/refs/remotes/origin/HEAD": "d17606dc7422df287164365d6e5b077b",
".git/logs/refs/remotes/origin/main": "020242d9aafeeb53a3b3417df28f961f",
".git/objects/07/1e4e70595725aa00593977b946727482fae2e4": "f5ab4b6ceb3b631a844f88e28e10f7fc",
".git/objects/0f/333c8a69b71a7829f50508289e989453a19c68": "fcbf6a3eda3158d94c825b8156c00b93",
".git/objects/11/15ae20a20bca6bb2311a6849b452b3f8b523c1": "fa66239ea38162a8e6b5a7221ae5ae70",
".git/objects/13/95135c12dc43b2f3781128961194433854bca1": "6b56e7519c1a0496b471c5a98c34a32f",
".git/objects/1e/e39bdc1dcc4aa4e7f760cf115114220206926b": "0c11f33a854db52ac67a1622523f80c3",
".git/objects/33/db837fe32721485eefb9875470f1b4e56435aa": "891dc320b4d5bdde28c2fd521e61e2af",
".git/objects/41/0856d61d46f241c8f86dd2eed5ea09182eb699": "e71242e84319177cfb1791ef30f63290",
".git/objects/4f/0104b7727b7a737f3d69ff92f09345728f6c12": "4053cd366c40856d553eac594d5644fc",
".git/objects/4f/cd6c040c9dc7a75f5afb6670ae31b31b55eb8a": "44976513f1de0ab4a2b1ebbcb45a3d66",
".git/objects/50/4b9d4d737131d8e17abd35757dd1416773317b": "d8b2743be5e6a85b7c9a824901c89bfe",
".git/objects/5b/2252480039127648a9ace6fe1b9f27eafa5c5e": "7e3394efd9e77dae4a83d353b1bd38e5",
".git/objects/6e/762054f9d1cb0ee9cc5ab121dcd6a7a8a5203b": "08bf231a609c8b187e84dc1110126f06",
".git/objects/7d/ab6290147bd9a4ca63c063fa2cfcdaf822880c": "52b1de2f91662aa4cc6df959c186ce13",
".git/objects/80/2d4dd96e68795f3eaece1181786f38c93c6787": "3b7b3c83ce79c39a6952500293481288",
".git/objects/80/7136dedfcab50b6051dcd13c862d52cc07756d": "ed5281fe9898f90527d7e39f8e48084a",
".git/objects/86/c9a060a04a3f6584d08b4b0c82618963414da4": "513220602ebb17803990cd28a2e03dd0",
".git/objects/8f/28ffcd522e8e04950885ca47a6dd2c3de65c88": "30aaf1186939830f9bdc92b5077f8f73",
".git/objects/a2/fd62240d70d52980e418bbc1a4ac6f7cad9f34": "480e305b3d0e35e731240671f52e9e1d",
".git/objects/a5/d2b3e9b8901eca9b5079e789111e947ab672d4": "4ecb90d9554a463f9f14d21ed9a23a0b",
".git/objects/a8/b77f53e881226811d65659f839c3d6077b6f97": "831cfe8a34624e7026323595380970fb",
".git/objects/b1/c10fa9479210d6b522188dba53f80083c5b1cd": "a0cb261c263562dbd39792506a6b3e90",
".git/objects/b9/d1e7c8168ca8724f6008aaf0e61d0b02798df9": "033f4cbc44c90832b3e29c8e7f767212",
".git/objects/bb/07a26389069f157903f48863c30ccbaae9795c": "d958bda5c5f2cd4458ba95a7e49afe70",
".git/objects/c4/30674848fdae19c6910d6a7ee4124e69263e57": "0060efe15d189668af844c585819ba86",
".git/objects/c5/c6371fb8eb91ff7787c3a7690604a8a9649beb": "f32b8497444687a794a9ca1ebed1257a",
".git/objects/c6/93262613ecb91db744f2ea1d2480a4242575b2": "8876b493373283c5dfadc36e3d29ca94",
".git/objects/c6/d3f94d915b01cfd90e7832e8c485453e902bae": "8965ed68d62a020457f1be1f155fc59a",
".git/objects/cb/5fc82f494bb2a09814e7f65c0e37164a1728cb": "3be5d91990c34aba8dd33ea202127f63",
".git/objects/d4/7c5bc046d04eea7fcbd531bc7dafc59a7ef391": "0156d858b56ba348ef92d084f7c1438b",
".git/objects/d6/82ab4bf707e681bd2154e5d58cddcfe7501805": "6f982bac88f7c96e7698414997c8b8ad",
".git/objects/dd/6ec8a50d2ca6d4303f6d01123f8947d0d88587": "819f7255fe92847b9fdbf968ea61add5",
".git/objects/e1/8347f55cf49645cc514a21fa05f585e504c069": "cbfb2ffed0364d304afdff9f1f49b118",
".git/objects/f3/76da4721deaad1ad3fd8f88ffd9001e96e4c54": "5b2aa63373a0a5a0ed7a8082b72105b2",
".git/objects/f7/a4215ba85d30de5bfb14561088730158320afe": "4206d74f89181128318cceb7aaf566d0",
".git/objects/fb/b9b6c5bb566c5662ae58964b6860c1f2529ea2": "80b3469aff7296cb3fcd7f71f49dc242",
".git/objects/pack/pack-373cbbaca83b74934537c4ba8ab8d65c278c003f.idx": "819a3faf532b30d22e56fe4ab4fdb375",
".git/objects/pack/pack-373cbbaca83b74934537c4ba8ab8d65c278c003f.pack": "2af4ff42b6a5dd38165c82fbb8120886",
".git/objects/pack/pack-373cbbaca83b74934537c4ba8ab8d65c278c003f.rev": "7b42b54d21e864fbbaac8c704efa7fad",
".git/packed-refs": "600121d82815fbd10c6e76908a46fc3b",
".git/refs/heads/main": "145f4311c5a6a199a2c557807d5b13b2",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "145f4311c5a6a199a2c557807d5b13b2",
"assets/AssetManifest.bin": "540c65dc4a5eca8aacc04e3ff661dca5",
"assets/AssetManifest.json": "fed878abc55fc2bbcb06d009242e43d8",
"assets/assets/create_player_dark.png": "b7228fcbafe9879d5b6d9584bca2c2d7",
"assets/assets/create_player_light.png": "d68bf88ff20a16bf4b93024c795d20b6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b624d9895302508cbe50a5db50b55e38",
"assets/NOTICES": "ab985b8941bf69c85dc493fc34515449",
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
"index.html": "c6343f64621a90f2c72c34aa97c6dc59",
"/": "c6343f64621a90f2c72c34aa97c6dc59",
"main.dart.js": "29a49c0ba1844e8c15f75a12aa6a481f",
"manifest.json": "e472405b5ab85af8a6ead57db4060747",
"version.json": "9b9db7b85eeff502ed0b1deb9add6faa"};
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
