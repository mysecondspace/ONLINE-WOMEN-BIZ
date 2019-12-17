// register service worker
if (navigator.serviceWorker) navigator.serviceWorker.register('/sw.js');

$(document).ready(function() {
  var error = $('#error'),
      index = $('#index'),
      about = $('#about'),
      sitemap = $('#sitemap'),
      ninaMua = $('#nina-mua'),
      entrepreneurs = $('#entrepreneurs'),
      courses = $('#courses'),
      events = $('#events'),
      blog = $('#blog'),
      post = $('#post'),
      faq = $('#faq');

  // initialize lazy load
  var myLazyLoad = new LazyLoad({
    elements_selector: '.lazy'
  });

  // change color theme
  function toggleAB() {
    var el = this;

    return [

      // normal state
      function() {
        $('#change').removeClass().addClass('normal');

        // global variables
        document.documentElement.style.setProperty('--pink', '#fd959e');
        document.documentElement.style.setProperty('--dark', '#022329');
        document.documentElement.style.setProperty('--light', '#fff');

        // only for main page with letter
        document.documentElement.style.setProperty('--background', '#fd959e');
        document.documentElement.style.setProperty('--slogan', '#fff');
        document.documentElement.style.setProperty('--circle', '#fff');
      },

      // inverse state
      function() {
        $('#change').removeClass().addClass('inverse');

        // global variables
        document.documentElement.style.setProperty('--pink', '#fff');
        document.documentElement.style.setProperty('--dark', '#fd959e');
        document.documentElement.style.setProperty('--light', '#022329');

        // only for main page with letter
        document.documentElement.style.setProperty('--background', '#022329');
        document.documentElement.style.setProperty('--slogan', '#fff');
        document.documentElement.style.setProperty('--circle', '#fff');
      }
    ][el.tog^=1]();
  }

  $('#change').click(toggleAB);

  // open subscribe modal window
  $(document).on('click', '.subscribe', function(event) {
    $('#subscribe').addClass('opened').css('display', 'flex').hide().fadeIn(200);
    $('html, body').css('overflow', 'hidden');
  });

  // open subscribe modal window
  $(document).on('click', '.register', function(event) {
    $('#register').addClass('opened').css('display', 'flex').hide().fadeIn(200);
    $('html, body').css('overflow', 'hidden');
  });

  // close modal window
  $(document).on('click', '.close', function(event) {
    $(this).closest('.modal').removeClass('opened').delay(200).fadeOut(200);
    $('html, body').css('overflow', 'auto');
  });

  // initialize sharing buttons
  $('.share a:contains("facebook")').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + $(location).attr("href") + '');
  $('.share a:contains("twitter")').attr('href', 'https://twitter.com/share?url=' + $(location).attr("href") + '');

  // randomize .gif animation on 404 page
  $(function() {
      var image = new Array();

      image[0] = "data/404-1.gif";
      image[1] = "data/404-2.gif";
      image[2] = "data/404-3.gif";
      image[3] = "data/404-4.gif";
      image[4] = "data/404-5.gif";

      var size = image.length
      var x = Math.floor(size * Math.random())

      $('#error .paragraph').prepend('<img src="' + image[x] + '" alt="Animoji girl" title="Animoji girl animation ' + ++x + '">');
  });

  // plese turn your devide
  $(window).resize(function() {
    if (window.innerWidth > 768 && window.matchMedia("(orientation: portrait)").matches) {
      $('body').prepend($('<div class="turn"></div>'));
      $('.turn').addClass('on');
    } else {
      $('.turn').removeClass('on');
    }
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
      item = $(".item div");

  item.hide();
  elem.click(function(e) {
    var span = $(this).parent().find("div");

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

    // create swiper on the nina mua page
    } else if (ninaMua.length > 0) {
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
            $('#nav').addClass('light light--inverse');
            $('#menu').addClass('light light--inverse');

            break;
          case 1:
            $('#index-2').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('dark');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
          case 2:
            $('#index-3').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('dark');
            } else {
              $('#logo').addClass('pink');
            };

            break;
          case 3:
            $('#index-4').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('pink');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
          case 4:
            $('#index-5').addClass('animate');
            $('#logo').addClass('small');
            $('#nav').addClass('light');
            $('#menu').addClass('dark');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

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
  } else if (ninaMua.length > 0) {
    $('#menu a[href*="nina-mua"]').addClass('active');
    Emblem.init('#scroll p');
    Emblem.init('#circle p');

    // initialize scroll on the nina mua page
    $('#main').fullpage({

      // options here
      fitToSection: false,
      autoScrolling: false,
      scrollingSpeed: 1000,
      anchors: ['first', 'second', 'third', 'fourth'],
      licenseKey: 'C1599FD0-FAEF44AD-B21B7C8B-4D21D8FB',
      afterLoad: function(origin, destination, direction) {
        $('#logo, #menu, #nav').removeClass().addClass('animate-in');

        // back to original state
        switch(origin && origin.index) {
          case 0:
            $('#nina-mua-1').removeClass('animate');

            break;
          case 1:
            $('#nina-mua-2').removeClass('animate');
            $('.paragraph p:first-of-type span').removeClass('parallax');

            break;
          case 2:
            $('#nina-mua-3').removeClass('animate');

            break;
          case 3:
            $('#nina-mua-4').removeClass('animate');

            break;
        }

        // sections
        switch(destination.index) {
          case 0:
            $('#logo').addClass('big pink');
            $('#menu').addClass('light');
            $('#nav').addClass('pink pink--inverse');

            break;
          case 1:
            $('#nina-mua-2').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('pink');
            $('#nav').addClass('light');

            // only for desktop version
            if (window.innerWidth > 768) {
              function timeout() {
                $('#nina-mua-2 .paragraph p:first-of-type span').addClass('parallax');
              };

              setTimeout(timeout, 2000);
            };

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
          case 2:
            $('#nina-mua-3').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('dark');
            } else {
              $('#logo').addClass('pink');
            };

            break;
          case 3:
            $('#nina-mua-4').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('dark');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
        }
      }
    });
  } else if (about.length > 0) {
    $('#menu a[href*="about"]').addClass('active');
    Emblem.init('#scroll p');

    // initialize scroll on the nina mua page
    $('#main').fullpage({

      // options here
      fitToSection: false,
      autoScrolling: false,
      scrollingSpeed: 1000,
      anchors: ['first', 'second', 'third', 'fourth', 'fifth', 'six', 'seven'],
      licenseKey: 'C1599FD0-FAEF44AD-B21B7C8B-4D21D8FB',
      afterLoad: function(origin, destination, direction) {
        $('#logo, #menu, #nav').removeClass().addClass('animate-in');

        switch(origin && origin.index) {
          case 0:
            $('#about-1').removeClass('animate');

            break;
          case 1:
            $('#about-2').removeClass('animate');

            break;
          case 2:
            $('#about-3').removeClass('animate');

            break;
          case 3:
            $('#about-4').removeClass('animate');

            break;
          case 4:
            $('#about-5').removeClass('animate');

            break;
          case 5:
            $('#about-6').removeClass('animate');

            break;
          case 6:
            $('#about-7').removeClass('animate');

            break;
        }

        // sections
        switch(destination.index) {
          case 0:
            $('#about-1').addClass('animate');
            $('#menu').addClass('light');
            $('#nav').addClass('pink pink--inverse');

            // only for desktop version
            if (window.innerWidth > 768) {
              $('#logo').addClass('big pink');
            } else {
              $('#logo').addClass('small pink');
            };

            break;
          case 1:
            $('#about-2').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('pink');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
          case 2:
            $('#about-3').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('dark');
            } else {
              $('#logo').addClass('pink');
            };

            break;
          case 3:
            $('#about-4').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            // only for mobile version
            if (window.innerWidth < 768) {
              $('marquee').replaceWith('<p class="slogan">We help women to get balance</p>');
            }

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('dark');
            } else {
              $('#logo').addClass('pink');
            };

            break;
          case 4:
            $('#about-5').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('pink');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
          case 5:
            $('#about-6').addClass('animate');
            $('#logo').addClass('small');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
          case 6:
            $('#about-7').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('pink');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
        }
      }
    });
  } else if (courses.length > 0) {
    $('#menu a[href*="entrepreneur-1"]').addClass('active');
    Emblem.init('#scroll p');

    // check page
    if ($('.foundation')[0]){
      Emblem.init('#circle p');
    };

    // initialize scroll on the courses page
    $('#main').fullpage({

      // options here
      fitToSection: false,
      autoScrolling: false,
      scrollingSpeed: 1000,
      anchors: ['first', 'second', 'third', 'fourth', 'fifth', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'],
      licenseKey: 'C1599FD0-FAEF44AD-B21B7C8B-4D21D8FB',
      afterLoad: function(origin, destination, direction) {
        $('#logo, #menu, #nav').removeClass().addClass('animate-in');

        // back to original state
        switch(origin && origin.index) {
          case 0:
            $('#courses-1').removeClass('animate');

            break;
          case 1:
            $('#courses-2').removeClass('animate');

            break;
          case 2:
            $('#courses-3').removeClass('animate');

            break;
          case 3:
            $('#courses-4').removeClass('animate');
            $('.slogan').removeClass('parallax');

            break;
          case 4:
            $('#courses-5').removeClass('animate');

            break;
          case 5:
            $('#courses-6').removeClass('animate');

            break;
          case 6:
            $('#courses-7').removeClass('animate');

            break;
          case 7:
            $('#courses-8').removeClass('animate');

            break;
          case 8:
            $('#courses-9').removeClass('animate');

            break;
          case 9:
            $('#courses-10').removeClass('animate');

            break;
          case 10:
            $('#courses-11').removeClass('animate');

            break;
          case 11:
            $('#courses-12').removeClass('animate');

            break;
        }

        // sections
        switch(destination.index) {
          case 0:
            $('#courses-1').addClass('animate');
            $('#logo').addClass('big pink');
            $('#menu').addClass('light');
            $('#nav').addClass('pink pink--inverse');

            break;
          case 1:
            $('#courses-2').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('dark');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            // scroll menu and parallax
            $(window).scroll(function() {

              // background image parallax
              var first = document.querySelector(".info div p:nth-of-type(1)"),
                  second = document.querySelector(".info div p:nth-of-type(2)"),
                  third = document.querySelector(".info div p:nth-of-type(3)"),
                  fourth = document.querySelector(".info div p:nth-of-type(4)"),
                  image = document.querySelector(".info div img"),
                  height = window.pageYOffset;

              first.style.transform = "translateX(" + (height * .05) + "px)";
              second.style.transform = "translateX(" + (height * .075) + "px)";
              third.style.transform = "translateX(" + (height * .025) + "px)";
              fourth.style.transform = "translateX(" + (height * .1) + "px)";
              image.style.transform = "translateY(" + (height * .05) + "px)";
            });

            break;
          case 2:
            $('#courses-3').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('dark');
            } else {
              $('#logo').addClass('pink');
            };

            break;
          case 3:
            $('#courses-4').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('pink');
            $('#nav').addClass('light');

            // only for desktop version
            if (window.innerWidth > 768) {
              function timeout() {
                $('#courses-4 .slogan').addClass('parallax');
              };

              setTimeout(timeout, 2000);
            }

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
          case 4:
            $('#courses-5').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('dark');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
          case 5:
            $('#courses-6').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('dark');
            } else {
              $('#logo').addClass('pink');
            };

            break;
          case 6:
            $('#courses-7').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('dark');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
          case 7:
            $('#courses-8').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('dark');
            } else {
              $('#logo').addClass('pink');
            };

            break;
          case 8:
            $('#courses-9').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('dark');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
          case 9:
            $('#courses-10').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('pink');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
          case 10:
            $('#courses-11').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('dark');
            } else {
              $('#logo').addClass('pink');
            };

            break;
          case 11:
            $('#courses-12').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('dark');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
        }
      }
    });
  } else if (events.length > 0) {
    $('#menu a[href*="events"]').addClass('active');
    Emblem.init('#scroll p');

    // initialize scroll on the nina mua page
    $('#main').fullpage({

      // options here
      fitToSection: false,
      autoScrolling: false,
      scrollingSpeed: 1000,
      anchors: ['first', 'second', 'third', 'fourth', 'fifth', 'six', 'seven'],
      licenseKey: 'C1599FD0-FAEF44AD-B21B7C8B-4D21D8FB',
      afterLoad: function(origin, destination, direction) {
        $('#logo, #menu, #nav').removeClass().addClass('animate-in');

        // back to original state
        switch(origin && origin.index) {
          case 0:
            $('#events-1').removeClass('animate');

            break;
          case 1:
            $('#events-2').removeClass('animate');

            break;
          case 2:
            $('#events-3').removeClass('animate');

            break;
          case 3:
            $('#events-4').removeClass('animate');

            break;
          case 4:
            $('#events-5').removeClass('animate');

            break;
          case 5:
            $('#events-6').removeClass('animate');

            break;
          case 6:
            $('#events-7').removeClass('animate');

            break;
        }

        // sections
        switch(destination.index) {
          case 0:
            $('#events-1').addClass('animate');
            $('#menu').addClass('light');
            $('#nav').addClass('pink pink--inverse');

            // only for desktop version
            if (window.innerWidth > 768) {
              $('#logo').addClass('big pink');
            } else {
              $('#logo').addClass('small pink');
            };

            break;
          case 1:
            $('#events-2').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('pink');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
          case 2:
            $('#events-3').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('dark');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
          case 3:
            $('#events-4').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('dark');
            } else {
              $('#logo').addClass('pink');
            };

            break;
          case 4:
            $('#events-5').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('pink');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
          case 5:
            $('#events-6').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('dark');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
          case 6:
            $('#events-7').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('dark');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
        }
      }
    });
  } else if (blog.length > 0) {
    $('#menu a[href*="blog"]').addClass('active');
    Emblem.init('#scroll p');

    // initialize scroll on the nina mua page
    $('#main').fullpage({

      // options here
      fitToSection: false,
      autoScrolling: false,
      scrollingSpeed: 1000,
      anchors: ['first', 'second', 'third', 'fourth'],
      licenseKey: 'C1599FD0-FAEF44AD-B21B7C8B-4D21D8FB',
      afterLoad: function(origin, destination, direction) {
        $('#logo, #menu, #nav').removeClass().addClass('animate-in');

        // back to original state
        switch(origin && origin.index) {
          case 0:
            $('#blog-1').removeClass('animate');

            break;
          case 1:
            $('#blog-2').removeClass('animate');

            break;
          case 2:
            $('#blog-3').removeClass('animate');

            break;
          case 3:
            $('#blog-4').removeClass('animate');

            break;
        }

        // sections
        switch(destination.index) {
          case 0:
            $('#blog-1').addClass('animate');
            $('#menu').addClass('light--inverse');
            $('#nav').addClass('light light--inverse');

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
            $('#menu').addClass('light light--inverse');
            $('#nav').addClass('light light--inverse');

            break;
          case 2:
            $('#blog-3').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('light light--inverse');
            $('#nav').addClass('light light--inverse');

            break;
          case 3:
            $('#blog-4').addClass('animate');
            $('#logo').addClass('small light');
            $('#menu').addClass('light light--inverse');
            $('#nav').addClass('light light--inverse');

            break;
        }
      }
    });
  } else if (post.length > 0) {
    Emblem.init('#scroll p');

    // initialize scroll on the nina mua page
    $('#main').fullpage({

      // options here
      fitToSection: false,
      autoScrolling: false,
      scrollingSpeed: 1000,
      anchors: ['first', 'second', 'third', 'fourth', 'fifth', 'six', 'seven'],
      licenseKey: 'C1599FD0-FAEF44AD-B21B7C8B-4D21D8FB',
      afterLoad: function(origin, destination, direction) {
        $('#logo, #menu, #nav').removeClass().addClass('animate-in');

        // back to original state
        switch(origin && origin.index) {
          case 0:
            $('#post-1').removeClass('animate');

            break;
          case 1:
            $('#post-2').removeClass('animate');

            break;
          case 2:
            $('#post-3').removeClass('animate');

            break;
          case 3:
            $('#post-4').removeClass('animate');

            break;
          case 4:
            $('#post-5').removeClass('animate');

            break;
          case 5:
            $('#post-6').removeClass('animate');

            break;
          case 6:
            $('#post-7').removeClass('animate');

            break;
          case 7:
            $('#post-8').removeClass('animate');

            break;
        }

        // sections
        switch(destination.index) {
          case 0:
            $('#post-1').addClass('animate');
            $('#logo').addClass('big pink');
            $('#menu').addClass('light');
            $('#nav').addClass('pink pink--inverse');

            break;
          case 1:
            $('#post-2').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('dark');
            } else {
              $('#logo').addClass('pink');
            };

            break;
          case 2:
            $('#post-3').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('dark');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
          case 3:
            $('#post-4').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('dark');
            } else {
              $('#logo').addClass('pink');
            };

            break;
          case 4:
            $('#post-5').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('pink');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
          case 5:
            $('#post-6').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('dark');
            } else {
              $('#logo').addClass('pink');
            };

            break;
          case 6:
            $('#post-7').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('dark');
            } else {
              $('#logo').addClass('pink');
            };

            break;
          case 7:
            $('#post-8').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('dark');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
        }
      }
    });
  } else if (faq.length > 0) {
    $('#menu a[href*="faq"]').addClass('active');
    Emblem.init('#scroll p');

    // initialize scroll on the nina mua page
    $('#main').fullpage({

      // options here
      fitToSection: false,
      autoScrolling: false,
      scrollingSpeed: 1000,
      anchors: ['first', 'second', 'third', 'fourth', 'fifth', 'six', 'seven'],
      licenseKey: 'C1599FD0-FAEF44AD-B21B7C8B-4D21D8FB',
      afterLoad: function(origin, destination, direction) {
        $('#logo, #menu, #nav').removeClass().addClass('animate-in');

        // back to original state
        switch(origin && origin.index) {
          case 0:
            $('#faq-1').removeClass('animate');

            break;
          case 1:
            $('#faq-2').removeClass('animate');

            break;
          case 2:
            $('#faq-3').removeClass('animate');

            break;
          case 3:
            $('#faq-4').removeClass('animate');

            break;
          case 4:
            $('#faq-5').removeClass('animate');

            break;
          case 5:
            $('#faq-6').removeClass('animate');

            break;
          case 6:
            $('#faq-7').removeClass('animate');

            break;
        }

        // sections
        switch(destination.index) {
          case 0:
            $('#faq-1').addClass('animate');
            $('#logo').addClass('big pink');
            $('#menu').addClass('light');
            $('#nav').addClass('pink pink--inverse');

            break;
          case 1:
            $('#faq-2').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('dark');
            } else {
              $('#logo').addClass('pink');
            };

            break;
          case 2:
            $('#faq-3').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('dark');
            } else {
              $('#logo').addClass('pink');
            };

            break;
          case 3:
            $('#faq-4').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('pink');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
          case 4:
            $('#faq-5').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('dark');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
          case 5:
            $('#faq-6').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('light');
            $('#nav').addClass('dark');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('dark');
            } else {
              $('#logo').addClass('pink');
            };

            break;
          case 6:
            $('#faq-7').addClass('animate');
            $('#logo').addClass('small');
            $('#menu').addClass('pink');
            $('#nav').addClass('light');

            // check theme
            if ($('.normal').length > 0) {
              $('#logo').addClass('light');
            } else {
              $('#logo').addClass('dark');
            };

            break;
        }
      }
    });
  } else if (error.length > 0) {

    // initialize scroll on the courses page
    $('#main').fullpage({

      // options here
      fitToSection: false,
      licenseKey: 'C1599FD0-FAEF44AD-B21B7C8B-4D21D8FB',
      afterLoad: function(origin, destination, direction) {
        $('#logo, #menu, #nav').removeClass().addClass('animate-in');

        // sections
        switch(destination.index) {
          case 0:
            $('#error').addClass('animate');
            $('#menu').addClass('light');
            $('#nav').addClass('light');

            // only for desktop version
            if (window.innerWidth > 768) {
              $('#logo').addClass('big dark');
            } else {
              $('#logo').addClass('small light');
            };

            break;
        }
      }
    });
  } else if (sitemap.length > 0) {

    // initialize scroll on the courses page
    $('#main').fullpage({

      // options here
      fitToSection: false,
      licenseKey: 'C1599FD0-FAEF44AD-B21B7C8B-4D21D8FB',
      afterLoad: function(origin, destination, direction) {
        $('#logo, #menu, #nav').removeClass().addClass('animate-in');

        // sections
        switch(destination.index) {
          case 0:
            $('#sitemap').addClass('animate');
            $('#menu').addClass('light');
            $('#nav').addClass('light');

            // only for desktop version
            if (window.innerWidth > 768) {
              $('#logo').addClass('big dark');
            } else {
              $('#logo').addClass('small light');
            };

            break;
        }
      }
    });
  } else if (entrepreneurs.length > 0) {
    $('#menu a[href*="courses"]').addClass('active');

    // initialize scroll on the courses page
    $('#main').fullpage({

      // options here
      fitToSection: false,
      licenseKey: 'C1599FD0-FAEF44AD-B21B7C8B-4D21D8FB',
      afterLoad: function(origin, destination, direction) {
        $('#logo, #menu, #nav').removeClass().addClass('animate-in');

        // sections
        switch(destination.index) {
          case 0:
            $('#entrepreneurs').addClass('animate');
            $('#logo').addClass('small dark');
            $('#menu').addClass('pink');
            $('#nav').addClass('dark dark--inverse');

            break;
        }
      }
    });
  };
});