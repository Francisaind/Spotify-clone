import React,{ useEffect, useContext,useReducer,useState } from "react";
import { getPlaylistFromUrl, getTokenFromUrl } from "./spotify";
import Home from "./pages/home";
import Login from "./pages/login";
import SpotifyWebApi from 'spotify-web-api-js';
import reducer,{initialValue} from './reducer'
import { DataLayer, useDataLayerValue } from "./dataLayer";
import { Route, Routes } from "react-router-dom";

//   const [{},dispatch]=useDataLayerValue();
function SpotifyFunc(){
    const spotify = new SpotifyWebApi();
    const [{user,playlist,user_playlist},dispatch]=useDataLayerValue();

    const hash = getTokenFromUrl();
    window.location.hash='';
    const _token = hash.access_token;

    console.log("__t",_token)
    if (_token) {
    //   setToken(_token);
      dispatch({
          type: "SET_TOKEN",
          token:_token,
        })
        spotify.setAccessToken(_token);
        
        spotify.getMe().then((user)=>{
        //   console.log("user in spotify",user)
          dispatch({
            type: 'SET_USER',
            user: user 
          })
        })
        
        // console.log("s",user)
        
    spotify.getUserPlaylists().then((playlist)=>{
     dispatch({
        type: "SET_PLAYLIST",
        playlists:playlist
      })
    })
    
    // const getHomeData =async (_token)=>{
    //   const result = await fetch(`https://api.spotify.com/v1/browse/categories`,{
    //     method:"GET",
    //     headers:{"Authorization": "Bearer"+ _token}
    //   });
    //   const data= await result.json();
    //   console.log("home" , data);
    //   // return data; 
    // } 
    
    // spotify.getPlaylist("5qFY0N1qjZotBuH5KWZKHX").then(playlist=>{
    //   dispatch({
    //     type: "SET_USER_PLAYLIST",
    //     user_playlist: playlist
    //   })
    // })
    
    // spotify.getArtistAlbums(
    //   '37i9dQZF1DZ06evO30bXT4',
    //   { limit: 10, offset: 20 },
    //   function (err, data) {
    //     if (err) console.error(err);
    //     else console.log('Artist albums', data);
    //   }
    // );

    // spotify.getPlaylist('37i9dQZF1DZ06evO30bXT4')
    // .then((playlist)=>{
    //     setP(playlist)
    //     console.log('Album information', playlist);
    // })
      // dispatch({
      //   type: "SET_USER_PLAYLIST",
      //   user_playlist: playlist
      // })}
      // function (data) {
      //   console.log('Album information', data);
      // },
      // function (err) {
      //   console.error(err);
      // }

      const getArtistData=(artist_id)=>{
        //get artist detail
        spotify.getArtistAlbums(artist_id).then(
          (artist)=>{
            dispatch({
              type: "SET_ARTISTS",
              artists: artist
            })
        })
      }
      spotify.getArtist("37i9dQZF1DZ06evO30bXT4").then((data)=> console.log(data))
    
      
      
    
    }
    return (
        <div>Hey</div>
    )
  }

  export default SpotifyFunc;