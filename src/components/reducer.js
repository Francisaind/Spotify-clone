export const initialValue={
    user: null,
    // token: 'AQC3xDRGoEEnjNdgcL4Hj1D594d34s8pepMec2Vw6TOCKUj_1K85y1myE1W4NZbx56P-_h1KwDd6Ony2PNi3nlg4W4lYBSTdjaMbOwunlz9pWx1LzqpuEIcVaO0fQXqLH4oFcYFR3GGFrp2C1rZYz6N-u5h4EPjhZhXCOCQCdlTi5oKIee-NJzKHzOzusqz_tUl8903FlHqUl1_iLO4GiZYuYR11LE5mX1I2Flf6M4y0moQovQ8JlwmFBINQxuhu7AWV41Wuj2qxkazL8pD_MnhGJvwGj8mHsG21k3g4ktMN7d_zst7oAk45qTcUHHWDQleIsBpx89kcrFrYsQOex4HrXtEAvjzJYlSa-dmW4XLNIgqcgg0FmL7erqQZlW68BnhnTAoJ1-nCDrguiVdd0RF15jZT9szRdnS5uTskiyo',
    token: '',
    new_playlist:[],
    playing:false,
    item:null,
    isPlaying: false,
    currentSong:{},
    artist_list:[],
    artist: {},
    featured_playlist:{}
    // playlists:{}
  };
  
  function reducer(state,action) {
    // console.log("action",action);

    switch (action.type){
      case 'SET_USER':
        return {
          ...state,
          user: action.user
      }
      // getting all user playlist here
      case "SET_PLAYLIST":  
        return {
          ...state,
          playlists: action.playlists
        }

      case "SET_FEATURED_PLAYLIST": 
        return {
          ...state,
          featured_playlist: action.featured_playlist
        }
      case "SET_NEW_RELEASES": 
        return {
          ...state,
          new_release: action.new_release
        }
      case "SET_TOKEN":
         
        return {
          ...state,
          token: action.token

        }
      case "SET_TOP_TRACKS":
         
        return {
          ...state,
          top_tracks: action.top_tracks

        }
      case "SET_TOP_ARTISTS":
         
        return {
          ...state,
          top_artists: action.top_artists

        }
      // geeting playlist/tracks of an artist
      case "SET_ARTIST_PLAYLIST":
         
        return {
          ...state,
          artist_playlist: action.artist_playlist

        }
        //getting tracks of user playlist 
      case "SET_USER_PLAYLIST":
        return{
          ...state,
          user_playlist: action.user_playlist
        }  
      case "SET_LIKED_SONGS":
        return{
          ...state,
          liked_songs: action.liked_songs
        }  
      // case "SET_USER_PLAYLIST_HEADER":
      //   return{
      //     ...state,
      //     user_playlist_header: action.user_playlist_header
      //   }  

        case "SET_ARTIST":
          return{
            ...state,
            artist: action.artist
          }  
          
        case "SET_SECTION":
          return{
            ...state,
            section: action.section
          }  

        case "SET_CURRENT_PLAYLIST":
          return{
            ...state,
            current_playlist: action.current_playlist
          }  
        case "SET_ISPLAYING":
          return{
            ...state,
            isPlaying: action.isPlaying
          }  
        case "SET_SONG":
          return{
            ...state,
            currentSong: action.currentSong
          }  
        default: 
    // console.log('token',state.token)
        
        return state;
    }
  }

  export default reducer;