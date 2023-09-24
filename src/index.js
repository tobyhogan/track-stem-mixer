


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


function checkboxUpdated(track, checkbox) {

    if (checkbox.checked == false) {

        track.volume = 0;

    } else {
        track.volume = 1;
    }



    



}







function updateSong() {



    var selectBox = document.getElementById("song-select");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    tag = document.getElementById("tracks-container");
    tag.innerHTML = ``;

    for (var key in songsData) {


        if (selectedValue == key) {



            for (var count in songsData[key]) {


                path = "assets/songs/" + selectedValue + "/" + songsData[key][count]



                let elem = document.createElement("div", { is: "track-component"});

                elem.setAttribute("class", "flex mb-2");

                elem.innerHTML = `


                <div class="flex justify-evenly bg-white w-10 rounded-lg mr-2">

                    <input type="checkbox" class="w-5 accent-gray-500" id="checkbox${count}" name="" value="" onclick="checkboxUpdated(track${count}, checkbox${count});" checked>
                
                </div>

                <audio controls controlsList="nodownload noplaybackrate " src="${path}" class="track" id="track${count}">
                    Your browser does not support the audio element.
                </audio>
          
                <div class="flex audio-controls w-32 h-15 bg-white rounded-lg items-center ml-2">
                    <input id="volume-knob" type="range" value="100" class="input-knob volume-knob ml-1" outline-none focus:outline-none outline-transparent border-transparent focus:ring-0 min="0" max="100" data-diameter="40" data-fgcolor="#BBC3D0" data-bgcolor="#7B8393"/>
                </div>
          
          
                `;


                tag.append(elem);

                

            }




        }


    }

}


function updateSpeed() {



    var selectBox = document.getElementById("speed-select");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;

    console.log(selectedValue);


    const elements = document.querySelectorAll(".track");


    for(let i = 0; i < elements.length; i++) {


        elements[i].playbackRate = selectedValue;

        console.log("worked");
    
    
    }    
  

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

updateSong();