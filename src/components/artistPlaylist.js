import React, { useState } from 'react'
import { useDataLayerValue } from './dataLayer';
import './artistPlaylist.css';
import SpotifyWebApi from 'spotify-web-api-js';


const ArtistPlaylist = () => {
	// const [{artist_playlist,artist},dispatch]=useDataLayerValue();
	const [artist, setArtist] = useState('')
	const [artist_playlist, setArtistPlaylist] = useState('')
	let song_duration_min='';
    const spotify = new SpotifyWebApi();

	// let song_duration_ms= artist_playlist?.track.duration_ms;
    // let song_duration_min=(song_duration_ms/60000)-0.30
    // let song_duration_arr=song_duration_min.toFixed(2).split('.');
    
	// console.log("artistPlaylist",artist_playlist)
	// console.log("artist",artist)
	// console.log("artistP",artist_playlist)
	const getArtistId= window.location.pathname.split("/")[2]
	// console.log("get id" , getArtistId)
	spotify.getArtist(getArtistId).then(artist=>{
		setArtist(artist)
		// console.log("artist",artist)
	})
	spotify.getArtistAlbums(getArtistId).then(artistP=>{
		setArtistPlaylist(artistP)
		// console.log("artistP",artistP)
	})
	return (
		// In case we take first album of each artist (code in dashboard.js)

		// <>
			// <img src={artist_playlist?.images[0].url} alt={`${artist_playlist?.name} banner image`}/>
		// 	<div className="name">{artist_playlist?.name}</div>
		// 	{artist_playlist ? artist_playlist?.tracks.items.map((track,index)=>(
		// 	<div id={track.id} className='artist-row'>
		// 			<span className='artist-song-index'>
		// 				{index+1}
		// 			</span> 
		// 			<span className='artist-song-name'>
		// 				{track?.name}
		// 			</span> 
		// 			<span className='artist-song-time'>
		// 				{((track.duration_ms/60000)-0.30).toFixed(2).split('.')[0]+":"+((track.duration_ms/60000)-0.30).toFixed(2).split('.')[1]}
		// 			</span>
		// 		</div>
		// 	)
			
		// 	)
		// 	:
		// 	<div>No Data Found</div>
		// }
		// </>

		<>
			<div className="banner-block">
				{/* <img src={artist?.images[1]?.url} alt="" /> */}
				<div className="banner-text">
					<div className="banner-name">{artist?.name}</div>
					{/* <div className="banner-followers">{artist?.followers?.total} followers</div> */}
				</div>

			</div>
			
			<div className="playlist-content">
				{artist_playlist?.items?.map( (track,index)=>(
					<div id={track.id} key={track.id} className='artist-row'>
						{/* <span className='artist-song-index'> */}
							{/* {index+1} */}
						{/* </span>  */}
						<img src={track?.images[1].url} alt={track?.name} className='artist-track-img' />
						<span className='artist-song-name'>
							{track?.name}
						</span>
						<span className='artist-song-time'>
							{track?.release_data?.split("-")[0]}
							{track.type}
							{/* {((track.duration_ms/60000)-0.30).toFixed(2).split('.')[0]+":"+((track.duration_ms/60000)-0.30).toFixed(2).split('.')[1]} */}
						</span>
					</div>
					// <h1>{item.name}</h1>
				) )}

			</div>
			
			{/* <div className="playlist-content">
				{artist_playlist?.tracks.map( (track,index)=>(
					<div id={track.id} key={track.id} className='artist-row'>
						<span className='artist-song-index'>
							{index+1}
						</span> 
						<img src={track?.album.images[2].url} alt={track?.name} className='artist-track-img' />
						<span className='artist-song-name'>
							{track?.name}
						</span>
						<span className='artist-song-time'>
							{((track.duration_ms/60000)-0.30).toFixed(2).split('.')[0]+":"+((track.duration_ms/60000)-0.30).toFixed(2).split('.')[1]}
						</span>
					</div>
					// <h1>{item.name}</h1>
				) )}

			</div> */}
			{/* })} */}
		</>
	)
}

export default ArtistPlaylist