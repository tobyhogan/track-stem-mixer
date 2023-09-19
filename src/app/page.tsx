'use client';

import { useState, useRef } from 'react';
import AudioTrack from './components/track.tsx';



export default function Home() {

  const soundsLocation = "./assets/music/sweep-me-off-my-feet/";

  const allPlaying = useRef(null);


  return (

    <div>
      
      <button onClick={() => {allPlaying.current = true}}>Play All</button>
      <button className='ml-5'>Stop All</button>


      <AudioTrack src={soundsLocation + "pond-sweepme-bass.mp3"} playing={allPlaying}/>
      <AudioTrack src={soundsLocation + "pond-sweepme-lead.mp3"} playing={allPlaying}/>
      <AudioTrack src={soundsLocation + "pond-sweepme-strings.mp3"} playing={allPlaying}/>


    </div>


  )
}
