import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import './header.css';
import { DataLayer, useDataLayerValue } from "./dataLayer";
import { useRef } from 'react';
// import ColorThief from 'colorthief';
import { ColorExtractor } from "react-color-extractor";


export default function Header({imagePathProp,headerNameProp}) {
	const [{playlists,user_playlist,user,liked_songs},dispatch]=useDataLayerValue();
	const headerGrad= useRef();
    let imagePath= user_playlist?.images ? user_playlist?.images[0].url : imagePathProp 
    let headerName= user_playlist?.name ? user_playlist?.name : headerNameProp 
    let songNum= window.location.pathname.indexOf("/liked-songs")>-1 ? liked_songs?.total :  user_playlist?.tracks?.total 

	// var x=Object.keys(playlists.items[0])
	//   for(var i=0;i<x.length;i++){
	//     {console.log('%cplaylists>>>>'+x[i],'color:red;')}
	//   }
	//   console.log("discover",user_playlist)
	// const colorThief = new ColorThief();
	// console.log("Color-thief",colorThief.getColor("https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"))
	// colorThief.getPalette(imagePath,2)
	// const addGrad =  () => {
	// 	const img =  document.querySelector('.header-cover-img');
	// 	console.log( "img" , img )
	
		// return img.onload= await function(){
		// 	colorThief.getColor(img);
		// 	console.log("color",colorThief.getColor(img))
		// }
	
		// Make sure image is finished loading
		// if (img.complete) {
		// 	colorThief.getColor(img);
		// 	console.log("color",colorThief.getColor(img))
		// } else {
		// 	img.addEventListener('load', function() {
		// 		colorThief.getColor(img);
		// 		console.log("color",colorThief.getColor(img))
		
		// 	});
		// }

	// }

	// document.addEventListener("load",addGrad)


	let hexString='0123456789abcdef';
	const hexCodeGenerate=()=>{
		let hexCode = '#';
		for(var i=0;i<6;i++){
			hexCode += hexString[Math.floor(Math.random() * hexString.length)]	
		}
		return hexCode;
	}

	const setGrad=()=>{
		let colorOne = hexCodeGenerate();
		let colorTwo = hexCodeGenerate();
		let angle = Math.floor(Math.random() * 360);

		console.log(headerGrad.current)
		headerGrad.current.style.background=`linear-gradient(${angle}deg , ${colorOne}, ${colorTwo})`
	}


	// window.onload= setGrad();
	
	return(
		<>
			<div className="header" >
				<div className="header-grad" ref={headerGrad}></div>
				{/* header */}
				{/* <div className='header-head'>
					<div className="header-icons">
						<ChevronLeftIcon className='header-icon' fontSize='large'/> 
						<ChevronRightIcon className='header-icon' fontSize='large' />
					</div>
					<div className='header-buttons'>
						<button className='header-update_btn'>UPGRADE</button>
						</div>
					</div> */}
				{/* <button className='header-profile_btn'>{user?.display_name}</button> */}
				<div className="header-body">
					<ColorExtractor getColors={colors=> console.log(colors)}>
						<img src={imagePath} />
					</ColorExtractor>
					{/* <img src={ imagePath} alt='Songs playlist image' className='header-cover-img' />  */}
					{/* '#5ca4f4', '#5ca4fc', '#9c4c1b', '#af965d', '#bed2d5', '#5a442f */}
					<div className="header-body_description">
						<h3 className='header-playlist'>PLAYLIST</h3>
						<h2 className='header-playlist_name'>{headerName}</h2>
						<div className='header-playlist_num'>
							<span className="header-songs-num">
								{songNum}
							</span>
							<span className="header-songs-text">
								&nbsp;songs
							</span>	
						</div>
							
					</div>
				</div>

			</div>

			

		</>
	)
}
