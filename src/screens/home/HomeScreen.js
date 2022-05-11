import {View} from 'react-native';
import React, {useContext} from 'react';
import {SearchBar} from '../../components/search/Search';

export const Home = ({navigation}) => {

  return (
    <View>
      <SearchBar onNavigate={navigation.navigate} />
    </View>
  );
};
