const button = document.getElementById("animationButton");
let circle = document.getElementById("roundCircle");
let percent = 0;
button.onclick = function(){
    percent += 5;
    let transparentPercent = 100 - percent;
    let newPercent = percent + "%";
    let newTransparentPercent = transparentPercent + "px";
    circle.style.background = `linear-gradient(to bottom, transparent 0% ${newTransparentPercent},#7d66b6 0% ${newPercent})`;
    console.log(newPercent);
    if(percent == 100){
        percent = 0;
    }
}
