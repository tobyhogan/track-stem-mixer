import { useState, useRef, useEffect } from 'react'

interface Stem {
  name: string
  path: string
  audio: HTMLAudioElement
  volume: number
  enabled: boolean
}

interface Song {
  name: string
  folder: string
  stems: string[]
}

const HomePage = () => {
  const [songs] = useState<Song[]>([
    {
      name: "Song 1 - Rock Ballad",
      folder: "song-1",
      stems: ["drums", "bass", "guitar", "vocals"]
    },
    {
      name: "Song 2 - Classical",
      folder: "song-2", 
      stems: ["drums", "bass", "piano", "strings"]
    },
    {
      name: "Song 3 - Electronic",
      folder: "song-3",
      stems: ["drums", "synth", "lead"]
    }
  ])

  const [currentSong, setCurrentSong] = useState<Song>(songs[0])
  const [stems, setStems] = useState<Stem[]>([])
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRefs = useRef<HTMLAudioElement[]>([])

  // Initialize stems when song changes
  useEffect(() => {
    const newStems: Stem[] = currentSong.stems.map((stemName, index) => {
      const audio = new Audio(`/song-folders/${currentSong.folder}/${stemName}.mp3`)
      audio.loop = true
      audioRefs.current[index] = audio
      
      return {
        name: stemName,
        path: `/song-folders/${currentSong.folder}/${stemName}.mp3`,
        audio,
        volume: 0.7,
        enabled: true
      }
    })
    
    setStems(newStems)
    setIsPlaying(false)
    
    // Clean up previous audio elements
    return () => {
      audioRefs.current.forEach(audio => {
        if (audio) {
          audio.pause()
          audio.currentTime = 0
        }
      })
    }
  }, [currentSong])

  // Sync audio elements when stems change
  useEffect(() => {
    stems.forEach((stem, index) => {
      if (audioRefs.current[index]) {
        audioRefs.current[index].volume = stem.volume
      }
    })
  }, [stems])

  const playAllStems = () => {
    stems.forEach((stem, index) => {
      if (stem.enabled && audioRefs.current[index]) {
        audioRefs.current[index].play()
      }
    })
    setIsPlaying(true)
  }

  const pauseAllStems = () => {
    audioRefs.current.forEach(audio => {
      if (audio) {
        audio.pause()
      }
    })
    setIsPlaying(false)
  }

  const stopAllStems = () => {
    audioRefs.current.forEach(audio => {
      if (audio) {
        audio.pause()
        audio.currentTime = 0
      }
    })
    setIsPlaying(false)
  }

  const updateStemVolume = (index: number, volume: number) => {
    setStems(prev => prev.map((stem, i) => 
      i === index ? { ...stem, volume } : stem
    ))
  }

  const toggleStemEnabled = (index: number) => {
    setStems(prev => prev.map((stem, i) => {
      if (i === index) {
        const newEnabled = !stem.enabled
        // If disabling, pause this specific stem
        if (!newEnabled && audioRefs.current[i]) {
          audioRefs.current[i].pause()
        }
        // If enabling and currently playing, start this stem
        else if (newEnabled && isPlaying && audioRefs.current[i]) {
          audioRefs.current[i].play()
        }
        return { ...stem, enabled: newEnabled }
      }
      return stem
    }))
  }

  const handleSongChange = (songFolder: string) => {
    const newSong = songs.find(song => song.folder === songFolder)
    if (newSong) {
      // Stop current playback
      stopAllStems()
      setCurrentSong(newSong)
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Track Stem Mixer
      </h1>

      {/* Song Selection and Controls */}
      <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-6">
          {/* Song Dropdown */}
          <div className="flex items-center gap-3">
            <label htmlFor="song-select" className="text-lg font-medium text-gray-700">
              Select Song:
            </label>
            <select
              id="song-select"
              value={currentSong.folder}
              onChange={(e) => handleSongChange(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              {songs.map(song => (
                <option key={song.folder} value={song.folder}>
                  {song.name}
                </option>
              ))}
            </select>
          </div>

          {/* Master Controls */}
          <div className="flex gap-3">
            <button
              onClick={playAllStems}
              disabled={isPlaying}
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
            >
              Play All
            </button>
            <button
              onClick={pauseAllStems}
              disabled={!isPlaying}
              className="px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 disabled:bg-gray-400 disabled:cursor-not-allowed font-medium"
            >
              Pause All
            </button>
            <button
              onClick={stopAllStems}
              className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 font-medium"
            >
              Stop All
            </button>
          </div>
        </div>
      </div>

      {/* Stems List */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">
          {currentSong.name} - Stems
        </h2>
        
        {stems.length === 0 ? (
          <p className="text-gray-500 text-center py-8">Loading stems...</p>
        ) : (
          <div className="space-y-4">
            {stems.map((stem, index) => (
              <div
                key={`${currentSong.folder}-${stem.name}`}
                className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg"
              >
                {/* Stem Name */}
                <div className="w-24 font-medium text-gray-700 capitalize">
                  {stem.name}
                </div>

                {/* Enable/Disable Toggle */}
                <button
                  onClick={() => toggleStemEnabled(index)}
                  className={`w-16 h-8 rounded-full transition-colors ${
                    stem.enabled 
                      ? 'bg-blue-500 hover:bg-blue-600' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                >
                  <div
                    className={`w-6 h-6 bg-white rounded-full transition-transform ${
                      stem.enabled ? 'translate-x-8' : 'translate-x-1'
                    }`}
                  />
                </button>

                {/* Volume Control */}
                <div className="flex items-center gap-3 flex-1">
                  <span className="text-sm text-gray-600 w-16">Volume:</span>
                  <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    value={stem.volume}
                    onChange={(e) => updateStemVolume(index, parseFloat(e.target.value))}
                    className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    disabled={!stem.enabled}
                  />
                  <span className="text-sm text-gray-600 w-8">
                    {Math.round(stem.volume * 100)}%
                  </span>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-2">
                  <div
                    className={`w-3 h-3 rounded-full ${
                      stem.enabled 
                        ? (isPlaying ? 'bg-green-400' : 'bg-blue-400')
                        : 'bg-gray-300'
                    }`}
                  />
                  <span className="text-sm text-gray-600">
                    {!stem.enabled ? 'Disabled' : (isPlaying ? 'Playing' : 'Ready')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>





    </div>
  )
}

export default HomePage
