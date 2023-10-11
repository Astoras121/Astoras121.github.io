const border = document.getElementById("border");
let color = "white";
let i = 0;

function animate() {
    i += 1;
    console.log(i);
    border.style.background = `conic-gradient(${color} ${i}deg, transparent ${i}deg)`;
    requestAnimationFrame(animate);
}
animate();
