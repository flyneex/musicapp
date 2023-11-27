import cn from 'classnames'
import { useContext } from 'react'
import { MdPause, MdPlayArrow } from 'react-icons/md'
import { AudioContext } from '../context/AudioContext'
import handlerTime from '../utils/handlerTime'

const Track = track => {
	const { preview, duration, title, artists } = track
	const time = handlerTime(duration)

	const { handlerPlay, isPlaying, currentTrack } = useContext(AudioContext)

	const isCurrentTrack = track.id === currentTrack.id

	return (
		<div
			className={cn(
				isCurrentTrack && isPlaying && 'text-pink-500',
				'flex gap-5 justify-between items-center mt-5'
			)}
		>
			<div className='flex items-center gap-10'>
				{isPlaying && isCurrentTrack ? (
					<MdPause
						className='cursor-pointer'
						size={42}
						onClick={() => handlerPlay(track)}
					/>
				) : (
					<MdPlayArrow
						className='cursor-pointer'
						size={42}
						onClick={() => handlerPlay(track)}
					/>
				)}
				<img className='w-14 rounded-md' src={preview} alt={title} />
				<div>
					<div>
						<b>{artists}</b>
					</div>
					<div>
						<i>{title}</i>
					</div>
				</div>
			</div>
			<div>
				<div>{time}</div>
			</div>
		</div>
	)
}

export default Track
