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


})