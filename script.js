let percent = 0;
let otherPercent
const loader = document.getElementById("CircleLoader");
let button = document.getElementById("submitButton");
let label = document.getElementById("Percent")

button.onclick = function(){
    let value = document.getElementById("inputPercent").value;
    percent = value + "%";
    otherPercent = 100 - value + "%";
    loader.style.background = `linear-gradient(to top, green 0% ${percent}, transparent 0% ${otherPercent})`
    label.textContent = percent;
}
