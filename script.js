const box = document.getElementById("box1");

box.addEventListener("mouseover", changeWidth);

box.addEventListener("mouseout", changeWidthBack);



function changeWidthBack(){
    box.style.width = "70px";
    box.style.height = "70px";
}

function changeWidth(){
    box.style.height = "200px";
    box.style.width = "200px";
}