import React, { useEffect } from 'react'
import axios from 'axios';

const Football = () => {
  
    const options = {
      method: 'GET',
      url: 'https://api-football-v1.p.rapidapi.com/v3/teams',
      params: {id: '33'},
      headers: {
        'X-RapidAPI-Key': '32c062554dmshc19c4209fe934b9p1187d1jsn6849b81fed0f',
        'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  
  
  return (
    <div>
      football
    </div>
  )
}

export default Football
