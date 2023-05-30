
//scroll

document.getElementById("button-up").addEventListener("click",scrollUp);
function scrollUp(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;//se obtiene el scroll
    if(currentScroll>0){
      window.requestAnimationFrame(scrollUp);
      window.scrollTo (0, currentScroll - (currentScroll / 20));
      buttonUp.style.transform = "scale(0)";
    }
}

buttonUp = document.getElementById("button-up");

window.onscroll = function(){

    var scroll = document.documentElement.scrollTop;

    if (scroll > 700){
        buttonUp.style.transform = "scale(1)";
    }else if(scroll < 500){
        buttonUp.style.transform = "scale(0)";
    }

}
