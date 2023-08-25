$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1000,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows/right.png"></button>',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                  dots: true,
                  arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                  dots: true,
                  arrows: false
                }
            },
            {
                breakpoint: 576,
                settings: {
                  dots: true,
                  arrows: false
                }
            },
            {
                breakpoint: 320,
                settings: {
                  dots: true,
                  arrows: false
                }
            }
        ]
      });
  });