import Track from './components/track.tsx';
import {useRef} from 'react';


export default function Home() {

  console.log("working00");






  var musicDir = "/assets/music"
  var currentSong = "sweep-me-off-my-feet";

  function playAllAudio(audioElement) {

    console.log("hello world");
      
   
  }

  function pauseAllAudio() {

    console.log("hello world");
      
     
  }

  function stopAllAudio() {
    console.log("hello world");


  }




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

        <button onClick={playAllAudio()}>Play All</button>
        <button onClick={pauseAllAudio()}>Pause All</button>
        <button onClick={stopAllAudio()}>Stop All</button>

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
