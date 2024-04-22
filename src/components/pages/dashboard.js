import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SpotifyWebApi from 'spotify-web-api-js';
import { DataLayer, useDataLayerValue } from "../../components/dataLayer";
import './dashboard.css'

const Dashboard = () => {
    const spotify = new SpotifyWebApi();
    const [details,setDetails]=useState([]);
    const [items,setItems]=useState([]);
    const [p,setP]=useState('');
    let artistName=''
    let artistDetails='';
    // var d={};
    let artistsList=["5NHm4TU5Twz7owibYxJfFU","4YRxDV8wJFPHPTeXepOstw",
                        "4IKVDbCSBTxBeAsMKjAuTs","4ITkqBlf5eoVCOFwsJCnqo",
                        "6LEG9Ld1aLImEFEVHdWNSB","3cKNppGLfcxdt9CtoHEZmQ",
                        "1tqysapcCh1lWEAc9dIFpa","06HL4z0CvFAxyc27GXpf02",
                        "1uNFoZAHBGtllmzznpCI3s"]
    const [{user,token,artist_playlist,user_playlist,featured_playlist,new_release},dispatch]=useDataLayerValue();


    useEffect(()=>{
    
    if(token){
        for(var i=0;i<5;i++){
            const index=Math.floor(Math.random()*artistsList.length);
            spotify.getArtist(artistsList[index]).then((data)=> {
                // console.log("all data",data)
                var d= {name:data.name,id:data.id,images:data.images,followers:data.followers.total}
                // details.map(prevItem =>{ if(prevItem.id!=d.id)  setDetails(item=>item.concat(d)) )
                if(d && !details.includes(d)){
                    setDetails(item => 
                        // [...item,d]
                        item.concat(d)
                        )
                        
                    }
                })
                artistsList.splice(index,1)
                // console.log("artist",artistsList);
                
            }
            spotify.getFeaturedPlaylists().then(data=> {
                // console.log("featured list",data)
                dispatch({
                    type: "SET_FEATURED_PLAYLIST",
                    featured_playlist: data.playlists
                })
            })
            spotify.getNewReleases({"limit":5}).then(data=> {
                // console.log("new releaese list",data)
                dispatch({
                    type: "SET_NEW_RELEASES",
                    new_release: data.albums
                })
            })
            // spotify.getNewReleases().then(data=> console.log("new releases list",data))
            spotify.getCategories({"limit":5}).then(data=> {
                // console.log("category list",data);
                data.categories.items.map(item=>{
                    // spotify.getCategoryPlaylists(item.id).then(data=> console.log("category playlist list",data))
                    
                }) 
            })
            spotify.getMe().then(data=> {
                // setP(data);
                // console.log("it'sssss meeeee......"+data)
                // spotify.getMyTopTracks().then(data=> console.log("daaaatttaaaaa",data))
            })
            console.log("ppppppp",p)
            // spotify.getRecommendations("06HL4z0CvFAxyc27GXpf02","pop","5jQI2r1RdgtuT8S3iG8zFC").then(data=> console.log("recommendations list",data))
            spotify.getMyTopArtists({"limit":10}).then(data=> {
                setP(data)
                // console.log("my artist list",data)
            })
            // spotify.getMyTopTracks("tracks").then(data=> console.log("my tracks list",data))
            // spotify.getMyTopTracks("artists").then(data=> console.log("my artist list",data))
            // spotify.getAvailableGenreSeeds().then(data=> console.log("my genre list",data))
        }
            
        },[])
    

    const handleArtistPlaylist = async (e) => {
        // console.log("this",e.currentTarget.getAttribute("id"))
        const artistId=e.currentTarget.getAttribute("id")
        artistName=e.target.getAttribute("alt");
        // to add dash instead of space from name for url
        artistName= artistName?.trim().split(" ").join("-");
        // console.log(artistName)
        // window.location.pathname="playlist/"+artistName
        await spotify.getArtistAlbums(artistId).then(data=>{
            // setP(data?.items[0].id)
            // console.log("getData",data)
            // spotify.getAlbum(data?.items[0].id).then(artistPlaylist=>{
            //     console.log("getPlaylist",artistPlaylist)
            //     dispatch({
            //         type: "SET_ARTIST_PLAYLIST",
            //         artist_playlist: artistPlaylist
            //     })
            // })
            
        },(err)=>{
            console.log("error",err)
        })    
        
        spotify.getArtistTopTracks(artistId,"IN").then(artistPlaylist=>{
            // setP(data)
            
            // console.log("ddddd",details)
            dispatch({
                type: "SET_ARTIST",
                artist: details.filter(item=> item.id==artistId)
            })
        
            dispatch({
                type: "SET_ARTIST_PLAYLIST",
                artist_playlist: artistPlaylist
            })
        })

        // await spotify.getAlbum(user_playlist?.items[0].id).then(d=>{
        //     setP(d)
        // })
    }
    // console.log("pData",p);
    // console.log("discover",featured_playlist);
  return (
    <>
    <div className="dashboard-wrap">
        {/* <div className='dash-artist-block dash-block'>
            <h2 className='browse-heading'>Browse by Artist-(getArtist)</h2>
            <div className='artist-block-wrapper'>
            {details.map(artist=>(
                <NavLink to={`/artist/${artist?.name}`} key={artist.id} className='artist-link'>
                    <div id={artist?.id} className='artist-block' key={artist.id} onClick={handleArtistPlaylist}>
                        <img src={artist?.images[1]?.url} alt={artist?.name} className="artist-img"/>
                        <span className='artist-name'>{artist?.name}</span>
                    </div>
                </NavLink>

            ))
            }

            </div>
        </div> */}

        {/* <div className='dash-featured-block dash-block'>
        <h2 className='browse-heading'>{featured_playlist?.message}-(getFeaturedPlaylists)</h2>
        <a href='/section/featured-list'>Show All</a>
        
        <div className='artist-block-wrapper'>
            {featured_playlist?.playlists?.items.map((artist,index)=>(
                index<5 && <NavLink to={`/artist/${artist?.name}`} key={artist.id} className='artist-link'>
                    <div id={artist?.id} className='artist-block' key={artist.id} onClick={handleArtistPlaylist}>
                        <img src={artist?.images[0]?.url} alt={artist?.name} className="artist-img"/>
                        <span className='artist-name'>{artist?.name}</span>
                    </div>
                </NavLink>


            ))
            }

            </div>
        </div>
        
        <div className='dash-release-block dash-block'>
        <h2 className='browse-heading'>New Released-(getNewReleases)</h2>
        
        <div className='artist-block-wrapper'>
            {new_release?.albums.items.map(artist=>(
                <NavLink to={`/albums/${artist?.name}`} key={artist.id} className='artist-link'>
                    <div id={artist?.id} className='artist-block' key={artist.id} onClick={handleArtistPlaylist}>
                        <img src={artist?.images[0]?.url} alt={artist?.name} className="artist-img"/>
                        <span className='artist-name'>{artist?.name}</span>
                    </div>
                </NavLink>

            ))
            }

            </div>
        </div>

        {p?.items.map(item=>(
            <>
                <img src={item.images[0].url} alt=''/>
                <h1>{item.name}</h1>
            </>
        ))} */}
    </div>
    </>
  )
}

export default Dashboard