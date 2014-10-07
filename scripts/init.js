var previousTop = 0;

function scrollFade(elem){
    var windowscroll = $(this).scrollTop();
    $(elem).css({
          'opacity' : 1-(windowscroll/300)
    });
}

$(window).resize(function() {
    if($(window).width() > 767){
        $(".nav-scroll .nav-right").show();
    }
    else{
        $(".nav-scroll .nav-right").hide();
    }
});

$(window).scroll(
    function () {

        var currentTop = $(window).scrollTop();

        if (currentTop < 20) {
                $("#nav").addClass("fadeInDown");
                $("#nav").removeClass("fadeOutUp");
                $("#nav").removeClass("nav-scroll");
        } 
        else if(currentTop > 400){
            $("#nav").addClass("nav-scroll");
            $("#nav").addClass("fadeInDown");
            $("#nav").removeClass("fadeOutUp");
        }
        else if(currentTop < 200){
            $("#nav").addClass("fadeOutUp");
        }
        else{
            $("#nav").removeClass("fadeInDown");
            $("#nav").addClass("fadeOutUp");
        }

        previousTop = currentTop;        
        
        scrollFade("#header-text");
        
});

$('.mix-element').hover(function() {
    $(this).find('.mix-bottom').stop().slideDown(600);

}, function() {
    $(this).find('.mix-bottom').stop().slideUp(600);
});

$("#menu-icon").click(function(){
    $(".nav-scroll .nav-right").toggle('fast');
    });

$(function(){

    // Instantiate MixItUp:

    $('#work-container').mixItUp();

});