import React from "react";
import { useDataLayerValue } from "./dataLayer"
import './main.css';
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Row from "./row";
// import SpotifyPlayer from 'react-spotify-web-playback'
import SpotifyWebApi from "spotify-web-api-js";
import Artists from "./artists";
import { useState } from "react";
import Header from "./header";
import LikedSongRow from "./likedSongRow";
import liked from '../assets/liked-songs.png';



export default function Main() {
	const [{user_playlist,isPlaying,liked_songs},dispatch]=useDataLayerValue();
	const [data,setData]=useState(null);
	const artistsList= [
											{name:"King",id:"5NHm4TU5Twz7owibYxJfFU"},
											{name:"Jubin",id: "1tqysapcCh1lWEAc9dIFpa"}
										]
	const spotify=new SpotifyWebApi();
	// console.log("hey")
	const handleSong=(e,song)=>{
		
		// console.log("data of song",song)
		
		// spotify.getMyCurrentPlayingTrack(e).then((data)=>{
		//   console.log("song",e);
			dispatch({
				type: 'SET_ISPLAYING',
				isPlaying: true
			})
		// })
		dispatch({
			type: 'SET_SONG',
			currentSong: song.track
		})
	}
	const currentUrl= window.location.pathname
	
	// console.log("user-playlist",user_playlist)
	// console.log("liked",liked)
	return (
		<>
		{currentUrl.indexOf("/liked-songs") > -1 ? 
			<Header imagePathProp={liked} headerNameProp="Liked Songs" />
		:
			<Header  />
		}
		
		<div className="main">
			<div className="main-icons">
				<PlayCircleFilledIcon className='green-icon large'/>
				<MoreHorizIcon className='more-icon' fontSize='large'/>
			</div>
			<div className="top-row">
				<span>#</span>
				<span >title</span>
				<span className='mobile-hide album'>album</span>
				{ 
					// <span className='mobile-hide date'>date added</span>
				}
				<span className="clock"><AccessTimeIcon/></span>
			</div>
			<hr className='hr-top-row'/>
		
		
			<div className="rows-wrapper">
				{currentUrl.indexOf("/playlist/")>-1 && user_playlist?.tracks?.items.map((m,index)=>
					
					<Row playlist={m} className={user_playlist?.id} playlist_id={user_playlist?.id} index={index} key={m?.track?.id} callback={(e)=>handleSong(e,m)}/>
					)
				}  
				


				{
					currentUrl.indexOf("/liked-songs")>-1 && liked_songs?.items.map( (item,index) =>
						<Row playlist={item} index={index} key={item?.track?.id} callback={(e)=>handleSong(e,item)}/>
					)
				}	
			</div>	
				{/* { currentUrl.indexOf("/albums/")>-1 && user_playlist?.albums?.items.map((m,index)=>
				
				<Row playlist={m} index={index} key={m?.id} callback={(e)=>handleSong(e,m)}/>
			
				)

				} */}
			

		</div>
		</>
		// <>
		//   {artistsList.map(artist=>
		//       <Artists artist={artist.id}/>
		//     )
		//   }
		//   </>
		)
	}
	