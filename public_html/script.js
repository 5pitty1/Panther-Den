$(document).ready(function () {
    $('.flip-container').click(function() {
        $(this).find('.flipper').addClass('flip').mouseleave(function() {
            $(this).removeClass('flip');
        });
    });
    return false;
});