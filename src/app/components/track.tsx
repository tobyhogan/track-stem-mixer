import React from "react";

// Stateless Functional Component

const Track = () => {
  return (

    /*
    <div className="track flex">

        <audio controls controlsList="nodownload noplaybackrate">
        Your browser does not support the audio element.
            <source src="./assets/pond-sweepme-lead.mp3" type="audio/mp3">
            </source>
        </audio>

        <div className="flex audio-controls w-32 h-15 bg-white rounded-lg ml-2">
            <input id="volume-knob" type="range" value="100" class="input-knob volume-knob" outline-none focus:outline-none outline-transparent border-transparent focus:ring-0 min="0" max="100" data-diameter="40" data-fgcolor="#404040" data-bgcolor="#9da4b0"/>
        </div>

    </div>

    */

    <div className="track flex">

        <audio controls controlsList="nodownload noplaybackrate">
            Your browser does not support the audio element.
            <source src="./assets/pond-sweepme-lead.mp3" type="audio/mp3">
            </source>
        </audio>

        <div className="flex audio-controls w-32 h-15 bg-white rounded-lg ml-2">
            <input id="volume-knob" type="range" value="100" min="0" max="100" className="input-knob volume-knob outline-none focus:outline-none outline-transparent border-transparent focus:ring-0"/>
            
        </div>

    </div>

  );
};

export default Track;




