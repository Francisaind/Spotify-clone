import React,{ useEffect, useContext,useReducer,useState } from "react";
import { getPlaylistFromUrl, getTokenFromUrl } from "./components/spotify";
import Home from "./components/pages/home";
import Login from "./components/pages/login";
import SpotifyWebApi from 'spotify-web-api-js';
import reducer,{initialValue} from './components/reducer'
import { DataLayer, useDataLayerValue } from "./components/dataLayer";
import { Route, Routes } from "react-router-dom";
import SpotifyFunc from "./components/spotifyFunctions";
import Dashboard from "./components/pages/dashboard";
import { getAuth } from "./components/axios";
import ExpiryTimeChecker from "./components/expiryTimeChecker";

// import "./styles.css";
// 30th MArch 2022  
var expiryTime,receivedTime;
export default function App() {
	const [state_token, setToken] = useState(null);
	// const [p, setP] = useState(null);
	const spotify = new SpotifyWebApi();
	// const [{token},dispatch]=useDataLayerValue();
	const [{user,playlist,user_playlist,token},dispatch]=useDataLayerValue();
	const [hashValue,setHashValue]=useState();
	const [expiry, setExpiry] = useState()

	useEffect(() => {
		
		const hash = getTokenFromUrl();
		
		window.location.hash='';
		const _token = hash.access_token;
		console.log("hash",_token)
		// ******----for refresh token-------*******

		console.log("__t",_token)
		if (!token && _token) {
			setToken(_token);
			dispatch({
					type: "SET_TOKEN",
					token:_token,
				})
				
				spotify.setAccessToken(_token);

				spotify.getMe().then((user)=>{
					// console.log("user in spotify",user)
					dispatch({
						type: 'SET_USER',
						user: user 
					})
				})
				
				// console.log("s",user)
				
				spotify.getUserPlaylists().then((playlist)=>{
					// console.log("user playlists",playlist)
					dispatch({
						type: "SET_PLAYLIST",
						playlists:playlist
					})
				})

				spotify.getFeaturedPlaylists().then(data=> {
				dispatch({
						type: "SET_FEATURED_PLAYLIST",
						featured_playlist: data.playlists
				})
				})
				spotify.getNewReleases({"limit":5}).then(data=> {
						// console.log("new release list",data)
						dispatch({
								type: "SET_NEW_RELEASES",
								new_release: data.albums
						})
				})

				spotify.getMyTopArtists().then(data=> {
					// console.log("my artist list",data)
						dispatch({
							type: "SET_TOP_ARTISTS",
							top_artists: data
						})
				})
				spotify.getMyTopTracks().then(data=>{
					// console.log("my tracks list",data)
					dispatch({
						type: "SET_TOP_TRACKS",
						top_tracks: data
					})
				})

				// spotify.getCategories({"limit":5}).then(data=> {
				// 	// console.log("category list",data);
				// 	data.categories.items.map(item=>{
				// 			// spotify.getCategoryPlaylists(item.id).then(data=> console.log("category playlist list",data))
							
				// 	}) 
				// })

				spotify.getMySavedTracks().then(songs=> {
					// console.log("vaishali tracks",songs)
					dispatch({
						type: "SET_LIKED_SONGS",
						liked_songs: songs
					})
				})

		
		
	}
}, []);


	useEffect(()=>{
		var interval = setInterval(()=>{
			// console.log(Date.now())
		},1000)
	},[expiry])
		return (
			
			<div className="App">
				{ token ? <Home /> : <Login />	} 
			</div>
	);
}

