$(document).ready(function() {
    $('#openModal').click(function() {

        const userText = $('#userInput').val();
        $('#userText').text(userText ? `Ваш введений текст: ${userText}` : 'Ви не ввели текст');

        $('#myModal').css('display', 'flex');
    });

    $('#closeModal').click(function() {
        $('#myModal').hide();
    });
    function animateHeader() {
        const containerWidth = $('.container').width();
        const headerWidth = $('#animatedHeader').width();
        
        var quarter = containerWidth / 4;
        $('#animatedHeader').animate({
            left: containerWidth - headerWidth, 
        }, { duration: 10000, queue: false});
        $('#animatedHeader').animate({
            fontSize: '10px' 
        }, { duration: 2500, queue: true});
        $('#animatedHeader').animate({
            fontSize: '40px' 
        }, { duration: 2500, queue: true});
        $('#animatedHeader').animate({
            fontSize: '10px' 
        }, { duration: 2500, queue: true});
        $('#animatedHeader').animate({
            fontSize: '40px' 
        }, { duration: 2500, queue: true});
    }

    animateHeader();

    function toggleSecondInput() {
        if ($('#checkbox').is(':checked')) {
            $('#secondElement').fadeIn();
        } else {
            $('#secondElement').fadeOut(); 
        }
    }

    $('#checkbox').change(function() {
        toggleSecondInput(); 
    });

});