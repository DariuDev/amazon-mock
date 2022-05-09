import {View, Text, FlatList} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {ResultProvider} from '../../providers/ResultProvider';
import {Card} from '../../components/Card';

export const Home = ({navigation}) => {
  const {result} = useContext(ResultProvider);
  
  useEffect(() => {}, [result]);
  return (
    <View>
      <Text onPress={() => console.log(result, 'title')}>title</Text>
      <FlatList
        data={result}
        renderItem={({item}) => {
          return (
            <Card card={item}/>
          );
        }}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
