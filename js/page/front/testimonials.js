var text;

jQuery(document).on('mouseover click', '.testimonial-small', function(e) {
    var bilde = "url('" + jQuery(this).data('img') + "') no-repeat center/cover";
    jQuery('#testimonial .side-pic').css("background", bilde);

    $('#testimonial .signature-text').animate({left: '250px'}, function(){
        jQuery('#testimonial .signature-text').html( jQuery(this).data('text') );
        jQuery('#testimonial .signature').html( jQuery(this).data('signature'));
    }).delay(1000).fadeTo('slow', 1);

    if (text != jQuery(this).data('text')) {
        jQuery(this).css({opacity : "1"});
        // jQuery('.testimonial-small:not(:hover)').css({opacity : "0.5"});
    }
    text = jQuery(this);
    jQuery('#testimonial .signature-text').html( text.data('text') );
    jQuery('#testimonial .signature').html( jQuery(this).data('signature'));
});

  $(document).ready(function(){
    var interval = 0;
    (function switchToImage(img) {
        $(img).click()
        var images = $('.testimonial-items li .testimonial-small');
        interval++;
        if (interval == $('.testimonial-items li .testimonial-small').length) {
            interval = 0;
        }
        setTimeout(function() { 
          switchToImage(images[interval]) 
        }, 10000);
      }) ($('.testimonial-items li')[0]);
   });
