'use client';

import React, { useEffect, useState, useRef } from "react";


const Track = ({source, audioLink}) => {




    const MyAudio = React.forwardRef((props, ref) => {

        return (

                    
        <audio controls controlsList="nodownload noplaybackrate" ref={ref} src={source} type="audio/mp3" className="">
            Your browser does not support the audio element.
            {props.children}
        </audio>

        );

    });


    const myaudio = useRef(null); //useRef(null);

                //className="bg-green-300 w-10 h-10"


    const [val, setVal] = useState(84);
    const inputRef = useRef(null);

    function updateVolume(event) {

        myaudio.current.volume = event.target.value / 100;

    }

    useEffect(() => {
        inputRef.current.addEventListener("input", updateVolume);
    }, []);



    if (audioLink == false) {

        console.log("current vol12341: " + myaudio.current.volume)

        myaudio.current.pause();

        console.log("12341worked?");


    } else if (audioLink == true) {

        console.log("current vol: " + myaudio.current.volume)

        console.log("play status: " + !myaudio.current.paused)

        if (true) {

            myaudio.current.play();


        }


        console.log("worked?");
    }
    

    
    return (


        <div className="track flex">

            <MyAudio ref={myaudio}/>

            <div className="flex audio-controls w-32 h-15 bg-white rounded-lg ml-2">
                <input onChange={updateVolume} ref={inputRef} type="range" id="volume-knob" min="0" max="100" value={val} data-diameter='50' data-bgcolor="#a8a7b5" data-fgcolor="#4a4a4a" className="input-knob volume-knob outline-none focus:outline-none outline-transparent border-transparent focus:ring-0"/>
                
            </div>

        </div>

    );
};

export default Track;

// <input onChange={myFunc} id="volume-knob" min="0" max="100" className="input-knob volume-knob outline-none focus:outline-none outline-transparent border-transparent focus:ring-0"/>




