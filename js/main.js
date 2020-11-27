$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) { $('.backtotop').addClass('show') } else { $('.backtotop').removeClass('show') }
        if ($(this).scrollTop() > 500) { $('nav').addClass('invert') } else { $('nav').removeClass('invert') }
    }); $("#backtotop").click(function () { $('body,html').animate({ scrollTop: 0 }, 100); return !1 }); $(".nav-link a").on('click', function () { if ($("#toggle").is(':checked')) { $("#toggle").click() } })
    var scroll = document.querySelector('.curve'); window.addEventListener('scroll', function () { var value = 1 + window.scrollY / -500; scroll.style.transform = `scaleY(${value})` })
    $(window).on('scroll', function () { $("section").each(function () { if (isScrolledIntoView($(this))) { $(this).addClass("show") } }) }); function isScrolledIntoView(elem) { var docViewTop = $(window).scrollTop(); var docViewBottom = docViewTop + $(window).height(); var elemTop = $(elem).offset().top; var elemBottom = elemTop + $(elem).height(); return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop)) }
    $('.project-slider').slick({ infinite: !0, slidesToShow: 3, slidesToScroll: 1, dots: !0, adaptiveHeight: !1, prevArrow: $(".project-slider-wrapper #btn-left"), nextArrow: $(".project-slider-wrapper #btn-right"), responsive: [{ breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2 } }, { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } }] }); $('.achievement-slider').slick({ infinite: !0, slidesToShow: 1, slidesToScroll: 1, dots: !0, prevArrow: $(".achievement-slider-wrapper #btn-left"), nextArrow: $(".achievement-slider-wrapper #btn-right"), })
})