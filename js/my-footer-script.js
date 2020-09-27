document.querySelector(".footer__btn").addEventListener("click",onDailyMail);
function onDailyMail(){
    event.preventDefault();
    $(".modal-footer").addClass("modal-footer--show");
    setTimeout(function(){
        $(".modal-footer").removeClass("modal-footer--show");
    },2000);
}
$(".modal-footer__close").on("click",function(){
    $(".modal-footer").removeClass("modal-footer--show");
});