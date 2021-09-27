$(document).ready(function () {
    $('.btn-filter').eq(0).addClass('activefilter');
});

jQuery(document).on('click', '.btn-filter', function (e) {
    if ((jQuery(this).data('target')) == "all") {
        $('.vibakukm-content').children().show();
    } else {
        $('.vibakukm-content').children().hide();
    }

    $('.btn-filter').removeClass('activefilter');
    $(this).addClass("activefilter");

    $('.vibakukm-content').find("." + (
        jQuery(this).data('target')
    )).show();
    console.log(((jQuery(this).data('target')) == "all"));
});
