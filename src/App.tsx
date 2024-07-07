import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className=''>
        <div className='w-[32rem] h-[34rem] border-2 border-black mx-auto mt-16'>
          <h1 className='mt-3 text-2xl text-center underline'>Music Viewer</h1>
          <div className='bg-grayNew-150 flex justify-around w-fit px-6 py-2 mt-8 ml-6 [&>*]:mr-3'>
            <button className='bg-grayNew-250 px-4 py-1 text-grayNew-700'>Play</button>
            <button className='bg-grayNew-250 px-4 py-1 text-grayNew-700'>Play</button>
            <button className='bg-grayNew-250 px-4 py-1 text-grayNew-700'>Play</button>
          </div>
          <h2>Song:</h2>
          <h2>Components:</h2>
          <div className='bg-grayNew-150 h-'>
            <div className='py-3'>Component1</div>
            <div className='py-3'>Component2</div>
            <div className='py-3'>Component3</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
