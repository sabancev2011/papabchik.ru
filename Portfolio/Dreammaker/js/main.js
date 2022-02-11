$(function () {

    

    // Полифилл для метода forEach для NodeList
    if (window.NodeList && !NodeList.prototype.forEach) {
        NodeList.prototype.forEach = function (callback, thisArg) {
            thisArg = thisArg || window;
            for (var i = 0; i < this.length; i++) {
                callback.call(thisArg, this[i], i, this);
            }
        };
    }


 // Выподающее меню
 let burger = document.querySelector(".burger");

 burger.addEventListener("click", function () {
     let nav = document.querySelector(".header-top__nav");
     nav.classList.toggle("active");
     burger.classList.toggle("active");
 });

    // Слайдер
    $('.feature__slider').slick();

    // Навигация
    $('.header-top__nav a').on('click', function () {
        let target = $(this).attr('href');
        $('body,html').animate({
            scrollTop: $(target).offset().top
        }, 800);
    });

    // ВИДЕОПЛЕЕР
    let video = document.getElementById("video");
    let track = document.querySelector(".videoPlayer__track");
    let time = document.querySelector(".videoPlayer__timeline");
    let play = document.querySelector(".videoPlayer__play");
    let playBig = document.querySelector(".videoPlayer__play-big");
    let pause = document.querySelector(".videoPlayer__pause");
    let volume = document.querySelector(".videoPlayer__volume");
    let mute = document.querySelector(".videoPlayer__mute");

    let playVideo = function () {
        if (video.paused) {
            video.play();
            playBig.classList.add('none');
            play.classList.remove('videoPlayer__play');
            play.classList.add('videoPlayer__pause');
        }
        else {
            video.pause();
            playBig.classList.remove('none');
            play.classList.remove('videoPlayer__pause');
            play.classList.add('videoPlayer__play');
        }

        // Запуск интервала
        let videoLength = setInterval(function () {
            time.style.width = (video.currentTime / video.duration) * 100 + '%';
        }, 10)

    }

    play.addEventListener('click', function () {
        playVideo();
    });

    video.addEventListener('click', function () {
        playVideo();
    });

    //Звук
    volume.addEventListener('click', function () {
        if
            (video.muted == true) {
            video.muted = false
            volume.classList.add('on')

        }
        else {
            video.muted = true
            volume.classList.remove('on')
        }
    });

    // Перемотка
    track.addEventListener("click", function (e) {
        let x = (e.clientX - this.offsetLeft) / this.offsetWidth;
        video.currentTime = x * video.duration;

    });

    //Конец видео
    video.addEventListener("ended", function () {
        video.pause();
        playBig.classList.remove('none');
        play.classList.remove('videoPlayer__pause');
        play.classList.add('videoPlayer__play');
        video.load()
    });

    //ДРОПДАУН

    document.querySelectorAll('.questions__dropDown').forEach(function (dropDownWrapper) {
        const dropDownBtn = dropDownWrapper.querySelector('.questions__dropDownBtn');
        const dropDownItem = dropDownWrapper.querySelector('.questions__dropDownItem');

        // Клик по кнопке. Открыть/Закрыть select
        dropDownBtn.addEventListener('click', function (e) {
            e.preventDefault()
            dropDownItem.classList.toggle('none');
            this.classList.toggle('active');
        }
            , false);

        // Клик снаружи дропдауна. Закрыть дропдаун
        document.addEventListener('click', function (e) {
            if (e.target !== dropDownBtn) {
                dropDownBtn.classList.remove('active');
                dropDownItem.classList.add('none');
            }
        });

        // Нажатие на Tab или Escape. Закрыть дропдаун
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Tab' || e.key === 'Escape') {
                dropDownBtn.classList.remove('active');
                dropDownItem.classList.add('none');
            }
        });
    });
});