// Inntil derdubor er lastet inn, la hele boksen være klikkbar
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
    $('#derdubor').html(twigJS_GeolocationFrontLoading.render({kommunenavn: kommunenavn}));
});

if (last_location != '') {
    $(document).ready(function(){
        $(document).trigger('fetchLocalizedInfo', [last_location.kommunenummer, last_location.fylkesnummer, last_location.kommunenavn]);
    });
}