$(document).ready(function() {
  var index = $('#index'),
      about = $('#about');

  // initialize lazy load
  var myLazyLoad = new LazyLoad({
    elements_selector: '.lazy'
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
    }

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

    // initialize scroll on the index page
    $('#main').fullpage({

      // options here
      scrollOverflow: true,
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
      afterRender: function(){
        $('#index-1').addClass('animate');
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

    // initialize scroll on the about page
    $('#main').fullpage({

      // options here
      fitToSection: false,
      autoScrolling: false,
      scrollingSpeed: 1000,
      licenseKey: 'C1599FD0-FAEF44AD-B21B7C8B-4D21D8FB',
      anchors: ['first', 'second', 'third', 'fourth'],
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
  };
});