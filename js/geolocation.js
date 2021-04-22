jQuery(document).on('click touchend', '#derduborcontainer', function(){
    if( $(this).hasClass('click') ) {
        $('.geolocation').trigger('click');
    }
});
jQuery(document).on('click touchend', '.geolocation', function() {
    $('#derdubor').html( twigJS_GeolocationFrontLoading.render());
});
jQuery(document).on('geolocate-fail', function(e){
    $('#derdubor').html(twigJS_GeolocationFrontFail.render(e));
});
jQuery(document).on('geolocated', function(e, locationdata){
    $(document).trigger('fetchLocalizedInfo', [locationdata.kommunenummer, locationdata.fylkesnummer, locationdata.kommunenavn]);
});

jQuery(document).on('fetchLocalizedInfo', function(e, kommunenummer, fylkesnummer, kommunenavn){
    $('#derduborcontainer').removeClass('click notlocated');
    $.get(
        ajaxurl,
        {
            action: 'UKMDesignWordpress',
            ajaxaction: 'home',
            fylke: fylkesnummer,
            kommune: kommunenummer
        }
    ).done(function(response) {
        console.log(response);
        $('#derdubor').html(
            twigJS_GeolocationFront.render(response)
        );
    });
});