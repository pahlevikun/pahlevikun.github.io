'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "a77f7edba394a5cde6393e1320d905e8",
"/": "a77f7edba394a5cde6393e1320d905e8",
"css/main.css": "6f4e7fde38d399b358b0a0ecc2f06963",
"css/normalize.css": "7fa16beff0c7dcf1a77bfb323c801675",
"js/main.js": "dff22b391af49524e901d377bda14f05",
"js/vendor/modernizr-2.6.2.min.js": "42306a279a9e831515347ae319181cd1",
"js/vendor/jquery-1.9.1.min.js": "663628f795cb62444143fde1ebdf2b5b",
"main.dart.js": "ca17a0eb2058229f0c446bba4f72a038",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "32c5aacb665549616fa2c25333a959b5",
"assets/LICENSE": "27a8860266dfc5b52790ff893da8b330",
"assets/AssetManifest.json": "80e50554df41c79f609f79a0398f4dea",
"assets/image/job-2.png": "7e4f83b2cee91f57889930c1d70db73e",
"assets/image/job-3.png": "37244ff70e02c232a25be4e3a1a35e03",
"assets/image/job-1.png": "3e1603c2be3172a8df94bb551effe5a7",
"assets/image/job-4.png": "0137ebfbc9c97e39e976dac2f8f3b5f5",
"assets/image/job-5.png": "d74f20b476f803147f4c2e1338c5608c",
"assets/image/job-7.png": "544abe1f6488d72d1f80b77033377668",
"assets/image/job-6.png": "c4bfeee8bb9f0f3ad25b35c478954694",
"assets/image/avatar.png": "af9f42cc763be14306097fd2467e4d53",
"assets/image/job-8.png": "392a6839924e21a72987a60c4d2ab744",
"assets/image/volunteer-1.png": "0d030159c9f12241d63e27efc69187ee",
"assets/image/volunteer-2.png": "88c0df2acbef7e7bd13f572ce23ceac4",
"assets/image/volunteer-3.png": "3ab2109dab9e38537936fe3956643992",
"assets/FontManifest.json": "9b7cd598c2610c799474ef4aa9b5777b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/job-2.png": "7e4f83b2cee91f57889930c1d70db73e",
"assets/assets/images/job-3.png": "37244ff70e02c232a25be4e3a1a35e03",
"assets/assets/images/job-1.png": "3e1603c2be3172a8df94bb551effe5a7",
"assets/assets/images/job-4.png": "0137ebfbc9c97e39e976dac2f8f3b5f5",
"assets/assets/images/job-5.png": "d74f20b476f803147f4c2e1338c5608c",
"assets/assets/images/job-7.png": "544abe1f6488d72d1f80b77033377668",
"assets/assets/images/job-6.png": "c4bfeee8bb9f0f3ad25b35c478954694",
"assets/assets/images/avatar.png": "af9f42cc763be14306097fd2467e4d53",
"assets/assets/images/job-8.png": "392a6839924e21a72987a60c4d2ab744",
"assets/assets/images/volunteer-1.png": "0d030159c9f12241d63e27efc69187ee",
"assets/assets/images/volunteer-2.png": "88c0df2acbef7e7bd13f572ce23ceac4",
"assets/assets/images/volunteer-3.png": "3ab2109dab9e38537936fe3956643992"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
