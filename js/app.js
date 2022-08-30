$(function () {
    $(window).on('load', function () {
        $('#preloder').fadeOut(1000);
    })


    $(window).on('scroll', function () {
        var scrollPosition = $(window).scrollTop()


        if (scrollPosition > 200) {
            $('#header').addClass('active')
            $('#header').addClass('bg_color')
            $('nav div ul li a').addClass('menu_color')
        }else{
            $('#header').removeClass('active')
            $('#header').removeClass('bg_color')
            $('nav div ul li a').removeClass('menu_color')
        }
    })

    // banner start
    $('.banner_slider').slick({
        prevArrow: '<i class="fa-solid fa-arrow-left"></i>',
        nextArrow: '<i class="fa-solid fa-arrow-right"></i>',
      });


    //   type js
      var typed = new Typed('.type', {
        strings: ['Creative IT Institute always ensures to provide quality IT training all over Bangladesh.',
         'This institute never compromises on solving the unemployment problem of Bangladesh.'],
         typeSpeed: 30,
         loop: true,
      });

})