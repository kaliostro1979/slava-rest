/*Plugins*/

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

$('.menu-categories_list').mCustomScrollbar({
    axis: "x",
    mouseWheel: {enable: true},
    theme: "light"
});

/*End of Plugins*/


$('.menu-categories_list ul li a').on('click', function (e) {
    e.preventDefault();
    $('.menu-slider').hide();
    $("#" + $(this).attr('href')).show();
});

$('.menu_reservation-list').mCustomScrollbar({
    axis: "x",
    mouseWheel: {enable: true},
    theme: "light"
});

$('.menu-categories_list ul li').on('click', function () {
    $('.menu-categories_list ul li').removeClass('active-category');
    $(this).addClass('active-category')
});


/*Header Border Animation*/

let topHeader = $('.top-header-home');

topHeader.on('mouseover', function () {
    $('header').addClass('hovered');
});

topHeader.on('mouseleave', function () {
    $('header').removeClass('hovered');
});

/*End of Header Border Animation*/


$('.first-button').on('click', function () {
    $('.animated-icon1').toggleClass('open');
});

$('.menu_reservation-list ul li').on('click', function () {
    $('.menu_reservation-list ul li').removeClass('active');
    $(this).addClass('active')
});

let galleryImage = $('.gallery-img');

galleryImage.on('mouseover', function () {
    let data = $(this).attr('data');
    $(this).find('.img-text span').text(data);
    $(this).find('.img-text span').addClass('img-text-bordered ');
    $(this).find('img').css({'opacity': 0.6})
});

galleryImage.on('mouseleave', function () {
    $(this).find('img').css({'opacity': 1})
});


galleryImage.on('mouseleave', function () {
    $(this).find('.img-text span').text('');
    $(this).find('.img-text span').removeClass('img-text-bordered ')
});

let anonsImage = $('.anons-img');

anonsImage.on('mouseover', function () {
    $(this).find('.border-div').addClass('border-div-bordered');
    $(this).find('.overlay').addClass('overlay-show')
});

anonsImage.on('mouseleave', function () {
    $(this).find('.border-div').removeClass('border-div-bordered');
    $(this).find('.overlay').removeClass('overlay-show')
});


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
    autoHide: true,
    language: 'ru-RU'
});


$('#timepicker').mdtimepicker({
    timeFormat: 'hh:mm:ss.000',
    theme: 'dark',
});

$('.reserv-btn button').on('click', function (event) {
    event.preventDefault();
});

$('.move-to-up').on('click', function () {
    $('html').animate({scrollTop: 0}, 2000);
});


/*Burger menu*/

$('.burger-navigation-btn').on('click', function () {
    $('.burger-menu').addClass('burger-menu-open')
    $('html body').addClass('menu-open')
})

$('.burger-menu-close-btn').on('click', function () {
    $('.burger-menu').removeClass('burger-menu-open')
    $('html body').removeClass('menu-open')
})






