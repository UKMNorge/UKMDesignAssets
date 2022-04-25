var dragged = false;
jQuery(document).on('mousedown', () => {dragged = false}).on('mousemove', () => {dragged = true}).on('click', '.clickLinkWithin', function(e) {
    // Det er ikke klikk!
    if(dragged == true) return;

    // ... det er klikk
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
