'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "463aa99bb8ba0fa599e9ac01c746b72b",
"/css/main.css": "6f4e7fde38d399b358b0a0ecc2f06963",
"/css/normalize.css": "7fa16beff0c7dcf1a77bfb323c801675",
"/js/main.js": "dff22b391af49524e901d377bda14f05",
"/js/vendor/modernizr-2.6.2.min.js": "42306a279a9e831515347ae319181cd1",
"/js/vendor/jquery-1.9.1.min.js": "663628f795cb62444143fde1ebdf2b5b",
"/main.dart.js": "b923a1f139b5e8c924f07ed74234c4a0",
"/php/mailer.php": "8ff95e26c92b2c92c1dafd438a9d4b79",
"/favicon.png": "8d83b113418828c38abb688a399c7d5f",
"/icons/Icon-192.png": "3096f4e05ac8951c7479440d2b1e9f30",
"/icons/Icon-512.png": "ccceba75b195f3c763be9e6ce22fa9f9",
"/manifest.json": "32c5aacb665549616fa2c25333a959b5",
"/assets/LICENSE": "2082a69f31637fc3ceadf158642d0f90",
"/assets/images/no-image.png": "f3a6d82522fad124e4a4dc50f9f2a10a",
"/assets/images/job-2.png": "7e4f83b2cee91f57889930c1d70db73e",
"/assets/images/job-3.png": "37244ff70e02c232a25be4e3a1a35e03",
"/assets/images/job-1.png": "3e1603c2be3172a8df94bb551effe5a7",
"/assets/images/job-4.png": "0137ebfbc9c97e39e976dac2f8f3b5f5",
"/assets/images/job-5.png": "d74f20b476f803147f4c2e1338c5608c",
"/assets/images/job-7.png": "544abe1f6488d72d1f80b77033377668",
"/assets/images/job-6.png": "c4bfeee8bb9f0f3ad25b35c478954694",
"/assets/images/avatar.png": "af9f42cc763be14306097fd2467e4d53",
"/assets/images/job-8.png": "392a6839924e21a72987a60c4d2ab744",
"/assets/images/job-9.png": "78721ba1f7302c1f94514f52f3a8b4e6",
"/assets/images/volunteer-1.png": "0d030159c9f12241d63e27efc69187ee",
"/assets/images/volunteer-2.png": "88c0df2acbef7e7bd13f572ce23ceac4",
"/assets/images/volunteer-3.png": "3ab2109dab9e38537936fe3956643992",
"/assets/AssetManifest.json": "1a6911c7146664939bbe6bb0ed8336db",
"/assets/FontManifest.json": "9b7cd598c2610c799474ef4aa9b5777b",
"/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "2aa350bd2aeab88b601a593f793734c0",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "2bca5ec802e40d3f4b60343e346cedde",
"/assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5a37ae808cf9f652198acde612b5328d",
"/assets/files/CV_20201019.pdf": "b53807d7fc92583c2a5c8236fe3a9a2e",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
