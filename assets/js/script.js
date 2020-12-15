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



$('.menu-categories_list ul li a').on('click', function () {
    $('.menu-slider').removeClass('active-slide');
    $('.menu-slider').each((i, e)=>{
        if ($(this).attr('value') === $(e).attr('value')){
            $(e).addClass('active-slide')
        }
    })
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

let sliderMain = $('.slider-main');


function changeScreen(){
    sliderMain.on('mouseover', function () {
        $(this).addClass('slider-main-open');
        $('.social').addClass('social-hovered');
        $('.reservation-text').addClass('reservation-text-hovered');
        $('.header-info-section').addClass('header-info-section-hovered');
        $('.top-header').addClass('top-header-hovered');
        $('.top-header_right').addClass('top-header_right_hovered');
        $('.logo_light').css({'opacity': 0});
        $('.logo_dark').css({'opacity': 1});
    });

    sliderMain.on('mouseleave', function () {
        $(this).removeClass('slider-main-open');
        $('.social').removeClass('social-hovered');
        $('.reservation-text').removeClass('reservation-text-hovered');
        $('.header-info-section').removeClass('header-info-section-hovered');
        $('.top-header').removeClass('top-header-hovered');
        $('.top-header_right').removeClass('top-header_right_hovered');
        $('.logo_light').css({'opacity': 1});
        $('.logo_dark').css({'opacity': 0});
    });

}

changeScreen()


$(window).resize(function () {
    if ($(window).width() <= 991){

    }
    else {
        changeScreen()
    }

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
});


$('.gallery-img').on('mouseleave', function(){
    $(this).find('.img-text span').text('');
    $(this).find('.img-text span').removeClass('img-text-bordered ')
});

$('.anons-img').on('mouseover', function (){
    $(this).find('.border-div').addClass('border-div-bordered')
})

$('.anons-img').on('mouseleave', function (){
    $(this).find('.border-div').removeClass('border-div-bordered')
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






