import React from 'react';
import axios from 'axios';

export const ApiCall = () => {
  let url = 'https://api.malltina.net/search/v2?q=ANYTHING/products';
  axios
    .get(url)
    .then(response => {
      console.log(response.data, 'response');
    })
    .catch(error =>
      console.error('Error Occurred During Fetch Plugins', error),
    );
};