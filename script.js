$(".mobile").click(function() {
    $(".mobileblock").animate({
        height: 'toggle'
    });

});

$("#num_1").click(function() {
    $("#full_bar_1").css({
        display: 'block'
    });
});
$("#full_bar_button_1").click(function() {
    $("#full_bar_1").css({
        display: 'none'
    });
});
$("#num_2").click(function() {
    $("#full_bar_2").css({
        display: 'block'
    });
}); 
$("#full_bar_button_2").click(function() {
    $("#full_bar_2").css({
        display: 'none'
    });
});
$("#num_3").click(function() {
    $("#full_bar_3").css({
        display: 'block'
    });
}); 
$("#full_bar_button_3").click(function() {
    $("#full_bar_3").css({
        display: 'none'
    });
});