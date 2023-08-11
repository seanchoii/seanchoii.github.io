'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "cab4e64c4cb60e40c6c4b395c9fd3bc3",
"assets/AssetManifest.json": "8b9aada6d80bc6d68504900e9f55e943",
"assets/assets/audio/bgm.mp3": "1c76a04d2ff4d6ae87140e3ed5262d2c",
"assets/assets/audio/grab_item.wav": "d3335bbbc521e0eb5017586c7063ee36",
"assets/assets/audio/hit.wav": "44bc33737deeb238e9604227795ae0f0",
"assets/assets/audio/jump.wav": "a3f2a40a526c33d72abadd098c2587c6",
"assets/assets/images/Background/Blue.png": "f86e07aab82505fc49710152f83cc385",
"assets/assets/images/Background/Brown.png": "45c9c887fa73b0ade76974de63ab9157",
"assets/assets/images/Background/Gray.png": "31fb9bc36ec926ee64d999d3387b7e09",
"assets/assets/images/Background/Green.png": "e6eeace8a9d516f2e9768e5228e824fb",
"assets/assets/images/Background/Pink.png": "31b5e360eb9610c58138bb7cfdfb96a1",
"assets/assets/images/Background/Purple.png": "f8cc6aa8fd738e6e4db8b6607b7e6c37",
"assets/assets/images/Background/Yellow.png": "c3f96416e21f366bc0c3635ce5b530d5",
"assets/assets/images/Enemies/Mushroom/Hit.png": "6a2f4c95e2d228163548e373a49ef680",
"assets/assets/images/Enemies/Mushroom/Idle%2520(32x32).png": "58e048ad4afa7199353949f5fa48c134",
"assets/assets/images/Enemies/Mushroom/Run%2520(32x32).png": "f4455c243603b217cbd950a3d49e62cd",
"assets/assets/images/Enemies/Radish/Hit%2520(30x38).png": "5adc10c5b89f2642a4c10a0da0b1c90b",
"assets/assets/images/Enemies/Radish/Idle%25201%2520(30x38).png": "fca6305299182c58f920ddb54a5b7f53",
"assets/assets/images/Enemies/Radish/Idle%25202%2520(30x38).png": "d54d96d8a428f9ea22c7509217d12cd0",
"assets/assets/images/Enemies/Radish/Leafs.png": "c3837aabb9f5b565e3cd1e38c6e29915",
"assets/assets/images/Enemies/Radish/Run%2520(30x38).png": "d0d3ff59320e7c9ea44dcead669dddfd",
"assets/assets/images/Items/Checkpoints/Checkpoint/Checkpoint%2520(Flag%2520Idle)(64x64).png": "dd8752c20a0f69ab173f1ead16044462",
"assets/assets/images/Items/Checkpoints/Checkpoint/Checkpoint%2520(Flag%2520Idle).png": "18095f6bb8480eec1b554ebec2065f0b",
"assets/assets/images/Items/Checkpoints/Checkpoint/Checkpoint%2520(Flag%2520Out)%2520(64x64).png": "c4730e5429a75691e2d2a9351c76738e",
"assets/assets/images/Items/Checkpoints/Checkpoint/Checkpoint%2520(No%2520Flag).png": "9126203dc833ec3b7dfb7a05e41910e5",
"assets/assets/images/Items/Checkpoints/End/End%2520(Idle).png": "e3627d7da583875ddef9a17036cec767",
"assets/assets/images/Items/Checkpoints/End/End%2520(Pressed)%2520(64x64).png": "1ce36017dfe561556f75324a065bc4df",
"assets/assets/images/Items/Fruits/Apple.png": "de3dbfa7d33e6bb344d0560e36d8bf53",
"assets/assets/images/Items/Fruits/Bananas.png": "03466a1dbd95724e705efe17e72c1c4e",
"assets/assets/images/Items/Fruits/Cherries.png": "fc2a60aee885c33d0d10e643157213e4",
"assets/assets/images/Items/Fruits/Collected.png": "0aa8cdedde5af58d5222c2db1e0a96de",
"assets/assets/images/Items/Fruits/Kiwi.png": "3d903dd9bf3421c31a5373b0920c876e",
"assets/assets/images/Items/Fruits/Melon.png": "eb6f978fbf95d76587bcf656c649540b",
"assets/assets/images/Items/Fruits/Orange.png": "60e0f68620c442b9403a477bbe3588ed",
"assets/assets/images/Items/Fruits/Pineapple.png": "0740bf84a38504383c80103d60582217",
"assets/assets/images/Items/Fruits/Strawberry.png": "568a3f91b8f6102f1b518c1aba0e8e09",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Double%2520Jump%2520(32x32).png": "5afb26aa4240eff1eab105eb3263ab83",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Fall%2520(32x32).png": "469d2d7814fa8258325eb5d305808315",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Hit%2520(32x32).png": "d03a7bbce7fbda59dd057397f86a8899",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Idle%2520(32x32).png": "29c95dbb63a9bf44c42821aa0cf49de8",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Jump%2520(32x32).png": "99da59b514370539951a76ba1fe51821",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Run%2520(32x32).png": "b04bbc82dc692516a4b13c0d9d5b9ebd",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Wall%2520Jump%2520(32x32).png": "552254b40eac6d10d2c3d779edb92116",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Double%2520Jump%2520(32x32).png": "351c1df6eb5ac94209e8e490ab816879",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Fall%2520(32x32).png": "ef8f3627041b7ae2a1dc76dfc3e419f3",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Hit%2520(32x32).png": "4c1ba2bf4e576409abbbd1aacc91d51d",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Idle%2520(32x32).png": "cb655be6f9354444720c7ce1dbd61dae",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Jump%2520(32x32).png": "4f048ccbc783c8eb3824be9651da8a34",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Run%2520(32x32).png": "fb191b4e6ac599286c38e496a700cfd2",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Wall%2520Jump%2520(32x32).png": "37ec0be0f82c3750a07efa558c032ee7",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Double%2520Jump%2520(32x32).png": "c76baa04d956c9d985c79643d7b2f672",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Fall%2520(32x32).png": "a20bd61d76132e4301fcfe7aa02ca9ba",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Hit%2520(32x32).png": "5d93268a09fb2959e1755da4ba201f9e",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Idle%2520(32x32).png": "1b35f85f1241dc1f0597cafbe1eac7f6",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Jump%2520(32x32).png": "cafaf2f48f36c9a6655a37f9c1c47b4a",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Run%2520(32x32).png": "25fcce89dfb6673a81d384091c87353d",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Wall%2520Jump%2520(32x32).png": "955d352171a2b666ae705b6205856ce1",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Double%2520Jump%2520(32x32).png": "612926916a3e8c5deff2023722c465ac",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Fall%2520(32x32).png": "5eb8c32845fad5fcc7794247eb91aed0",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Hit%2520(32x32).png": "bbd39134a77e658b0b9b64ded537972c",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Idle%2520(32x32).png": "1cb575929ac10fe13dfafa61d78ba28d",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Jump%2520(32x32).png": "f28e95fc98b251913baf3a21d5602381",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Run%2520(32x32).png": "016f388a07f71a930fd79a7a806d5da8",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Wall%2520Jump%2520(32x32).png": "76cbdd4a22d50bd65ac02be8a5eb1547",
"assets/assets/images/Menu/Buttons/Achievements.png": "b9bb58144606336efcd4862d35482f47",
"assets/assets/images/Menu/Buttons/Back.png": "661cfd0fdba294a951eb63c556684a64",
"assets/assets/images/Menu/Buttons/Close.png": "5c3a207383c5642288b01d314855a42a",
"assets/assets/images/Menu/Buttons/Leaderboard.png": "e3854b8ad5633b1f8017d08b7a783047",
"assets/assets/images/Menu/Buttons/Levels.png": "5364f08108b6f75ff31b5b7c84f9789a",
"assets/assets/images/Menu/Buttons/Next.png": "2f75777c57c36c83c6140bbd7b97a5e1",
"assets/assets/images/Menu/Buttons/Play.png": "23f2b2a41eb467518bbfef795d876dc8",
"assets/assets/images/Menu/Buttons/Previous.png": "c63a3a14721d926b03801f38b81b66a6",
"assets/assets/images/Menu/Buttons/Restart.png": "45fe1343f546485e8e288b122467f2fd",
"assets/assets/images/Menu/Buttons/Settings.png": "a56908d71e428647c51e73af372739ab",
"assets/assets/images/Menu/Buttons/Volume.png": "60060aab64ff40a0a996820f64a308b3",
"assets/assets/images/Menu/Text/Text%2520(Black)%2520(8x10).png": "33dfcfb4172f57930890a12c80f23201",
"assets/assets/images/Menu/Text/Text%2520(White)%2520(8x10).png": "493235653c61f14237c213dec97a9f2f",
"assets/assets/images/Other/Confetti%2520(16x16).png": "e23a201b4bfa7999a176dc9ec004c7bc",
"assets/assets/images/Other/Dust%2520Particle.png": "c72fceec8ccfcefc030fbc44ccdd68c4",
"assets/assets/images/Other/Shadow.png": "e0a519d1a807df82abc87e6a2375d20f",
"assets/assets/images/Other/Transition.png": "676092b6943e94a165bea63707f4518f",
"assets/assets/images/Terrain/Terrain%2520(16x16).png": "df891f02449c0565d51e2bf7823a0e38",
"assets/assets/images/Traps/Rock%2520Head/Blink%2520(42x42).png": "79bec88f1bab85f2d3304eb64c52e6c6",
"assets/assets/images/Traps/Rock%2520Head/Bottom%2520Hit%2520(42x42).png": "a8905ebb8b4ca7775d234e61b70b0e04",
"assets/assets/images/Traps/Rock%2520Head/Idle.png": "67a7a8b179a60118d9ce9a6ad4167052",
"assets/assets/images/Traps/Rock%2520Head/Left%2520Hit%2520(42x42).png": "29e183472fc139814d5245a14b0c2ebd",
"assets/assets/images/Traps/Rock%2520Head/Left%2520Hit%2520.png": "23d9e81ab97f34f9d5bc9944b45b5e1e",
"assets/assets/images/Traps/Rock%2520Head/Right%2520Hit%2520(42x42).png": "c2e11c4f2e75253e649d39f6e0dcb46d",
"assets/assets/images/Traps/Rock%2520Head/Right%2520Hit.png": "d9d88d09158a8ab0f4b9a4e8c2a62d1c",
"assets/assets/images/Traps/Rock%2520Head/Top%2520Hit%2520(42x42).png": "a7bc34c2035ccb90c16b7693209d03fd",
"assets/assets/images/Traps/Saw/Chain.png": "69669f8f421b508058cdf1232dc49e28",
"assets/assets/images/Traps/Saw/Off.png": "66d27386fec46e0b052941957d9bdc22",
"assets/assets/images/Traps/Saw/On%2520(38x38).png": "817477a39df8b330334e3866c1cb574b",
"assets/assets/images/Traps/Spiked%2520Ball/Chain.png": "16dff8265ca29df58e378bebbdd40295",
"assets/assets/images/Traps/Spiked%2520Ball/Spiked%2520Ball.png": "80489916819a87e28af7fbb56eed2181",
"assets/assets/images/Traps/Spikes/Idle.png": "64c275b1b14a4c8cd49088ce8ebf0db5",
"assets/assets/tiles/Blue.tsx": "e78ccdd3cc655ec0fb55bb2efdea56d1",
"assets/assets/tiles/Brown.tsx": "2ef8272bf07ce2548be759075e8f52b4",
"assets/assets/tiles/Checkpoint%2520(Flag%2520Idle)(64x64).tsx": "b191301f8d665f7b9a94da36849b5fac",
"assets/assets/tiles/Cherries.tsx": "43b597ffa0c9aec7c12cc92a32241f74",
"assets/assets/tiles/coin.tsx": "4e6f5b2e10f93dbf6f7e9fa99cce698b",
"assets/assets/tiles/Confetti%2520(16x16).tsx": "c356de524b5f70670798a891841a3df7",
"assets/assets/tiles/End%2520(Idle).tsx": "092b4d7f0cbc4bdaf18f7592025ad3e9",
"assets/assets/tiles/GameOver.tmx": "8afa9d240d94010c656c62abcf079aef",
"assets/assets/tiles/Gray.tsx": "f8fb1508b179d9fa8c8a0e763d55ebe0",
"assets/assets/tiles/Green.tsx": "d37f89bf2f69c94db0a8d2d787f33758",
"assets/assets/tiles/hi.tiled-project": "10b361e73e1df0f1ab301d093a29c039",
"assets/assets/tiles/hi.tiled-session": "d4614cc5f618c1307057e651c93c6e28",
"assets/assets/tiles/Idle%25201%2520(30x38).tsx": "dc0c9f67033a8812161d75b9bc262cfb",
"assets/assets/tiles/Idle.tsx": "b058e7b1a7842e0a9ddf88e4442579bd",
"assets/assets/tiles/Kiwi.tsx": "f954de5324055e941f3d98b8411c1a81",
"assets/assets/tiles/Level-01.tmx": "a50be90bf08ce6f5e7e1c2c21242a5f7",
"assets/assets/tiles/Level-02.tmx": "d0d431b285a94f7182876fedb95b9ef5",
"assets/assets/tiles/Level-03.tmx": "181e007692ee61c353c6a7728893df25",
"assets/assets/tiles/Level-04.tmx": "0b0c472bf8857ce61c388bbb07230fcb",
"assets/assets/tiles/Melon.tsx": "21356ac613ebb2b685265e309d521a75",
"assets/assets/tiles/mushroom.tsx": "0da7f674377cc1a6275ffe28ec3086c8",
"assets/assets/tiles/Orange.tsx": "a0999ed28a82a8fd3d372d1fa19be4bf",
"assets/assets/tiles/Pineapple.tsx": "2c506960026293d6080a4de07c580d2f",
"assets/assets/tiles/Pixel_Adventure.tsx": "9a89c40c3921686516418ed1ee0b24ed",
"assets/assets/tiles/radish.tsx": "2565591152903ce297b20cacdba18b95",
"assets/assets/tiles/rockhead.tsx": "d7b9e0254bdc7fea5442c4b20d3559d6",
"assets/assets/tiles/Start.tmx": "cc7da82bd4ae98830e82fa19f17c64f9",
"assets/assets/tiles/Strawberry.tsx": "621a496980e812a306e54a1748a3bfdd",
"assets/assets/tiles/Text%2520(Black)%2520(8x10).tsx": "81b689711a04f35dc794f0265973a338",
"assets/assets/tiles/Text%2520(White)%2520(8x10).tsx": "7fa9eaa8aa5c4848cdc847b53b585262",
"assets/assets/tiles/Text%2520(White).tsx": "7c01c017944a912ef3b8c99185a1ceb9",
"assets/assets/tiles/Text%2520(White)2%2520(8x10).tsx": "edbb3f4f95b995324010c7ed3328a280",
"assets/assets/tiles/trophy.tsx": "7f6db08f5d2ba35f1cef983a0f5f2469",
"assets/assets/tiles/Win.tmx": "8f077b2a9fc430a11481c09a21679323",
"assets/assets/tiles/Yellow.tsx": "91c14c5769945b0691dad75c7b0d3b17",
"assets/FontManifest.json": "6e61b0626da60cc98be57b2315182a57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/fonts/TmonMonsori.ttf": "0266b60888b0995b5ddb28136e58d844",
"assets/NOTICES": "c94b86dc367c3bee2476c776f23ad644",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1ba79f56784caec5b30eadce2e6093f0",
"/": "1ba79f56784caec5b30eadce2e6093f0",
"main.dart.js": "d85891f70d61a767bfc481f651abfea7",
"manifest.json": "0b6834feb81bab751e4402180ab5f854",
"version.json": "874135466a793031ac670a4ff46acc48"};
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
