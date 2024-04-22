const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;
// const redirect_uri = "http://localhost:3000/";
const redirect_uri = "http://localhost:3000/callback/";
const auth_url = "https://accounts.spotify.com/authorize";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-follow-read",
  "user-modify-playback-state",
  "streaming",
  "user-read-email",
  "user-read-private",
  "user-top-read",
  "user-library-read",
  "playlist-modify-private",
  "playlist-modify-public"
];
const params = new URLSearchParams(window.location.search);
const code = params.get("code");
// const code

// fetch('https://accounts.spotify.com/api/token',{
//   form: {
//     code: code,
//     redirect_uri: redirect_uri,
//     grant_type: 'authorization_code'
//   },
  // headers: {
  //   'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
  // },
//   json: true
// })

export const login_url = `${auth_url}?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&scope=${scopes.join(
  "%20"
)}`;
console.log(login_url)
// export async function getTokenFromUrl2() {
//     // const verifier = localStorage.getItem("verifier");

//     const params = new URLSearchParams();
//     params.append("client_id", client_id);
//     params.append("client_secret", client_secret);
//     params.append("grant_type", "authorization_code");
//     params.append("code", code);
//     params.append("redirect_uri", redirect_uri);
//     // params.append("code_verifier", verifier);

//     const result = await fetch("https://accounts.spotify.com/api/token", {
//         method: "POST",
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: params
//     });

//     const { access_token } = await result.json();
//     console.log("access_token1",access_token)
//     return access_token;
// }




export  const getTokenFromUrl=()=>{
 const value=  window.location.hash
 .substring(1)
 .split("&")
 .reduce((initial,item)=>{
   let parts=item.split("="); 
   initial[parts[0]]=decodeURIComponent(parts[1]); 
   return initial;
  },{}) 
  console.log('value',value);
//   return value;

  const valueCode=  window.location.search.split("code=");
//   console.log("code",valueCode)
  return valueCode;
}

export const getPlaylistFromUrl = () => {
  const value= window.location.pathname.split("playlists/")[1];
  return value;
  
}

// getTokenFromUrl();