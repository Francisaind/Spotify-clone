import React from 'react'
import { NavLink } from 'react-router-dom'
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './dataLayer';


const BodySectionPlaylist = ({playlist,heading,num}) => {
    const spotify = new SpotifyWebApi();
    const [{user_playlist},dispatch]=useDataLayerValue();


    var headingUrl= "/sections/"+heading.toLowerCase().split(" ").join("-")
    var numOfItems= num ? num : playlist?.items.length
    const setPlaylist=(value)=>{
        spotify.getPlaylist(value).then(playl=>{
          // console.log("setP",playl)
          dispatch({
            type: "SET_USER_PLAYLIST",
            user_playlist: playl
          })
        })
      }
    const setSection=(value)=>{
        // spotify.getPlaylist(value).then(playl=>{
          // console.log("setSECTION",value)
          dispatch({
            type: "SET_SECTION",
            section: value?.playlist
          })
        // })
      }
      // console.log("HEEEYYYYY THERE!!!!!!!!")
    // const handleHeadingPlaylist=()=> {
    //     dispatchEvent({
    //         type: "SET_FEATURED_LIST",
    //         featured_list: 
    //     })
    // }
    
  return (
    <div className='body-section'>
        <div className="body-section-heading-wrap">
            <h1 className='heading body-section-heading' onClick={()=>setSection({playlist})}>
                <a href={headingUrl} className='color-white' >
                    {heading}
                </a>
            </h1>
            <a href={headingUrl} className='color-white body-section-show-all'>Show All</a>
        </div>
        <div className="body-section_items">
        {
            playlist?.items?.slice(0,numOfItems).map(artist=>(
                <NavLink to={`/playlist/${artist?.id}`} key={artist.id} className='body-section_items_link' id={artist?.id} onClick={()=>setPlaylist(artist?.id)}>
                    <div id={artist?.id} className='body-section_items_block' key={artist.id}>
                        <img src={artist?.images[0]?.url} alt={artist?.name} className="body-section_items_img"/>
                        <span className={`body-section_items_name ${artist?.description ? 'font-large' : ''}`} >{artist?.name}</span>
                        {artist?.description && 
                            <span className='body-section_items_desc'>{artist?.description}</span>
                        }
                    </div>
                </NavLink>

            ))
        }
        </div>
    </div>
  )
}

export default BodySectionPlaylist