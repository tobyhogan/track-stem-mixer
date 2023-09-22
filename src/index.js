
function changeFunc() {
    


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

