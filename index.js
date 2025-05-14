const slider = document.querySelector(".slider");
const nilai = document.querySelector(".sliderValue");
const nav = document.querySelector(".nav");

function changeColor(){
    nilai.innerHTML = slider.value;
    if (slider.value == 0) {
        nav.style.backgroundColor = "#ff0000";
        
    }
    else if (slider.value == 1) {
        nav.style.backgroundColor = "#ff4500";

    }
    else if (slider.value == 2) {
        nav.style.backgroundColor = "#ff6600";
    }
    else if (slider.value == 3) {
        nav.style.backgroundColor = "#ffa500";
    }
    else if (slider.value == 4) {
        nav.style.backgroundColor = "#ffd700";
    }
    else if (slider.value == 5) {
        nav.style.backgroundColor = "#ffff00";
    }
    else if (slider.value == 6) {
        nav.style.backgroundColor = "#adff2f";
    }
    else if (slider.value == 7) {
        nav.style.backgroundColor = "#00ff00";
    }
    else if (slider.value == 8) {
        nav.style.backgroundColor = "#00fa9a";
    }
    else if (slider.value == 9) {
        nav.style.backgroundColor = "#00ced1";
    }
    else if (slider.value == 10) {
        nav.style.backgroundColor = "#1e90ff";
    } 
    else if (slider.value == 11){
        nav.style.backgroundColor = "#0047ab";
    }
    else if (slider.value == 12){
        nav.style.backgroundColor = "#6a5acd";
    }
    else if (slider.value == 13){
        nav.style.backgroundColor = "#800080";
    }
    else {
        nav.style.backgroundColor = "#4b0082";
    }
}

slider.addEventListener("input", () => {
    changeColor();
})

