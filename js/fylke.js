jQuery(document).on('click', '.fylkesItem', function(e) {
    jQuery('.dropdown-fylke .fylke-name').text( jQuery(this).data('value'));
    jQuery('.dropdown-fylke .fylke-link').html(jQuery(this).data('link'));
    console.log(jQuery(this).data('value'));
});