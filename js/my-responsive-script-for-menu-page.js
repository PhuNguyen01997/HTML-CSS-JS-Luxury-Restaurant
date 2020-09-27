$(document).ready(function(){
    // Menu ---------------------------------------------
    document.addEventListener("scroll",function(){
        const topView = window.pageYOffset;
        const topPosNav = $(".menu__dropdown").offset().top;
        const topContainer = $(".menu").offset().top;
        const valueTop = topView - topContainer;
        if( topView === topPosNav ){ // mean nav is sticky in top of view
            $(".menu__nav").removeAttr("style");
            $(".menu__nav").css("top", valueTop + $(".menu__dropdown").outerHeight());
            if ( $(".menu__nav").offset().top + $(".menu__nav").outerHeight() >=  $(".menu").offset().top + $(".menu").outerHeight() ){
                console.log(
                    
                );
                $(".menu__nav").css("top", $(".menu").outerHeight() - $(".menu__nav").outerHeight() );
                $(".menu__nav").css("bottom", 0);
            }
        }
        else{
            $(".menu__nav").css("top", $(".menu__dropdown").outerHeight());
        }
    })
});