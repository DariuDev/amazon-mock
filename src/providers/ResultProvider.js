import React, {createContext, useEffect, useState} from 'react';
import axios from 'axios';
import filter from 'lodash.filter';

export const ResultProvider = createContext();

export const ResultContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [query, setQuery] = useState('');
  const [fullData, setFullData] = useState([]);

  const handleSearch = text => {
    const formattedQuery = text.toUpperCase();
    const filteredData = filter(fullData, t => {
      return contains(t, formattedQuery);
    });
    setResult(filteredData);
    setQuery(text);
  };
  const contains = ({title}, query) => {
    if (title.includes(query)) {
      return true;
    }
    return false;
  };

  const retreiveRequest = () => {
    let url = `https://api.malltina.net/search/v2?q=samsung`;
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
              id: res.id,
            };
          }),
        );
        setFullData(
          response.data.products.map(res => {
            return {
              image: res.image,
              people: res.review.people,
              stars: res.review.stars,
              price: res.price.main,
              deal: res.price.deal,
              title: res.title,
              id: res.id,
            };
          }),
        );
        setIsLoading(true);
      })
      .catch(error =>
        console.error('Error Occurred During Fetch Plugins', error),
      );
  };
  useEffect(() => {
    retreiveRequest();
  }, []);
  return (
    <ResultProvider.Provider
      value={{
        isLoading,
        result,
        search: handleSearch,
        query,
      }}>
      {children}
    </ResultProvider.Provider>
  );
};
