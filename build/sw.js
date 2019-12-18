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
    "url": "404.html",
    "revision": "13f80523d99035bbf3a94cf1c1885505"
  },
  {
    "url": "about.html",
    "revision": "2c01b7ddf9f7ae59fa385d033338c872"
  },
  {
    "url": "blog.html",
    "revision": "185fa3b9624c53fc44d6bf15185721e9"
  },
  {
    "url": "courses.html",
    "revision": "4797992822541775f840c42edaf6743b"
  },
  {
    "url": "entrepreneur-1.html",
    "revision": "7e4645af3d01d9407a4e07b6c479bf1c"
  },
  {
    "url": "entrepreneur-2.html",
    "revision": "5220991a0e10739401fcdf9e9e31bb4b"
  },
  {
    "url": "events.html",
    "revision": "766cf480490ab9084757ce86d3357a8d"
  },
  {
    "url": "faq.html",
    "revision": "bf494421f023bfbb0183bddfbc861ebf"
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
    "revision": "7ecba2c84ff6fe82f97cf2d6cdc33593"
  },
  {
    "url": "images/about-3.jpg",
    "revision": "0e86182492d071576e65a58dd0546026"
  },
  {
    "url": "images/about-4.jpg",
    "revision": "f4680a2699afc7ac3b028c40590998a5"
  },
  {
    "url": "images/about-5.jpg",
    "revision": "45cb4bfb46b5be23278c705386d215b8"
  },
  {
    "url": "images/about-online-women-biz.jpg",
    "revision": "c627a9b184d828c51e211985e923f65d"
  },
  {
    "url": "images/arrow-dark-small-2x.png",
    "revision": "cfdf5f80793c5141b8f09e384c60ac66"
  },
  {
    "url": "images/arrow-dark-small.png",
    "revision": "95854367eb5a7074df1b1e35c934206b"
  },
  {
    "url": "images/arrow-dark.png",
    "revision": "5fd114780e51c08fe001f7793efc51d9"
  },
  {
    "url": "images/arrow-primary.png",
    "revision": "265a004f076b384ad5f39254baa9ead3"
  },
  {
    "url": "images/arrow-small-2x.png",
    "revision": "eda6afd15bb878e5f40f67b6f1ef71be"
  },
  {
    "url": "images/arrow-small.png",
    "revision": "ef2680c39261a3a414f4f4596faf7c04"
  },
  {
    "url": "images/arrow.png",
    "revision": "c84423373dc35680532b7c6b04cfde9e"
  },
  {
    "url": "images/blog-1.jpg",
    "revision": "771285e99e8b6a738efe3721c41c994c"
  },
  {
    "url": "images/blog-2.jpg",
    "revision": "0d6c8bed8f905e256faf075393a69f6f"
  },
  {
    "url": "images/blog-3.jpg",
    "revision": "58175fb4072a2a1eaba28e1cb6a81e0f"
  },
  {
    "url": "images/blog-4.jpg",
    "revision": "e6e941e4ffa6c17c5d9a9f41533b91be"
  },
  {
    "url": "images/blog-hover-1.jpg",
    "revision": "4a54752244e16407bb5fa952bcc40014"
  },
  {
    "url": "images/blog-hover-2.jpg",
    "revision": "b3c9009cde0b51db7ade8ee26ed8a6ba"
  },
  {
    "url": "images/blog-hover-3.jpg",
    "revision": "b92d30fb001df4096bf28f6a744831ac"
  },
  {
    "url": "images/blog-hover-4.jpg",
    "revision": "e7e157c786dd69b7c23721aa98db403f"
  },
  {
    "url": "images/displacement.png",
    "revision": "3408054e5f083993c59b1b92204fbc12"
  },
  {
    "url": "images/events-2.jpg",
    "revision": "18a5561554538af8d9a92d72ce4dba5f"
  },
  {
    "url": "images/events-online-women-biz.jpg",
    "revision": "98241d97c042b35ba27548523b3f1cc1"
  },
  {
    "url": "images/faq-1.jpg",
    "revision": "e9cc95d2b75b530e16fc5f979719eeea"
  },
  {
    "url": "images/foundation-2.png",
    "revision": "671a2c28e929fcc34ee9ae7ca8ac0dae"
  },
  {
    "url": "images/foundation-3.jpg",
    "revision": "1e76c5057e3db0b2f4a67f9e6438cfd4"
  },
  {
    "url": "images/foundation-4.jpg",
    "revision": "7a5c920c342281f586ec3b89d332109d"
  },
  {
    "url": "images/foundation-5.jpg",
    "revision": "a38b6be8c46ec1ca7d005af64d54afa7"
  },
  {
    "url": "images/girl-1.png",
    "revision": "1cab5798765b4f1b3f0be96c1c63418f"
  },
  {
    "url": "images/girl-2.png",
    "revision": "616223c3e3c13e7ca395be2d587fd5f7"
  },
  {
    "url": "images/girl-3.png",
    "revision": "d6583b605297083e5c3dc35983b38810"
  },
  {
    "url": "images/growth-2.png",
    "revision": "f2062574767a5ed7edfd84285a5333a4"
  },
  {
    "url": "images/growth-3.jpg",
    "revision": "883d966ec4e3071362373ac584c25b03"
  },
  {
    "url": "images/growth-4.jpg",
    "revision": "6e237caf32b1edb2ebc33f4fdd0f0ca3"
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
    "url": "images/index-hover-2.jpg",
    "revision": "611086be881a338a90679777661f68c5"
  },
  {
    "url": "images/index-hover-3.jpg",
    "revision": "3848c94c22277f531b594928e0c722fa"
  },
  {
    "url": "images/index-hover-4.jpg",
    "revision": "866077db7d60405ffd926ded7f4c6663"
  },
  {
    "url": "images/letter.png",
    "revision": "aee04bf07e6efa737469ed7422473826"
  },
  {
    "url": "images/logo-big-dark-2x.png",
    "revision": "981695f909741bb3c2749526d762d2e2"
  },
  {
    "url": "images/logo-big-dark.png",
    "revision": "981695f909741bb3c2749526d762d2e2"
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
    "url": "images/logo-big-primary-2x.png",
    "revision": "ce9cb694e5ffc9fa34a5aa61e72f6d76"
  },
  {
    "url": "images/logo-big-primary.png",
    "revision": "ce9cb694e5ffc9fa34a5aa61e72f6d76"
  },
  {
    "url": "images/logo-dark.svg",
    "revision": "cfc2d1638c778f6d8061574c62987d69"
  },
  {
    "url": "images/logo-light.svg",
    "revision": "4e299a7be4f4422989e243ce7192aab6"
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
    "url": "images/logo-small-light-2x.png",
    "revision": "87bab3a410a6e244406ef1a9baaf919d"
  },
  {
    "url": "images/logo-small-light.png",
    "revision": "1038c5865dacc71684e5faee1d0c1934"
  },
  {
    "url": "images/logo-small-primary-2x.png",
    "revision": "734927019fa0db28976424ad8abe84bd"
  },
  {
    "url": "images/logo-small-primary.png",
    "revision": "6f0deb5f381026e6831e7d1d54082ecd"
  },
  {
    "url": "images/mouse-dark.svg",
    "revision": "6fdc75dd67a4597baf7d885192f446d9"
  },
  {
    "url": "images/mouse-light.svg",
    "revision": "06d9803b5d30acf2fcd56deb4bcda386"
  },
  {
    "url": "images/mouse-primary.svg",
    "revision": "d6fdd2314ffae788951f86a5190d0a81"
  },
  {
    "url": "images/nina-mua-2.jpg",
    "revision": "061b7b78412664193ff8023702583d81"
  },
  {
    "url": "images/nina-mua-3.jpg",
    "revision": "2fa632c296ba0bab2911ce2410f428ac"
  },
  {
    "url": "images/nina-mua-4.jpg",
    "revision": "d23dfb52d753d7b4938b9a3c88de693a"
  },
  {
    "url": "images/nina-mua-phone-1.jpg",
    "revision": "9517a2b482ceaf95df79083d521265c0"
  },
  {
    "url": "images/post-1.jpg",
    "revision": "0f7f5986be37d3a3a61f5e7db6ceee58"
  },
  {
    "url": "images/slide-1.png",
    "revision": "64633d15840745c99195edddd326fc0a"
  },
  {
    "url": "images/slide-2.png",
    "revision": "3c916fc97fc0134693cfb4dd70d997f8"
  },
  {
    "url": "images/slide-3.png",
    "revision": "314927c360248169643dde83433e5455"
  },
  {
    "url": "images/slide-4.png",
    "revision": "2ff325dc9d76c99526c9dcc96c283d72"
  },
  {
    "url": "images/slide-5.png",
    "revision": "80de979f3bb83cad5b7b7f58ccdcbf86"
  },
  {
    "url": "images/turn.png",
    "revision": "be9c79b9a75b461216c906c6d217594c"
  },
  {
    "url": "images/woman-entrepreneur-2-growth.jpg",
    "revision": "0fa81dd2bfd592a111ba55b8539fe975"
  },
  {
    "url": "images/woman-entrepreneur-life-business-success.jpg",
    "revision": "901a906f078168f4ef421efc6e3f8828"
  },
  {
    "url": "index.html",
    "revision": "906f03ced7cc99c27e2d137f50c112b0"
  },
  {
    "url": "nina-mua.html",
    "revision": "dac86ad4c03b28592821016a267d2375"
  },
  {
    "url": "post.html",
    "revision": "e103b42c8d32b53c272b3d3e0692411a"
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
    "revision": "376f9ab8a74355fb72002ddfca8a472e"
  },
  {
    "url": "scripts/scripts.min.js",
    "revision": "c977c28865aa3580c7cd480ea3fd45f1"
  },
  {
    "url": "sitemap.html",
    "revision": "a9a7650cc48e6491b57dbc9ce0f4fcd4"
  },
  {
    "url": "styles/libs.min.css",
    "revision": "802d035e029e503f31bd5b3cde9a4783"
  },
  {
    "url": "styles/main.css",
    "revision": "87bba459d6beba2ac636651c536e46fc"
  },
  {
    "url": "styles/main.min.css",
    "revision": "c08163933e43187243d94b6c95075fb6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
