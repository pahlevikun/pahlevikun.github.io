'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "c1b8921c73fe39525d7e48e437b6b955",
"splash/img/dark-1x.gif": "fc1ddab415f06cd624975883cd10a4da",
"splash/img/light-1x.gif": "fc1ddab415f06cd624975883cd10a4da",
"splash/img/light-2x.gif": "a69b38015bad5eb37069d4251f28a16f",
"splash/img/dark-4x.gif": "4639e730706265628dd0c2b923a9ded9",
"splash/img/light-3x.gif": "fe502a47990ce383dadb1dfbf4e8bbd8",
"splash/img/dark-3x.gif": "fe502a47990ce383dadb1dfbf4e8bbd8",
"splash/img/light-4x.gif": "4639e730706265628dd0c2b923a9ded9",
"splash/img/dark-2x.gif": "a69b38015bad5eb37069d4251f28a16f",
"index.html": "0be2f9647c66a50ca5a332592846d30e",
"/": "0be2f9647c66a50ca5a332592846d30e",
"css/main.css": "60fe74e96776900112e4ffa4975d100c",
"css/normalize.css": "7fa16beff0c7dcf1a77bfb323c801675",
"js/main.js": "dff22b391af49524e901d377bda14f05",
"js/vendor/modernizr-2.6.2.min.js": "42306a279a9e831515347ae319181cd1",
"js/vendor/jquery-1.9.1.min.js": "663628f795cb62444143fde1ebdf2b5b",
"main.dart.js": "a8dd4ef7c09704d713200dd220cab72b",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"php/mailer.php": "3f2410234bc4208aeca98ad7ea87a4ae",
"favicon.png": "8d83b113418828c38abb688a399c7d5f",
"icons/Icon-192.png": "3096f4e05ac8951c7479440d2b1e9f30",
"icons/Icon-512.png": "ccceba75b195f3c763be9e6ce22fa9f9",
"manifest.json": "32c5aacb665549616fa2c25333a959b5",
"assets/images/no-image.png": "f3a6d82522fad124e4a4dc50f9f2a10a",
"assets/images/job-2.png": "7e4f83b2cee91f57889930c1d70db73e",
"assets/images/job-3.png": "37244ff70e02c232a25be4e3a1a35e03",
"assets/images/job-1.png": "3e1603c2be3172a8df94bb551effe5a7",
"assets/images/job-18.png": "2cf10ee94abf568806b7d0be6f059eda",
"assets/images/job-4.png": "0137ebfbc9c97e39e976dac2f8f3b5f5",
"assets/images/education-1.png": "9fac03b94a55368f2be74be432ed20ee",
"assets/images/job-5.png": "d74f20b476f803147f4c2e1338c5608c",
"assets/images/job-7.png": "544abe1f6488d72d1f80b77033377668",
"assets/images/education-3.png": "36e386ecd679c5307a2436a3bd58c806",
"assets/images/education-2.png": "a0dbffeb53962911a0f7522de518dab2",
"assets/images/job-6.png": "c4bfeee8bb9f0f3ad25b35c478954694",
"assets/images/job-13.png": "4fa62e828ec55cf3bfa61161fe186563",
"assets/images/job-12.png": "2f1fd6d2cf8a9f5f9283d12128edce7c",
"assets/images/avatar.png": "17240554ca481b60963604db93a0fec0",
"assets/images/job-8.png": "392a6839924e21a72987a60c4d2ab744",
"assets/images/job-10.png": "b9a30be1a886890f0d62ca4e5d02a411",
"assets/images/job-11.png": "ca469d812936b3ab91e6b7c243ab51cb",
"assets/images/job-9.png": "78721ba1f7302c1f94514f52f3a8b4e6",
"assets/images/job-15.png": "7c16abd75419f07c480f9981bc355e03",
"assets/images/job-14.png": "cd4925c635dc58f7d697816d2185e43d",
"assets/images/job-16.png": "53a3f92ab783cce85f122d1356efe9d6",
"assets/images/job-17.png": "d90bf57627a619502e57b7e407184f73",
"assets/images/volunteer-1.png": "0d030159c9f12241d63e27efc69187ee",
"assets/images/volunteer-2.png": "88c0df2acbef7e7bd13f572ce23ceac4",
"assets/images/volunteer-3.png": "3ab2109dab9e38537936fe3956643992",
"assets/images/volunteer-6.png": "80cdb84888e86905c846d126dc29ab45",
"assets/images/volunteer-4.png": "a75f3212749d4ca1547d7c5886ea6f68",
"assets/images/volunteer-5.png": "ad2a0a595e17fd78062be2cf666ba7ba",
"assets/AssetManifest.json": "af222f004aee1f6908dc0a6eca212c7b",
"assets/NOTICES": "e5ffa62f87afb55a04af88fa70497a19",
"assets/FontManifest.json": "7920de41c58b42dbd3b2fdc96094529a",
"assets/AssetManifest.bin.json": "1fa703ad064754bc297b21ff2bdf6460",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "e8a81e81682286efe405fb19ee15cae6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "ec841c90557da42ef48bca26476f40a3",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/files/CV_20201019.pdf": "b53807d7fc92583c2a5c8236fe3a9a2e",
"assets/AssetManifest.bin": "d5c2cdd40d6358964434989ecb642005",
"assets/fonts/MaterialIcons-Regular.otf": "dc009179e5b6554c7aad4d2d126aa4f4",
"assets/assets/gif/loading2.gif": "834e3795836ce355c11145659b62e644",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
