$(document).ready(function() {
    $(".fa-bars").click(function() {
        $(".header__menu, .header__close").show();
        $(".header__hamburger, .intro__block--image-mockups").hide();
        $(".intro").css({"background-image":"linear-gradient(to bottom, hsl(233, 26%, 24%), hsl(0, 0%, 100%))"});
        $(".intro__block").css({"opacity":"0.3"});
        $("body").css({"overflow":"hidden"});
    });
    $(".fa-times").click(function() {
        $(".header__menu, .header__close").hide();
        $(".header__hamburger, .intro__block--image-mockups").show();
        $(".intro").css({"background-image":"none"});
        $(".intro__block").css({"opacity":"1"});
        $("body").css({"overflow":"auto"});
    });

    $( window ).resize(function(){
        var width = $( window ).width();
        $("body").css({"overflow":"auto"});
        if (width > 767) {
            $(".header__menu").show();
            $(".header__hamburger").hide();
            $(".intro").css({"background-image":'url("images/bg-combined-desktop2.png")'});
        }
        else if (width <= 767 ){
            $(".header__menu, .header__close").hide();
            $(".header__hamburger, .intro__block--image-mockups").show();
            $(".intro").css({"background-image":"none"});
            $(".intro__block").css({"opacity":"1"});
        }
    });    
});