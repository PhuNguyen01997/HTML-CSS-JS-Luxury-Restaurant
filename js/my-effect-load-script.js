var elements = document.querySelectorAll(".scroll-load");

scrollLoad();

function scrollLoad(){
    const heightView = window.innerHeight;
    const topViewArea = window.pageYOffset;
    const bottomViewArea = window.pageYOffset + window.innerHeight;
    elements.forEach(element => {
        const topPosElem = $(element).offset().top;
        const bottomPosElem = $(element).offset().top + element.offsetHeight;
        
        if( topPosElem + 150 < bottomViewArea && bottomPosElem - 150 > topViewArea ){
            element.classList.add("scroll-load--show");
        }
        if( topPosElem > bottomViewArea || bottomPosElem < topViewArea ){
            element.classList.remove("scroll-load--show");
        }
    })
    
}


document.addEventListener("scroll",scrollLoad)
