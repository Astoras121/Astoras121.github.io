const border = document.getElementById("border");
let i = 0;
let color = "white";

function animate() {
    if (i == 340){
        color = "#333"
    }

    if(i == 0){
        color = "white";
    }

    i = (i + 1) % 360;
    console.log(i);
    border.style.background = `conic-gradient(${color} ${i}deg, transparent ${i}deg)`;
    requestAnimationFrame(animate);
}

animate();
