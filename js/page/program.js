/**
 * PROGRAM: VIS POST I KATEGORI
 **/
 $(document).on('showPost', function(e, post) {
    post.attr('data-visning', 'synlig');

    var headerContainer = post.find('.header');
    var dataContainer = post.find('.data');
    var buttonContainer = post.find('.cancel');

    headerContainer.slideUp();
    $.post(
        post.attr('data-post-url'), {
            contentMode: true,
            hideTopImage: post.attr('data-post-hideTopImage'),
        },
        function(response) {
            dataContainer.html(response);
        }
    );
    dataContainer.slideDown();
    buttonContainer.fadeIn();
});

$(document).on('hidePost', function(e, post) {
    post.attr('data-visning', 'skjult');
    var headerContainer = post.find('.header');
    var dataContainer = post.find('.data');
    var buttonContainer = post.find('.cancel');
    buttonContainer.fadeOut();
    dataContainer.slideUp(400, function() {
        $(this).html('Vennligst vent, laster inn...');
    });
    headerContainer.slideDown();
});

$(document).on('click', '.showPost .header', function(e) {
    e.preventDefault();
    $(document).trigger('showPost', [$(this).parents('.post')]);
});
$(document).on('click', '.hidePost', function(e) {
    e.preventDefault();
    $(document).trigger('hidePost', [$(this).parents('.post')]);
});