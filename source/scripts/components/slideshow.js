var slideshow = $('#slideshow'),
    running = null,
    images = null;

images = [];
isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

if (isChrome) {
  images.push( $('<img/>', {
    src: 'images/slide-2.webp'
  }));

  images.push( $('<img/>', {
    src: 'images/slide-3.webp'
  }));

  images.push( $('<img/>', {
    src: 'images/slide-4.webp'
  }));

  images.push( $('<img/>', {
    src: 'images/slide-5.webp'
  }));
} else {
  images.push( $('<img/>', {
    src: 'images/slide-2.png'
  }));

  images.push( $('<img/>', {
    src: 'images/slide-3.png'
  }));

  images.push( $('<img/>', {
    src: 'images/slide-4.png'
  }));

  images.push( $('<img/>', {
    src: 'images/slide-5.png'
  }));
};

slideshow.eq(0).append(images);

slideshow.hover(
  function() {
    var e = $(this);

    running = setInterval(function() {
      var c = e.find('.active');
      var n = c.next();

      if (!n.length) n = e.children().first();

      c.removeClass('active');
      n.addClass('active');
    }, 250);
  },
  function() {
    clearInterval(running);

    running = null;
  }
);
