import React from 'react'
import { NavLink } from 'react-router-dom'

const BodySectionArtist = ({artistList,heading}) => {
    var headingUrl= "/section/"+heading.toLowerCase().split(" ").join("-")
    // `/section/${heading.split(" ").join("-")}`
  return (
    <div className='body-section'>
        <div className='body-section-heading-wrap'>
            <h1 className='heading body-section-heading'>
                <a href={headingUrl} className='color-white'>
                    {heading}
                </a>
            </h1>
            <a href={headingUrl} className='color-white body-section-show-all'>Show All</a>
        </div>
        
        <div className="body-section_items artist">
        {
            artistList?.items?.slice(0,5).map(artist=>(
                <NavLink to={`/artist/${artist?.id}`} key={artist.id} className='body-section_items_link'>
                    <div id={artist?.id} className='body-section_items_block' key={artist.id}>
                        <img src={artist?.images[0]?.url} alt={artist?.name} className=" body-section_items_img body-section-artist-img"/>
                        <span className=' body-section_items_name body-section-artist-name'>{artist?.name}</span>
                    </div>
                </NavLink>

            ))
        }
        </div>
    </div>
  )
}

export default BodySectionArtist