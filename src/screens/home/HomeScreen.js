import {View, Text, Input, FlatList} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {SearchBar} from '../../components/search/Search';
import {ResultProvider} from '../../providers/ResultProvider';
import {Card} from '../../components/card/Card';

export const Home = ({navigation}) => {
  const {result} = useContext(ResultProvider);

  useEffect(() => {}, [result]);
  return (
    <View>
      <SearchBar onNavigate={navigation.navigate} />
      <FlatList
        data={result}
        renderItem={({item}) => {
          return <Card card={item} />;
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
