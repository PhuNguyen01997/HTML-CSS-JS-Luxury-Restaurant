$(document).ready(function(){
    // Nav ----------------------------------------------
    $("button.nav-dropdown").on("click",function(){
        $(this).siblings(".nav-list--text").toggleClass("show");
        $(".nav__cart").slideUp();
    });
    // Nav Cart -----------------------------------------
    $(".nav-list__item--cart").on("click",function(){
        $(".nav__cart").slideToggle();
        $(".nav-list--text").removeClass("show");
    });
    // Menu ---------------------------------------------
    var isShowing = false;
    $(".menu__nav-item--dropdown-btn").on("click",function(){
        if(isShowing) {
            $(this).parent().siblings(".menu__nav").addClass("hide");
            $(this).parent().siblings(".menu__nav").removeClass("show");
        }
        else{
            $(this).parent().siblings(".menu__nav").addClass("show");
            $(this).parent().siblings(".menu__nav").removeClass("hide");
        }
        isShowing = !isShowing;
    });
    $(".menu__nav .menu__nav-item").on("click",function(){
        const content = $(this).html();
        $(".menu__nav-item--dropdown-li").css("opacity","0");
        // i setTimeOut 0.3s because after 0.3s opacity go to 0 and set is opacity 1 again
        setTimeout(() => {
            $(".menu__nav-item--dropdown-li").html(content);
            $(".menu__nav-item--dropdown-li").css("opacity","1");
        },300) 
        $(".menu .show").addClass("hide");
        $(".menu .show").removeClass("show");
    });
});