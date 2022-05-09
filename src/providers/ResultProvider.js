import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
//import {ApiCall} from '../services/ApiCall';

export const ResultProvider = createContext();

export const ResultContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);
  

  useEffect(() => {
    let url = 'https://api.malltina.net/search/v2?q=samsung';
    axios
      .get(url)
      .then(response => {
        setResult(
          response.data.products.map(res => {
            return {
              image: res.image,
              people: res.review.people,
              stars: res.review.stars,
              price: res.price.main,
              deal: res.price.deal,
              title: res.title,
              id: res.id
            };
          }),
        );
        setIsLoading(true);
      })
      .catch(error =>
        console.error('Error Occurred During Fetch Plugins', error),
      );
  }, []);

  return (
    <ResultProvider.Provider
      value={{
        isLoading,
        result
      }}>
      {children}
    </ResultProvider.Provider>
  );
};
