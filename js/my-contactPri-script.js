var inputs = document.querySelectorAll(".contactPri__input-ipt");
var canSubmit = false;

function validateForm(input){
    const reText = /^[A-Za-z]+$/ig
    const value = input.value;
    if (reText.test(value)){
        input.parentElement.classList.add("validated-correct");
        input.parentElement.classList.remove("validated-incorrect");
    }
    else{
        input.parentElement.classList.add("validated-incorrect");
        input.parentElement.classList.remove("validated-correct");
    }
}
function onSendContact(){
    event.preventDefault();
    inputs.forEach(function(input){
        validateForm(input);
    });
    const ipts = [...inputs];
    canSubmit = ipts.reduce( (canSubmit, ipt, index) => {
        if( !ipt.parentElement.classList.contains("validated-correct") ){
            canSubmit = false;
        }
        return canSubmit;
    },true);
    console.log(canSubmit)
    if(canSubmit){
        sendReserve();
    }
}

function sendReserve(){
    // example for tester
    $(".modal-footer").addClass("modal-footer--show");
    setTimeout(function(){
        $(".modal-footer").removeClass("modal-footer--show");
    },2000);
}

inputs.forEach( input => {
    input.addEventListener("keyup", () => {
        validateForm(input);
    });
});
document.querySelector(".contactPri__submit").addEventListener("click",onSendContact);