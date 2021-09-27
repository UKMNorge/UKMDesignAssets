// var text;

// jQuery(document).on('click', '.testimonial-small', function(e) {

//     $('#testimonial .signature-text').animate({left: '250px'}, function(){
//         jQuery('#testimonial .signature-text').html( jQuery(this).data('text') );
//     }).delay(1000).fadeTo('slow', 1);

//     text = jQuery(this);
//     jQuery('#testimonial .signature-text').html( text.data('text') );
// });

//   // $(document).ready(function(){
//   //   var interval = 0;
//   //   (function switchToImage(img) {
//   //       $(img).click()
//   //       var images = $('.testimonial-items li .testimonial-small');
//   //       interval++;
//   //       if (interval == $('.testimonial-items li .testimonial-small').length) {
//   //           interval = 0;
//   //       }
//   //       setTimeout(function() { 
//   //         switchToImage(images[interval]) 
//   //       }, 5000);
//   //     }) ($('.testimonial-items li')[0]);
//   //  });

//   var text;

jQuery(document).on('click', '.btn-filter', function(e) {

    $('.hei').animate({left: '250px'}, function(){
        jQuery('.hei').html( jQuery(this).data('target') );
    }).delay(1000).fadeTo('slow', 1);

    text = jQuery(this);
    jQuery('.hei').html( text.data('target') );
});