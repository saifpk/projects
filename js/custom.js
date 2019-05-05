
$(document).ready(function ($) {
$(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 80) {
            $("header").addClass("header");
        } else {
            $("header").removeClass("header");
        }
    });




$('.owl-carousel.test').owlCarousel({
                margin: 15,
				center:true,
				autoplay:true,
    			autoplayTimeout:3500,
    			autoplayHoverPause:true,
                nav: false,
                loop: true,
				pagination:false,
				navigation:true,
                responsive: {
                  0: {
                    items: 1
                  },
                  1200: {
                    items: 1
                  }
                }
              })
 $('.owl-carousel')owl.owlCarousel({
                margin: 15,
				autoplay:true,
    			autoplayTimeout:1500,
    			autoplayHoverPause:true,
                nav: false,
                loop: true,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 2
                  },
				  1040: {
                    items: 3
                  },
                  1200: {
                    items: 6
                  }
                }
              })

	
	
});