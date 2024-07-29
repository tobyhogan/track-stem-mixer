import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className=''>
        <div className='w-[32rem] h-[34rem] border-2 border-black mx-auto mt-16'>
          <h1 className='mt-3 text-2xl text-center underline'>Track Stem Mixer</h1>
          <div className='bg-grayNew-150 flex justify-around w-fit px-6 py-2 mt-8 ml-6 [&>*]:mr-3'>
            <button className='bg-grayNew-250 px-4 py-1 text-grayNew-700'>Play All</button>
            <button className='bg-grayNew-250 px-4 py-1 text-grayNew-700'>Pause All</button>
            <button className='bg-grayNew-250 px-4 py-1 text-grayNew-700'>Stop All</button>
          </div>
          <h2 className='ml-8 my-3'>Song:</h2>
          <select className='ml-7 border-[2px] border-[#999999]'>
              <option value="paint-me-silver">Paint Me Silver</option>
              <option value="lost-in-yesterday">Lost in Yesterday</option>
          </select>
          <h2 className='ml-7 mt-3'>Components:</h2>
          <div className='bg-grayNew-150 mx-10 mt-3'>
            <div className='py-3 m'>Component1</div>
            <div className='py-3'>Component2</div>
            <div className='py-3'>Component3</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
