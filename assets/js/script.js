$("#header-slider").owlCarousel({
    items: 1,
    dots: true,
    dotsData: true,
});

$('.menu-slider').owlCarousel({
    items: 1,
    nav: true,
    navText: ['<i class="fas fa-chevron-left"></i>', '<i class="fas fa-chevron-right"></i>'],
    dots: true,
    dotsData: true,
    callbacks: true,
});

$('.menu-slider').on('change', '.menu-slider .owl-dots .owl-dot > button', function initScroll(){
    $(this).parent().parent('.owl-dots').mCustomScrollbar({
        axis: "x",
        mouseWheel: {enable: true},
        theme: "light"
    });
})

function initScroll(){
    $('.menu-slider .owl-dots').mCustomScrollbar({
        axis: "x",
        mouseWheel: {enable: true},
        theme: "light"
    });
}

initScroll();

let sliderMain = $('.slider-section');

sliderMain.on('mouseover', function () {
    $(this).addClass('slider-section-open');
    $('.social').css({'opacity': 1});
    $('.reservation-text').css({'opacity': 1});
    $('.top-header').addClass('top-header-hovered')
    $('.top-header_right').addClass('top-header_right_hovered')
    $('.logo_light').css({'opacity': 0});
    $('.logo_dark').css({'opacity': 1});
});

sliderMain.on('mouseleave', function () {
    $(this).removeClass('slider-section-open');
    $('.social').css({'opacity': 0});
    $('.reservation-text').css({'opacity': 0});
    $('.top-header').removeClass('top-header-hovered');
    $('.top-header_right').removeClass('top-header_right_hovered')
    $('.logo_light').css({'opacity': 1});
    $('.logo_dark').css({'opacity': 0});
});


$('.first-button').on('click', function () {
    $('.animated-icon1').toggleClass('open');
});

$('.menu_reservation-list ul li').on('click', function () {
    $('.menu_reservation-list ul li').removeClass('active');
    $(this).addClass('active')
});

$('.gallery-img').on('mouseover', function(){
    let data = $(this).attr('data')
    $(this).find('.img-text span').text(data)
    $(this).find('.img-text span').addClass('img-text-bordered ')
});


$('.gallery-img').on('mouseleave', function(){
    $(this).find('.img-text span').text('')
    $(this).find('.img-text span').removeClass('img-text-bordered ')
});

$('.anons-img').on('mouseover', function (){
    $(this).find('.border-div').addClass('border-div-bordered')
})

$('.anons-img').on('mouseleave', function (){
    $(this).find('.border-div').removeClass('border-div-bordered')
})


$('.datepicker').datepicker();




