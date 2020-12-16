$("#header-slider").owlCarousel({
    items: 1,
    dots: true,
    dotsData: true,
});

$('.menu-slider').owlCarousel({
    items: 1,
    dots: true,
    dotsData: true
});



$('.menu-categories_list ul li a').on('click', function (e) {
    e.preventDefault();
    $('.menu-slider').hide();
   $("#"+$(this).attr('href')).show();
});

$('.menu_reservation-list').mCustomScrollbar({
    axis: "x",
    mouseWheel: {enable: true},
    theme: "light"
});

$('.menu-categories_list').mCustomScrollbar({
    axis: "x",
    mouseWheel: {enable: true},
    theme: "light"
});

$('.menu-categories_list ul li').on('click', function () {
    $('.menu-categories_list ul li').removeClass('active-category')
    $(this).addClass('active-category')
})

let sliderMain = $('.top-header');


sliderMain.on('mouseover', function () {
    $('.item').addClass('slider-main-open');
    $('.social').addClass('social-hovered');
    $('.reservation-text').addClass('reservation-text-hovered');
    $('.header-info-section').addClass('header-info-section-hovered');
    $('.top-header').addClass('top-header-hovered');
    $('.top-header_right').addClass('top-header_right_hovered');
    $('.address').addClass('address-open');
    $('.tel-number').addClass('tel-number-open');
    $('#header-slider').addClass('header-slider-hovered')
    $('.logo_light').css({'opacity': 0});
    $('.logo_dark').css({'opacity': 1});
});

sliderMain.on('mouseleave', function () {
    $('.item').removeClass('slider-main-open');
    $('.social').removeClass('social-hovered');
    $('.reservation-text').removeClass('reservation-text-hovered');
    $('.header-info-section').removeClass('header-info-section-hovered');
    $('.address').removeClass('address-open');
    $('.tel-number').removeClass('tel-number-open');
    $('.top-header').removeClass('top-header-hovered');
    $('#header-slider').removeClass('header-slider-hovered')
    $('.top-header_right').removeClass('top-header_right_hovered');
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
    let data = $(this).attr('data');
    $(this).find('.img-text span').text(data);
    $(this).find('.img-text span').addClass('img-text-bordered ')
    $(this).find('img').css({'opacity': 0.6})
});

$('.gallery-img').on('mouseleave', function () {
    $(this).find('img').css({'opacity': 1})
})


$('.gallery-img').on('mouseleave', function(){
    $(this).find('.img-text span').text('');
    $(this).find('.img-text span').removeClass('img-text-bordered ')
});

$('.anons-img').on('mouseover', function (){
    $(this).find('.border-div').addClass('border-div-bordered')
    $(this).find('.overlay').addClass('overlay-show')
})

$('.anons-img').on('mouseleave', function (){
    $(this).find('.border-div').removeClass('border-div-bordered')
    $(this).find('.overlay').removeClass('overlay-show')
})


$.fn.datepicker.languages['ru-RU'] = {
    format: 'dd.mm.YYYY',
    days: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
    daysShort: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    daysMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthsShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    weekStart: 1,
    startView: 0,
    yearFirst: false,
    yearSuffix: ''
};


$('[data-toggle="datepicker"]').datepicker({
    autoHide:true,
    language: 'ru-RU'
});


$('#timepicker').mdtimepicker({
    timeFormat:'hh:mm:ss.000',
    theme:'dark',
});

$('.reserv-btn button').on('click', function (event) {
    event.preventDefault();
});

$('.move-to-up').on('click', function () {
   $('html').animate({scrollTop:0}, 2000);
});






