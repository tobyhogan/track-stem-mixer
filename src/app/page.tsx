import Track from './components/track.tsx';


export default function Home() {

  console.log("working00");

  /*




var musicDir = "/assets/music"
var currentSong = "sweep-me-off-my-feet";

function playAllAudio() {

    const elements = document.querySelectorAll(".track");


    for(let i = 0; i < elements.length; i++) {

    
        const audioElement = elements[i].querySelector("audio");

        console.log(audioElement);

        audioElement.play();
    
    
    
    }    
}

function pauseAllAudio() {

    const elements = document.querySelectorAll(".track");


    for(let i = 0; i < elements.length; i++) {

    
        const audioElement = elements[i].querySelector("audio");

        console.log(audioElement);

        audioElement.pause();
    
    
    
    }    
}

function stopAllAudio() {

    const elements = document.querySelectorAll(".track");


    for(let i = 0; i < elements.length; i++) {

    
        const audioElement = elements[i].querySelector("audio");

        console.log(audioElement);

        audioElement.pause();
        audioElement.currentTime = 0;
    
    
    
    }    
}

var slider = document.getElementById("volume-knob");

slider.addEventListener("input", (event) => {console.log(event.target.value); })

console.log(slider.value)

*/


  function myFunc() {

    console.log("hello world");



  }

  const musicFolder = "./assets/music"
  const currentSongFolder = "/sweep-me-off-my-feet/"

  console.log(process.env.PUBLIC_URL);

  return (
    <>
      <div id="viewer-widget" className="flex-row h-min bg-gray-500 m-0 mt-6 pb-6 px-10 rounded-lg">

        <h1 className="text-3xl text-center text-white my-5 underline">Music Viewer</h1>

        <button onClick={myFunc()}>Play All</button>
        <button onClick={myFunc()}>Pause All</button>
        <button onClick={myFunc()}>Stop All</button>

        <Track source={musicFolder + currentSongFolder + "pond-sweepme-lead.mp3"}></Track>
        <Track source={musicFolder + currentSongFolder + "pond-sweepme-strings.mp3"}></Track>
        <Track source={musicFolder + currentSongFolder + "pond-sweepme-bass.mp3"}></Track>
        <Track source={musicFolder + currentSongFolder + "pond-sweepme-brass.mp3"}></Track>
        <Track source={musicFolder + currentSongFolder + "pond-sweepme-glock.mp3"}></Track>
        <Track source={musicFolder + currentSongFolder + "sweep-me-off-my-feet-drums-v3.mp3"}></Track>

   



      </div>
    </>

  )
}
