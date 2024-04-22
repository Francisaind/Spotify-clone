import React from 'react';
import { useDataLayerValue } from "./dataLayer";
import './mobileComp.css';
import HomeIcon from "@mui/icons-material/Home";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import { Link } from '@mui/material';



function MobileComp() {
	const [{user},dispatch]= useDataLayerValue() ;
	// console.log(user)

  return (
	<>
		<div className="header-sticky">
				<div className="logo_header-sticky">
					<a href="/">
						<img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify logo"/>
					</a>
				</div>
				<div className="user_header-sticky">
					<img src={`${user?.images[0]?.url}`} alt="Spotify Mobile Logo" />
				</div>
			</div>
		
		<div className="footer-sticky">
			<li className="sidebar-options_list footer">
				<HomeIcon className='sidebar-options_listIcon'/>
				<span>Home</span>
			</li>
			<li className="sidebar-options_list footer">
				<QueueMusicIcon className='sidebar-options_listIcon'/>
				<span>Your Library</span>
			</li>
			</div>
	</>
  )
}

export default MobileComp