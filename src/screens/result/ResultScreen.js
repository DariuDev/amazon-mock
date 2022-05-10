import {View, Text, FlatList} from 'react-native';
import React,{useContext} from 'react';
import {ResultProvider} from '../../providers/ResultProvider';
import {Card} from '../../components/card/Card';

export const Result = ({navigation}) => {
  const {result} = useContext(ResultProvider);

  return (
    <View>
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
