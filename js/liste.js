/**
 * UKM-liste
 * Standard-liste for visning av data
 * TODO: Bør implementeres av deltakere + program
 */
$(document).on('click', '.UKMliste.expandable > li > header', function (e) {
    e.preventDefault();

    var li = $(this).parents('li');

    /**
     * Klikk på header med synlig innhold = lukk
     * Finn og trykk på cancel-knapp i footer 
     **/
    if (li.find('section').is(':visible')) {
        li.find('footer .cancel').click();
        return false;
    }
    /**
     * <li> <header class="sticky"> lar headeren bli igjen,
     * MEN skjuler description-tag'en
     * 
     * <li> <header class="super-sticky"> lar hele headeren bli igjen
     **/
    if ($(this).hasClass('sticky')) {
        $(this).find('.description').slideUp();
    } else if (!$(this).hasClass('super-sticky')) {
        $(this).slideUp();
    }
    li.find('section, footer').slideDown();
    $(document).trigger('UKMliste:load:' + li.attr('data-trigger'), [li]);
});

$(document).on('click', '.UKMliste.expandable > li .cancel', function (e) {
    e.preventDefault();
    var li = $(this).parents('.UKMliste > li');
    li.find('section, footer').slideUp();
    li.find('> header, > header > .description').slideDown();
    $(document).trigger('UKMliste:unload:' + li.attr('data-trigger'), [li]);
});

/* DEMO FUNCTIONS UKM-liste trigger
$(document).on('UKMliste:load:sanger', function(e, li) {
    console.warn('Triggered load:sanger');
    console.log( li.attr('data-id') );

});

$(document).on('UKMliste:unload:sanger', function(e, li) {
    console.error('Triggered unload:sanger');
    li.find('section').html('Vennligst vent, laster inn');
    console.log( li.attr('data-id') );
});
*/