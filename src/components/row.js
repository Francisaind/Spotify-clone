import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './dataLayer';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './row.css'

function Row({playlist,index,callback}) {
	const spotify = new SpotifyWebApi();
	const [{playlists},dispatch]=useDataLayerValue();
	const [showPopup, setShowPopup] = useState(false);
	const [showPlaylist, showPlaylistPopup] = useState(false);
	const [checked, setChecked] = useState([false,false]);
	// const [selectedPlaylist, seSelectedPlaylist] = useState();

    let song_duration_ms= playlist?.track.duration_ms;
    let song_duration_min=(song_duration_ms/60000)-0.30
    let song_duration_arr=song_duration_min.toFixed(2).split('.');
    const truncate=(str, no_words)=> {
      return str.split(" ").splice(0,no_words).join(" ")+"...";
    }
    let album_name= playlist?.track.album.name.split(" ").length>3 ? truncate(playlist?.track.album.name,5) : playlist?.track.album.name;
    let song_name= playlist?.track.name.split(" ").length>3 ? truncate(playlist?.track.name,6) : playlist?.track.name;
	var placeholderImg= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSje2VUhC0Dd9-DAQnP-ey45sTPK4Zt1PrYyQ&usqp=CAU"
    // let imagePath= playlist?.track.album.images ? playlist?.track.album.images[2].url : imagePathProp || '' 
    // console.log("sonf",playlist)
	const addToPlaylist = (pId,uri,index) => {
		setChecked(!checked[index])
		spotify.addTracksToPlaylist(pId,uri).then(body=>{
			// console.log(body)
		})
		// console.log("done"+pId+">>>>"+uri+">>>>>"+index)
	}
	// console.log("playlist now",playlist)
  return (
    <div className='row' >
			<span className='index'>{index+1}</span>
			<div className='song-main' onClick={callback}>
				
				<img src={playlist?.track?.album?.images[2]?.url || placeholderImg} alt={`${playlist?.track.name} song`} width=""/>
				<div className='names'>
					<span className='song'>{song_name} </span>
					<a href={`/artist/${playlist?.track.album.artists[0].id}`} className='singer color-white'>{playlist?.track.album.artists[0].name}</a>
				</div>
			</div>
			<a href={`/album/${playlist?.track.album.id}`} className='album'>{album_name}</a> 
			{ 
			// <span className="date-added">17 days ago</span> 
			}
			<span className='duration'>{song_duration_arr[0]+":"+song_duration_arr[1]}</span>
			<div className='song_options'>
				<span className='song-options' onClick = {()=>setShowPopup(!showPopup)}> 
					<MoreVertIcon />
				</span>
				{/* <span onClick = {()=>setShowPopup(!showPopup)}>Options</span> */}
				{showPopup &&
					<div className='option_popup'>
						<span onClick = {()=>showPlaylistPopup(!showPlaylist)} className='popup-heading'>Add to Playlist</span>
						{playlists?.items?.map((p,index) => 
							<FormControlLabel  control={<Checkbox onChange={()=>addToPlaylist(p?.id,playlist?.track?.uri,index)}/>} label={p?.name} className='popup-labels' />
							// <Checkbox checked={checked[index]} name={p?.name} key={p?.name} onChange={()=>addToPlaylist(p.id,playlist?.track.uri,index)} />
								
						)}
					</div>
				}
			</div>

			{/* {showPlaylist && 
				<FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
				<FormLabel component="legend">Select Playlist</FormLabel>
					
						{playlists?.items?.map((p,index) => 
							<FormControlLabel  control={<Checkbox onChange={()=>addToPlaylist(p?.id,playlist?.track?.uri,index)}/>} label={p?.name}  />
							// <Checkbox checked={checked[index]} name={p?.name} key={p?.name} onChange={()=>addToPlaylist(p.id,playlist?.track.uri,index)} />
								
						)}
					
				</FormControl>
			} */}

	</div>
  )
}

export default Row