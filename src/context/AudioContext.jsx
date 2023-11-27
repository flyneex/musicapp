import { createContext, useState } from 'react'
import TracksList from '../assets/TracksList'

const defaultTrack = TracksList[0]
const audio = new Audio(defaultTrack.src)
export const AudioContext = createContext({})

const AudioProvider = ({ children }) => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [currentTrack, setCurrentTrack] = useState(defaultTrack)

	const handlerPlay = track => {
		if (currentTrack.id !== track.id) {
			setCurrentTrack(track)
			setIsPlaying(true)

			audio.src = track.src
			audio.currentTime = 0
			audio.play()

			return
		}

		if (isPlaying) {
			audio.pause()
			setIsPlaying(false)
		} else {
			audio.play()
			setIsPlaying(true)
		}
	}

	const value = { audio, isPlaying, currentTrack, handlerPlay }

	return <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
}

export default AudioProvider
