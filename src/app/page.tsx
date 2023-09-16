'use client';

import Track from './components/track.tsx';

import {useState} from 'react';


export default function Home() {






  var musicDir = "/assets/music"
  var currentSong = "sweep-me-off-my-feet";

  /* function playAllAudio() {

    console.log("hello world");
      
   
  }
  */

  function pauseAllAudio() {

    console.log("hello world");
      
     
  }

  function stopAllAudio() {
    console.log("hello world");


  }




  function myFunc() {

    console.log("hello world");



  }

  const [playingStatus, updatePlaying] = useState(false);

  const [playSignal, updatePlaySignal] = useState(null);


  const musicFolder = "./assets/music"
  const currentSongFolder = "/sweep-me-off-my-feet/"

  return (
    <div id="viewer-widget" className="flex-row h-min bg-gray-500 m-0 mt-6 pb-6 px-10 rounded-lg">

      <h1 className="text-3xl text-center text-white my-5 underline">Music Viewer</h1>

      <button onClick={() => updatePlaySignal(true)}>Play All</button>

      <button onClick={() => updatePlaySignal(false)}>Stop All</button>

      <Track source={musicFolder + currentSongFolder + "pond-sweepme-lead.mp3"} audioLink={playSignal} />
      <Track source={musicFolder + currentSongFolder + "pond-sweepme-lead.mp3"} audioLink={playSignal} />
      <Track source={musicFolder + currentSongFolder + "pond-sweepme-lead.mp3"} audioLink={playSignal} />

  
    </div>


  )
}

/*

        <Track source={musicFolder + currentSongFolder + "pond-sweepme-strings.mp3"}></Track>
        <Track source={musicFolder + currentSongFolder + "pond-sweepme-bass.mp3"}></Track>
        <Track source={musicFolder + currentSongFolder + "pond-sweepme-brass.mp3"}></Track>
        <Track source={musicFolder + currentSongFolder + "pond-sweepme-glock.mp3"}></Track>
        <Track source={musicFolder + currentSongFolder + "sweep-me-off-my-feet-drums-v3.mp3"}></Track>



        */

        //      <button onClick={() => updatePlaying(1)}>Pause All</button>