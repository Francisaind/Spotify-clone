import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDataLayerValue } from '../dataLayer';
import SpotifyWebApi from 'spotify-web-api-js';
import './library.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import liked from '../../assets/liked-songs.png';


const Library = () => {
    const [{playlists,liked_songs},dispatch]=useDataLayerValue();
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

    // console.log(liked)
  return (
    <div className='library-page-wrap'>
        <h2 className='color-white library-heading'>Playlist</h2>
        <div className="library-grid">
            <div className="library-item-block liked-songs">
                <NavLink to='/liked-songs'>
                <div className="library-item-block_gradient" style={{background:'url("../Spotify/assets/liked-songs.png")'}}></div>
                <h1 className='library-item-block-heading'>Liked Songs</h1>
                <div className="library-item-block-num">
                    <span className="liked-num">
                        {liked_songs?.total}     
                    </span>
                    <span className="liked-text">
                        &nbsp;liked songs    
                    </span>
                </div>
                </NavLink>
            </div>

            {playlists?.items?.map(items=>(
                <div className="library-playlists" key={items?.id}>
                    <NavLink to={`/playlist/${items?.id}`} key={items.id} className='library body-section_items_link' id={items?.id} onClick={()=>setPlaylist(items?.id)}>
                    <div id={items?.id} className='library body-section_items_block' key={items.id}>
                        <img src={items?.images[0]?.url} alt={items?.name} className='library body-section_items_img' />
                        <div className="library-song-details">
                            <span className='library body-section_items_name' >{items?.name}</span>
                            {items?.description && 
                                <span className='library body-section_items_desc' >{items?.description}</span>
                            }
                            {items?.owner.display_name && 
                                <span className="library author">By {items?.owner.display_name}</span>
                            }

                        </div>
                    </div>
                </NavLink>
                </div>
            
            ))}

             
        </div>
    </div>
  )
}

export default Library