$('.footer').ready(function () {
    $(".dropdown-toggle").click(function () {
        $(this).children(".caret-flip").toggleClass('rotate-90');
    });
});
$('.footer').on("click", function (event) {
    var $trigger = $(".caret-flip");
    if ($trigger !== event.target && ! $trigger.has(event.target).length) {
        $(".caret-flip").removeClass('rotate-90');
    }
});
