import React from "react";
import {login_url} from '../spotify.js';
import './login.css';
export default function Login(){
  return(
    <div className='login'>
      <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png' alt="Spotify Logo"/>
      <a href={login_url} className='login-btn'>Login to Spotify</a>
    </div>
  )
}