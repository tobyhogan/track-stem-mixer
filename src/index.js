


const songsData = {
    "sweep-me-off-my-feet": [
        "pond-sweepme-bass.mp3",
        "pond-sweepme-brass.mp3",
        "pond-sweepme-glock.mp3",
        "pond-sweepme-lead.mp3",
        "pond-sweepme-strings.mp3",
    ],
    "cause-im-a-man":[
        "tame-cause-im-a-man_bells.mp3",
        "tame-cause-im-a-man_choir.mp3",
        "tame-cause-im-a-man_lead.mp3",
        "tame-cause-im-a-man_pad_solo.mp3",
        "tame-cause-im-a-man_strings.mp3"
    ]
}






function updateSong() {







    var selectBox = document.getElementById("song-select");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    tag = document.getElementById("viewer-widget");

    for (var key in songsData) {


        if (selectedValue == key) {



            for (var count in songsData[key]) {


                path = "assets/songs/" + selectedValue + "/" + songsData[key][count]



                let elem = document.createElement("div", { is: "track-component"});

                elem.setAttribute("class", "flex mb-2");

                elem.innerHTML = `


                <div>

                    <input type="checkbox" id="vehicle2" name="vehicle2" value="Car">
                
                </div>

                <audio controls controlsList="nodownload noplaybackrate" src="${path}" class="track">
                Your browser does not support the audio element.
                </audio>
          
                <div class="flex audio-controls w-32 h-15 bg-white rounded-lg ml-2">
                    <input id="volume-knob" type="range" value="100" class="input-knob volume-knob" outline-none focus:outline-none outline-transparent border-transparent focus:ring-0 min="0" max="100" data-diameter="40" data-fgcolor="#404040" data-bgcolor="#9da4b0"/>
                </div>
          
          
                `;


                tag.append(elem);

                

            }




        }


    }

  

    tag = document.getElementById("viewer-widget");








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

