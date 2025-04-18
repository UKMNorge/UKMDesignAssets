$(document).ready(function () {
    $(".hamburger-icon").css({ 'background-color': 'transparent' });
    $('.subpages').hide();

    $('.hamburger-menu').click(function (e) {
        e.stopPropagation();
        var e = "" + $(event.target).closest('.drop-item').attr('id');

        if (e.match('subpage-')) {
            $('.mainpage').hide();
            $('.' + e).show();
        }

        if (e.match('backToMain')) {
            $('.mainpage').show();
            $('.subpages').hide();
        }
    });
    // on firefox
    $('.hamburger-menu').on('hide.bs.dropdown', function (e) { if (e.clickEvent) { e.preventDefault(); } });


    $(document).on('click', '.testimonial', function (e) {
        e.stopPropagation();
    })
    

    $(document).on('click', function (e) {
        if ($('.hamburger-icon').attr("aria-expanded") == "true") {
            $('.hamburger-icon').toggleClass('open');
            $('.hamburger-overlay').toggleClass('open');
            $('.hamburger').toggleClass('open');

            $('html, body').css({
                overflow: 'auto',
                height: 'auto'
            });
        } else {
            $('.hamburger-icon').removeClass('open');
            $('.hamburger-overlay').removeClass('open');
            $('.hamburger').removeClass('open');
            $('html, body').css({
                overflow: 'auto',
                height: 'auto'
            });
        }
    });

    $('.hamburger-icon').click(function () {
        if ($(this).attr("aria-expanded") == "true") {
            $('html, body').css({
                overflow: 'auto',
                height: 'auto'
            });
        }
        if ($(this).attr("aria-expanded") == "false") {
            $('html, body').css({
                overflow: 'hidden',
                height: '100%'
            });
        }

        $('.mainpage').show();
        $('.subpages').hide();

        $(this).toggleClass('open');
        $('.hamburger-overlay').toggleClass('open');
        $('.hamburger').toggleClass('open');
    });
});