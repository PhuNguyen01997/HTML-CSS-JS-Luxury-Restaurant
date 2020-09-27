$(document).ready(function(){
    var headerCarousel = $('.header__carousel');
    headerCarousel.owlCarousel({
        loop:true,
        margin:0,
        nav: false,
        dost: true,
        items: 1,
        smartSpeed: 0,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
    });
    headerCarousel.on('changed.owl.carousel', function(event) {
        const index = event.item.index;
        headerCarousel.find(".owl-item").removeClass("header__custom-animated");
        headerCarousel.find(".owl-item").eq(index).addClass("header__custom-animated");
    })

    $('.special__carousel').owlCarousel({
        loop: true,
        margin: 30,
        center: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive : {
            0 : {
                items: 1,
            },
            1024: {
                items: 2,
                center: true,
            },
            1170: {
                items: 2,
            },
        }
    });

    $('.feedbacks__carousel').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive : {
            0 : {
                items: 1,
            }
        }
    })

    console.log($(".cooks__carousel"));
    $('.cooks__carousel').owlCarousel({
        loop: true,
        margin: 0,
        stagePadding: 10,
        dots: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive : {
            0 : {
                items: 1,
            },
            768: {
                items: 2,
                center: true,
            },
            1024: {
                items: 3,
            },
            1170: {
                items: 4
            }
        }
    })
});