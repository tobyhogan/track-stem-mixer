'use client';

import AudioTrack from './components/track.tsx';



export default function Home() {

  const soundsLocation = "./components/pond-sweepme-bass.mp3";


  return (

    <div>
      
      <button>Play All</button>
      <button className='ml-5'>Stop All</button>

      <AudioTrack src={soundsLocation}/>


    </div>


  )
}
