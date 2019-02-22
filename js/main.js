
$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.tabs').tabs();
    $('.datepicker').datepicker({
        disableWeekends: true,
        setDefaultDate: true,
        firstDay: 1
    });
    $('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy({
        scrollOffset: 0,
        throttle: 300
    });
});