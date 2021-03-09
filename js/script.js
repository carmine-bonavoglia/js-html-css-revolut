$(document).ready(function() {
    
    $('.dropdown-nav').mouseenter(function() {
        $(this).children('.dropdown').addClass('active');
    });

    $('.dropdown-nav').mouseleave(function () {
        $(this).children('.dropdown').removeClass('active');
    });

    $('.arrow').mouseenter(function () {
        $('.fas').removeClass('fa-chevron-down').addClass('fa-chevron-up');
    });

    $('.arrow').mouseleave(function () {
        $('.fas').removeClass('fa-chevron-up').addClass('fa-chevron-down');
    });

});