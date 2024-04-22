import React, { useEffect, useState } from 'react'
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './dataLayer';


function Artists(artist) {
    const spotify = new SpotifyWebApi();
    const [artistState, setArtistState] = useState('');
    // const [p, setP] = useState();
    const [{user_playlist},dispatch]=useDataLayerValue();
    
        spotify.getArtistAlbums(artist).then(data=>{
        
        dispatch({
                type: "SET_ARTIST",
                artist: data
            })
        })

        
    
    // console.log("id"+artist+">>>>>>>>>>>> "+"artist"+artist);
    // console.log("new func"+p);
    
    return (
        <>
            <div className="artist-block">
                <img src="https://thisis-images.scdn.co/37i9dQZF1DZ06evO30bXT4-large.jpg" alt="" className='artist-image'/>
                <div className="artist-desc">{artist}</div>
            </div>
            
        </>
    )
}

export default Artists