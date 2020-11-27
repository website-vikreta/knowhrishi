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


})