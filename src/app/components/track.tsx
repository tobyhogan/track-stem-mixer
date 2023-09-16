'use client';

import React, { useState } from "react";


const Track = ({source}) => {

    const [val, setVal] = useState(84);

    function myFunc(event) {


        console.log(event);
        console.log(event.target.value);
        console.log("work");

        setAmount(event.target.value);
    }
    

  return (


    <div className="track flex">

        <audio controls controlsList="nodownload noplaybackrate">
            Your browser does not support the audio element.
            <source src={source} type="audio/mp3">
            </source>
        </audio>

        <div className="flex audio-controls w-32 h-15 bg-white rounded-lg ml-2">
            <input onChange={myFunc} type="range" id="volume-knob" min="0" max="100" value={val} data-diameter='50' data-bgcolor="#a8a7b5" data-fgcolor="#4a4a4a" className="input-knob volume-knob outline-none focus:outline-none outline-transparent border-transparent focus:ring-0"/>
            
        </div>

    </div>

  );
};

export default Track;

// <input onChange={myFunc} id="volume-knob" min="0" max="100" className="input-knob volume-knob outline-none focus:outline-none outline-transparent border-transparent focus:ring-0"/>




