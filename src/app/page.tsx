import Image from 'next/image'
import Track from './components/track.tsx';

export default function Home() {

  function myFunc() {

    console.log("hello world");

  }

  return (
    <>
      <div id="viewer-widget" className="flex-row h-min bg-gray-500 m-0 mt-6 pb-6 px-10 rounded-lg">

        <h1 className="text-3xl text-center text-white my-5 underline">Music Viewer</h1>

        <button onClick={myFunc()}>Play All</button>
        <button onClick={myFunc()}>Pause All</button>
        <button onClick={myFunc()}>Stop All</button>

        <Track></Track>
        <Track></Track>
        <Track></Track>
        <Track></Track>
        <Track></Track>
        <Track></Track>



      </div>
    </>

  )
}
