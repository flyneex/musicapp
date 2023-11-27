import { useState } from 'react'
import TracksList from './assets/TracksList'
import Player from './components/Player'
import Search from './components/Search'
import Track from './components/Track'

const App = () => {
	const [tracks, setTracks] = useState(TracksList)

	return (
		<div className='flex flex-col justify-around items-center w-screen'>
			<Search setTracks={setTracks} />
			<div className='w-3/4 xs:w-full xs:px-5'>
				{tracks.map(track => (
					<Track key={track.id} {...track} />
				))}
			</div>
			<div className='w-full'>
				<Player />
			</div>
		</div>
	)
}

export default App
