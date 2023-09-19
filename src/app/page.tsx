'use client';

import AudioTrack from './components/track.tsx';



export default function Home() {

  const soundsLocation = "./assets/music/sweep-me-off-my-feet/";


  return (

    <div>
      
      <button>Play All</button>
      <button className='ml-5'>Stop All</button>


      <AudioTrack src={soundsLocation + "pond-sweepme-bass.mp3"}/>
      <AudioTrack src={soundsLocation + "pond-sweepme-lead.mp3"}/>
      <AudioTrack src={soundsLocation + "pond-sweepme-strings.mp3"}/>


    </div>


  )
}
