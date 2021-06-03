/** 
 * UKM-toggle
 *	KNAPPER FOR Å VISE KREVER:
 *	 - data-target="id-på-div-som-skal-toggles"
 *	 - class="UKMtoggleShow id-på-div-som-skal-toggles
 *	 
 *	KNAPPER FOR Å SKJULE KREVER:
 *	 - data-target="id-på-div-som-skal-toggles"
 *	 - class="UKMtoggleHide id-på-div-som-skal-toggles
 *	
 *	CONTAINER SOM SKAL TOGGLES KREVER:
 *	 - class="UKMtoggleContent"
 *	 - id="id-på-div-som-skal-toggles"
 **/
$(document).on('click', '.UKMtoggle', function (e) {
    e.preventDefault();

    var target = $(this).attr('data-target');
    if ($('#' + target + '.UKMtoggleContent').is(':visible')) {
        UKMtoggleHide(target);
    } else {
        UKMtoggleShow(target);
    }
});

$(document).on('click', '.UKMtoggleShow', function (e) {
    e.preventDefault();
    UKMtoggleShow($(this).attr('data-target'));
});

$(document).on('click', '.UKMtoggleHide', function (e) {
    e.preventDefault();
    UKMtoggleHide($(this).attr('data-target'));
});

function UKMtoggleHide(target) {
    $(document).trigger('pre_UKMtoggleHide#' + target);
    $('#' + target + '.UKMtoggleContent').slideUp(function () { $(document).trigger('UKMtoggleHide#' + target); });
    $('.' + target + '.UKMtoggleHide').hide();
    $('.' + target + '.UKMtoggleShow').fadeIn();
}

function UKMtoggleShow(target) {
    $(document).trigger('pre_UKMtoggleShow#' + target);
    $('#' + target + '.UKMtoggleContent').slideDown(function () {
        $(document).trigger('UKMtoggleShow#' + target);
        AOS.refresh();
    });
    $('.' + target + '.UKMtoggleShow').hide();
    $('.' + target + '.UKMtoggleHide').fadeIn();
}