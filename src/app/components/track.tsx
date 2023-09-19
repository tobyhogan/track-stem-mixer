'use client';

import React, { useEffect, useState, useRef, useMemo } from "react";
import ReactDOM from 'react-dom';



const Track = ({ src, isPlaying }) => {
  
    // Hooks //
    
    const audio = useMemo(() => {

        return new Audio(src)

    }, [src])
    
    useEffect(() => {
      if (isPlaying) {
        audio.play()
      } else {
        audio.pause()
      }
      return () => audio.pause()
    }, [isPlaying])
    
    // Rendering //
    
    return (
      <li>
        {src}
      </li>
    )
}

export default Track;



