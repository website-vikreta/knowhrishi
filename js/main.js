$(document).ready(function () {

    // BACK TO TOP
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.backtotop').addClass('show');
        } else {
            $('.backtotop').removeClass('show');
        }
        if ($(this).scrollTop() > 500) {
            $('nav').addClass('invert');
        } else {
            $('nav').removeClass('invert');
        }
    });
    $("#backtotop").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 100);
        return false;
    });

    // navlink click
    $(".nav-link a").on('click', function () {
        if ($("#toggle").is(':checked')) {
            $("#toggle").click();
        }
    })

    // =================================================
    // hero scroll
    // =================================================
    var scroll = document.querySelector('.curve');
    window.addEventListener('scroll', function () {
        var value = 1 + window.scrollY / -500;
        scroll.style.transform = `scaleY(${value})`;
    })

    // =================================================
    // Sections reveal on scroll
    // =================================================
    $(window).on('scroll', function () {
        $("section").each(function () {
            if (isScrolledIntoView($(this))) {
                $(this).addClass("show");
            }
        });
    });
    function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();

        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();

        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    // =================================================
    // project slider
    // =================================================
    $('.project-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        adaptiveHeight: false,
        prevArrow: $(".project-slider-wrapper #btn-left"),
        nextArrow: $(".project-slider-wrapper #btn-right"),
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    $('.achievement-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        prevArrow: $(".achievement-slider-wrapper #btn-left"),
        nextArrow: $(".achievement-slider-wrapper #btn-right"),
    });
})