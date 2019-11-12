$(document).ready(function() {
  var index = $('#index'),
      about = $('#about'),
      courses = $('#courses'),
      blog = $('#blog'),
      post = $('#post'),
      faq = $('#faq');

  // initialize lazy load
  var myLazyLoad = new LazyLoad({
    elements_selector: '.lazy'
  });

  // video button
  var players = document.querySelectorAll('.youtube-player')
  var loadPlayer = function (event) {
    var target = event.currentTarget
    var iframe = document.createElement('iframe')

    iframe.height = target.clientHeight
    iframe.width = target.clientWidth
    iframe.src = "https://www.youtube.com/embed/" + target.dataset.videoId + "?autoplay=1&amp;rel=0&amp;showinfo=0"
    iframe.setAttribute("frameborder", 0)
    iframe.setAttribute("frameborder", 0)

    target.classList.remove("pristine")

    if (target.children.length) {
      target.replaceChild(iframe, target.firstElementChild)
    } else {
      target.appendChild(iframe)
    }
  }

  var config = {
    once: true
  }

  Array.from(players).forEach(function (player) {
    player.addEventListener('click', loadPlayer, config)
  })

  // toggle list
  var elem = $(".item p"),
      item = $(".item span");

  item.hide();
  elem.click(function(e) {
    var span = $(this).parent().find("span");

    span.toggle();
    item.not(span).hide();
    $(this).toggleClass("selected")
    elem.not(this).removeClass("selected");
  });

  // only for mobile version
  if (window.innerWidth < 768) {

    // opem main menu
    $('#nav').click(function() {
      $(this).toggleClass('click');
      $('#menu').toggleClass('opened');
    });

    // create swiper on the index page
    if (index.length > 0) {
      $('.block').addClass('swiper-slide').wrapAll('<div class="swiper-container">').wrapAll('<div class="swiper-wrapper">');
      $('.swiper-container').append('<div class="swiper-pagination"></div>');

    // create swiper on the about page
    } else if (about.length > 0) {
      $('.block .absolute img').addClass('swiper-slide').wrapAll('<div class="swiper-container">').wrapAll('<div class="swiper-wrapper">');
      $('.swiper-container').append('<div class="swiper-pagination"></div>');

    // create swiper on the post page
    } else if (post.length > 0) {
      $('.block').addClass('swiper-slide').wrapAll('<div class="swiper-container">').wrapAll('<div class="swiper-wrapper">');
      $('.swiper-container').append('<div class="swiper-pagination"></div>');
    };

    // initialize swiper
    var sOne = new Swiper (".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 20,
      autoHeight: true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        dynamicMainBullets: 1
      }
    });
  };

  // check URL
  if (index.length > 0) {
    $('#logo').attr('href', '#first');
    $('#menu li:nth-child(1)').remove();
    document.documentElement.style.setProperty("--menu-height", "240px");
    Emblem.init('#scroll p');

    // initialize scroll on the index page
    $('#main').fullpage({

      // options here
      scrollOverflow: true,
      scrollingSpeed: 1000,
      licenseKey: 'C1599FD0-FAEF44AD-B21B7C8B-4D21D8FB',
      anchors: ['first', 'second', 'third', 'fourth', 'fifth'],
      onLeave: function(origin, destination, direction) {
        switch(direction) {
          case 'up':
            $('#logo, #menu, #nav').addClass('animate-out-up');

            break;
          case 'down':
            $('#logo, #menu, #nav').addClass('animate-out-down');

            break;
        }
      },
      afterLoad: function(origin, destination, direction) {
        $('#logo, #menu, #nav').removeClass().addClass('animate-in');

        // sections
        switch(destination.index) {
          case 0:
            $('#index-1').addClass('animate');
            $('#logo').addClass('big light');
            $('#menu').addClass('primary');
            $('#nav').addClass('light');

            break;
          case 1:
            $('#index-2').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('secondary');
            $('#nav').addClass('light');

            break;
          case 2:
            $('#index-3').addClass('animate');
            $('#logo').addClass('small dark');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            break;
          case 3:
            $('#index-4').addClass('animate');
            $('#logo').addClass('small dark');
            $('#menu').addClass('primary');
            $('#nav').addClass('dark');

            break;
          case 4:
            $('#index-5').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('secondary');
            $('#nav').addClass('light');

            break;
        }

        // back to original state
        switch(origin && origin.index) {
          case 0:
            $('#index-1').removeClass('animate');

            break;
          case 1:
            $('#index-2').removeClass('animate');

            break;
          case 2:
            $('#index-3').removeClass('animate');

            break;
          case 3:
            $('#index-4').removeClass('animate');

            break;
          case 4:
            $('#index-5').removeClass('animate');

            break;
        }
      }
    });
  } else if (about.length > 0) {
    $('#menu a[href*="about"]').addClass('active');
    Emblem.init('#scroll p');
    Emblem.init('#circle p');

    // initialize scroll on the about page
    $('#main').fullpage({

      // options here
      fitToSection: false,
      autoScrolling: false,
      scrollingSpeed: 1000,
      anchors: ['first', 'second', 'third', 'fourth'],
      licenseKey: 'C1599FD0-FAEF44AD-B21B7C8B-4D21D8FB',
      afterLoad: function(origin, destination, direction) {
        $('#logo, #menu, #nav').removeClass().addClass('animate-in');

        // sections
        switch(destination.index) {
          case 0:
            $('#about-1').addClass('animate');
            $('#logo').addClass('big primary');
            $('#menu').addClass('light');

            break;
          case 1:
            $('#about-2').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('primary');
            $('#nav').addClass('light');

            // only for desktop version
            if (window.innerWidth > 768) {
              function timeout() {
                $('.paragraph p:first-of-type span').addClass('parallax');
              };

              setTimeout(timeout, 2000);
            }

            break;
          case 2:
            $('#about-3').addClass('animate');
            $('#logo').addClass('small dark');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            break;
          case 3:
            $('#about-4').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('secondary');
            $('#nav').addClass('light');

            break;
        }
      }
    });
  } else if (courses.length > 0) {
    $('#menu a[href*="courses"]').addClass('active');
    Emblem.init('#scroll p');
    Emblem.init('#circle p');

    // initialize scroll on the courses page
    $('#main').fullpage({

      // options here
      fitToSection: false,
      autoScrolling: false,
      scrollingSpeed: 1000,
      anchors: ['first', 'second', 'third', 'fourth', 'fifth', 'six', 'seven', 'eight'],
      licenseKey: 'C1599FD0-FAEF44AD-B21B7C8B-4D21D8FB',
      afterLoad: function(origin, destination, direction) {
        $('#logo, #menu, #nav').removeClass().addClass('animate-in');

        // sections
        switch(destination.index) {
          case 0:
            $('#courses-1').addClass('animate');
            $('#logo').addClass('big primary');
            $('#menu').addClass('light');
            $('#nav').addClass('primary');

            break;
          case 1:
            $('#courses-2').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('secondary');
            $('#nav').addClass('light');

            break;
          case 2:
            $('#courses-3').addClass('animate');
            $('#logo').addClass('small dark');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            break;
          case 3:
            $('#courses-4').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('primary');
            $('#nav').addClass('light');

            break;
          case 4:
            $('#courses-5').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('secondary');
            $('#nav').addClass('light');

            break;
          case 5:
            $('#courses-6').addClass('animate');
            $('#logo').addClass('small dark');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            break;
          case 6:
            $('#courses-7').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('secondary');
            $('#nav').addClass('light');

            break;
          case 7:
            $('#courses-8').addClass('animate');
            $('#logo').addClass('small dark');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            break;
          case 8:
            $('#courses-9').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('secondary');
            $('#nav').addClass('light');

            break;
          case 9:
            $('#courses-10').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('primary');
            $('#nav').addClass('light');

            break;
          case 10:
            $('#courses-11').addClass('animate');
            $('#logo').addClass('small dark');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            break;
          case 11:
            $('#courses-12').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('secondary');
            $('#nav').addClass('light');

            break;
        }
      }
    });
  } else if (blog.length > 0) {
    $('#menu a[href*="blog"]').addClass('active');
    Emblem.init('#scroll p');

    // initialize scroll on the about page
    $('#main').fullpage({

      // options here
      fitToSection: false,
      autoScrolling: false,
      scrollingSpeed: 1000,
      anchors: ['first', 'second', 'third', 'fourth'],
      licenseKey: 'C1599FD0-FAEF44AD-B21B7C8B-4D21D8FB',
      afterLoad: function(origin, destination, direction) {
        $('#logo, #menu, #nav').removeClass().addClass('animate-in');

        // sections
        switch(destination.index) {
          case 0:
            $('#blog-1').addClass('animate');
            $('#menu').addClass('secondary');
            $('#nav').addClass('light');

            // only for desktop version
            if (window.innerWidth > 768) {
              $('#logo').addClass('big light');
            } else {
              $('#logo').addClass('small light');
            };

            break;
          case 1:
            $('#blog-2').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('secondary');
            $('#nav').addClass('light');

            break;
          case 2:
            $('#blog-3').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('secondary');
            $('#nav').addClass('light');

            break;
          case 3:
            $('#blog-4').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('secondary');
            $('#nav').addClass('light');

            break;
        }
      }
    });
  } else if (post.length > 0) {
    Emblem.init('#scroll p');

    // initialize scroll on the about page
    $('#main').fullpage({

      // options here
      fitToSection: false,
      autoScrolling: false,
      scrollingSpeed: 1000,
      anchors: ['first', 'second', 'third', 'fourth', 'fifth', 'six', 'seven'],
      licenseKey: 'C1599FD0-FAEF44AD-B21B7C8B-4D21D8FB',
      afterLoad: function(origin, destination, direction) {
        $('#logo, #menu, #nav').removeClass().addClass('animate-in');

        // sections
        switch(destination.index) {
          case 0:
            $('#post-1').addClass('animate');
            $('#logo').addClass('big dark');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            break;
          case 1:
            $('#post-2').addClass('animate');
            $('#logo').addClass('small dark');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            break;
          case 2:
            $('#post-3').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('secondary');
            $('#nav').addClass('light');

            break;
          case 3:
            $('#post-4').addClass('animate');
            $('#logo').addClass('small dark');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            break;
          case 4:
            $('#post-5').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('primary');
            $('#nav').addClass('light');

            break;
          case 5:
            $('#post-6').addClass('animate');
            $('#logo').addClass('small dark');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            break;
          case 6:
            $('#post-7').addClass('animate');
            $('#logo').addClass('small dark');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            break;
          case 7:
            $('#post-8').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('secondary');
            $('#nav').addClass('light');

            break;
        }
      }
    });
  } else if (faq.length > 0) {
    $('#menu a[href*="faq"]').addClass('active');
    Emblem.init('#scroll p');

    // initialize scroll on the about page
    $('#main').fullpage({

      // options here
      fitToSection: false,
      autoScrolling: false,
      scrollingSpeed: 1000,
      anchors: ['first', 'second', 'third', 'fourth', 'fifth', 'six', 'seven'],
      licenseKey: 'C1599FD0-FAEF44AD-B21B7C8B-4D21D8FB',
      afterRender: function() {
        $('#faq-1').addClass('animate');
      },
      afterLoad: function(origin, destination, direction) {
        $('#logo, #menu, #nav').removeClass().addClass('animate-in');

        // sections
        switch(destination.index) {
          case 0:
            $('#faq-1').addClass('animate');
            $('#logo').addClass('big dark');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            break;
          case 1:
            $('#faq-2').addClass('animate');
            $('#logo').addClass('small dark');
            $('#menu').addClass('light');
            $('#nav').addClass('light');

            break;
          case 2:
            $('#faq-3').addClass('animate');
            $('#logo').addClass('small dark');
            $('#menu').addClass('light');
            $('#nav').addClass('light');

            break;
          case 3:
            $('#faq-4').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('primary');
            $('#nav').addClass('light');

            break;
          case 4:
            $('#faq-5').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('secondary');
            $('#nav').addClass('light');

            break;
          case 5:
            $('#faq-6').addClass('animate');
            $('#logo').addClass('small dark');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            break;
          case 6:
            $('#faq-7').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('primary');
            $('#nav').addClass('light');

            break;
        }
      }
    });
  };
});