$(function () {

    // Слайдер
    $('.slider').slick({
        dots: true,
        arrows: false,
        speed: 600,
        slidesToShow: 3,
        slidesToScroll: 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Выподающее меню
    $('.navicon').on('click', function () {
        $('.navicon > i').toggleClass('active');
        $('.navicon').toggleClass('active');
        $('.nav').toggleClass('active');
        $('.nav__items').toggleClass('active');
    });

    // Фильтр
    $('[data-filter]').on('click', function () {
        let filter = $(this).data('filter');
        $('.works__filter-btn').removeClass('active');
        $(this).addClass('active');
        if (filter == 'all') {
            $('[data-cat]').removeClass('hide');
        } else {
            $('[data-cat]').each(function () {
                let cat = $(this).data('cat');
                if (filter != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });

    // Show more
    $('.works__showmore-btn').on('click', function () {
        $('.works__img-wrap-more').toggleClass('none');
    });

    // Стрелка вниз 
    $('.header__btn').on('click', function () {
        $('body,html').animate({
            scrollTop: 800
        }, 800
        );
    });

    // Стрелка вверх
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 800) {
            $('.btn-up').fadeIn()
        }
        else {
            $('.btn-up').fadeOut()
        }
    });
    $('.btn-up').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800
        );
    });

    // Навигация
    $('.nav__item a').on('click', function () {
        let target = $(this).attr('href');
        $('body,html').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

});