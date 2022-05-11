import {Searchbar} from 'react-native-paper';
import React, {useContext} from 'react';
import {ResultProvider} from '../../providers/ResultProvider';

export const SearchBar = ({onNavigate}) => {
  const {search, query} = useContext(ResultProvider);

  return (
    <Searchbar
      placeholder="Search"
      onIconPress={() => onNavigate('result')}
      onSubmitEditing={() => {
       search(query) 
        }
    }
      onChangeText={text => {
        search(text)
       }}
    />
  );
};
