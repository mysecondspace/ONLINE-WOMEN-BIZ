/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about.html",
    "revision": "07c0b5a7ac7b2f1dd2eb0c8978c5275a"
  },
  {
    "url": "fonts/harmonia-bold.otf",
    "revision": "ee8663cd4c1627cb0aad21b8c8b0f63e"
  },
  {
    "url": "fonts/harmonia-cond-bold.ttf",
    "revision": "e9df7da42e3127cda579905e5ba2191c"
  },
  {
    "url": "fonts/harmonia-cond-light.ttf",
    "revision": "c43ce7896f8bdc4da27fd192d4814d6b"
  },
  {
    "url": "fonts/harmonia-cond-normal.ttf",
    "revision": "9bfb9696975c03b0ed9b93cdb5123ad0"
  },
  {
    "url": "fonts/harmonia-normal.otf",
    "revision": "6fd7e0f0248f1c0320476e13c81e4047"
  },
  {
    "url": "images/about-1.jpg",
    "revision": "6c9336275449abbf4652f965c9deb6f3"
  },
  {
    "url": "images/about-2.jpg",
    "revision": "8c76c0e74544d6ae3970ef7b96b78cec"
  },
  {
    "url": "images/about-3.jpg",
    "revision": "f05266623bb1dbbf7df247cbd9a7e02b"
  },
  {
    "url": "images/about-4.jpg",
    "revision": "6d43f7f4e40151bd1b6acab26d7bcc20"
  },
  {
    "url": "images/about-phone-1 2.jpg",
    "revision": "9517a2b482ceaf95df79083d521265c0"
  },
  {
    "url": "images/about-phone-1.jpg",
    "revision": "9517a2b482ceaf95df79083d521265c0"
  },
  {
    "url": "images/arrow.png",
    "revision": "c84423373dc35680532b7c6b04cfde9e"
  },
  {
    "url": "images/displacement 3.png",
    "revision": "3408054e5f083993c59b1b92204fbc12"
  },
  {
    "url": "images/displacement.png",
    "revision": "3408054e5f083993c59b1b92204fbc12"
  },
  {
    "url": "images/index-1.jpg",
    "revision": "fab09e930f65b9ec5c7635baba59718a"
  },
  {
    "url": "images/index-2.jpg",
    "revision": "7678f0fded467474016f58115a4dd44f"
  },
  {
    "url": "images/index-3.jpg",
    "revision": "5a374a5ad4215d17c6ca78cbca443d84"
  },
  {
    "url": "images/index-4.jpg",
    "revision": "a637ba09d20381686059acbe7315e301"
  },
  {
    "url": "images/index-hover-1.jpg",
    "revision": "820da0ee790921dcf3ea852346f2f26b"
  },
  {
    "url": "images/index-hover-2 3.jpg",
    "revision": "611086be881a338a90679777661f68c5"
  },
  {
    "url": "images/index-hover-2.jpg",
    "revision": "611086be881a338a90679777661f68c5"
  },
  {
    "url": "images/index-hover-3 3.jpg",
    "revision": "3848c94c22277f531b594928e0c722fa"
  },
  {
    "url": "images/index-hover-3.jpg",
    "revision": "3848c94c22277f531b594928e0c722fa"
  },
  {
    "url": "images/index-hover-4 3.jpg",
    "revision": "866077db7d60405ffd926ded7f4c6663"
  },
  {
    "url": "images/index-hover-4.jpg",
    "revision": "866077db7d60405ffd926ded7f4c6663"
  },
  {
    "url": "images/letter.png",
    "revision": "590e2a296bf8534ec01670f0ef01ed3f"
  },
  {
    "url": "images/logo 3.svg",
    "revision": "4e299a7be4f4422989e243ce7192aab6"
  },
  {
    "url": "images/logo-big-light 3.png",
    "revision": "3ec2c2421f01c2b712f28cb9e87f3621"
  },
  {
    "url": "images/logo-big-light-2x 3.png",
    "revision": "3ec2c2421f01c2b712f28cb9e87f3621"
  },
  {
    "url": "images/logo-big-light-2x.png",
    "revision": "3ec2c2421f01c2b712f28cb9e87f3621"
  },
  {
    "url": "images/logo-big-light.png",
    "revision": "3ec2c2421f01c2b712f28cb9e87f3621"
  },
  {
    "url": "images/logo-big-primary 3.png",
    "revision": "ce9cb694e5ffc9fa34a5aa61e72f6d76"
  },
  {
    "url": "images/logo-big-primary-2x 3.png",
    "revision": "ce9cb694e5ffc9fa34a5aa61e72f6d76"
  },
  {
    "url": "images/logo-big-primary-2x.png",
    "revision": "ce9cb694e5ffc9fa34a5aa61e72f6d76"
  },
  {
    "url": "images/logo-big-primary.png",
    "revision": "ce9cb694e5ffc9fa34a5aa61e72f6d76"
  },
  {
    "url": "images/logo-small-dark 3.png",
    "revision": "f96596dd2835a1166fc3f786a8d7632b"
  },
  {
    "url": "images/logo-small-dark-2x 3.png",
    "revision": "4cf3f969c08e5d1794a9af3186718142"
  },
  {
    "url": "images/logo-small-dark-2x.png",
    "revision": "4cf3f969c08e5d1794a9af3186718142"
  },
  {
    "url": "images/logo-small-dark.png",
    "revision": "f96596dd2835a1166fc3f786a8d7632b"
  },
  {
    "url": "images/logo-small-light 3.png",
    "revision": "1038c5865dacc71684e5faee1d0c1934"
  },
  {
    "url": "images/logo-small-light-2x 3.png",
    "revision": "87bab3a410a6e244406ef1a9baaf919d"
  },
  {
    "url": "images/logo-small-light-2x.png",
    "revision": "87bab3a410a6e244406ef1a9baaf919d"
  },
  {
    "url": "images/logo-small-light.png",
    "revision": "1038c5865dacc71684e5faee1d0c1934"
  },
  {
    "url": "images/logo.svg",
    "revision": "4e299a7be4f4422989e243ce7192aab6"
  },
  {
    "url": "images/mouse 3.svg",
    "revision": "06d9803b5d30acf2fcd56deb4bcda386"
  },
  {
    "url": "images/mouse-light.svg",
    "revision": "06d9803b5d30acf2fcd56deb4bcda386"
  },
  {
    "url": "images/mouse-primary.svg",
    "revision": "07d1b38b7a6f9c8cd919f0b9052f5a5a"
  },
  {
    "url": "images/mouse.svg",
    "revision": "06d9803b5d30acf2fcd56deb4bcda386"
  },
  {
    "url": "images/slide-1.png",
    "revision": "1e0ff9e8f561b2f19c2b4acad1ede23d"
  },
  {
    "url": "images/slide-2.png",
    "revision": "78368fcc0335aea3397285a3a0909316"
  },
  {
    "url": "images/slide-3.png",
    "revision": "47e20ee7b5c9a26c7a5f63ed059b81b4"
  },
  {
    "url": "images/slide-4.png",
    "revision": "936d7402e8c82bc148fe8f402a851d13"
  },
  {
    "url": "images/slide-5.png",
    "revision": "799471c307db1a26fda497b0baa3ad95"
  },
  {
    "url": "index.html",
    "revision": "5daeb2a71bf2d71e8a3e84d31fa4da1f"
  },
  {
    "url": "scripts/hover.min.js",
    "revision": "d1796c13983a50b5a52f320de7041a23"
  },
  {
    "url": "scripts/image.min.js",
    "revision": "9bbcdae459cb4cc81dae479e280ac8ee"
  },
  {
    "url": "scripts/main.min.js",
    "revision": "17fb38c17449cc658d00f0daf36c4547"
  },
  {
    "url": "scripts/scripts.min.js",
    "revision": "b0d7ec1a96435e4f59b2d786be19e1b4"
  },
  {
    "url": "styles/libs.min.css",
    "revision": "802d035e029e503f31bd5b3cde9a4783"
  },
  {
    "url": "styles/main.css",
    "revision": "9207459fefb2880e6a9282423dd1a24a"
  },
  {
    "url": "styles/main.min.css",
    "revision": "8bfc70c423e22a96af0969f62ca18f9d"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
