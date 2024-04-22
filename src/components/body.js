import React from 'react'
import BodySectionPlaylist from './bodySectionPlaylist'
import { useDataLayerValue } from './dataLayer';
import './body.css';
import BodySectionArtist from './bodySectionArtist';

const Body = () => {
	const [{user,featured_playlist,new_release,top_artists,top_tracks},dispatch]=useDataLayerValue();

	return (
		<div className='body-container'>
			{/* good evening part */}

			{/* <BodySectionPlaylist playlist={top_tracks} num='5' heading="Top Tracks"/> */}
			<BodySectionPlaylist playlist={featured_playlist} num='5' heading="Featured List"/>
			<BodySectionPlaylist playlist={new_release} num='5' heading="New Released"/>
			<BodySectionArtist artistList={top_artists} num='5' heading="Top Artists"/>
		</div>
	)
}

export default Body