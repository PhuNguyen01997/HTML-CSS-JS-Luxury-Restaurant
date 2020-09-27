var inputs = document.querySelectorAll(".reserve__form-item");
var canSubmit = false;

function validateForm(input){
    const reText = /^[A-Za-z]+$/ig
    const value = $(input).find(".reserve__form-ipt input").val();
    if (reText.test(value)){
        input.classList.add("validated-correct");
        input.classList.remove("validated-incorrect");
    }
    else{
        input.classList.add("validated-incorrect");
        input.classList.remove("validated-correct");
    }
}
function onReserveTable(){
    event.preventDefault();
    inputs.forEach(function(input){
        validateForm(input);
    });
    const ipts = [...inputs];
    canSubmit = ipts.reduce( (canSubmit, ipt, index) => {
        if( !ipt.classList.contains("validated-correct") ){
            canSubmit = false;
        }
        return canSubmit;
    },true);
    if(canSubmit){
        sendReserve();
    }
}

function sendReserve(){
    $(".modal-reserve").fadeIn();
}

inputs.forEach( input => {
    input.addEventListener("keyup", () => {
        validateForm(input);
    });
});
document.querySelector(".reserve__form-btn").addEventListener("click",onReserveTable);
document.querySelector(".modal-reserve__close").addEventListener("click",() => {
    $(".modal-reserve").fadeOut();
});