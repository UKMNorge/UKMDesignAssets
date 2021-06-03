/**
 * BILDEGALLERI
 **/
$(document).ready(function () {
    $('.swipebox').swipebox({
        removeBarsOnMobile: false,
        hideBarsDelay: 0
    });
    $(".images-grid").imagesGrid({
        rowHeight: 65,
        margin: 5,
    });

    $('.lazyLoad').each(function () {
        if ($(this).attr('data-src')) {
            $(this).attr('src', $(this).attr('data-src'));
        }
    });
});