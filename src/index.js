
function changeFunc() {

    //assuming sweep me off my feet


    var selectBox = document.getElementById("song-select");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;


    tag = document.getElementById("viewer-widget");

    var audio1 = document.createElement("AUDIO");
    audio1.setAttribute("src", "assets/pond-sweepme-bass.mp3");
    audio1.setAttribute("controls", "controls");
    audio1.classList.add("track");


    /*

    var volumeEditor = "


        <div class=\"flex audio-controls w-32 h-15 bg-white rounded-lg ml-2\">
            <input id=\"volume-knob\" type=\"range\" value=\"100\" class=\"input-knob volume-knob\" outline-none focus:outline-none outline-transparent border-transparent focus:ring-0 min=\"0\" max=\"100\" data-diameter=\"40\" data-fgcolor=\"#404040\" data-bgcolor=\"#9da4b0\"/>
        </div>
        
        "

    */





    var audio2 = document.createElement("AUDIO");
    audio2.setAttribute("src", "assets/pond-sweepme-brass.mp3");
    audio2.setAttribute("controls", "controls");
    audio2.classList.add("track");

    var audio3 = document.createElement("AUDIO");
    audio3.setAttribute("src", "assets/pond-sweepme-glock.mp3");
    audio3.setAttribute("controls", "controls");
    audio3.classList.add("track");

    var audio4 = document.createElement("AUDIO");
    audio4.setAttribute("src", "assets/pond-sweepme-lead.mp3");
    audio4.setAttribute("controls", "controls");
    audio4.classList.add("track");

    var audio5 = document.createElement("AUDIO");
    audio5.setAttribute("src", "assets/pond-sweepme-strings.mp3");
    audio5.setAttribute("controls", "controls");
    audio5.classList.add("track");


    tag.appendChild(audio1);
    tag.appendChild(audio2);
    tag.appendChild(audio3);
    tag.appendChild(audio4);
    tag.appendChild(audio5);








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

