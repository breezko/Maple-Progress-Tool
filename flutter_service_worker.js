'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9dec14761ebd11c29cef264b8640440f",
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
".git/index": "2f1c1f896bf7a6e8163fc15a03867deb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "60f25aa2d030a1a1ed1724095462e00b",
".git/logs/refs/heads/main": "60f25aa2d030a1a1ed1724095462e00b",
".git/logs/refs/remotes/origin/HEAD": "d17606dc7422df287164365d6e5b077b",
".git/logs/refs/remotes/origin/main": "21129c950148083a76f55641d844aa16",
".git/objects/07/1e4e70595725aa00593977b946727482fae2e4": "f5ab4b6ceb3b631a844f88e28e10f7fc",
".git/objects/07/2533dee42288b1e75a895ec585a26f48cf8f84": "d3bd084d87d19059ad1c049b3254bf72",
".git/objects/0c/2e101c7d9a5521152f0d1c6bcc4b621276e923": "7639aeee97b889e270b652a16ef693ab",
".git/objects/0f/333c8a69b71a7829f50508289e989453a19c68": "fcbf6a3eda3158d94c825b8156c00b93",
".git/objects/11/15ae20a20bca6bb2311a6849b452b3f8b523c1": "fa66239ea38162a8e6b5a7221ae5ae70",
".git/objects/13/95135c12dc43b2f3781128961194433854bca1": "6b56e7519c1a0496b471c5a98c34a32f",
".git/objects/14/19aefa812d220d01288f39991228418fb56e00": "3961e6e4b125bbfbf10f7569f292a779",
".git/objects/15/b69d8a3b6c7a20cc3bba74388af0502357d342": "6a96adcf4de711fa90b743dcf0e921ec",
".git/objects/18/9d52db1f91ca0dfe0b19f5ff4bc146905296c9": "3ccc36cd8169224b9a70a8572b1dcd8b",
".git/objects/1c/c0b6f2d27822aa8207b8c96054e4b3e168b291": "692f18043cca781f33e48ef59d9cf0cd",
".git/objects/1e/e39bdc1dcc4aa4e7f760cf115114220206926b": "0c11f33a854db52ac67a1622523f80c3",
".git/objects/21/7c6d458ccfd9a157f4cb1660289ae644154c1f": "98fa7197855c7cd989ca4077d7cd1440",
".git/objects/2c/24f15a20f28f4de602dbccf31955f9eae8bfa3": "727d6b9afd47abe12edca9982192c7e9",
".git/objects/2c/d3d1a701fcbc23869b5eee73613f1e78030de7": "b7103be3ad6b97f164ef215c5ada8ee9",
".git/objects/2e/24262d4b57991f56302bde0d52544ee56ba0c6": "ab7df50ec7668c894f044d395823aa31",
".git/objects/32/8e42bbf7531043bb1c375104b128e5fecb0902": "81e135765fe5d9c6efeba42a70f07d5b",
".git/objects/33/db837fe32721485eefb9875470f1b4e56435aa": "891dc320b4d5bdde28c2fd521e61e2af",
".git/objects/35/a224459147e159dde11918f3a9742e2ce123d8": "5e0789dff93a0e0de6645ef83b75b01c",
".git/objects/37/74b46c4df8ebfa53da262a0975750fe9e66aae": "f0ab4fc63680ce5d56a8988d860fc9d9",
".git/objects/3f/ff2a7fbc74224bb9044dfbedba67f107a41082": "d1e2702e3f4b84343ae2bafaca833333",
".git/objects/41/0856d61d46f241c8f86dd2eed5ea09182eb699": "e71242e84319177cfb1791ef30f63290",
".git/objects/46/439b43c98a14e22adb28b512da5c4b83e70bbc": "ae368847984c32dfeca044bd3a8c3866",
".git/objects/49/cd9b184bdb5e6ba30511b793031280724f8257": "c6065a8b9a734e4f76415cb5db03ad40",
".git/objects/4f/0104b7727b7a737f3d69ff92f09345728f6c12": "4053cd366c40856d553eac594d5644fc",
".git/objects/4f/8e21eb60e9123369ec2781ee78f74829f4509c": "b7a4218504a1b741404821c47817b3d9",
".git/objects/4f/cd6c040c9dc7a75f5afb6670ae31b31b55eb8a": "44976513f1de0ab4a2b1ebbcb45a3d66",
".git/objects/50/4b9d4d737131d8e17abd35757dd1416773317b": "d8b2743be5e6a85b7c9a824901c89bfe",
".git/objects/53/b257b7cb2045f64f1505608bed1140db520c4e": "5a5238d664c3c3b455b9f08e56a0d373",
".git/objects/5b/2252480039127648a9ace6fe1b9f27eafa5c5e": "7e3394efd9e77dae4a83d353b1bd38e5",
".git/objects/5c/42a2df78c996c920742bbeab4337c8e603915a": "957f3a62042e23e7f871025e42c917b0",
".git/objects/69/47e9bc45b6286e03a51928ad5ff4d83594c7c9": "3e2ce1e3ce5006868fb77102177620f2",
".git/objects/6e/299083f2d10a926a66d6df1e298f4c943574c7": "c59d30ddd617b45a6c449842a02ea847",
".git/objects/6e/762054f9d1cb0ee9cc5ab121dcd6a7a8a5203b": "08bf231a609c8b187e84dc1110126f06",
".git/objects/70/27b9a27a73ac997c130686787d24b8cb7e3874": "65ae944e2df214399cc270ed9cc424f8",
".git/objects/75/26db53d22e4fd427cfd9804a67fecdb88b3c67": "562c0ea48e673b17a5d66302a201adc9",
".git/objects/7d/ab6290147bd9a4ca63c063fa2cfcdaf822880c": "52b1de2f91662aa4cc6df959c186ce13",
".git/objects/80/2d4dd96e68795f3eaece1181786f38c93c6787": "3b7b3c83ce79c39a6952500293481288",
".git/objects/80/7136dedfcab50b6051dcd13c862d52cc07756d": "ed5281fe9898f90527d7e39f8e48084a",
".git/objects/80/81b890fafd18bbda6cc3b13ef533dd7a2e52fe": "1e5bc9f6436ddc9e9587cd07c80b9531",
".git/objects/86/166382d01528874a0fd340386fec5ffc1c407a": "8ae100e2becdf092518afb4296782092",
".git/objects/86/c9a060a04a3f6584d08b4b0c82618963414da4": "513220602ebb17803990cd28a2e03dd0",
".git/objects/8a/55b171c69c285299f2c3a8ba00c90169e516a0": "97a9097d5fbeae18c3572079c3334cc7",
".git/objects/8b/6fc1b2a959da1c523d0a18bd4679ce1e96e726": "26fd159a7708459cf7b4931132be289a",
".git/objects/8f/28ffcd522e8e04950885ca47a6dd2c3de65c88": "30aaf1186939830f9bdc92b5077f8f73",
".git/objects/90/aad093ec5d39ed5e3912f14c71cb3230867302": "0e78bb57faaf2e959f23b2f6754a1427",
".git/objects/98/788fabd1972d221de1d46b47f2982e593db799": "c309d05ab01be69198c751afaa4917b7",
".git/objects/9e/1b398696f016815f7b55b676e117fea4203ff7": "2823d0e16afab34d3bda818544284c83",
".git/objects/a2/fd62240d70d52980e418bbc1a4ac6f7cad9f34": "480e305b3d0e35e731240671f52e9e1d",
".git/objects/a3/3a6117063faca2bb6479fde61bbd3fb61b8a83": "247e821ef737a22c617f3a325d7dddb2",
".git/objects/a5/d2b3e9b8901eca9b5079e789111e947ab672d4": "4ecb90d9554a463f9f14d21ed9a23a0b",
".git/objects/a8/b77f53e881226811d65659f839c3d6077b6f97": "831cfe8a34624e7026323595380970fb",
".git/objects/a9/7e959763b7d53fa8bad4ea9ba42e0cd660b0de": "b943a6ff918222f42e69f6cebb954b97",
".git/objects/a9/c98dc8c74f3c147f5ff4372f0442aac4a7c7bb": "eea0c8f9d80aeb0ce75ffad8cf885dd2",
".git/objects/b0/cf6ef3af8f2eb1c2afeed730ac51c28af63e84": "da2ad700d2f55c4ea5b8b67a6f4c68c3",
".git/objects/b1/c10fa9479210d6b522188dba53f80083c5b1cd": "a0cb261c263562dbd39792506a6b3e90",
".git/objects/b9/d1e7c8168ca8724f6008aaf0e61d0b02798df9": "033f4cbc44c90832b3e29c8e7f767212",
".git/objects/b9/d354e68bf02f43fabab299c45a6fe16c4b870e": "d49e91884d061cc2d346d69b3e768c3a",
".git/objects/bb/07a26389069f157903f48863c30ccbaae9795c": "d958bda5c5f2cd4458ba95a7e49afe70",
".git/objects/bd/7580b1dd32ca23d4c41dd5a58f4f19407142c1": "44077cc99157e871f414bd3606324db4",
".git/objects/bd/ec4cf015a7b976f8a9a96d30fb2e2a3f0360f1": "693c9cc7fa8eb5a73f4851e29be1e5ed",
".git/objects/c4/30674848fdae19c6910d6a7ee4124e69263e57": "0060efe15d189668af844c585819ba86",
".git/objects/c5/c6371fb8eb91ff7787c3a7690604a8a9649beb": "f32b8497444687a794a9ca1ebed1257a",
".git/objects/c6/93262613ecb91db744f2ea1d2480a4242575b2": "8876b493373283c5dfadc36e3d29ca94",
".git/objects/c6/d3f94d915b01cfd90e7832e8c485453e902bae": "8965ed68d62a020457f1be1f155fc59a",
".git/objects/cb/5fc82f494bb2a09814e7f65c0e37164a1728cb": "3be5d91990c34aba8dd33ea202127f63",
".git/objects/cc/c73a600597ebddd024372c69ba6f98d7fcaf3d": "e55c1ea9ad75090a670063d23e7052a0",
".git/objects/d3/cb95a9ded1ba20edd82a2ee5012a028cee676c": "616d66b5fd3fe49f845401b37f4406c3",
".git/objects/d4/7c5bc046d04eea7fcbd531bc7dafc59a7ef391": "0156d858b56ba348ef92d084f7c1438b",
".git/objects/d5/3644fcc9453d58160945814a05e91632427835": "e62924662b9172c92c987af8d905a20b",
".git/objects/d6/82ab4bf707e681bd2154e5d58cddcfe7501805": "6f982bac88f7c96e7698414997c8b8ad",
".git/objects/db/a7aa120eda6f133fbe9b68346bc61224993bf4": "cbbc5e54f7570e44704c421f38b2724d",
".git/objects/dd/370c2062f10813a188b1f98ea31dad72b37bfa": "0a73179cbcfeaf48bdc89efbbe97d9c2",
".git/objects/dd/6ec8a50d2ca6d4303f6d01123f8947d0d88587": "819f7255fe92847b9fdbf968ea61add5",
".git/objects/de/8768f979376532c328cbd97a0e5e7aed2a9f17": "e3e3bcfffa489a374a566c94f467e3a3",
".git/objects/de/aea59390fc6c360bd981a2470e7f34c531fbd8": "e9deea37695f0de5ad74649b624f50dd",
".git/objects/e1/8347f55cf49645cc514a21fa05f585e504c069": "cbfb2ffed0364d304afdff9f1f49b118",
".git/objects/e5/43af4c2988ff7c4d3ddee3a406d97e253b5519": "d02c25f92c128ee9b17db8224999d73b",
".git/objects/e9/542d252765823c63bc27646cbb06f3317c616e": "11e56030a8fbf475c27a7212abe5dfd0",
".git/objects/ef/b218891f451b3567fe51c1e28dbc2c1677ca4b": "74e3d7c3bf89f0ee509de80deedc0a63",
".git/objects/f3/76da4721deaad1ad3fd8f88ffd9001e96e4c54": "5b2aa63373a0a5a0ed7a8082b72105b2",
".git/objects/f7/a4215ba85d30de5bfb14561088730158320afe": "4206d74f89181128318cceb7aaf566d0",
".git/objects/fb/b9b6c5bb566c5662ae58964b6860c1f2529ea2": "80b3469aff7296cb3fcd7f71f49dc242",
".git/objects/fc/139b6a653bb1ac0ca270055b893d164ee3a5a6": "2e337c08e8943e2cb713e617327083fa",
".git/objects/pack/pack-373cbbaca83b74934537c4ba8ab8d65c278c003f.idx": "819a3faf532b30d22e56fe4ab4fdb375",
".git/objects/pack/pack-373cbbaca83b74934537c4ba8ab8d65c278c003f.pack": "2af4ff42b6a5dd38165c82fbb8120886",
".git/objects/pack/pack-373cbbaca83b74934537c4ba8ab8d65c278c003f.rev": "7b42b54d21e864fbbaac8c704efa7fad",
".git/packed-refs": "600121d82815fbd10c6e76908a46fc3b",
".git/refs/heads/main": "e973969d08bb70fe9749b51ec281eeda",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "e973969d08bb70fe9749b51ec281eeda",
"assets/AssetManifest.bin": "943c6f0ec873943d5068853127692edb",
"assets/AssetManifest.json": "b9f2ad735c6b032a3e71a984ca36beeb",
"assets/assets/character_1_12.png": "dc38927dda89b866065a9ad3b6d1202f",
"assets/assets/character_1_22.png": "97a80b64d4464df4561d9053d6d53125",
"assets/assets/character_1_32.png": "a1e1550b730116012530e0536c4dfe2c",
"assets/assets/character_2_12.png": "4d50275d07d81d65edfec6b7ccc1ccae",
"assets/assets/character_2_22.png": "c25801e63eaeebc91a315a72098c7b87",
"assets/assets/character_2_32.png": "97536437e2d6e22259b27567483e2214",
"assets/assets/character_3_12.png": "598bff9baeba8e46e70e8a3960ae417c",
"assets/assets/character_4_12.png": "4230ed6f46cc343bfb6247412cee4b12",
"assets/assets/character_4_22.png": "e7e156bf8924425b227d7d244504e1e2",
"assets/assets/character_4_34.png": "06cedbeafc52da5956709e53349c7ec9",
"assets/assets/character_5_12.png": "a914c48c29c97f1bad675e5d8f41cdee",
"assets/assets/character_5_22.png": "6072936a94cc2d64c6487f039c810e66",
"assets/assets/character_5_32.png": "adc367c0893ca84e96dbd36cb4378e0c",
"assets/assets/create_player_dark.png": "b7228fcbafe9879d5b6d9584bca2c2d7",
"assets/assets/create_player_light.png": "d68bf88ff20a16bf4b93024c795d20b6",
"assets/assets/Symbol_Arcana.png": "190a2383b7dd341874460a7a6323874f",
"assets/assets/Symbol_Arcus.png": "9124c20351056f37e596dc2f4e725777",
"assets/assets/Symbol_Arteria.png": "ac58f1a5415bb02b8b402e5720328619",
"assets/assets/Symbol_Carcion.png": "3b9a734ae942efac916801a5706f9d89",
"assets/assets/Symbol_Cernium.png": "f332fea98b5bdbfc292b9ca91bbf55b8",
"assets/assets/Symbol_Chu_Chu_Island.png": "d87b4ad9c872db293a0b07e8ed71ba5f",
"assets/assets/Symbol_Esfera.png": "84fe453b90e75bc1300f41ef1374e617",
"assets/assets/Symbol_Lachelein.png": "933d96eda9a77dfbc0f7e48024e6afbb",
"assets/assets/Symbol_Morass.png": "5c141d361e4fa9e9b879bf7c0ed627b0",
"assets/assets/Symbol_Odium.png": "0c0ae51c93d8697b498ed6074293a8d6",
"assets/assets/Symbol_Shangri-La.png": "ad4aadbee99b07ae7472a4405904ef35",
"assets/assets/Symbol_Vanishing_Journey.png": "31e7c13ce2ac14c3091e698a789efa3e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3722be56474730970bd3f02d2f8f3b04",
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
"index.html": "95b68d9cdcfce02dd0cffaf48bed16b7",
"/": "95b68d9cdcfce02dd0cffaf48bed16b7",
"main.dart.js": "2d40ff82ebcc71f9410aeed0191e5661",
"manifest.json": "e472405b5ab85af8a6ead57db4060747",
"version.json": "50e3bea1c5598f36c34be97b6d9ede77"};
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
