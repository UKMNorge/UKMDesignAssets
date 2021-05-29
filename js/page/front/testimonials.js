var text;

jQuery(document).on('mouseover', '.testimonial-small', function(e) {
    jQuery('#testimonial .side-pic').html( jQuery(this).data('img'));

    $('#testimonial .signature-text').animate({left: '250px'}, function(){
        jQuery('#testimonial .signature-text').html( jQuery(this).data('text') );
        jQuery('#testimonial .signature').html( jQuery(this).data('signature'));
    }).delay(1000).fadeTo('slow', 1);

    if (text != jQuery(this).data('text')) {
        jQuery(this).css({opacity : "1"});
        jQuery('.testimonial-small:not(:hover)').css({opacity : "0.5"});
    }
    text = jQuery(this);
    jQuery('#testimonial .signature-text').html( text.data('text') );
    jQuery('#testimonial .signature').html( jQuery(this).data('signature'));
});