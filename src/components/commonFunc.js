import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './dataLayer';



const CommonFunc=()=>{
    const [{user_playlist},dispatch]=useDataLayerValue();
    const spotify=new SpotifyWebApi();
    const setPlaylist=(value)=>{
        spotify.getPlaylist(value).then(playl=>{
            // console.log("setP",playl)
            dispatch({
              type: "SET_USER_PLAYLIST",
              user_playlist: playl
            })
          })
    }

}

export default CommonFunc