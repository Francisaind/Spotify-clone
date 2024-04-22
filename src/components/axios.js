import axios from 'axios';
import qs from 'qs';
// import Buffer from "Buffer"
import { getTokenFromUrl } from './spotify';

export const getAuth = async () => {
  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
//   const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");
  const code= "AQD4cX6ayKlxWbdpZ7w1pgEFOPQhwtvxBS7jsd3yZJxd-vAondJUCGPFNLB9Hmv-pjeRQSpRFjN2RfWYDnljk76Rnx34ZKouhRTbwss2sy8XLBYxvaOWaw69k5OJXyRwSYCAwFekWan9T5y0oMBEJZedrTnyNGP6xPXj8h0BFWr5xk3xZ_XCspZgAdxCuRnXEdn9bx5tvQ76_RS_XCOh6jMc1MNkClB_VU1rw6vfoCsoLes_XNHVuAt8KjZR_jzL6L3a49I3DJXTfOmaNv_1P6lhhayc7tsQuYKm1XrzvpA_P7hCn6QqH8uHH8WWrcOS2YSADxGaovbx8txZwrnTZMevd0xPTVrGt0S_CkktbeeS7yMOCiiNoLYh9dcK7E8ITmXOLd55iVeSoNR2ZIwi3FR5nltsVfm4pfgJHW7lz8I";

  const headers = {
    headers: {
        Authorization: 'Basic ' + (new Buffer(clientId + ':' + clientSecret).toString('base64'))
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };
  const data = {
    code: "AQD4cX6ayKlxWbdpZ7w1pgEFOPQhwtvxBS7jsd3yZJxd-vAondJUCGPFNLB9Hmv-pjeRQSpRFjN2RfWYDnljk76Rnx34ZKouhRTbwss2sy8XLBYxvaOWaw69k5OJXyRwSYCAwFekWan9T5y0oMBEJZedrTnyNGP6xPXj8h0BFWr5xk3xZ_XCspZgAdxCuRnXEdn9bx5tvQ76_RS_XCOh6jMc1MNkClB_VU1rw6vfoCsoLes_XNHVuAt8KjZR_jzL6L3a49I3DJXTfOmaNv_1P6lhhayc7tsQuYKm1XrzvpA_P7hCn6QqH8uHH8WWrcOS2YSADxGaovbx8txZwrnTZMevd0xPTVrGt0S_CkktbeeS7yMOCiiNoLYh9dcK7E8ITmXOLd55iVeSoNR2ZIwi3FR5nltsVfm4pfgJHW7lz8I",
    redirect_uri: "http://localhost:3000/callback",
    grant_type: 'authorization_code',
  };


 

  try {
    const response = await axios.post(
      'https://accounts.spotify.com/api/token',
      qs.stringify(data),
      headers,
      {json:true}
    );
    // console.log(response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    // console.log(error);
  }
};