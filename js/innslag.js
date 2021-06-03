/**
 * DELTAKERE-SIDEN
 **/
$(document).on('visInnslag', function (e, innslag) {
    innslag.attr('data-visning', 'synlig');
    var dataContainer = innslag.find('.innslagData');
    var buttonContainer = innslag.find('.innslagCancel');
    var header = innslag.find('.header');

    header.slideUp();
    $.post(
        blog_url + 'pameldte/' + innslag.attr('data-id') + '/', {
        singleMode: "true"
    },
        function (response) {
            dataContainer.html(response);
        }
    );
    dataContainer.slideDown();
    buttonContainer.fadeIn();
});

$(document).on('skjulInnslag', function (e, innslag) {
    innslag.attr('data-visning', 'skjult');
    var dataContainer = innslag.find('.innslagData');
    var buttonContainer = innslag.find('.innslagCancel');
    var header = innslag.find('.header');

    header.slideDown();
    dataContainer.slideUp(
        400,
        function () {
            dataContainer.html('<div class="loading m-4">Vennligst vent, laster inn...</div>');
        }
    );
    buttonContainer.fadeOut();
});

$(document).on('click', '.innslagCard .header', function (e) {
    e.preventDefault();
    var innslag = $(this).parents('.innslagCard');
    if (innslag.attr('data-visning') == 'synlig') {
        $(document).trigger('skjulInnslag', [innslag]);
    } else {
        $(document).trigger('visInnslag', [innslag]);
    }

    return false;
});

$(document).on('click', '.hideInnslag', function () {
    var innslag = $(this).parents('.innslagCard');
    $(document).trigger('skjulInnslag', [innslag]);
});