//transition navbar-------------------->
$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $('.header-inner').addClass('opaque');
    } else {
        $('.header-inner').removeClass('opaque');
    }
});

//smooth scroll------------------------->
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 800);
                return false;
            }
        }
    });
});

$(document).scroll(function () {
    var k = $('#contact').offset().top;
    if (($(this).scrollTop() > k - 3)) {
        $('#lol').attr('src', 'img/self.jpeg');
    } else {
        $('#lol').attr('src', 'img/logo.png');
    }
});