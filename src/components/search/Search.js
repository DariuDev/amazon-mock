import {Searchbar} from 'react-native-paper';
import React, {useState, useContext, useEffect} from 'react';
import {ResultProvider} from '../../providers/ResultProvider';

export const SearchBar = ({onNavigate}) => {
  const {result, search, query} = useContext(ResultProvider);

  useEffect(() => {
    console.log(result, 'result')
  }, []);

  return (
    <Searchbar
      placeholder="Search"
      onIconPress={() => onNavigate('result')}
      onSubmitEditing={() => {
        search(query)}
    }
      onChangeText={text => {
        search(text),console.log(query, 'tect')
       }}
    />
  );
};
