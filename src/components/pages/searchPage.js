import React, { useEffect } from 'react';
import './searchPage.css';
import HeaderStickyLaptop from '../headerStickyLaptop';
import SpotifyWebApi from 'spotify-web-api-js';
import SearchIcon from "@mui/icons-material/Search";
import { useDataLayerValue } from '../dataLayer';
import { NavLink } from 'react-router-dom';


function SearchPage() {
    const spotify = new SpotifyWebApi();
    const [{featured_playlist},dispatch]=useDataLayerValue();
    

    useEffect(()=>{
        // spotify.getRecommendations("06HL4z0CvFAxyc27GXpf02","pop","5jQI2r1RdgtuT8S3iG8zFC").then(data=> console.log("recommendations list",data))
        spotify.getFeaturedPlaylists().then(data=> {
            // console.log("featured list",data)
            dispatch({
                type: "SET_FEATURED_PLAYLIST",
                featured_playlist: data
            })
        })

        // spotify.getAvailableGenreSeeds().then(data=> console.log("my genre list",data))
    },[])

    const handleSearchPlaylist=(id)=>{
        spotify.getCategoryPlaylists(id).then(data=> console.log("yeaaahhhhhh search list"+data))
    }
  return (
    <>
    <HeaderStickyLaptop search={true}/>
    <div className="search-cat-wrap">
        {
            featured_playlist?.playlists?.items.map(artist=>(
                <div className="search-category-block" key={artist?.id}>
                    <div key={artist.id} className='search-cat-link' onClick={()=>handleSearchPlaylist(artist.id)}>
                        <div id={artist?.id} className='search-cat-img-wrap' key={artist.id} >
                            {/* <img src={artist?.images[0]?.url} alt={artist?.name} className="search-cat-img"/> */}
                            <span className='search-cat-name'>{artist?.name}</span>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
    </>
    
  )
}

export default SearchPage
