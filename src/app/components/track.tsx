'use client';

const MyAudio = (src) => {

  return (
    <div>
      <audio controls src={src}>

      </audio>
      
    </div>
  )

}

const AudioTrack = ({src, playing}) => {

  const audio = MyAudio(src);

    if (playing.current) {
      audio.play();
    }


  
    return (

      audio

    );
}

export default AudioTrack;
