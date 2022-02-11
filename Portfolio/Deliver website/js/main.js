$(function(){

$('.slider__inner').slick({

infinite: true,
autoplay:true,
arrows:false,
speed:3000

});

$('input, select').styler();

$('.header__btn-menu').on('click', function(){
    $('.menu ul').slideToggle();
})




});