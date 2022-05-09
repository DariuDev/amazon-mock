import {View, Text, FlatList} from 'react-native';
import React, {useContext, useEffect} from 'react';
import {ResultProvider} from '../../providers/ResultProvider';

export const Home = ({navigation}) => {
  const {result} = useContext(ResultProvider);
  
  useEffect(() => {}, [result]);
  return (
    <View>
      <Text onPress={() => navigation.navigate('result')}>title</Text>
    </View>
  );
};
