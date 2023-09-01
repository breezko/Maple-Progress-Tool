'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b54f7dbdf3a9464e518c92b93d0bfa4d",
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
".git/index": "b314de38ed34b5d8769fa1d654d28601",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c89524889a9ab984250c66f1385486f6",
".git/logs/refs/heads/main": "c89524889a9ab984250c66f1385486f6",
".git/logs/refs/remotes/origin/HEAD": "132e86b29085e7ca276fcd2a86108035",
".git/logs/refs/remotes/origin/main": "7226a6b3c1efda35e7f1ab0018f87f95",
".git/objects/0a/810bf6654eeca94995cc4d32b05d0db23b94e3": "bb02afe65e511169106ea16be7e47717",
".git/objects/0b/cad87b63b14a4251d8df882ae820e07a2589b6": "fdff26317ba7ffb311b40c1a7d2d2a8e",
".git/objects/0d/a1520ef4d4eabd6edd4f4cf740d880e72f53e7": "aed4e53c06519bdfcbf7ec284c0a927f",
".git/objects/10/5745a1d92cf51f4844a871ce1aac16658db2a7": "c2125726886ea688d4669f07143a39bc",
".git/objects/10/ded11d010652f7821fb8b5b4db0a628e9d0a24": "56e0045c630d38b0345b1a2f530cfe8f",
".git/objects/13/8c3cba94d978f2e305c8dc416a7830e9cb57b0": "88b81be988b8ea99fca0c5334a19e66a",
".git/objects/16/2313a0f307bf402221947005abe7959db7a238": "7ef2a8cd55937e83413baf74508c3bd2",
".git/objects/16/37e4a04000c8dde82e5748250d15d60f1a37ff": "04f98d3df94fcea9878aeddc325191f7",
".git/objects/1a/9607fa28c33caadef0c5f2825494472b2c1cb5": "12d6bc71cff647995fbc9f3150653539",
".git/objects/23/2a0a30be44eb416c0becf217b7fad613bf2d9b": "04557c8f94d8ccf12ece5a770481beee",
".git/objects/2e/83d504b03058c442875b1599177d332da6d46d": "f51d714a76e67f37d3cf2c740fb73719",
".git/objects/2f/9986bb11f4c848053b5fec58b1f764a744b8dc": "c39ec0589bb1e5c69227d9b65c825b67",
".git/objects/30/eb368fbca001e4385c4a602e1896ae718ee7a1": "212c1e437733ec4d9c999b1b3f3721e8",
".git/objects/32/845b00dbb8b99be258438eec6332fb2707988b": "02e6231ff798b5fc0ab5b0f735965214",
".git/objects/38/956a4e5fed0f00f03301f68c1ec547f8177997": "892e951b4e1f4f7e74820020b3b727a3",
".git/objects/39/d132ef8e3a9842787a95c6f8ca1663914b4bac": "3d4de7d0dbdf0c61e40a0d211c6d50c5",
".git/objects/3a/f1f745b5bc4ddb8d61c409fd6494c852896a38": "c4bba1b66ba560878cd1ec06896767b0",
".git/objects/3c/58e0a1ef75c50d5fe4ddd3e7c8c97039b85320": "236103595e1bd9e009584ed25c997cfb",
".git/objects/43/32432881b792ade30451767a4d1f8084be54b8": "1bdbbbb81622063d07a62f1b927f3bd6",
".git/objects/43/62180503dec1d97badaf72c9b7d2b07a3a63ef": "3c9b13038a5dc7c2b6d2d43ebc695b66",
".git/objects/4a/d3008c95fd9e1637f4afb731081f478ba2a157": "8617536d976be86f07c451419813d0c9",
".git/objects/4f/4edaaf91aba0eb0065b199c85deaba9b12ef51": "c8918b23a2ba3d7d78ab8b7947c3c3ca",
".git/objects/58/59a4eae61835c4b56da9a79684d2b0559dab75": "63fecb6ec9e0420195e732619a93c5a2",
".git/objects/64/cffdcb6b5096e835fbcef1c7b3b10560845d5f": "67f913eaf30f8b6c6d54d79c0db2ddd7",
".git/objects/64/dda0feb6bc3eb6797091804da4f507a2365f66": "d2b0d44ff3a3ac7570d7b7a1fa6f270d",
".git/objects/72/999c773bfaf128f3ff732e93db1d234644dd39": "49c811948b2a86b21ce30e1942ad4d38",
".git/objects/73/89b038da88a01c5dad332f7aafc387544811f7": "c737a4bf05c84e88d9128074d9c15de4",
".git/objects/73/d0fe3ec1c2e88c33e9742513332767a2d40ac8": "3fc56b439bd03c27229b8dd8b0498d27",
".git/objects/78/298c2778c667dcfe9b64467b81f28aa7e3704b": "2ed28715bb83d2f41ed7b9027d5fdda7",
".git/objects/7c/c8aa2ac8c0714034fd80673cfe66286845f445": "50a02776b29f3125713ca5706e3dec78",
".git/objects/7d/1e60e6c466e75ed73eed9bc0cecfb3b7378f37": "b814a87d64afc6acc5e67df47b553a34",
".git/objects/7e/065bc1bab05616827983bc06631864fb054c9a": "94bed2e2b2a8755cd55be75385b1c20e",
".git/objects/7e/1f49815ca083e08b0d303de0b7719d9ae21bcb": "73110930e76026c17ab948b586e6b4e4",
".git/objects/84/ceac398d76ad08472a37bf15c3c57d8d87907f": "c0cc20250a3ad7cf5bfb7abc3cc42687",
".git/objects/86/e5d7457eae32f6ec73972f0f7e0ed616ad34bc": "1c3f19e693b05e5b2dcd1219bbb37246",
".git/objects/8c/dccd3126d38284687ca17929b79e434b3b8b65": "5500915517eca288298294eac07ed15d",
".git/objects/90/cfab7dc60b3c3f7254b215abefc5a07ed42b67": "ab68a11c4d6fbbf69552cff9eeca610c",
".git/objects/94/6744dcb51099a34305c0c489a6cffcddcbaf16": "0bb53ee766b214a351b82020008ec62b",
".git/objects/95/0ab8737a720684613dfbf0e4245dc9b4a3d0c6": "e8eb376d762f4628766e44d1b29b03df",
".git/objects/97/bc2c8c9bddff57c6037a67e6b2d90db8b45bcc": "c9df1ad2bf993c4b49b3326b114e008a",
".git/objects/99/bc7e8a238f646b29e88eb933d8c1bd105216e5": "649d96eaceb218c5348e8a0f26ce555d",
".git/objects/9a/d1356312bf2b988e11403ef4daa1610a87c82a": "17bb42fddebdf48d1c647d9501ab4df3",
".git/objects/9c/18304e942fbea70cd5fca444a3ac0f3394a698": "449a588d6a516e9a1c5db66ee7766a1a",
".git/objects/9f/475a267dfd217d42801a5f211a3e73b6cbd51d": "9bd9cd38cc48dda1c95262169e15b4fa",
".git/objects/a1/ca2348225acd7d5b151b0d9c4a3393a123c92e": "f92068e6f4762c6220604163db545b38",
".git/objects/a3/cb2a67e875ba7b5a64c3c5233023bcedfa3120": "0f9198445876767a30ecd6c8680d7a23",
".git/objects/ad/3350656aca45e60ccf081153acda743d7fc301": "5a306daec05c51dfc8a4db0db251cee5",
".git/objects/b0/5ae3e4a8360c7f7fd9fd943c5d36a04cb33765": "f8ceb3d82080e8bc8d363818df778d2e",
".git/objects/b0/cd40af06a4ef9ab8d3899314717910cee9548b": "c507e3324a7545db28fdd4a5e4e39bce",
".git/objects/b7/ebe6ef9927d57d44ee0669d50fa283d512b629": "a5c7681660b85b84c93ead0c3b3e9a6a",
".git/objects/c0/2baa3bd3181cd5238af7c3a7c50c5bd8faa53b": "7bd3967ded6a12ad8c841cd08fcbc465",
".git/objects/c1/fce76907a00e93dd6b94a1c6aff3a9de8f36ad": "e976be26d02e169ff4d4023681acc59f",
".git/objects/c8/41edb49aa2639377436d79f144331f6680fdf9": "a691a2a3731a318f92667d34e2be9285",
".git/objects/ce/d128724469891fa231a4f193ad96fecf8be162": "7a2cb296a904924cc59234ae3b854846",
".git/objects/d1/b87d5b99d1541f5b3ce08aae4054445caea10c": "d7e8952cac54496d3832ae4d56400ae8",
".git/objects/e3/411595ea4186116e1cfdcd23a6697f6b60b469": "357d3b87f382a69b51875b5334fb8f60",
".git/objects/e4/76731f808381ab638573385c9d56de7e6ea019": "cedca572862d3761a52810f271e961ca",
".git/objects/e8/5cbfa605ec50e70406f36ee9df835580d8215d": "1d978eaa18826d540c4aabc6ebaaacd9",
".git/objects/e8/9b388e4a159c156ccc4d2f3e30b3871a0347a1": "70a27de7ca3d002fcd7c8ad5ae339ded",
".git/objects/ec/97f18c3321b0de0777790748ddd34b92022d1f": "1c9e55ebc7c05776d22e22bcbe2e34c8",
".git/objects/f4/68553056776fdf95da7786ca61a998fe050c37": "e6023fa92262ed1a0dcb9ad33d0938a0",
".git/objects/f6/018f05adb02e6ad25da94d936e65cfda7fa157": "7e54bed63db5ddb69c9bc8dbacd7a7a2",
".git/objects/f7/68b9fc5bb419a4161a54fb97cdb969417a5d4f": "b6c11ce325c3442ee0db1eb00f2cdce4",
".git/objects/f9/c6902756828d25c651de3c2d0501abf6bec6fd": "6214730ec530118ed7c516638b42dc45",
".git/objects/fa/a1318568b53f6f9ecd1e32cf56c3e2e24ef2cf": "6a1f57d61c3f271793e96e5994519901",
".git/objects/fb/920fdbc12a0c7dc10806af53cfc96f8bee7f91": "c08b887e81360c6c76604d3fda5f6a06",
".git/objects/pack/pack-5a423a30c2dcbeee197f4ebc728e76ec0cc1029c.idx": "4ae4fd9a74bcf0234ae6cb4ef8d2b2c5",
".git/objects/pack/pack-5a423a30c2dcbeee197f4ebc728e76ec0cc1029c.pack": "01504120c8668137430523d27e5628dd",
".git/objects/pack/pack-5a423a30c2dcbeee197f4ebc728e76ec0cc1029c.rev": "d9e0cffa1363746e53c52c3f8d972d34",
".git/packed-refs": "458a89e2b3597ba1930d85fb3cebfdb0",
".git/refs/heads/main": "d2347fc89a60f20682e6fb79d9daebc3",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d2347fc89a60f20682e6fb79d9daebc3",
"assets/AssetManifest.bin": "540c65dc4a5eca8aacc04e3ff661dca5",
"assets/AssetManifest.json": "fed878abc55fc2bbcb06d009242e43d8",
"assets/assets/create_player_dark.png": "b7228fcbafe9879d5b6d9584bca2c2d7",
"assets/assets/create_player_light.png": "d68bf88ff20a16bf4b93024c795d20b6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "68ad172aef02a6bc4e5641ba4297e038",
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
"index.html": "d5287c8e1ed74789de347eca1aa0f101",
"/": "d5287c8e1ed74789de347eca1aa0f101",
"main.dart.js": "4a0a75829ae4d2d0d22a19b2b74d096e",
"manifest.json": "e472405b5ab85af8a6ead57db4060747",
"version.json": "40b81e4b0ced1b4866bb5c43bd679be8"};
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
