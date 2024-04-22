import React,{ Component } from "react";
import Footer from "../footer";
import Header from "../header";
import Main from "../main";
import MobileComp from "../mobileComp";
import Sidebar from "../sidebar";
import "./home.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./dashboard";
import HeaderStickyLaptop from "../headerStickyLaptop";
import ArtistPlaylist from "../artistPlaylist";
import SearchPage from "./searchPage";
import Body from "../body";
import BodySectionPlaylist from "../bodySectionPlaylist";
import BodySection from "../bodySection";
import Library from "./library";


export default function Home(props){
  const location=useLocation();
  // console.log("location",location.state)
  
    return (
      <div className="home">
        <div className="body-wrap">
          <Sidebar />
          <MobileComp />
          <div className="body">
            {/* <div className="header-bg"></div> */}
            {/* <Header playlist={props.playlist}/> */}
            <HeaderStickyLaptop />
            <div className="body-post-header">
              <Routes>
                  {/* <Route path='/' element={<Dashboard />} />  */}
                  <Route path='/' element={<Body />} /> 
                  <Route path='/playlist/*' element={<Main />} /> 
                  <Route path='/artist/*' element={<ArtistPlaylist />} /> 
                  <Route path='/search' element={<SearchPage />} /> 
                  <Route path='/sections/*' element={<BodySection />} /> 
                  <Route path='/your-library' element={<Library />} /> 
                  <Route path='/liked-songs' element={<Main />} /> 
                  {/* <Route path='https://api.spotify.com/v1/browse/categories' element={<Home playlist={user_playlist}/>} />  */}
              {/* <Main playlist={props.playlist}/> */}
                  
              </Routes>
              </div>
          </div>
        </div>
        <Footer />
      </div>
    );
 
}
