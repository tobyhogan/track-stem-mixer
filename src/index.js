
function changeFunc() {

    //assuming sweep me off my feet


    var selectBox = document.getElementById("song-select");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;


    tag = document.getElementById("viewer-widget");

    var audio1 = document.createElement("AUDIO");
    audio1.setAttribute("src", "assets/pond-sweepme-bass.mp3");
    audio1.setAttribute("controls", "controls");
    audio1.classList.add("track");


    tag.appendChild(audio1);
  







}

function playAllAudio() {

    const elements = document.querySelectorAll(".track");



    for(let i = 0; i < elements.length; i++) {




        elements[i].play();

    
    
    
    }    
}

function pauseAllAudio() {

    const elements = document.querySelectorAll(".track");


    for(let i = 0; i < elements.length; i++) {


        elements[i].pause();

    
    
    }    
}

function stopAllAudio() {

    const elements = document.querySelectorAll(".track");


    for(let i = 0; i < elements.length; i++) {

    
        elements[i].pause();
        elements[i].currentTime = 0;
    
    
    
    }    
}

/*
var slider = document.getElementById("volume-knob");

slider.addEventListener("input", (event) => {console.log(event.target.value); })

console.log(slider.value)


*/

