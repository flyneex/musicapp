import {
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import { MdPause, MdPlayArrow } from 'react-icons/md'
import { AudioContext } from '../context/AudioContext'
import handlerTime from '../utils/handlerTime'

const Player = () => {
	const { audio, currentTrack, isPlaying, handlerPlay } =
		useContext(AudioContext)
	const { preview, duration, title, artists } = currentTrack
	const [currentTime, setCurrentTime] = useState(0)

	const timePlayer = handlerTime(duration)
	const startTime = handlerTime(currentTime)

	const sliderTime = Math.round((currentTime / duration) * 100)

	const dragSlider = value => {
		const sliderDragTime = Math.round((value / 100) * duration)
		setCurrentTime(sliderDragTime)
		audio.currentTime = sliderDragTime
	}

	useEffect(() => {
		setInterval(() => {
			setCurrentTime(audio.currentTime)
		}, 1000)
	}, [])

	return (
		<div className='flex items-center justify-between bg-pink-500 px-10 py-5 mt-10 xs:block'>
			<div className='flex items-center gap-5'>
				{isPlaying ? (
					<MdPause
						className='cursor-pointer'
						size={42}
						onClick={() => handlerPlay(currentTrack)}
					/>
				) : (
					<MdPlayArrow
						className='cursor-pointer'
						size={42}
						onClick={() => handlerPlay(currentTrack)}
					/>
				)}
				<img className='w-14 rounded-md' src={preview} alt={preview} />
				<div>
					<div>
						<b>{artists}</b>
					</div>
					<div>
						<i>{title}</i>
					</div>
				</div>
			</div>
			<div className='flex gap-5 w-1/2 xs:mt-10 xs:w-full'>
				<div>{startTime}</div>
				<Slider
					defaultValue={30}
					colorScheme='pink'
					step={1}
					min={0}
					max={100}
					value={sliderTime}
					onChange={dragSlider}
				>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb boxSize={6}>
						{/* <Box color='pink' as={MdGraphicEq} /> */}
					</SliderThumb>
				</Slider>
				<div>{timePlayer}</div>
			</div>
		</div>
	)
}

export default Player
