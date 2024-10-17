$(document).ready(function() {
    $('#startAnimation').click(function() {
        var windowHeight = $(window).height();
        var square = $('#square');

        square.css('background-color', 'black');
        square.show();
        var centerTop = (windowHeight - square.height()) / 2;
        square.css({
            top: centerTop,
            left: 'calc(50% - 50px)' 
        });

        square.animate({
            top: windowHeight - square.height()
        }, 1000)
        .animate({
            top: 0
        }, 1000)
        .fadeOut(1000)
        .fadeIn(1000)
        .queue(function(next) {
            $(this).css('background-color', 'green');
            next();
        });
    });
});