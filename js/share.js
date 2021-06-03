
// Kopier linkadresse
jQuery(document).on('click', '.kopierUrl', function(e) {
    e.preventDefault();
    var urlContainer = jQuery(this).parents('.share-buttons').find('.url');
    urlContainer.find('input').show();
    urlContainer.find('.copied').hide();

    urlContainer.slideDown(0, function() {
        urlContainer.find('input').focus();
        urlContainer.find('input').select();

        if (document.execCommand("copy")) {
            urlContainer.find('input').hide();
            urlContainer.find('.copied').slideDown(120);

            setTimeout(
                function() {
                    urlContainer.find('.copied').slideUp(200);
                },
                1300
            );
        }
    });
});