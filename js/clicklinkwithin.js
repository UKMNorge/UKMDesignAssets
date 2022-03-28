jQuery(document).on('click', '.clickLinkWithin', function(e) {
    if (jQuery(e.target).is('a') || jQuery(e.target).is('button')) {
        return true;
    }
    if (jQuery(e.target).hasClass('clickLinkWithin')) {
        var clicked = jQuery(e.target);
    } else {
        var clicked = jQuery(e.target).parents('.clickLinkWithin');
    }
    var link = clicked.find('a.linkWithin');
    if (link) {
        window.location.href = link.attr('href');
    }
});
