$("#header-slider").owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000
});

let sliderMain = $('.slider-section')

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
