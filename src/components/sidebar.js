import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import QueueMusicIcon from "@mui/icons-material/QueueMusic";
import QueueIcon from '@mui/icons-material/Queue';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import { useContext, useEffect, useReducer } from "react";
import reducer,{ initialValue } from "./reducer";
import { DataLayer, useDataLayerValue } from "./dataLayer";
import { Link } from "react-router-dom";
import SpotifyWebApi from 'spotify-web-api-js';

// import { getPlaylistFromUrl } from "./spotify";



export default function Sidebar() {
  const [{playlists,user_playlist},dispatch]=useDataLayerValue();
  const spotify = new SpotifyWebApi();
  // const [dispatch]=useDataLayerValue();
  const setPlaylist=(value)=>{
    spotify.getPlaylist(value).then(playl=>{
      // console.log("setP",playl)
      dispatch({
        type: "SET_USER_PLAYLIST",
        user_playlist: playl
      })
      // dispatch({
      //   type: "SET_USER_PLAYLIST_HEADER",
      //   user_playlist_header: playl
      // })
    })
  }

  return (
    <div className="sidebar">
      
      <div className="sidebar-logo">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png" alt="Spotify logo"/>
      </div>
      <div className="sidebar-options">
        <ul>
          <li className="sidebar-options_list">
            <HomeIcon className='sidebar-options_listIcon'/>
            <Link to='/'>Home</Link>
          </li>
          <li className="sidebar-options_list">
            <SearchIcon className='sidebar-options_listIcon'/> 
            <Link to='/search'>Search</Link>
          </li>
          <li className="sidebar-options_list">
            <QueueMusicIcon className='sidebar-options_listIcon'/>
            <Link to='/your-library'>Your Library</Link>
          </li>
        </ul>
      
        <ul className="hide">
          <li className="sidebar-options_list">
            <QueueIcon className='sidebar-options_listIcon'/>
            Create Playlist
          </li>
          <li className="sidebar-options_list">
            <FavoriteIcon className='sidebar-options_listIcon'/> Liked Songs
          </li>
          <li className="sidebar-options_list">
            <PodcastsIcon className='sidebar-options_listIcon'/>
             Your Episodes
          </li>
        </ul>
        <strong className="playlist-title">PLAYLISTS</strong>
        <hr className="playlist-border"/>
        <ul>
           
           {playlists?.items?.map(p=> 
            <li className="sidebar-options_list" key={p.id} onClick={()=>setPlaylist(p.id)}> 
              <Link to={`/playlist/${p.id}`}>{p?.name}</Link>
            </li>
            )}
           
        </ul>
      </div>
    </div>
  );
}
