function scrollToId(id) {
    //	console.log('SCROLL TO ID: ' + id);

    var animateToPosition = $('#' + id).offset().top - 50;
    if (animateToPosition < 0) {
        animateToPosition = 0;
    }
    scrollToPosition(animateToPosition);
}

function scrollToPosition(targetPosition) {
    //	console.log('SCROLL TO POS: ' + targetPosition);
    $('html, body').animate({
        scrollTop: targetPosition
    }, 300);
}
