import TracksList from '../assets/TracksList'

const Search = ({ setTracks }) => {
	const search = query => {
		if (!query) {
			return TracksList
		}

		// const lowerCaseQuery = query.toLowerCase()

		return TracksList.filter(
			track =>
				track.title.toLowerCase().includes(query) ||
				track.artists.toLowerCase().includes(query)
		)
	}

	const handlerSearch = e => {
		const filteredTracks = search(e.target.value)
		setTracks(filteredTracks)
	}

	return (
		<div className='my-10 w-1/2 text-center'>
			<input
				className='border-b-2 outline-none text-center w-full focus:border-pink-500'
				type='text'
				placeholder='Type to search'
				onChange={handlerSearch}
			/>
		</div>
	)
}

export default Search
